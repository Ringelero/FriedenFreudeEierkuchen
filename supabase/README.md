# Supabase-Fundament für GemDen / FFE

Status: am 19. September 2026 auf das produktive Projekt angewendet und mit 37/37 bestandenen RLS-Gegenproben verifiziert.

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

## Browserübergreifender Zugang

Der Supabase-Standardversand dieses Projekts erlaubt derzeit keine bearbeitbare Magic-Link-Vorlage; ein sechsstelliger E-Mail-Code würde einen eigenen SMTP-Versand voraussetzen. Die Kontoseite verwendet deshalb den vorhandenen Einmal-Link nur für den ersten Zugang. Ein bereits angemeldeter Nutzer kann danach selbst ein mindestens zwölfstelliges Passwort setzen und sich damit in jedem Browser anmelden.

Der Linkversand verwendet weiterhin `shouldCreateUser: false`. Weder Passwort noch Session oder E-Mail-Adresse gehören in Logs, Git oder Support-Chats. Ein Passwort wird ausschließlich über `supabase.auth.updateUser({ password })` an Supabase übertragen und von GemDen weder gelesen noch gespeichert.

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

## Produktivstand

Das Projekt hat die Referenz `svigcbgdcuidokjjqhfy`. Die Fundament-Migration wurde am 19. September 2026 nach einem konfliktfreien Vorabcheck als eine Transaktion angewendet. Anschließend wurden im produktiven Projekt unabhängig bestätigt:

- 4 Zieltabellen mit aktivierter Row Level Security,
- 4 private Hilfsfunktionen,
- 6 Trigger,
- 8 RLS-Policies,
- der veröffentlichte Datensatz `KIEZ-P-HAIN`,
- ein automatisch erzeugtes Audit-Ereignis für dessen Anlage,
- 37/37 bestandene pgTAP-Gegenproben.

Die Sicherheitstests liefen in einer eigenen Transaktion. Testnutzer, Testrechte, Test-Kieze und die nur dafür aktivierte pgTAP-Erweiterung wurden vollständig zurückgerollt; danach waren weiterhin 0 Auth-Nutzer, 0 Profile und 0 Berechtigungsvergabe vorhanden.

Die SQL-Ausführung erfolgte kontrolliert im Supabase SQL Editor. Deshalb muss die bereits angewendete Version `20260919000100` vor dem nächsten `db push` noch mit der offiziellen CLI als angewendet in der Remote-Historie markiert werden:

```bash
supabase link --project-ref svigcbgdcuidokjjqhfy
supabase migration repair --status applied 20260919000100
supabase migration list
```

`migration repair` darf hier nur den Verlauf berichtigen und die SQL-Datei nicht erneut ausführen. Die Migrationsdatei und die Datenbank-Historie bleiben danach gemeinsam die Quelle für Schemaänderungen.

Für die kontrollierte Pilotfreigabe bleiben:

1. Julius und Leni über Supabase Auth mit eindeutig bestätigten E-Mail-Adressen einladen,
2. die echten Auth-UUIDs und die legitim vergebende Stelle in einer Kopie von `bootstrap/assign_pilot_identities.sql.example` einsetzen,
3. Login, anonyme Abfragen und jeden RLS-Gegenfall mit den realen Konten erneut testen.

## Noch bewusst offen

- Einladung oder offene Registrierung
- wer das erste erweiterte Recht legitim vergibt
- genaue Standardsichtbarkeit der späteren P-Hain-Module
- Löschung, Export und Aufbewahrungsfristen
- produktive Auth-Domain und Redirect-Konfiguration
- Client-Anbindung mit dem veröffentlichbaren Schlüssel

Darum erstellt die Migration selbst keine echten Konten und verbindet die öffentliche Website noch nicht mit der Datenbank.
