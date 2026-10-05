import "@supabase/functions-js/edge-runtime.d.ts"
import { withSupabase } from "@supabase/server"
import { createClient } from "@supabase/supabase-js"

const MANAGE_MEMBERS = Object.freeze({
  permissionKey: "manage_members",
  scopeType: "platform",
  scopeId: "GemDen",
})
const INVITE_REDIRECT = "https://gemden.red/konto/"
const MAX_USERS = 200
const MAX_AUDIT_EVENTS = 100
const ACCOUNT_BAN_DURATION = "876000h"

type JsonRecord = Record<string, unknown>

class MemberAdminError extends Error {
  status: number
  code: string

  constructor(status: number, code: string, message: string) {
    super(message)
    this.status = status
    this.code = code
  }
}

function response(body: JsonRecord, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8",
    },
  })
}

function isAllowedOrigin(origin: string | null) {
  if (!origin) return true
  if (origin === "https://gemden.red" || origin === "https://www.gemden.red") return true

  try {
    const url = new URL(origin)
    return url.protocol === "http:"
      && (url.hostname === "localhost" || url.hostname === "127.0.0.1")
  } catch {
    return false
  }
}

function normalizeEmail(value: unknown) {
  const email = String(value ?? "").trim().toLowerCase()
  if (email.length < 3 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new MemberAdminError(400, "email_invalid", "Bitte gib eine gültige E-Mail-Adresse ein.")
  }
  return email
}

function normalizeDisplayName(value: unknown) {
  const displayName = String(value ?? "").trim().replace(/\s+/g, " ")
  if (!displayName || displayName.length > 120 || /[\u0000-\u001f\u007f]/.test(displayName)) {
    throw new MemberAdminError(400, "display_name_invalid", "Bitte gib einen Namen mit höchstens 120 Zeichen ein.")
  }
  return displayName
}

function normalizeReason(value: unknown, fallback = "") {
  const reason = String(value ?? fallback).trim().replace(/\s+/g, " ")
  if (reason.length < 12 || reason.length > 2000 || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(reason)) {
    throw new MemberAdminError(400, "reason_invalid", "Bitte dokumentiere die Entscheidung mit mindestens zwölf Zeichen.")
  }
  return reason
}

function normalizeUserId(value: unknown) {
  const userId = String(value ?? "").trim().toLowerCase()
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(userId)) {
    throw new MemberAdminError(400, "member_invalid", "Das ausgewählte Mitglied ist nicht gültig.")
  }
  return userId
}

function isActiveGrant(grant: { starts_at?: string; ends_at?: string | null; revoked_at?: string | null }) {
  const now = Date.now()
  const startsAt = Date.parse(String(grant.starts_at || ""))
  const endsAt = grant.ends_at ? Date.parse(grant.ends_at) : null
  return Number.isFinite(startsAt)
    && startsAt <= now
    && (endsAt === null || (Number.isFinite(endsAt) && endsAt > now))
    && !grant.revoked_at
}

function databaseActionError(error: any) {
  const source = `${error?.code || ""} ${error?.message || ""}`.toLowerCase()
  if (/42501|member administration permission required|active member administration actor/.test(source)) {
    return new MemberAdminError(403, "member_admin_forbidden", "Dieses Konto ist nicht mehr für die Mitgliederverwaltung freigeschaltet.")
  }
  if (/active administration account cannot pause itself/.test(source)) {
    return new MemberAdminError(409, "self_pause_forbidden", "Das aktuell verwendete Verwaltungskonto kann sich nicht selbst deaktivieren.")
  }
  if (/archived member accounts/.test(source)) {
    return new MemberAdminError(409, "account_archived", "Archivierte Konten brauchen einen eigenen Aufbewahrungsablauf.")
  }
  if (/reason with at least 12|valid display name|target member profile|not available|22023/.test(source)) {
    return new MemberAdminError(400, "account_change_invalid", error?.message || "Die Kontoänderung ist nicht gültig.")
  }
  return new MemberAdminError(503, "account_change_failed", "Die Kontoänderung konnte gerade nicht sicher gespeichert werden.")
}

async function requestBody(req: Request) {
  try {
    return await req.json() as JsonRecord
  } catch {
    throw new MemberAdminError(400, "body_invalid", "Die Verwaltungsdaten sind nicht gültig.")
  }
}

async function requireMemberManager(ctx: any) {
  const userId = ctx.userClaims?.id
  if (!userId) {
    throw new MemberAdminError(401, "authentication_required", "Bitte melde dich zuerst an.")
  }

  const [profileResult, grantResult] = await Promise.all([
    ctx.supabase
      .from("profiles")
      .select("account_status")
      .eq("id", userId)
      .maybeSingle(),
    ctx.supabase
      .from("permission_grants")
      .select("starts_at,ends_at,revoked_at")
      .eq("grantee_user_id", userId)
      .eq("permission_key", MANAGE_MEMBERS.permissionKey)
      .eq("scope_type", MANAGE_MEMBERS.scopeType)
      .eq("scope_id", MANAGE_MEMBERS.scopeId)
      .is("revoked_at", null),
  ])

  if (profileResult.error || grantResult.error) {
    throw new MemberAdminError(503, "authorization_unavailable", "Die Berechtigung konnte gerade nicht geprüft werden.")
  }
  if (profileResult.data?.account_status !== "active"
    || !(grantResult.data || []).some(isActiveGrant)) {
    throw new MemberAdminError(403, "member_admin_forbidden", "Dieses Konto ist nicht für die Mitgliederverwaltung freigeschaltet.")
  }

  return userId
}

function safeAuditMetadata(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {}
  const source = value as JsonRecord
  const allowedKeys = [
    "stable_id",
    "display_name",
    "old_display_name",
    "new_display_name",
    "previous_status",
    "new_status",
    "kiez_id",
    "permission_key",
    "scope_type",
    "scope_id",
    "authority",
    "backfilled",
  ]
  return Object.fromEntries(allowedKeys
    .filter((key) => typeof source[key] === "string" || typeof source[key] === "boolean")
    .map((key) => [key, source[key]]))
}

async function listMembers(ctx: any, currentUserId: string) {
  const userResult = await ctx.supabaseAdmin.auth.admin.listUsers({
    page: 1,
    perPage: MAX_USERS,
  })
  if (userResult.error) {
    throw new MemberAdminError(503, "members_unavailable", "Die Mitgliederliste konnte gerade nicht geladen werden.")
  }

  const users = userResult.data?.users || []
  const userIds = users.map((user: any) => user.id)
  const emptyResult = { data: [], error: null }
  const [profileResult, grantResult, kiezResult, auditResult] = await Promise.all([
    userIds.length
      ? ctx.supabaseAdmin
        .from("profiles")
        .select("id,stable_id,display_name,account_status,created_at")
        .in("id", userIds)
      : Promise.resolve(emptyResult),
    userIds.length
      ? ctx.supabaseAdmin
        .from("permission_grants")
        .select("id,grantee_user_id,permission_key,scope_type,scope_id,starts_at,ends_at,revoked_at,reason,granted_by_authority")
        .in("grantee_user_id", userIds)
        .is("revoked_at", null)
      : Promise.resolve(emptyResult),
    ctx.supabaseAdmin
      .from("kieze")
      .select("id,name,lifecycle_status")
      .neq("lifecycle_status", "archived")
      .order("name"),
    ctx.supabaseAdmin
      .from("member_admin_events")
      .select("id,actor_user_id,target_user_id,action,reason,metadata,occurred_at")
      .order("occurred_at", { ascending: false })
      .limit(MAX_AUDIT_EVENTS),
  ])

  if (profileResult.error || grantResult.error || kiezResult.error || auditResult.error) {
    throw new MemberAdminError(503, "members_unavailable", "Die Mitgliedsdaten konnten gerade nicht vollständig geladen werden.")
  }

  const profiles = new Map((profileResult.data || []).map((profile: any) => [profile.id, profile]))
  const grantsByUser = new Map<string, any[]>()
  for (const grant of grantResult.data || []) {
    if (!isActiveGrant(grant)) continue
    const current = grantsByUser.get(grant.grantee_user_id) || []
    current.push({
      id: grant.id,
      permission_key: grant.permission_key,
      scope_type: grant.scope_type,
      scope_id: grant.scope_id,
      starts_at: grant.starts_at,
      ends_at: grant.ends_at,
      reason: grant.reason,
      granted_by_authority: grant.granted_by_authority,
    })
    grantsByUser.set(grant.grantee_user_id, current)
  }

  const members = users.map((user: any) => {
    const profile: any = profiles.get(user.id) || null
    return {
      id: user.id,
      email: user.email || null,
      display_name: profile?.display_name || "Neues Mitglied",
      stable_id: profile?.stable_id || null,
      account_status: profile?.account_status || "pending_profile",
      created_at: user.created_at,
      invited_at: user.invited_at || null,
      email_confirmed_at: user.email_confirmed_at || null,
      last_sign_in_at: user.last_sign_in_at || null,
      permissions: grantsByUser.get(user.id) || [],
    }
  }).sort((left: any, right: any) => {
    return String(left.display_name).localeCompare(String(right.display_name), "de")
  })

  const profileLabel = (userId: string | null, metadata: JsonRecord = {}) => {
    if (!userId) {
      return { id: null, display_name: "Systembestand", stable_id: null }
    }
    const profile: any = userId ? profiles.get(userId) : null
    return {
      id: userId,
      display_name: profile?.display_name
        || metadata.display_name
        || metadata.new_display_name
        || "Nicht mehr vorhandenes Konto",
      stable_id: profile?.stable_id || metadata.stable_id || null,
    }
  }

  const audit = (auditResult.data || []).map((event: any) => {
    const metadata = safeAuditMetadata(event.metadata)
    return {
      id: event.id,
      action: event.action,
      reason: event.reason,
      occurred_at: event.occurred_at,
      actor: profileLabel(event.actor_user_id),
      target: profileLabel(event.target_user_id, metadata),
      details: metadata,
    }
  })

  return response({
    current_user_id: currentUserId,
    members,
    kieze: kiezResult.data || [],
    audit,
    truncated: users.length >= MAX_USERS,
  })
}

async function applyAccountAction(ctx: any, {
  actorUserId,
  targetUserId,
  action,
  value = "",
  reason,
}: {
  actorUserId: string
  targetUserId: string
  action: string
  value?: string
  reason: string
}) {
  const result = await ctx.supabaseAdmin.rpc("administer_member_account", {
    actor_user_id: actorUserId,
    target_user_id: targetUserId,
    requested_action: action,
    requested_value: value,
    decision_reason: reason,
  })
  if (result.error) throw databaseActionError(result.error)
  const row = Array.isArray(result.data) ? result.data[0] : result.data
  if (!row || row.user_id !== targetUserId) {
    throw new MemberAdminError(503, "account_change_unconfirmed", "Die Datenbank hat die Kontoänderung nicht bestätigt.")
  }
  return row
}

async function getTargetMember(ctx: any, targetUserId: string) {
  const [userResult, profileResult] = await Promise.all([
    ctx.supabaseAdmin.auth.admin.getUserById(targetUserId),
    ctx.supabaseAdmin
      .from("profiles")
      .select("id,display_name,account_status")
      .eq("id", targetUserId)
      .maybeSingle(),
  ])
  if (userResult.error || !userResult.data?.user || profileResult.error || !profileResult.data) {
    throw new MemberAdminError(404, "member_not_found", "Dieses Mitgliedskonto wurde nicht gefunden.")
  }
  return { user: userResult.data.user, profile: profileResult.data }
}

function publicAuthClient() {
  const url = Deno.env.get("SUPABASE_URL")
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")
  if (!url || !anonKey) {
    throw new MemberAdminError(503, "login_link_unavailable", "Der sichere Linkversand ist momentan nicht verfügbar.")
  }
  return createClient(url, anonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  })
}

async function inviteMember(input: JsonRecord, ctx: any, actorUserId: string) {
  const email = normalizeEmail(input.email)
  const displayName = normalizeDisplayName(input.display_name)
  const reason = normalizeReason(
    input.reason,
    "Einladung über die geschützte GemDen-Mitgliederverwaltung versendet.",
  )
  const inviteResult = await ctx.supabaseAdmin.auth.admin.inviteUserByEmail(email, {
    data: { display_name: displayName },
    redirectTo: INVITE_REDIRECT,
  })

  if (inviteResult.error) {
    const source = `${inviteResult.error.code || ""} ${inviteResult.error.message || ""}`.toLowerCase()
    if (/already|exists|registered|email_exists|user_already_exists/.test(source)) {
      throw new MemberAdminError(409, "member_exists", "Für diese E-Mail-Adresse gibt es bereits ein Konto. Sende beim bestehenden Konto stattdessen einen neuen Einmal-Link.")
    }
    if (/rate|too many|over_email_send_rate_limit/.test(source)) {
      throw new MemberAdminError(429, "invite_rate_limited", "Zu viele Einladungen in kurzer Zeit. Bitte warte kurz und versuche es dann erneut.")
    }
    throw new MemberAdminError(503, "invite_failed", "Die Einladung konnte gerade nicht versendet werden.")
  }

  const invitedUserId = inviteResult.data.user?.id || null
  let auditRecorded = false
  if (invitedUserId) {
    try {
      await applyAccountAction(ctx, {
        actorUserId,
        targetUserId: invitedUserId,
        action: "member_invited",
        reason,
      })
      auditRecorded = true
    } catch (error) {
      console.error("member-admin invite audit failure", error)
    }
  }

  return response({
    invited: {
      id: invitedUserId,
      email,
      display_name: displayName,
      redirect_to: INVITE_REDIRECT,
      audit_recorded: auditRecorded,
    },
  }, 201)
}

async function updateDisplayName(input: JsonRecord, ctx: any, actorUserId: string) {
  const targetUserId = normalizeUserId(input.user_id)
  const displayName = normalizeDisplayName(input.display_name)
  const reason = normalizeReason(input.reason)
  const account = await applyAccountAction(ctx, {
    actorUserId,
    targetUserId,
    action: "display_name_changed",
    value: displayName,
    reason,
  })
  return response({ account })
}

async function sendLoginLink(input: JsonRecord, ctx: any, actorUserId: string) {
  const targetUserId = normalizeUserId(input.user_id)
  const reason = normalizeReason(input.reason)
  const target = await getTargetMember(ctx, targetUserId)
  if (target.profile.account_status !== "active") {
    throw new MemberAdminError(409, "account_not_active", "Ein neuer Login-Link kann nur für ein aktives Konto versendet werden.")
  }
  const email = normalizeEmail(target.user.email)
  const linkResult = await publicAuthClient().auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: INVITE_REDIRECT,
    },
  })
  if (linkResult.error) {
    const source = `${linkResult.error.code || ""} ${linkResult.error.message || ""}`.toLowerCase()
    if (/rate|too many|over_email_send_rate_limit/.test(source)) {
      throw new MemberAdminError(429, "login_link_rate_limited", "Zu viele Login-Links in kurzer Zeit. Bitte warte kurz und versuche es dann erneut.")
    }
    throw new MemberAdminError(503, "login_link_failed", "Der neue Login-Link konnte gerade nicht versendet werden.")
  }

  let auditRecorded = false
  try {
    await applyAccountAction(ctx, {
      actorUserId,
      targetUserId,
      action: "login_link_sent",
      reason,
    })
    auditRecorded = true
  } catch (error) {
    console.error("member-admin login link audit failure", error)
  }

  return response({
    login_link: {
      user_id: targetUserId,
      sent: true,
      audit_recorded: auditRecorded,
    },
  })
}

async function setAccountStatus(input: JsonRecord, ctx: any, actorUserId: string) {
  const targetUserId = normalizeUserId(input.user_id)
  const requestedStatus = String(input.account_status || "").trim().toLowerCase()
  const reason = normalizeReason(input.reason)
  if (requestedStatus !== "active" && requestedStatus !== "paused") {
    throw new MemberAdminError(400, "account_status_invalid", "Der gewünschte Kontostatus ist nicht gültig.")
  }
  if (requestedStatus === "paused" && targetUserId === actorUserId) {
    throw new MemberAdminError(409, "self_pause_forbidden", "Das aktuell verwendete Verwaltungskonto kann sich nicht selbst deaktivieren.")
  }

  const target = await getTargetMember(ctx, targetUserId)
  if (target.profile.account_status === "archived") {
    throw new MemberAdminError(409, "account_archived", "Archivierte Konten brauchen einen eigenen Aufbewahrungsablauf.")
  }
  if (requestedStatus === "active" && target.profile.account_status !== "paused") {
    throw new MemberAdminError(409, "account_not_paused", "Nur ein zuvor deaktiviertes Konto kann reaktiviert werden.")
  }

  const wasBanned = Boolean(
    target.user.banned_until
    && Number.isFinite(Date.parse(target.user.banned_until))
    && Date.parse(target.user.banned_until) > Date.now(),
  )
  const authResult = await ctx.supabaseAdmin.auth.admin.updateUserById(targetUserId, {
    ban_duration: requestedStatus === "paused" ? ACCOUNT_BAN_DURATION : "none",
  })
  if (authResult.error) {
    throw new MemberAdminError(503, "account_auth_change_failed", "Der Anmeldestatus konnte gerade nicht sicher geändert werden.")
  }

  try {
    const account = await applyAccountAction(ctx, {
      actorUserId,
      targetUserId,
      action: requestedStatus === "paused" ? "account_paused" : "account_reactivated",
      reason,
    })
    return response({ account })
  } catch (error) {
    const rollbackDuration = wasBanned ? ACCOUNT_BAN_DURATION : "none"
    const rollback = await ctx.supabaseAdmin.auth.admin.updateUserById(targetUserId, {
      ban_duration: rollbackDuration,
    })
    if (rollback.error) console.error("member-admin auth compensation failure", rollback.error)
    throw error
  }
}

async function handleAction(req: Request, ctx: any, actorUserId: string) {
  const input = await requestBody(req)
  switch (input.action) {
    case "invite":
      return await inviteMember(input, ctx, actorUserId)
    case "update_display_name":
      return await updateDisplayName(input, ctx, actorUserId)
    case "send_login_link":
      return await sendLoginLink(input, ctx, actorUserId)
    case "set_account_status":
      return await setAccountStatus(input, ctx, actorUserId)
    default:
      throw new MemberAdminError(400, "action_invalid", "Diese Verwaltungsaktion ist nicht freigeschaltet.")
  }
}

export default {
  fetch: withSupabase({ auth: "user" }, async (req, ctx) => {
    try {
      if (!isAllowedOrigin(req.headers.get("Origin"))) {
        throw new MemberAdminError(403, "origin_forbidden", "Diese Anfrage darf nur von der GemDen-Website kommen.")
      }

      const actorUserId = await requireMemberManager(ctx)

      if (req.method === "GET") return await listMembers(ctx, actorUserId)
      if (req.method === "POST") return await handleAction(req, ctx, actorUserId)
      return response({ code: "method_not_allowed", message: "Diese Anfrageart ist nicht freigeschaltet." }, 405)
    } catch (error) {
      if (error instanceof MemberAdminError) {
        return response({ code: error.code, message: error.message }, error.status)
      }
      console.error("member-admin unexpected failure", error)
      return response({ code: "member_admin_failed", message: "Die Mitgliederverwaltung ist gerade nicht verfügbar." }, 500)
    }
  }),
}
