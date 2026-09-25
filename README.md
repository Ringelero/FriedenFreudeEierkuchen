# gemden.red

Öffentliche Website von GemDen und digitale Oberfläche für die entstehende FFE-Architektur.

## Aktueller Aufbau

- `/` – Start und Trennung GemDen / FriedenFreudeEierkuchen
- `/community/` – Kieze, Dynastien und Mitglieder
- `/community/kieze/p-hain/` – öffentlicher P-Hain-Prototyp
- `/community/dynastien/rubybubys/` – erste Dynastie
- `/community/mitglieder/julius/` – Julius’ Mitglieds- und Fähigkeitsprofil
- `/leistungen/` – öffentlicher Möglichkeitenstrom mit Filtern sowie regelbasiertes, erklärbares Fähigkeiten-Matching
- `/leistungen/smart-home/` – experimentelles Smart-Home-Erlebnis
- `/system/` – Browser für Institutionen, operative Profile, Methoden und Entwicklungsnetz
- `/konto/` – eingeladener Zugang mit Profilfeldern, Fähigkeitsportfolio, Nachweisen, Projekten, Möglichkeiten, Export und eigenen Rechten
- `/gestalten/` – private Seitenwerkstatt mit validierter Vorschau, Serverrevisionen und deterministischem Blob-Regelassistenten

Die Julius-Seite ist zugleich der erste Pilot der editorunabhängigen Modulplattform. Ihr versioniertes Seitendokument, der Modulkatalog, Capability-Grenzen, JSON-Schemas und der generische Renderer liegen unter `assets/data/pages/`, `assets/data/modules.v1.json`, `assets/data/capabilities.v1.json`, `schemas/` und `assets/gemden-modules.js`.

## Quellen

Die Website folgt dieser Reihenfolge:

1. `FFE_Website_Handoff_v0.2.md`
2. `FFE_Buch_Systemindex_v0.6.json`
3. `Das_Buch_v2.30_Vorsatzungsfassung_II.md` bei Detailfragen

Handoff und Buch wurden als bereitgestellte Arbeitsquellen ausgewertet, sind aber nicht als öffentliche Dateien in diesem Repository veröffentlicht. Der veröffentlichte maschinenlesbare Index liegt unverändert unter `assets/data/ffe-systemindex-v0.6.json`. Teil IV des Buches ist historisches Archiv und wird nicht als heutiger Regelstand geroutet.

## Technischer Stand

Die öffentliche Website ist statisches HTML, CSS und JavaScript auf GitHub Pages. Das Supabase-Fundament liegt unter `supabase/` als reproduzierbare Migrationsfolge mit RLS-, Revisions- und Audit-Regeln vor. Das Profil- und Portfolio-Modell wurde am 24. September 2026 produktiv ergänzt; am 25. September 2026 folgten der Kern für die fünf Signale sowie die kontrollierte Veröffentlichungszentrale. Alle öffentlichen Anwendungstabellen haben RLS und explizite Data-API-Rechte. Anonyme Gegenproben sehen nur ausdrücklich freigegebene Zeilen und weder private Julius-Entwürfe noch unveröffentlichte Möglichkeiten.

Die Kontoseite ist mit Supabase Auth verbunden. Sie erlaubt nur bereits eingeladenen Adressen einen einmal verwendbaren Link und anschließend das selbstbestimmte Setzen eines Passworts. Mit E-Mail-Adresse und Passwort funktioniert die Anmeldung danach browserübergreifend, ohne einen Link zwischen Geräten zu übertragen. Ein Mitglied mit bestätigter `MEM-*`-ID kann einzeln sichtbare Profilfelder, generische Fähigkeiten im eigenen Kontext, selbst berichtete Nachweise und Projekte als private Entwürfe pflegen und ohne Auth-Daten als JSON exportieren. Die Veröffentlichungszentrale zeigt nur zur Öffentlichkeit gewählte Inhalte, verlangt pro Eintrag eine bestätigte Freigabe und öffnet sie erst mit einem zweiten Schalter für das Gesamtprofil. Jede Freigabe oder Rücknahme wird als eigentümergebundene `publication_actions`-Zeile verarbeitet; der Browser kann Akteur, Mitglied und Ergebnis nicht vorgeben und keinen höheren Prüfstatus vergeben. Der vollständige Vertrag steht in `docs/PROFILE-PORTFOLIO-DATA-CONTRACT.md`.

Dasselbe Konto kann die fünf Signale „Ich habe“, „Ich kann“, „Ich brauche“, „Ich habe Zeit“ und „Es gibt eine Chance“ als Möglichkeiten erfassen. Jeder Eintrag beginnt als Entwurf; Ort, Zeit, Beziehungsmodus, Vergütungsrahmen, Risikohinweis und benötigte Fähigkeiten bleiben ausdrücklich sichtbar. Eine Veröffentlichung verlangt sowohl die bewusst gewählte Sichtbarkeit `public` als auch ein bereits öffentlich veröffentlichtes Eigentümerprofil. Der öffentliche Strom unter `/leistungen/` liest ausschließlich die dadurch von RLS freigegebenen Zeilen. Interessenbekundung und automatische Zuordnung sind noch nicht Teil dieses Kerns. Der Vertrag steht in `docs/OPPORTUNITY-DATA-CONTRACT.md`.

Ein Mitglied kann außerdem genau seine eigene private Profilseite über `create_own_profile_page` anlegen; die erste Revision entsteht unveränderlich, ohne Veröffentlichung oder zusätzliche Rechte. Die Seite enthält ausschließlich den öffentlichen Publishable Key; Schutz entsteht durch RLS und den eng begrenzten RPC, und ein `service_role`-Schlüssel gehört niemals in Browsercode. Die P-Hain-Inhaltsmodule bleiben vorerst statisch und speichern weiterhin keine Formulareingaben.

Die Seitenwerkstatt lädt für angemeldete Eigentümer den aktuellen privaten Serverentwurf über RLS. „Entwurf sichern“ schreibt zuerst einen lokalen Rückfallstand und erzeugt anschließend ausschließlich über `save_page_revision` eine neue unveränderliche Revision mit optimistischer Konfliktprüfung. Ein fremder oder parallel veränderter Stand wird nicht überschrieben. Treffen ein nicht zugeordneter lokaler Entwurf und ein neuerer Serverstand aufeinander, stoppt die Werkstatt vor dem Editor und verlangt eine sichtbare Auswahl: lokalen Stand bewusst weiterverwenden oder Serverrevision öffnen. Beim Wechsel zum Server bleibt der lokale Stand als Konflikt-Backup erhalten. Speichern verschiebt keinen Veröffentlichungszeiger und veröffentlicht nichts.

Blob verwendet in der Seitenwerkstatt ausschließlich deterministische Regeln. Freigeschaltet sind Seitendesign, Modulreihenfolge, modulbezogene Darstellung und ausdrücklich deklarierte Abschnittstexte. Jede erkannte Anfrage erzeugt zunächst nur einen erklärten Vorschlag; Anwenden verändert ausschließlich die Vorschau. Speichern und Veröffentlichen bleiben getrennte menschliche Schritte. Ollama ist keine aktive Website-Route. Die eigene Rubin/Psyche-KI kann später denselben engen Vorschlagsvertrag bedienen, bleibt aber bis zu ihrer separaten Core- und Vertragsprüfung deaktiviert.

Der neue Modulrenderer ist Progressive Enhancement mit geschlossenem Rückfallweg: Die Julius-Seite rendert persönliche Inhalte nur nach erfolgreicher Prüfung aller Verträge und der veröffentlichten Supabase-Zeilen. Bei deaktiviertem JavaScript, Ladefehlern, einem geschlossenen Profil oder einer verweigerten Capability bleibt eine neutrale Profilhülle ohne Portfolioinhalte sichtbar. Der öffentliche statische JSON-Grundbestand enthält keine Julius-Fähigkeiten, Nachweise oder Projekte. Menschliche Skills, KI-Operationsprofile und technische Modulberechtigungen sind getrennte Typen und verleihen einander keine Rechte.

Die Julius-Seite besitzt zusätzlich einen öffentlichen Supabase-Adapter. Er wird erst aktiv, wenn das Gesamtprofil und einzelne Inhalte ausdrücklich `public` + `published` sind. Bis dahin – und bei jedem Ladefehler – bleibt der statische Rückfallweg maßgeblich; private Entwürfe werden nie in die öffentliche Seite gemischt.

## Arbeitsweise

- GitHub `main` ist die Quelle für den veröffentlichten Website-Code.
- Stabile IDs verbinden Seiten, Profile und spätere Datenbankeinträge.
- Politische, rechtliche und kulturelle offene Punkte bleiben sichtbar offen.
- Technische Administration durch GemDen ist keine politische FFE-Autorität.
- Die gemeinsame Planung steht in `WEBSITE-ARBEITSDATEI.md`.
- Das geplante Backend steht in `BACKEND-PLAN.md`.
- Migration, Sicherheitsregeln, Tests und kontrollierter Übernahmeweg stehen in `supabase/`.
