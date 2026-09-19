# Supabase-Fundament für GemDen / FFE

Status: als reproduzierbare Migration vorbereitet, noch nicht auf das produktive Projekt angewendet.

## Enthalten

- `profiles` – private Entwürfe und bewusst veröffentlichte Mitgliedsprofile
- `kieze` – stabile Kiezbereiche, zunächst mit `KIEZ-P-HAIN`
- `permission_grants` – konkrete, zeitlich begrenzbare Bereichsrechte
- `audit_events` – durch Datenbank-Trigger erzeugter, für Browser unveränderbarer Verlauf
- RLS-Regeln und minimale SQL-Rechte für `anon` und `authenticated`
- pgTAP-Gegenproben unter `tests/`
- ein absichtlich nicht automatisch ausführbares Bootstrap-Beispiel unter `bootstrap/`

Das Schema behandelt `manage_kiez:KIEZ-P-HAIN` intern als drei getrennte Werte:

```text
permission_key = manage_kiez
scope_type     = kiez
scope_id       = KIEZ-P-HAIN
```

So kann ein Recht nicht stillschweigend auf einen anderen Kiez oder die ganze Plattform übergreifen.

## Sicherheitsentscheidungen

- Neue Konten erhalten nur ein privates Profil im Entwurfsstatus.
- Signup-Metadaten dürfen weder `MEM-*`-IDs noch Rechte festlegen.
- Browserrollen dürfen Rechte und Audit-Ereignisse nicht schreiben.
- Anonyme Zugriffe sehen nur `public` + `published`.
- Noch nicht umgesetzte Sichtbarkeiten wie `members` und `scope_members` bleiben geschlossen.
- Ein Kiezrecht gilt nur, solange es begonnen hat, nicht abgelaufen und nicht widerrufen ist.
- Das erste Kiezrecht darf Beschreibung und Sichtbarkeit pflegen, aber weder stabile ID, Name, FFE-Verweise noch Lebenszyklusstatus verändern.
- `service_role` gehört niemals in GitHub, HTML oder Browser-JavaScript.

## Lokaler Prüfweg

Voraussetzung ist die aktuelle Supabase CLI. Beim ersten lokalen Lauf:

```bash
supabase init
supabase start
supabase db reset
supabase test db
```

`supabase init` erzeugt die lokale `config.toml`; lokale Laufzeitdaten unter `supabase/.temp/` werden nicht eingecheckt.

Die RLS-Suite prüft ausdrücklich erlaubte und verbotene Wege für anonyme Besucher, Leni mit aktivem P-Hain-Recht und eine Person mit abgelaufenem Recht.

## Kontrollierte Produktivübernahme

Das bekannte Projekt hat die Referenz `svigcbgdcuidokjjqhfy`. Vor einer produktiven Änderung:

1. lokale Migration und Tests vollständig ausführen,
2. bestehenden Remote-Migrationsstand mit `supabase migration list` prüfen,
3. das Projekt mit `supabase link --project-ref svigcbgdcuidokjjqhfy` verbinden,
4. erst danach die Migration mit `supabase db push` anwenden,
5. Julius und Leni über Supabase Auth anlegen oder einladen,
6. die echten Auth-UUIDs und die legitim vergebende Stelle in einer Kopie von `bootstrap/assign_pilot_identities.sql.example` einsetzen,
7. Login, anonyme Abfragen und jeden RLS-Gegenfall im Produktivprojekt erneut testen.

Die Migrationsdatei und die Datenbank-Historie bleiben die Quelle für Schemaänderungen. Änderungen im Remote-Tabelleneditor sollen nicht an der Migration vorbei erfolgen.

## Noch bewusst offen

- Einladung oder offene Registrierung
- wer das erste erweiterte Recht legitim vergibt
- genaue Standardsichtbarkeit der späteren P-Hain-Module
- Löschung, Export und Aufbewahrungsfristen
- produktive Auth-Domain und Redirect-Konfiguration
- Client-Anbindung mit dem veröffentlichbaren Schlüssel

Darum erstellt dieses Paket noch keine echten Konten und verbindet die öffentliche Website noch nicht mit der Datenbank.
