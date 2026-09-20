# gemden.red

Öffentliche Website von GemDen und digitale Oberfläche für die entstehende FFE-Architektur.

## Aktueller Aufbau

- `/` – Start und Trennung GemDen / FriedenFreudeEierkuchen
- `/community/` – Kieze, Dynastien und Mitglieder
- `/community/kieze/p-hain/` – öffentlicher P-Hain-Prototyp
- `/community/dynastien/rubybubys/` – erste Dynastie
- `/community/mitglieder/julius/` – Julius’ Mitglieds- und Fähigkeitsprofil
- `/leistungen/` – regelbasiertes, erklärbares Fähigkeiten-Matching
- `/leistungen/smart-home/` – experimentelles Smart-Home-Erlebnis
- `/system/` – Browser für Institutionen, operative Profile, Methoden und Entwicklungsnetz
- `/konto/` – eingeladener Zugang mit Supabase-Sitzung, eigenem Profil und eigenen Rechten

## Quellen

Die Website folgt dieser Reihenfolge:

1. `FFE_Website_Handoff_v0.2.md`
2. `FFE_Buch_Systemindex_v0.6.json`
3. `Das_Buch_v2.30_Vorsatzungsfassung_II.md` bei Detailfragen

Handoff und Buch wurden als bereitgestellte Arbeitsquellen ausgewertet, sind aber nicht als öffentliche Dateien in diesem Repository veröffentlicht. Der veröffentlichte maschinenlesbare Index liegt unverändert unter `assets/data/ffe-systemindex-v0.6.json`. Teil IV des Buches ist historisches Archiv und wird nicht als heutiger Regelstand geroutet.

## Technischer Stand

Die öffentliche Website ist statisches HTML, CSS und JavaScript auf GitHub Pages. Das erste Supabase-Fundament liegt unter `supabase/` als reproduzierbare Migration mit RLS- und Audit-Regeln sowie 37 Datenbank-Gegenproben vor. Es wurde am 19. September 2026 auf das produktive Projekt angewendet und dort mit 37/37 bestandenen, vollständig zurückgerollten Gegenproben verifiziert.

Die Kontoseite ist als erster echter Client-Schritt mit Supabase Auth verbunden. Sie erlaubt nur bereits eingeladenen Adressen einen Einmal-Link, lädt über die eigene Sitzung ausschließlich das eigene private Profil und die eigenen Rechte und kann nur die per Tabellengrant freigegebenen Profilfelder ändern. Sie enthält ausschließlich den öffentlichen Publishable Key; Schutz entsteht durch RLS, und ein `service_role`-Schlüssel gehört niemals in Browsercode. Die P-Hain-Inhaltsmodule bleiben vorerst statisch und speichern weiterhin keine Formulareingaben.

## Arbeitsweise

- GitHub `main` ist die Quelle für den veröffentlichten Website-Code.
- Stabile IDs verbinden Seiten, Profile und spätere Datenbankeinträge.
- Politische, rechtliche und kulturelle offene Punkte bleiben sichtbar offen.
- Technische Administration durch GemDen ist keine politische FFE-Autorität.
- Die gemeinsame Planung steht in `WEBSITE-ARBEITSDATEI.md`.
- Das geplante Backend steht in `BACKEND-PLAN.md`.
- Migration, Sicherheitsregeln, Tests und kontrollierter Übernahmeweg stehen in `supabase/`.
