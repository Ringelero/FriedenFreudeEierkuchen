# Supabase-Fundament für GemDen / FFE

Status: Fundament seit 19. September 2026 produktiv; Profil- und Portfolio-Kern seit 24. September 2026, Möglichkeiten-Kern, kontrollierte Veröffentlichung und private Resonanz seit 25. September 2026, generische private Mitgliedsseiten und technische Mitgliederverwaltung seit 26. September 2026 sowie Kontoverwaltung V2 seit 5. Oktober 2026 produktiv. Alle Schichten wurden mit anonymen, eigentümergebundenen und beteiligtengebundenen RLS-Gegenproben geprüft. Das ausdrücklich legitimierte Konto `MEM-JULIUS` besitzt das erste reale `manage_members:platform:GemDen`-Recht.

## Enthalten

- `profiles` – private Entwürfe und bewusst veröffentlichte Mitgliedsprofile
- `kieze` – stabile Kiezbereiche, zunächst mit `KIEZ-P-HAIN`
- `permission_grants` – konkrete, zeitlich begrenzbare Bereichsrechte
- `audit_events` – durch Datenbank-Trigger erzeugter, für Browser unveränderbarer Verlauf
- `member_admin_events` – menschenlesbarer, append-only Verlauf begründeter Kontoverwaltungsentscheidungen ohne Auth-Geheimnisse oder E-Mail-Adressen
- `skills` und `profile_skills` – generischer Katalog und persönlicher Kontext ohne globale Rangliste
- `profile_fields` – einzeln sichtbare Profiltexte
- `skill_evidence` und `skill_evidence_links` – Nachweise mit explizitem Prüfstatus
- `projects`, `project_skills` und `project_evidence_links` – Projektportfolio und Bezüge
- `opportunities` – die fünf Signale mit Ort, Zeit, Beziehungs-, Vergütungs-, Risiko-, Sichtbarkeits- und Lebenszyklusrahmen
- `opportunity_requirements` – notwendige, hilfreiche oder im Zusammenhang erlernbare Fähigkeiten einer Möglichkeit
- `publication_actions` – eigentümergebundenes, unveränderliches Protokoll bestätigter Freigaben und Rücknahmen
- `opportunity_responses` – private Interessenbekundungen mit serverseitig abgeleiteten Beteiligten
- `opportunity_response_actions` – unveränderliche Annahmen, Ablehnungen und Rückzüge
- `opportunity_response_messages` – privater Klärungsverlauf nach ausdrücklicher Annahme
- `page_documents` und `page_revisions` – private Seitendokumente mit unveränderlichen Revisionen und getrennten Entwurfs-/Veröffentlichungszeigern
- RLS-Regeln und minimale SQL-Rechte für `anon` und `authenticated`
- pgTAP-Gegenproben unter `tests/`
- ein absichtlich nicht automatisch ausführbares Bootstrap-Beispiel unter `bootstrap/`
- eine geschützte `member-admin` Edge Function für Mitgliederliste, Einladungen, Anzeigenamen, Login-Links und Kontostatus
- `administer_member_account` als ausschließlich für `service_role` aufrufbarer Datenbankweg hinter der Edge Function
- `assign_member_identity` für die erste und einzige Vergabe einer stabilen `MEM-*`-ID
- `set_member_kiez_permission` für begründete, auditierte Vergabe und Widerruf vorhandener Kiez-Rechte

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
- Der Browser erhält niemals einen Secret- oder `service_role`-Schlüssel. Die Auth-Admin-API läuft ausschließlich in der JWT-geschützten Edge Function und prüft zusätzlich `manage_members:platform:GemDen`.
- Eine Kontodeaktivierung sperrt Supabase Auth und setzt zugleich `profiles.account_status = paused`. `has_active_permission` verlangt ein aktives Profil, sodass alte Zugriffstoken keine Bereichsrechte weiterverwenden können.
- Das aktuell verwendete Verwaltungskonto kann sich nicht selbst deaktivieren. Reaktivierung ist nur für ein zuvor pausiertes Konto möglich.
- Anzeigenamen, Einladungen, neue Login-Links, Kontostatus, stabile IDs und Kiez-Rechte erhalten einen begründeten `member_admin_events`-Eintrag. Browserrollen können diese Zeilen weder lesen noch schreiben; Update und Delete werden zusätzlich durch einen Trigger blockiert.
- Mitglieder-Admins können über die freigegebene Oberfläche nur `manage_kiez` für einen vorhandenen Kiez verwalten; globale Plattformrechte bleiben ausgeschlossen.
- Eine einmal bestätigte `MEM-*`-ID wird zusätzlich durch einen Datenbank-Trigger gegen spätere Umbenennung geschützt.
- Anonyme Zugriffe sehen nur `public` + `published`.
- Ein Portfolioeintrag wird zusätzlich nur bei einem öffentlichen, veröffentlichten und aktiven Eigentümerprofil sichtbar.
- Browsernutzer können in den Portfolio-Tabellen ausschließlich eigene Entwürfe schreiben. Freigaben und Rücknahmen laufen append-only über `publication_actions`; ein nicht aufrufbarer privater Trigger prüft `auth.uid()`, Eigentum, Sichtbarkeit und Lebenszyklus und verändert ausschließlich Veröffentlichungsmetadaten.
- Die Rücknahme des Gesamtprofils schließt alle einzeln freigegebenen Inhalte sofort. Ein veröffentlichter Eintrag wird erst nach der Einzelfreigabe wieder zum bearbeitbaren Entwurf.
- Möglichkeiten entstehen im Browser als eigene Entwürfe. Öffentlich lesbar werden sie erst nach bewusster Freigabe und nur zusammen mit einem öffentlichen, veröffentlichten und aktiven Eigentümerprofil.
- Auch Möglichkeiten werden ausschließlich über `publication_actions` freigegeben; direkte Browseränderungen an `publication_status` sind entzogen. Veröffentlichte Inhalte müssen vor einer Bearbeitung zurückgenommen werden.
- Resonanzen sind nur für Möglichkeitseigentümer und antwortendes Mitglied lesbar. Der Browser darf weder Beteiligtenidentitäten noch Status oder Absender vorgeben.
- Ein privater Klärungsraum nimmt Nachrichten erst nach Annahme und nur von seinen beiden Beteiligten an. Ablehnung oder Rückzug öffnen keine Kontaktdaten und schließen neue Nachrichten.
- `members`-sichtbare Möglichkeiten bleiben geschlossen, bis echte Mitgliedschaftsregeln vorliegen.
- Selbst erfasste Nachweise bleiben `self_reported`; höhere Prüfstatus können nicht selbst vergeben werden.
- Noch nicht umgesetzte Sichtbarkeiten wie `members` und `scope_members` bleiben geschlossen.
- Ein Kiezrecht gilt nur, solange es begonnen hat, nicht abgelaufen und nicht widerrufen ist.
- Das erste Kiezrecht darf Beschreibung und Sichtbarkeit pflegen, aber weder stabile ID, Name, FFE-Verweise noch Lebenszyklusstatus verändern.
- `service_role` gehört niemals in GitHub, HTML oder Browser-JavaScript.
- `create_own_profile_page` ist ein bewusst eng begrenzter, für angemeldete Mitglieder aufrufbarer `SECURITY DEFINER`-Bootstrap: Die Funktion validiert die Dokumentstruktur, leitet Seiten-ID, Mitgliedssubjekt und Eigentümer serverseitig ab, verweigert `anon` und erlaubt pro bestätigter `MEM-*`-Identität nur eine private Seite. `save_page_revision` erzwingt dieselbe stabile Identität und Mitgliedsbindung in jeder Folgerevision.

## Browserübergreifender Zugang

Der Supabase-Standardversand dieses Projekts erlaubt derzeit keine bearbeitbare Magic-Link-Vorlage; ein sechsstelliger E-Mail-Code würde einen eigenen SMTP-Versand voraussetzen. Die Kontoseite verwendet deshalb den vorhandenen Einmal-Link nur für den ersten Zugang. Ein bereits angemeldeter Nutzer kann danach selbst ein mindestens zwölfstelliges Passwort setzen und sich damit in jedem Browser anmelden.

Der Linkversand verwendet weiterhin `shouldCreateUser: false`. Weder Passwort noch Session oder E-Mail-Adresse gehören in Logs, Git oder Support-Chats. Ein Passwort wird ausschließlich über `supabase.auth.updateUser({ password })` an Supabase übertragen und von GemDen weder gelesen noch gespeichert.

## Eigene Profilseite aus der Mitgliedssitzung

Die Kontoseite prüft über RLS, ob für die stabile Mitglieds-ID bereits eine eigene Seite existiert. Fehlt sie, personalisiert der Browser die freigegebene gemeinsame Vorlage `assets/data/pages/member-profile.v1.json` und ruft ausschließlich `create_own_profile_page` auf. Der RPC leitet Seiten-ID, Mitgliedssubjekt und Eigentümer aus `auth.uid()` und der bestätigten `MEM-*`-ID ab; der Client sendet weder eine fremde Eigentümer-ID noch eine frei gewählte Seiten-ID. Die erzeugte Seite bleibt privat und im Entwurfsstatus, erhält genau eine erste unveränderliche Revision und wird nicht veröffentlicht.

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

Am 25. September 2026 folgte `20260925163040_opportunity_core`. Bestätigt wurden:

- `opportunities` und `opportunity_requirements` mit aktiver RLS,
- fünf Signalarten und neun ausdrücklich benannte Beziehungsmodi,
- spaltenweise begrenzte Schreibrechte für angemeldete Mitglieder,
- erfolgreicher Eigentümertest für Anlegen, Ändern und Löschen in vollständig zurückgerollten Transaktionen,
- anonym sichtbar: 0 Möglichkeiten und 0 Fähigkeitsanforderungen,
- weiterhin 0 produktive Möglichkeiten und 0 produktive Fähigkeitsanforderungen nach den Tests,
- keine neuen Security-Advisor-Funde und keine fehlenden Fremdschlüsselindizes für die beiden Tabellen.

Danach folgten `20260925175420_publication_center` und `20260925175658_publication_actions_member_index`. Bestätigt wurden:

- `publication_actions` mit RLS, eigentümergebundener Lese- und Einfügepolicy sowie expliziten Spaltenrechten,
- kein direktes Browserrecht mehr auf `profiles.publication_status`,
- kein Ausführungsrecht für Browserrollen auf die privilegierte Triggerfunktion,
- erfolgreiche Gegenproben für Profil- und Einzelfreigabe, Rücknahme, Unveränderlichkeit veröffentlichter Inhalte und blockierte Fremdveröffentlichung,
- vollständiger Rollback aller Testnutzer, Testprofile und Testaktionen,
- `MEM-JULIUS` weiterhin `members` + `draft`, 0 Veröffentlichungsaktionen und 0 veröffentlichte Portfolioeinträge,
- keine neuen Security-Advisor-Funde und kein neuer Hinweis auf einen fehlenden Fremdschlüsselindex.

Mit `20260925202520_resonance_core` folgte private Resonanz. Bestätigt wurden:

- drei neue Tabellen mit aktiver RLS und ausschließlich schmalen Spaltenrechten,
- serverseitige Ableitung von Eigentümer, antwortendem Mitglied, Akteur und Nachrichtenabsender,
- blockierte Eigen- und Doppelantworten sowie vollständig unsichtbare Antworten und Nachrichten für Außenstehende,
- ein Nachrichtenraum erst nach Eigentümerannahme und keine neuen Nachrichten nach Rückzug,
- Möglichkeiten-Freigaben über denselben unveränderlichen `publication_actions`-Pfad wie Portfolioinhalte,
- blockierte Direktveröffentlichung und blockierte Inhaltsänderung an veröffentlichten Möglichkeiten bei weiterhin erlaubter Pause und Wiederöffnung,
- vollständiger Rollback aller Gegenprobendaten; produktiv weiterhin 0 Möglichkeiten, 0 Resonanzen, 0 Antwortaktionen und 0 Nachrichten,
- `MEM-JULIUS` weiterhin `members` + `draft`, ohne neue Veröffentlichungsaktion,
- keine neue Security-Advisor-Meldung und kein fehlender Fremdschlüsselindex an den drei neuen Tabellen.

Am 26. September 2026 folgte `20260926192114_generic_member_pages`. Bestätigt wurden:

- Seiten-ID, Mitgliedssubjekt, Eigentümer und privater Entwurfsstatus werden aus der bestätigten Sitzung abgeleitet,
- manipulierte Fremdsubjekte und eine zweite Profilseite derselben Mitgliedsidentität werden blockiert,
- genau eine unveränderliche erste Revision entsteht,
- `authenticated` besitzt das beabsichtigte enge Ausführungsrecht, `anon` nicht,
- der produktive Gegenprobentest wurde vollständig zurückgerollt; danach verblieben 0 Testnutzer und 0 Testseiten,
- der Security Advisor weist den absichtlich browseraufrufbaren `SECURITY DEFINER`-Eigentümerweg aus; seine Eingaben, Identitätsableitung und Rechte sind deshalb separat geprüft und dokumentiert.

Unmittelbar danach schloss `20260926192738_member_page_subject_integrity` den Revisionsweg:

- weder `subject.kind`, `subject.id` noch `bindings.member.id` können über einen direkten Revisions-RPC auf eine andere Person umgebogen werden,
- eine gültige zweite Revision bleibt weiterhin möglich und unveränderlich,
- der produktive Gegenprobentest blockierte beide Manipulationswege und wurde mit 0 verbleibenden Testnutzern und 0 Testseiten vollständig zurückgerollt.

Die produktive Migrationshistorie enthält jetzt das Fundament, die Seitenrevisionen, die RLS-Härtung, beide Portfolio-Migrationen, den Möglichkeiten-Kern, die Veröffentlichungszentrale, private Resonanz und generische Mitgliedsseiten. Die im Repository geführten Versionsnummern stimmen mit der Remote-Historie überein.

Am 26. September 2026 folgten außerdem `20260926231454_member_administration` und die Parallelzugriffshärtung `20260926232046_serialize_member_permission_changes`. Die Migrationen, die JWT-geschützte Edge Function `member-admin` und 29/29 vollständig zurückgerollte Verwaltungsgegenproben sind produktiv bestätigt. Anonyme Aufrufe der Edge Function enden mit HTTP 401; `anon` kann weder stabile Identitäten noch Kiez-Rechte ändern.

Am 5. Oktober 2026 folgte `20261005121116_member_account_management` mit Version 2 der Edge Function. Produktiv bestätigt wurden:

- begründete Anzeigenamenänderungen,
- neue Einmal-Links ausschließlich für bestehende aktive Konten mit `shouldCreateUser: false`,
- doppelte Deaktivierung über Supabase Auth und sofort wirksamen Datenbankstatus,
- sichere Reaktivierung und blockierte Selbstdeaktivierung des aktiven Verwaltungskontos,
- Suche und Statusfilter in der Website,
- ein unveränderbarer Verwaltungsverlauf ohne E-Mail-Adressen, Passwörter oder Linkinhalte,
- 40/40 vollständig zurückgerollte Datenbank-Gegenproben und 111/111 lokale Funktions- und Vertragstests.

Nach der produktiven Prüfung bestanden weiterhin genau ein reales Auth-Konto, ein reales Profil, ein aktives `manage_members:platform:GemDen`-Recht und zwei aus dem vorherigen Realbestand abgeleitete Verwaltungsereignisse. Es verblieben keine Testnutzer, Testrechte oder pgTAP-Erweiterung. Der Advisor meldet für `member_admin_events` erwartungsgemäß RLS ohne Browserpolicy; diese Tabelle ist absichtlich ausschließlich über `service_role` les- und einfügbar.

Für die weitere kontrollierte Pilotfreigabe bleiben:

1. Leni erst zum gewünschten Pilotzeitpunkt über eine eindeutig bestätigte Adresse einladen,
2. ihre stabile Mitglieds-ID und nur bei separater Legitimation das erweiterte P-Hain-Recht zuordnen,
3. Lenis private Mitgliedsseite anlegen und Login, Eigentümerweg sowie Veröffentlichung mit ihrem realen Konto erneut prüfen,
4. Lösch-, Export- und Aufbewahrungsregeln fachlich und rechtlich festlegen, bevor ein harter Löschweg entsteht.

## Noch bewusst offen

- ob und wann neben der kontrollierten Einladung jemals eine offene Registrierung nötig ist
- wer das erste erweiterte Recht legitim vergibt
- genaue Standardsichtbarkeit der späteren P-Hain-Module
- Kontolöschung, vollständiger Kontoexport und Aufbewahrungsfristen
- eigene produktive Auth-Domain
- bestätigte Beiträge weiterer Projektmitglieder

Darum erstellt keine Portfolio-Migration echte Konten oder Rechte. Die Website ist verbunden, liest öffentlich aber ausschließlich ausdrücklich veröffentlichte RLS-Zeilen.
