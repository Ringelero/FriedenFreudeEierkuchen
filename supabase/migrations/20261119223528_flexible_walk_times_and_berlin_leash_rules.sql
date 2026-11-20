-- Flexible, public walk availability. Existing consent, ownership and moderation stay enforced.
-- NULL range columns retain the meaning of legacy two-hour entries.
alter table gemden_places.walk_entries add column starts_at timestamptz, add column ends_at timestamptz;
alter table gemden_places.walk_entries add constraint walk_time_range_check check (
 (starts_at is null and ends_at is null) or
 (starts_at is not null and ends_at is not null and isfinite(starts_at) and isfinite(ends_at)
  and starts_at>=slot_start and starts_at<slot_start+interval '2 hours'
  and ends_at>starts_at and ends_at<=starts_at+interval '24 hours'));
create index walks_place_times on gemden_places.walk_entries(place_id,starts_at,ends_at)
 where not hidden and state<>'left';
alter table gemden_places.preferences add column participation text, add column public_label text not null default '';
alter table gemden_places.preferences add constraint preferences_participation_check check(participation in ('dogs','companion'));
alter table gemden_places.preferences add constraint preferences_public_label_check check(char_length(public_label)<=60);
alter table gemden_places.service_places drop constraint service_places_dog_access_check;
alter table gemden_places.service_places add constraint service_places_dog_access_check
 check(dog_access in ('unknown','prohibited','designated_off_leash','on_leash'));

create or replace function gemden_places.matches_window(e gemden_places.walk_entries,a timestamptz,b timestamptz)
returns boolean language sql stable set search_path='' as $$
 select coalesce(e.starts_at,e.slot_start)<b
 and coalesce(e.ends_at,e.slot_start+interval '2 hours')>greatest(a,now())
$$;
create or replace function gemden_places.is_here(e gemden_places.walk_entries)
returns boolean language sql stable set search_path='' as $$
 select coalesce(e.here_until>now() and coalesce(e.starts_at,e.slot_start)<=now()
 and coalesce(e.ends_at,e.slot_start+interval '2 hours')>now(),false)
$$;
revoke all on function gemden_places.matches_window(gemden_places.walk_entries,timestamptz,timestamptz) from public;
revoke all on function gemden_places.is_here(gemden_places.walk_entries) from public;
CREATE OR REPLACE FUNCTION gemden_places.set_range(place uuid, service text, t timestamp with time zone, guest_key text, action text, names text[], message text, consent boolean, event uuid, participation text, public_label text, range_start timestamptz, range_end timestamptz)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
#variable_conflict use_variable
declare uid uuid:=auth.uid(); gh text; e gemden_places.walk_entries; count_entries integer; limit_key text; write_count integer;
begin
 if range_start is null or range_end is null or not isfinite(range_start) or not isfinite(range_end)
 or t is distinct from gemden_places.slot(range_start) or range_end<=range_start
 or range_end>range_start+interval '24 hours' or range_end<=now() or range_start>now()+interval '7 days'
 then raise exception 'Bitte wähle einen gültigen Zeitraum innerhalb der nächsten sieben Tage.' using errcode='22023'; end if;
 if uid is not null then uid:=gemden_meetings.actor(action<>'leave'); else gh:=gemden_places.guest(guest_key); if gh is null then raise exception 'Dein Gastzugang fehlt. Bitte lade die Seite neu.' using errcode='42501'; end if; end if;
 limit_key:=encode(sha256(convert_to(coalesce(uid::text,gh),'UTF8')),'hex');
 perform pg_advisory_xact_lock(hashtextextended(coalesce(uid::text,gh),7461));
 perform pg_advisory_xact_lock(hashtextextended(place::text||service||t::text,6391));
 if not exists(select 1 from gemden_places.places p join gemden_places.service_places l on l.place_id=p.id join gemden_meetings.offerings o on o.id=l.service_id and o.enabled where p.id=place and p.published and l.service_id=service and l.walks_enabled)
 then raise exception 'An diesem Ort gibt es gerade keine Gassifenster für dieses Angebot.' using errcode='22023'; end if;
 select * into e from gemden_places.walk_entries w where w.place_id=place and w.service_id=service and w.slot_start=t and ((uid is not null and w.user_id=uid) or (uid is null and w.guest_hash=gh)) for update;
 if action='leave' then delete from gemden_places.walk_entries where id=e.id; return jsonb_build_object('state','left'); end if;
 if action not in ('coming','here') or action is null then raise exception 'Ungültige Auswahl.' using errcode='22023'; end if;
 if event is not null and not exists(select 1 from gemden_places.slot_events v where v.id=event and v.place_id=place and v.service_id=service and v.slot_start=t and not v.cancelled)
 then raise exception 'Dieses besondere Treffen ist für das Zeitfenster nicht verfügbar oder wurde abgesagt.' using errcode='22023'; end if;
 if e.hidden then raise exception 'Dieser Eintrag wurde von der Treffverwaltung ausgeblendet.' using errcode='42501'; end if;
 if consent is distinct from true or (uid is not null and not exists(select 1 from gemden_places.preferences where user_id=uid and public_walks)) then raise exception 'Bitte bestätige zuerst die öffentliche Anzeige deiner Teilnahme und deines Kommentars.' using errcode='22023'; end if;
 if participation not in ('dogs','companion') or participation is null then raise exception 'Bitte wähle, ob du mit Hund oder ohne Hund mitgehst.' using errcode='22023'; end if;
 if participation='dogs' then names:=gemden_places.dogs(names); public_label:='';
 else
 if coalesce(cardinality(names),0)<>0 then raise exception 'Ohne Hund werden keine Hundenamen eingetragen.' using errcode='22023'; end if;
 names:='{}'; public_label:=btrim(coalesce(public_label,''));
 if char_length(public_label)>60 then raise exception 'Dein Rufname darf höchstens 60 Zeichen haben.' using errcode='22023'; end if;
 end if;
 if char_length(coalesce(message,''))>400 then raise exception 'Dein Kommentar darf höchstens 400 Zeichen haben.' using errcode='22023'; end if;
 if action='here' and not(range_start<=now() and range_end>now()) then raise exception 'Anwesend kannst du nur im laufenden Zeitfenster sein.' using errcode='22023'; end if;
 insert into gemden_places.write_limits values(limit_key,now(),1)
 on conflict(actor_hash) do update set started_at=case when gemden_places.write_limits.started_at<now()-interval '1 minute' then now() else gemden_places.write_limits.started_at end,
 hits=case when gemden_places.write_limits.started_at<now()-interval '1 minute' then 1 else gemden_places.write_limits.hits+1 end returning hits into write_count;
 if write_count>30 then raise exception 'Bitte warte einen Moment, bevor du weitere Angaben änderst.' using errcode='54000'; end if;
 -- Bounded housekeeping: old names/comments and expired throttle keys are not retained forever.
 delete from gemden_places.walk_entries where id in (select w.id from gemden_places.walk_entries w where w.slot_start<now()-interval '30 days' limit 200);
 delete from gemden_places.write_limits where actor_hash in (select r.actor_hash from gemden_places.write_limits r where r.started_at<now()-interval '1 day' limit 200);
 if e.id is null then
 select count(*) into count_entries from gemden_places.walk_entries w where w.place_id=place and w.slot_start=t and w.state<>'left';
 if count_entries>=500 then raise exception 'Dieses Zeitfenster hat sehr viele Einträge. Bitte wähle ein anderes.' using errcode='54000'; end if;
 if (select count(*) from gemden_places.walk_entries w where coalesce(w.ends_at,w.slot_start+interval '2 hours')>now() and ((uid is not null and w.user_id=uid) or (uid is null and w.guest_hash=gh)))>=40 then raise exception 'Du hast bereits viele aktive Einträge. Bitte entferne zuerst nicht mehr passende Angaben.' using errcode='54000'; end if;
 insert into gemden_places.walk_entries(place_id,service_id,user_id,guest_hash,slot_start,dog_names,comment,state,here_until,event_id,participation,public_label,starts_at,ends_at)
 values(place,service,uid,gh,t,names,btrim(coalesce(message,'')),action,case when action='here' then range_end end,event,participation,public_label,range_start,range_end) returning * into e;
 else update gemden_places.walk_entries set starts_at=range_start,ends_at=range_end,participation=participation,public_label=public_label,dog_names=names,comment=btrim(coalesce(message,'')),state=action,here_until=case when action='here' then range_end end,event_id=event,updated_at=now() where id=e.id returning * into e;
 end if;
 return jsonb_build_object('id',e.id,'state',e.state);
end $function$;

revoke all on function gemden_places.set_range(uuid,text,timestamptz,text,text,text[],text,boolean,uuid,text,text,timestamptz,timestamptz) from public;

create or replace function gemden_places.set_participation(place uuid,service text,t timestamptz,guest_key text,
 action text,names text[],message text,consent boolean,event uuid,participation text,public_label text)
returns jsonb language plpgsql security definer set search_path='' as $$
begin
 perform gemden_places.check_slot(t);
 return gemden_places.set_range(place,service,t,guest_key,action,names,message,consent,event,participation,public_label,t,t+interval '2 hours');
end $$;

create or replace function gemden_places.save_times(place uuid,service text,windows jsonb,remove_ids uuid[],guest_key text,
 action text,names text[],message text,consent boolean,event uuid,participation text,public_label text)
returns jsonb language plpgsql security definer set search_path='' as $$
#variable_conflict use_variable
declare uid uuid:=auth.uid(); gh text; zone text; item jsonb; a timestamptz; b timestamptz;
 merged jsonb:='[]'; first_at timestamptz; last_at timestamptz; result jsonb:='[]'; saved jsonb;
begin
 if jsonb_typeof(windows) is distinct from 'array' or jsonb_array_length(windows)>8
 or coalesce(cardinality(remove_ids),0)>40 then raise exception 'Bitte wähle höchstens acht Zeiträume.' using errcode='22023'; end if;
 if uid is not null then uid:=gemden_meetings.actor(jsonb_array_length(windows)>0);
 else gh:=gemden_places.guest(guest_key); if gh is null then raise exception 'Dein Gastzugang fehlt. Bitte lade die Seite neu.' using errcode='42501'; end if; end if;
 perform pg_advisory_xact_lock(hashtextextended(coalesce(uid::text,gh),7461));
 select p.time_zone into zone from gemden_places.places p join gemden_places.service_places l on l.place_id=p.id
 join gemden_meetings.offerings o on o.id=l.service_id and o.enabled
 where p.id=place and p.published and l.service_id=service and l.walks_enabled;
 if zone is null then raise exception 'An diesem Ort gibt es gerade keine Gassifenster für dieses Angebot.' using errcode='22023'; end if;
 if exists(select 1 from unnest(coalesce(remove_ids,'{}')) i where not exists(select 1 from gemden_places.walk_entries e
 where e.id=i and e.place_id=place and e.service_id=service and
 ((uid is not null and e.user_id=uid) or (uid is null and e.guest_hash=gh))))
 then raise exception 'Du kannst nur deine eigenen Zeiträume an diesem Ort ändern.' using errcode='42501'; end if;
 -- Validate all input before removing anything. Merging touching hours avoids duplicate rows in a two-hour bucket.
 for item in select value from jsonb_array_elements(windows) order by (value->>'start')::timestamptz loop
  a:=(item->>'start')::timestamptz; b:=(item->>'end')::timestamptz;
  if a is null or b is null or not isfinite(a) or not isfinite(b) or b<=a or b>a+interval '24 hours'
  or b<=now() or a>now()+interval '7 days'
  or date_trunc('hour',a at time zone zone) is distinct from (a at time zone zone)
  or date_trunc('hour',b at time zone zone) is distinct from (b at time zone zone)
  then raise exception 'Bitte wähle stundenweise einen gültigen Beginn und ein späteres Ende.' using errcode='22023'; end if;
  if first_at is null then first_at:=a;last_at:=b;
  elsif a<=last_at then last_at:=greatest(last_at,b);
  else merged:=merged||jsonb_build_array(jsonb_build_object('start',first_at,'end',last_at));first_at:=a;last_at:=b;end if;
 end loop;
 if first_at is not null then merged:=merged||jsonb_build_array(jsonb_build_object('start',first_at,'end',last_at));end if;
 if exists(select 1 from jsonb_array_elements(merged) x where (x->>'end')::timestamptz>(x->>'start')::timestamptz+interval '24 hours')
 then raise exception 'Ein Zeitraum darf höchstens 24 Stunden umfassen.' using errcode='22023';end if;
 if event is not null and (jsonb_array_length(merged)<>1 or exists(select 1 from jsonb_array_elements(merged) x
 where (x->>'end')::timestamptz>gemden_places.slot((x->>'start')::timestamptz)+interval '2 hours'))
 then raise exception 'Besondere Treffen haben ein festes Zwei-Stunden-Fenster.' using errcode='22023';end if;
 -- A hidden record cannot be deleted and re-created by this batch operation.
 if exists(select 1 from gemden_places.walk_entries e where e.id=any(coalesce(remove_ids,'{}')) and e.hidden)
 and jsonb_array_length(merged)>0 then raise exception 'Ein ausgeblendeter Eintrag kann hier nicht neu angelegt werden.' using errcode='42501';end if;
 delete from gemden_places.walk_entries e where e.id=any(coalesce(remove_ids,'{}'));
 for item in select value from jsonb_array_elements(merged) loop
  a:=(item->>'start')::timestamptz;b:=(item->>'end')::timestamptz;
  saved:=gemden_places.set_range(place,service,gemden_places.slot(a),guest_key,action,names,message,consent,event,participation,public_label,a,b);
  result:=result||jsonb_build_array(saved||jsonb_build_object('start',a,'end',b));
 end loop;
 return jsonb_build_object('saved',result,'removed',coalesce(cardinality(remove_ids),0));
end $$;
revoke all on function gemden_places.save_times(uuid,text,jsonb,uuid[],text,text,text[],text,boolean,uuid,text,text) from public;
grant execute on function gemden_places.save_times(uuid,text,jsonb,uuid[],text,text,text[],text,boolean,uuid,text,text) to anon,authenticated;
create or replace function public.save_place_walk_times(place uuid,service text,windows jsonb,remove_ids uuid[],guest_key text,
 action text,names text[],message text,consent boolean,event uuid,participation text,public_label text)
returns jsonb language sql security invoker set search_path='' as $$
 select gemden_places.save_times(place,service,windows,remove_ids,guest_key,action,names,message,consent,event,participation,public_label)
$$;
revoke all on function public.save_place_walk_times(uuid,text,jsonb,uuid[],text,text,text[],text,boolean,uuid,text,text) from public;
grant execute on function public.save_place_walk_times(uuid,text,jsonb,uuid[],text,text,text[],text,boolean,uuid,text,text) to anon,authenticated;
CREATE OR REPLACE FUNCTION gemden_places.workspace(service text)
 RETURNS jsonb
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare uid uuid:=gemden_meetings.actor(false); f gemden_places.preferences; manage boolean:=false;
begin
 select * into f from gemden_places.preferences where user_id=uid;
 if service is not null then manage:=gemden_meetings.can_manage(service); end if;
 return jsonb_build_object('favorites',coalesce(f.favorites,'{}'),'dog_names',coalesce(f.dog_names,'{}'),
 'participation',coalesce(f.participation,case when cardinality(f.dog_names)>0 then 'dogs' else 'companion' end),'public_label',coalesce(f.public_label,''),'public_walks',coalesce(f.public_walks,false),'blob_shortcuts',coalesce(f.blob_shortcuts,true),'can_manage',manage,
 'can_join',exists(select 1 from public.profiles where id=uid and account_status='active'),
 'suggestions',coalesce((select jsonb_agg(jsonb_build_object('id',s.id,'service_id',s.service_id,'details',s.details,'state',s.state,'review_note',s.review_note,'version',s.version,'own',s.author_user_id=uid) order by s.created_at desc) from
 (select * from gemden_places.place_suggestions a where (a.author_user_id=uid or manage and a.state='pending') and (service is null or a.service_id=service) order by created_at desc limit 40) s),'[]'),
 'managed_places',case when manage then coalesce((select jsonb_agg(gemden_places.place_json(p,service,true) order by p.name) from
 (select * from gemden_places.places where owner_service_id=service order by name limit 100) p),'[]') else '[]' end);
end $function$;
CREATE OR REPLACE FUNCTION gemden_places.save_preferences(details jsonb)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare uid uuid:=gemden_meetings.actor(); f gemden_places.preferences; names text[]; favs uuid[];
begin
 perform pg_advisory_xact_lock(hashtextextended(uid::text,7461));
 insert into gemden_places.preferences(user_id) values(uid) on conflict do nothing;
 select * into f from gemden_places.preferences where user_id=uid for update;
 names:=f.dog_names; favs:=f.favorites;
 if details ? 'dog_names' then select coalesce(array_agg(value),'{}') into names from jsonb_array_elements_text(details->'dog_names'); if cardinality(names)>0 then names:=gemden_places.dogs(names); end if; end if;
 if details ? 'favorites' then
 select coalesce(array_agg(value::uuid order by ord),'{}') into favs from jsonb_array_elements_text(details->'favorites') with ordinality a(value,ord);
 if cardinality(favs)>40 or cardinality(favs)<>(select count(distinct n) from unnest(favs) n)
 then raise exception 'Du kannst bis zu 40 verschiedene Lieblingsorte speichern.' using errcode='22023'; end if;
 end if;
 if details ? 'participation' and (details->>'participation') not in ('dogs','companion') then raise exception 'Bitte wähle deine Teilnahme.' using errcode='22023';end if;
 if details ? 'public_label' and char_length(coalesce(details->>'public_label',''))>60 then raise exception 'Dein Rufname darf höchstens 60 Zeichen haben.' using errcode='22023';end if;
 update gemden_places.preferences set favorites=favs,dog_names=names,
 participation=case when details ? 'participation' then details->>'participation' else f.participation end,
 public_label=case when details ? 'public_label' then btrim(coalesce(details->>'public_label','')) else f.public_label end,
 public_walks=case when details ? 'public_walks' then (details->>'public_walks')::boolean else f.public_walks end,
 blob_shortcuts=case when details ? 'blob_shortcuts' then (details->>'blob_shortcuts')::boolean else f.blob_shortcuts end,updated_at=now() where user_id=uid;
 if (details->>'public_walks')::boolean is false then delete from gemden_places.walk_entries where user_id=uid; end if;
 return gemden_places.workspace(null);
end $function$;
CREATE OR REPLACE FUNCTION gemden_places.place_json(p gemden_places.places, requested_service text DEFAULT NULL::text, full_detail boolean DEFAULT false)
 RETURNS jsonb
 LANGUAGE sql
 STABLE
 SET search_path TO ''
AS $function$
 select jsonb_build_object('id',p.id,'name',p.name,'description',case when full_detail then p.description else '' end,'locality',p.locality,
 'latitude',p.latitude,'longitude',p.longitude,'time_zone',p.time_zone,'published',p.published,'version',p.version,
 'owner_service_id',p.owner_service_id,
 'services',coalesce((select jsonb_agg(jsonb_build_object('id',o.id,'name',o.name,'walks_enabled',l.walks_enabled,'dog_access',l.dog_access,'description',case when full_detail then l.description else '' end,'source_url',case when full_detail then l.source_url end) order by o.name)
 from gemden_places.service_places l join gemden_meetings.offerings o on o.id=l.service_id and o.enabled where l.place_id=p.id),'[]'),
 'companion_count',(select count(*) from gemden_places.walk_entries e where e.place_id=p.id and (requested_service is null or e.service_id=requested_service) and gemden_places.matches_window(e,gemden_places.slot(now()),gemden_places.slot(now())+interval '2 hours') and e.participation='companion' and gemden_places.visible_entry(e)),
 'companion_here_count',(select count(*) from gemden_places.walk_entries e where e.place_id=p.id and (requested_service is null or e.service_id=requested_service) and gemden_places.matches_window(e,gemden_places.slot(now()),gemden_places.slot(now())+interval '2 hours') and e.participation='companion' and gemden_places.is_here(e) and gemden_places.visible_entry(e)),
 'coming_count',(select coalesce(sum(cardinality(e.dog_names)),0) from gemden_places.walk_entries e where e.place_id=p.id and (requested_service is null or e.service_id=requested_service) and gemden_places.matches_window(e,gemden_places.slot(now()),gemden_places.slot(now())+interval '2 hours') and gemden_places.visible_entry(e)),
 'here_count',(select coalesce(sum(cardinality(e.dog_names)),0) from gemden_places.walk_entries e where e.place_id=p.id and (requested_service is null or e.service_id=requested_service) and gemden_places.matches_window(e,gemden_places.slot(now()),gemden_places.slot(now())+interval '2 hours') and gemden_places.visible_entry(e) and gemden_places.is_here(e)))
$function$;
CREATE OR REPLACE FUNCTION gemden_places.map_points(service text, bounds jsonb)
 RETURNS jsonb
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare s float8:=(bounds->>'south')::float8; n float8:=(bounds->>'north')::float8;
 w float8:=(bounds->>'west')::float8; e float8:=(bounds->>'east')::float8; data jsonb;
begin
 if s is null or n is null or w is null or e is null or not(s>=-85 and n<=85 and s<n and w>=-180 and e<=180 and w<e)
 then raise exception 'Ungültiger Kartenausschnitt.' using errcode='22023'; end if;
 with points as (select p.id,p.name,p.latitude,p.longitude,
 coalesce((select l.dog_access from gemden_places.service_places l where l.place_id=p.id and l.service_id='SERVICE-RUBYBUBYS-HERZ-SCHNAUZE'),'unknown') dog_access,
 least(19,floor((p.longitude-w)/(e-w)*20)) x,least(9,floor((p.latitude-s)/(n-s)*10)) y
 from gemden_places.places p where p.published and p.latitude between s and n and p.longitude between w and e
 and exists(select 1 from gemden_places.service_places l join gemden_meetings.offerings o on o.id=l.service_id and o.enabled where l.place_id=p.id and (service is null or l.service_id=service))),
 groups as (select count(*) count,
 case when count(*)=1 then min(dog_access) end dog_access,
 count(*) filter(where dog_access='prohibited') prohibited_count,
 count(*) filter(where dog_access='designated_off_leash') off_leash_count,avg(latitude) latitude,avg(longitude) longitude,
 case when count(*)=1 then min(id::text) end id,case when count(*)=1 then min(name) end name from points group by x,y)
 select coalesce(jsonb_agg(to_jsonb(g)||jsonb_build_object('companion_here_count',case when g.id is not null then (select count(*) from gemden_places.walk_entries a where a.place_id=g.id::uuid and gemden_places.matches_window(a,gemden_places.slot(now()),gemden_places.slot(now())+interval '2 hours') and (service is null or a.service_id=service) and a.participation='companion' and gemden_places.is_here(a) and gemden_places.visible_entry(a)) else 0 end,'here_count',case when g.id is not null then
 (select coalesce(sum(cardinality(a.dog_names)),0) from gemden_places.walk_entries a where a.place_id=g.id::uuid and gemden_places.matches_window(a,gemden_places.slot(now()),gemden_places.slot(now())+interval '2 hours')
 and (service is null or a.service_id=service) and gemden_places.is_here(a) and gemden_places.visible_entry(a)) else 0 end)),'[]') into data from groups g;
 return data;
end $function$;
CREATE OR REPLACE FUNCTION gemden_places.detail_times(place uuid, service text, chosen_slot timestamp with time zone, guest_key text, page integer, chosen_day date)
 RETURNS jsonb
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare p gemden_places.places; t timestamptz:=coalesce(chosen_slot,gemden_places.slot(now())); uid uuid:=auth.uid(); gh text:=gemden_places.guest(guest_key); items jsonb; mine jsonb; slots jsonb; day_start timestamptz; day_end timestamptz; own_day jsonb; hour_options jsonb;
begin
 if page is null or page not between 0 and 50 then raise exception 'Ungültige Seite.' using errcode='22023'; end if;
 select * into p from gemden_places.places where id=place and published;
 if not found or not exists(select 1 from gemden_places.service_places l join gemden_meetings.offerings o on o.id=l.service_id and o.enabled where l.place_id=place and (service is null or l.service_id=service))
 then raise exception 'Dieser Treffpunkt ist gerade nicht verfügbar.' using errcode='22023'; end if;
 if service is null or not exists(select 1 from gemden_places.service_places l where l.place_id=place and l.service_id=service and l.walks_enabled) then
 return jsonb_build_object('place',gemden_places.place_json(p,service,true),'slot_start',gemden_places.slot(now()),'slots','[]'::jsonb,'mine',null,'entries','[]'::jsonb,'has_more',false,'events','[]'::jsonb,'server_time',now());
 end if;
 perform gemden_places.check_slot(t);
 chosen_day:=coalesce(chosen_day,((case when chosen_slot is null then now() else t end) at time zone p.time_zone)::date);
 if chosen_day<(now() at time zone p.time_zone)::date-1 or chosen_day>(now() at time zone p.time_zone)::date+7 then raise exception 'Bitte wähle einen Tag innerhalb der nächsten sieben Tage.' using errcode='22023';end if;
 day_start:=chosen_day::timestamp at time zone p.time_zone;
 day_end:=(chosen_day+1)::timestamp at time zone p.time_zone;
 select jsonb_agg(s order by s) into hour_options from generate_series(day_start,day_end+interval '2 hours',interval '1 hour') s;
 select coalesce(jsonb_agg(jsonb_build_object('id',e.id,'slot_start',e.slot_start,'starts_at',coalesce(e.starts_at,e.slot_start),
 'ends_at',coalesce(e.ends_at,e.slot_start+interval '2 hours'),'hidden',e.hidden,'event_id',e.event_id)
 order by coalesce(e.starts_at,e.slot_start)),'[]') into own_day from gemden_places.walk_entries e
 where e.place_id=place and e.service_id=service and coalesce(e.starts_at,e.slot_start)>=day_start
 and coalesce(e.starts_at,e.slot_start)<day_end and coalesce(e.ends_at,e.slot_start+interval '2 hours')>now()
 and ((uid is not null and e.user_id=uid) or (uid is null and e.guest_hash=gh));
 select coalesce(jsonb_agg(jsonb_build_object('start',s,'end',s+interval '2 hours',
 'companion_count',(select count(*) from gemden_places.walk_entries e where e.place_id=place and gemden_places.matches_window(e,s,s+interval '2 hours') and e.service_id=service and e.participation='companion' and gemden_places.visible_entry(e)),
 'companion_here_count',(select count(*) from gemden_places.walk_entries e where e.place_id=place and gemden_places.matches_window(e,s,s+interval '2 hours') and e.service_id=service and e.participation='companion' and gemden_places.is_here(e) and gemden_places.visible_entry(e)),
 'coming_count',(select coalesce(sum(cardinality(e.dog_names)),0) from gemden_places.walk_entries e where e.place_id=place and gemden_places.matches_window(e,s,s+interval '2 hours') and (service is null or e.service_id=service) and gemden_places.visible_entry(e)),
 'here_count',(select coalesce(sum(cardinality(e.dog_names)),0) from gemden_places.walk_entries e where e.place_id=place and gemden_places.matches_window(e,s,s+interval '2 hours') and (service is null or e.service_id=service) and gemden_places.visible_entry(e) and gemden_places.is_here(e))) order by s),'[]') into slots
 from generate_series(gemden_places.slot(now()),gemden_places.slot(now())+interval '166 hours',interval '2 hours') s;
 select coalesce(jsonb_agg(x.item order by x.updated_at,x.id),'[]') into items from (
 select e.id,e.updated_at,jsonb_build_object('id',e.id,'slot_start',e.slot_start,'starts_at',coalesce(e.starts_at,e.slot_start),'ends_at',coalesce(e.ends_at,e.slot_start+interval '2 hours'),'dog_names',e.dog_names,'participation',e.participation,'public_label',e.public_label,'comment',e.comment,'service_id',e.service_id,'event_id',e.event_id,
 'state',case when gemden_places.is_here(e) then 'here' else 'coming' end,'confirmed_at',e.updated_at) item
 from gemden_places.walk_entries e where e.place_id=place and gemden_places.matches_window(e,t,t+interval '2 hours') and (service is null or e.service_id=service) and gemden_places.visible_entry(e)
 order by e.updated_at,e.id limit 41 offset page*40) x;
 select jsonb_build_object('id',e.id,'slot_start',e.slot_start,'starts_at',coalesce(e.starts_at,e.slot_start),'ends_at',coalesce(e.ends_at,e.slot_start+interval '2 hours'),'dog_names',e.dog_names,'participation',e.participation,'public_label',e.public_label,'comment',e.comment,'event_id',e.event_id,'state',case when e.state='left' then 'left' when gemden_places.is_here(e) then 'here' else 'coming' end,'hidden',e.hidden)
 into mine from gemden_places.walk_entries e where e.place_id=place and gemden_places.matches_window(e,t,t+interval '2 hours') and e.service_id=service
 and ((uid is not null and e.user_id=uid) or (uid is null and e.guest_hash=gh)) limit 1;
 return jsonb_build_object('place',gemden_places.place_json(p,service,true),'slot_start',t,'slots',slots,'day_key',chosen_day,'mine_day',own_day,'hour_options',hour_options,'mine',mine,'entries',case when jsonb_array_length(items)>40 then items-40 else items end,'has_more',jsonb_array_length(items)>40,
 'events',coalesce((select jsonb_agg(jsonb_build_object('id',v.id,'title',v.title,'description',v.description,'contact',v.contact,'cancelled',v.cancelled,'version',v.version,'slot_start',v.slot_start,'service_id',v.service_id) order by v.slot_start,v.title)
 from gemden_places.slot_events v join gemden_meetings.offerings o on o.id=v.service_id and o.enabled
 where v.place_id=place and v.slot_start=t and (service is null or v.service_id=service)),'[]'),'server_time',now());
end $function$;

revoke all on function gemden_places.detail_times(uuid,text,timestamptz,text,integer,date) from public;
grant execute on function gemden_places.detail_times(uuid,text,timestamptz,text,integer,date) to anon,authenticated;
create or replace function gemden_places.detail(place uuid,service text,chosen_slot timestamptz,guest_key text,page integer)
returns jsonb language sql stable security definer set search_path='' as $$
 select gemden_places.detail_times(place,service,chosen_slot,guest_key,page,null)
$$;
create or replace function public.get_place_walk_times(place uuid,service text,chosen_slot timestamptz,guest_key text,page integer,chosen_day date)
returns jsonb language sql stable security invoker set search_path='' as $$
 select gemden_places.detail_times(place,service,chosen_slot,guest_key,page,chosen_day)
$$;
revoke all on function public.get_place_walk_times(uuid,text,timestamptz,text,integer,date) from public;
grant execute on function public.get_place_walk_times(uuid,text,timestamptz,text,integer,date) to anon,authenticated;

-- Apply the general Berlin park rule only to the 24 imported, officially classified public parks.
-- Preserve explicit bans, designated off-leash areas and other unresolved places.
update gemden_places.service_places s set dog_access='on_leash',walks_enabled=true,
 description='Öffentliche Berliner Grünanlage: grundsätzlich Leinenpflicht, höchstens zwei Meter. Das gilt auch bei einer Befreiung von der allgemeinen Leinenpflicht. Örtliche Hundemitnahmeverbote, Spielplätze und andere ausgeschilderte Teilflächen beachten. Kein ausgewiesener Freilauf. Grundlage: Berliner Grünanlagenbestand und Berliner Parkregeln; ergänzt am 19.11.2026.'
from gemden_places.places p where p.id=s.place_id and s.service_id='SERVICE-RUBYBUBYS-HERZ-SCHNAUZE'
 and s.dog_access='unknown' and s.source_url='https://daten.berlin.de/datensaetze/grunanlagenbestand-berlin-einschliesslich-der-offentlichen-spielplatze-wfs-737fd0a4'
 and p.description like '%öffentliche Grünanlage%';
notify pgrst,'reload schema';
