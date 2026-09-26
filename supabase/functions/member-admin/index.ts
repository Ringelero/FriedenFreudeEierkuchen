import "@supabase/functions-js/edge-runtime.d.ts"
import { withSupabase } from "@supabase/server"

const MANAGE_MEMBERS = Object.freeze({
  permissionKey: "manage_members",
  scopeType: "platform",
  scopeId: "GemDen",
})
const INVITE_REDIRECT = "https://gemden.red/konto/"
const MAX_USERS = 200

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

function isActiveGrant(grant: { starts_at?: string; ends_at?: string | null; revoked_at?: string | null }) {
  const now = Date.now()
  const startsAt = Date.parse(String(grant.starts_at || ""))
  const endsAt = grant.ends_at ? Date.parse(grant.ends_at) : null
  return Number.isFinite(startsAt)
    && startsAt <= now
    && (endsAt === null || (Number.isFinite(endsAt) && endsAt > now))
    && !grant.revoked_at
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

async function listMembers(ctx: any) {
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
  const [profileResult, grantResult, kiezResult] = await Promise.all([
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
  ])

  if (profileResult.error || grantResult.error || kiezResult.error) {
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

  return response({
    members,
    kieze: kiezResult.data || [],
    truncated: users.length >= MAX_USERS,
  })
}

async function inviteMember(req: Request, ctx: any) {
  let input: JsonRecord
  try {
    input = await req.json()
  } catch {
    throw new MemberAdminError(400, "body_invalid", "Die Einladungsdaten sind nicht gültig.")
  }

  if (input.action !== "invite") {
    throw new MemberAdminError(400, "action_invalid", "Diese Verwaltungsaktion ist nicht freigeschaltet.")
  }

  const email = normalizeEmail(input.email)
  const displayName = normalizeDisplayName(input.display_name)
  const inviteResult = await ctx.supabaseAdmin.auth.admin.inviteUserByEmail(email, {
    data: { display_name: displayName },
    redirectTo: INVITE_REDIRECT,
  })

  if (inviteResult.error) {
    const source = `${inviteResult.error.code || ""} ${inviteResult.error.message || ""}`.toLowerCase()
    if (/already|exists|registered|email_exists|user_already_exists/.test(source)) {
      throw new MemberAdminError(409, "member_exists", "Für diese E-Mail-Adresse gibt es bereits ein Konto. Die Person kann im Konto einen neuen Einmal-Link anfordern.")
    }
    if (/rate|too many|over_email_send_rate_limit/.test(source)) {
      throw new MemberAdminError(429, "invite_rate_limited", "Zu viele Einladungen in kurzer Zeit. Bitte warte kurz und versuche es dann erneut.")
    }
    throw new MemberAdminError(503, "invite_failed", "Die Einladung konnte gerade nicht versendet werden.")
  }

  return response({
    invited: {
      id: inviteResult.data.user?.id || null,
      email,
      display_name: displayName,
      redirect_to: INVITE_REDIRECT,
    },
  }, 201)
}

export default {
  fetch: withSupabase({ auth: "user" }, async (req, ctx) => {
    try {
      if (!isAllowedOrigin(req.headers.get("Origin"))) {
        throw new MemberAdminError(403, "origin_forbidden", "Diese Anfrage darf nur von der GemDen-Website kommen.")
      }

      await requireMemberManager(ctx)

      if (req.method === "GET") return await listMembers(ctx)
      if (req.method === "POST") return await inviteMember(req, ctx)
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
