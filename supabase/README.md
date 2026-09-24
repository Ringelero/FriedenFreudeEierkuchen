# Supabase-Fundament für GemDen / FFE

Status: Fundament seit 19. September 2026 produktiv; Profil- und Portfolio-Kern seit 24. September 2026 produktiv und mit anonymen sowie eigentümergebundenen RLS-Gegenproben geprüft.

## Enthalten

- `profiles` – private Entwürfe und bewusst veröffentlichte Mitgliedsprofile
- `kieze` – stabile Kiezbereiche, zunächst mit `KIEZ-P-HAIN`
- `permission_grants` – konkrete, zeitlich begrenzbare Bereichsrechte
- `audit_events` – durch Datenbank-Trigger erzeugter, für Browser unveränderbarer Verlauf
- `skills` und `profile_skills` – generischer Katalog und persönlicher Kontext ohne globale Rangliste
- `profile_fields` – einzeln sichtbare Profiltexte
- `skill_evidence` und `skill_evidence_links` – Nachweise mit explizitem Prüfstatus
- `projects`, `project_skills` und `project_evidence_links` – Projektportfolio und Bezüge
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
- Ein Portfolioeintrag wird zusätzlich nur bei einem öffentlichen, veröffentlichten und aktiven Eigentümerprofil sichtbar.
- Browsernutzer können in den Portfolio-Tabellen ausschließlich eigene Entwürfe schreiben; ein Publish-Weg folgt separat.
- Selbst erfasste Nachweise bleiben `self_reported`; höhere Prüfstatus können nicht selbst vergeben werden.
- Noch nicht umgesetzte Sichtbarkeiten wie `members` und `scope_members` bleiben geschlossen.
- Ein Kiezrecht gilt nur, solange es begonnen hat, nicht abgelaufen und nicht widerrufen ist.
- Das erste Kiezrecht darf Beschreibung und Sichtbarkeit pflegen, aber weder stabile ID, Name, FFE-Verweise noch Lebenszyklusstatus verändern.
- `service_role` gehört niemals in GitHub, HTML oder Browser-JavaScript.

## Browserübergreifender Zugang

Der Supabase-Standardversand dieses Projekts erlaubt derzeit keine bearbeitbare Magic-Link-Vorlage; ein sechsstelliger E-Mail-Code würde einen eigenen SMTP-Versand voraussetzen. Die Kontoseite verwendet deshalb den vorhandenen Einmal-Link nur für den ersten Zugang. Ein bereits angemeldeter Nutzer kann danach selbst ein mindestens zwölfstelliges Passwort setzen und sich damit in jedem Browser anmelden.

Der Linkversand verwendet weiterhin `shouldCreateUser: false`. Weder Passwort noch Session oder E-Mail-Adresse gehören in Logs, Git oder Support-Chats. Ein Passwort wird ausschließlich über `supabase.auth.updateUser({ password })` an Supabase übertragen und von GemDen weder gelesen noch gespeichert.

## Eigene Profilseite aus der Mitgliedssitzung

Die Kontoseite prüft über RLS, ob für die stabile Mitglieds-ID bereits eine eigene Seite existiert. Fehlt sie, lädt der Browser die freigegebene statische Startvorlage und ruft ausschließlich `create_own_profile_page` auf. Der RPC leitet Seiten-ID und Eigentümer aus `auth.uid()` und der bestätigten `MEM-*`-ID ab; der Client sendet weder eine fremde Eigentümer-ID noch eine frei gewählte Seiten-ID. Die erzeugte Seite bleibt privat und im Entwurfsstatus, erhält genau eine erste unveränderliche Revision und wird nicht veröffentlicht.

Die Seitenwerkstatt liest danach nur den durch RLS sichtbaren Seitenzeiger und dessen aktuelle Entwurfsrevision. Beim Sichern wird der geprüfte Stand zunächst lokal erhalten und anschließend mit der zuvor geladenen Revisions-ID an `save_page_revision` übergeben. Hat sich der Serverstand zwischenzeitlich geändert, verweigert die optimistische Sperre eine neue Serverrevision; der lokale Entwurf bleibt erhalten. Beim nächsten Laden verlangt die Werkstatt eine ausdrückliche Auswahl zwischen lokalem Entwurf und Serverrevision. Ein Wechsel zum Server schreibt vorab ein lokales Konflikt-Backup; die Wahl des lokalen Entwurfs bereitet nur die Ausgangsrevision vor und speichert noch nichts auf dem Server. Die Werkstatt ruft keinen Publish-RPC auf.

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

Am 24. September 2026 folgten die Migrationen `20260924091709_profile_portfolio_core` und `20260924092033_profile_portfolio_policy_tuning`. Bestätigt wurden:

- 8 neue Tabellen mit aktiver RLS und expliziten Browserrechten,
- 12 generische Fähigkeiten im Katalog,
- für `MEM-JULIUS` 2 Profilfelder, 5 Fähigkeiten, 2 Nachweise und 1 Projekt als `private` + `draft`,
- anonym sichtbar: 12 Katalogfähigkeiten und 0 Profilfelder, 0 persönliche Fähigkeiten, 0 Nachweise, 0 Projekte,
- als Julius-Eigentümer sichtbar: 2 Profilfelder, 5 Fähigkeiten, 2 Nachweise und 1 Projekt,
- keine neuen Security-Advisor-Funde und keine fehlenden Fremdschlüsselindizes für die neuen Tabellen.

Die Sicherheitstests liefen in einer eigenen Transaktion. Testnutzer, Testrechte, Test-Kieze und die nur dafür aktivierte pgTAP-Erweiterung wurden vollständig zurückgerollt; danach waren weiterhin 0 Auth-Nutzer, 0 Profile und 0 Berechtigungsvergabe vorhanden.

Die produktive Migrationshistorie enthält jetzt das Fundament, die Seitenrevisionen, die RLS-Härtung und beide Portfolio-Migrationen. Die Versionsnummern der Dateien stimmen mit der Remote-Historie überein.

Für die weitere kontrollierte Pilotfreigabe bleiben:

1. Leni erst zum gewünschten Pilotzeitpunkt über eine eindeutig bestätigte Adresse einladen,
2. eine stabile Mitglieds-ID oder ein erweitertes Recht nur über eine legitimierte, dokumentierte Vergabe zuordnen,
3. Login und Eigentümerwege für jedes neu zugeordnete reale Konto erneut prüfen.

## Noch bewusst offen

- Einladung oder offene Registrierung
- wer das erste erweiterte Recht legitim vergibt
- genaue Standardsichtbarkeit der späteren P-Hain-Module
- Kontolöschung, vollständiger Kontoexport und Aufbewahrungsfristen
- eigene produktive Auth-Domain
- enger Veröffentlichungsablauf für strukturierte Profildaten
- bestätigte Beiträge weiterer Projektmitglieder

Darum erstellt keine Portfolio-Migration echte Konten oder Rechte. Die Website ist verbunden, liest öffentlich aber ausschließlich ausdrücklich veröffentlichte RLS-Zeilen.
