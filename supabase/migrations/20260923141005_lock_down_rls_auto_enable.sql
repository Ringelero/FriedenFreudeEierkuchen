-- Keep Supabase's automatic RLS event trigger active without exposing its
-- SECURITY DEFINER event-trigger function as a callable Data API RPC.

revoke all on function public.rls_auto_enable()
  from public, anon, authenticated;
