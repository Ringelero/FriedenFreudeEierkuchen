# GemDen / FFE – Backend-Plan

Stand: 19. September 2026

Status: Phase-B-Fundament produktiv angewendet und mit 37/37 RLS-Gegenproben verifiziert; erstes Pilotkonto eingeladen und sichere Client-Anbindung vorbereitet

## 1. Ziel

Das Backend soll Konten, geschützte Kiezdaten, bearbeitbare Profile, Fähigkeiten, Termine, Anfragen und nachvollziehbare Änderungen ermöglichen. Es darf die politische FFE-Quelle nicht stillschweigend überschreiben.

Für den jetzigen Umfang ist kein eigener Server nötig. Supabase liefert:

- Authentifizierung
- PostgreSQL-Datenbank
- Row Level Security (RLS)
- Dateispeicher
- serverseitige Funktionen für spätere geheime oder KI-gestützte Abläufe

GitHub Pages bleibt zunächst die öffentliche Oberfläche.

## 2. Zwei getrennte Datenschichten

### A. Versionierte FFE-Systemquelle

Enthält Institutionen, operative Profile, Methoden und Entwicklungsnetz aus Buch/Systemindex.

- Quelle: GitHub-Datei `assets/data/ffe-systemindex-v0.6.json`
- Änderungen nur durch den vorgesehenen FFE-Redaktions- und Entscheidungsprozess
- Version und Quellenstand immer sichtbar
- Teil IV bleibt Archiv und wird nicht als aktuelle Regel geroutet
- keine Bearbeitung über ein gewöhnliches Kiez-Dashboard

### B. Operative Live-Daten

Enthält veränderliche Daten aus dem Alltag.

- Konten und Profile
- Kieze, Dynastien und Zugehörigkeiten
- Fähigkeiten und Nachweise
- Termine, Beiträge und Wissenseinträge
- Reparaturanfragen und Möglichkeiten
- bereichsbezogene Rechte
- Änderungswünsche und Änderungsverlauf

Diese Daten liegen in Supabase und werden durch RLS geschützt.

## 3. Identitäten und Berechtigungen

Supabase Auth verwaltet die Anmeldung. Fachliche Berechtigungen liegen in eigenen Tabellen und nicht nur in einem globalen Feld wie `admin=true`.

Beispiele:

- `edit_profile:self`
- `manage_kiez:KIEZ-P-HAIN`
- `moderate_posts:KIEZ-P-HAIN`
- `manage_dynasty:DYN-RUBYBUBYS`
- `platform_operator:GemDen`

Kulturelle Titel, politische Mandate und technische Zugriffsrechte bleiben getrennte Datenarten.

## 4. Vorgeschlagenes Datenmodell

### Identität

| Tabelle | Aufgabe |
|---|---|
| `profiles` | öffentliches und geschütztes Mitgliedsprofil, verknüpft mit `auth.users` |
| `profile_visibility` | optionale Sichtbarkeit einzelner Profilfelder |
| `permission_grants` | Recht, Geltungsobjekt, Beginn, Ende, erteilende Stelle |

### Community

| Tabelle | Aufgabe |
|---|---|
| `kieze` | Kiezräume wie `KIEZ-P-HAIN` |
| `kiez_memberships` | viele-zu-viele-Zugehörigkeit von Profilen und Kiezen |
| `dynasties` | Dynastien wie `DYN-RUBYBUBYS` |
| `dynasty_memberships` | viele-zu-viele-Zugehörigkeit mit getrennten kulturellen Angaben |
| `roles` | sachlich und zeitlich begrenzte Verantwortungsrollen |
| `role_assignments` | Zuordnung von Rollen, Personen und Geltungsbereichen |

### Fähigkeiten und Evidenz

| Tabelle | Aufgabe |
|---|---|
| `skills` | generische Fähigkeiten mit stabiler ID |
| `skill_relations` | Ober-, Unter- und verwandte Fähigkeiten |
| `profile_skills` | Fähigkeit eines Profils, Sichtbarkeit, Grenzen und gewünschte Einsätze |
| `skill_evidence` | Projekte, externe Qualifikationen, Arbeitsbeispiele und Prüfstatus |
| `projects` | Portfolio-Projekte |
| `project_skills` | in einem Projekt gezeigte oder benötigte Fähigkeiten |

Ein Erfahrungsnachweis bewertet eine Fähigkeit in einem Kontext, nicht den Wert eines Menschen.

### Inhalte und Kiezbetrieb

| Tabelle | Aufgabe |
|---|---|
| `content_blocks` | bearbeitbare Seitenabschnitte mit stabiler Bauteil-ID |
| `page_documents` | Seite, Subjekt, Sichtbarkeit und Zeiger auf die veröffentlichte Revision |
| `page_revisions` | unveränderliche, versionierte Modulkomposition als geprüftes JSON-Dokument |
| `module_assets` | kontrollierte Medien und Anhänge für eine Seite oder Modulinstanz |
| `events` | Termine, Ort, Zeit, Sichtbarkeit und Status |
| `event_responses` | Interesse oder Teilnahme mit eigener Sichtbarkeit |
| `posts` | Kiezbrett und Mitteilungen |
| `knowledge_entries` | Hauswissen, Quelle, Zuständigkeit und Prüfdatum |
| `requests` | Wunsch, Problem, Auftrag oder Hilfebedarf |
| `request_requirements` | notwendige und hilfreiche Fähigkeiten einer Anfrage |
| `matches` | erklärbare, situationsbezogene Vorschläge |
| `change_requests` | Änderungswunsch an eine stabile Seiten- oder Bauteil-ID |
| `audit_events` | sicherheitsrelevanter Änderungsverlauf ohne unnötige Inhaltsüberwachung |

## 5. Sichtbarkeit

Vorgeschlagene technische Werte:

- `public` – ohne Konto sichtbar
- `members` – für angemeldete FFE-Mitglieder
- `scope_members` – nur Mitglieder des betroffenen Kiezes/der Dynastie
- `managers` – nur zuständige Verwaltung
- `private` – nur Erstellerin beziehungsweise ausdrücklich Berechtigte

Welche Inhalte standardmäßig welchen Wert erhalten, ist teilweise noch politisch und praktisch offen. Das Schema ermöglicht die Entscheidung, nimmt sie aber nicht vorweg.

## 6. RLS-Grundsätze

1. Standardmäßig kein Schreibzugriff.
2. Öffentliche Zeilen sind nur lesbar, wenn `visibility='public'` und der Status veröffentlicht ist.
3. Mitglieder dürfen nur ihr eigenes Profil und eigene Entwürfe ändern.
4. Bereichsverwaltende dürfen nur Zeilen ihres freigegebenen Objekts ändern.
5. Private Reparaturdetails werden niemals über eine anonyme öffentliche Abfrage ausgeliefert.
6. Rechte können ein Ende haben und müssen bei Austritt oder Rollenwechsel entzogen werden.
7. Der Supabase-`service_role`-Schlüssel kommt niemals in Browsercode oder GitHub.
8. Kritische Aktionen erhalten Protokoll, Rücknahmeweg und bei Bedarf zweite Prüfung.

## 7. Blob und KI

### Erste Stufe

- Regeln und Filter laufen nachvollziehbar im Browser oder in SQL.
- Freitext wird in bekannte Fähigkeiten übersetzt.
- Jede Empfehlung nennt die passenden Fähigkeiten und Grenzen.
- Kein globaler Menschen-Score.
- Kein automatisches Zuteilen oder Annehmen eines Auftrags.

### Spätere KI-Stufe

- Geheimnisse und Modellschlüssel nur in einer Supabase Edge Function oder einem anderen geschützten Serverdienst.
- Nur die für die konkrete Anfrage nötigen Daten werden übergeben.
- Persönliche und gemeinschaftliche Assistenz bleiben unterscheidbar.
- Unklare Regeln werden als unklar bezeichnet.
- Rechte, Sicherheit, Recht und Konflikte führen zu menschlicher Prüfung.
- Ein manueller Weg bleibt für wichtige Funktionen erhalten (`T10`).

## 8. Umsetzung in kleinen Schritten

### Schritt 1 – Fundament

- Tabellen `profiles`, `kieze`, `permission_grants`
- Supabase Auth aktivieren
- RLS für jede Tabelle testen
- Julius und Leni als Testkonten
- `KIEZ-P-HAIN` anlegen
- Leni gezielt `manage_kiez:KIEZ-P-HAIN` geben

**Technischer Stand vom 20. September 2026:** Das Repository enthält unter `supabase/` eine reproduzierbare Fundament-Migration für `profiles`, `kieze`, `permission_grants` und `audit_events`, minimale Tabellenrechte, RLS-Regeln, Trigger für private Profilentwürfe und Änderungsverlauf sowie 37 pgTAP-Gegenproben. Die Migration ist im produktiven Projekt angewendet. Dort wurden 4 Tabellen mit RLS, 4 private Funktionen, 6 Trigger, 8 Policies, `KIEZ-P-HAIN` und dessen Audit-Ereignis verifiziert; 37/37 Gegenproben bestanden in einer vollständig zurückgerollten Testtransaktion. Das erste eindeutig bestätigte Pilotkonto ist eingeladen und besitzt ein privates Entwurfsprofil, aber noch keine stabile Mitglieds-ID oder erweiterten Rechte. Die neue Kontoseite verwendet ausschließlich den öffentlichen Publishable Key, verhindert offene Kontoerstellung und liest Profil und Rechte über die reale Sitzung. Weil die Migration über den SQL Editor angewendet wurde, ist außerdem noch der reine Historienabgleich für Version `20260919000100` mit `supabase migration repair --status applied` offen.

Die aktuellen Regeln verweigern noch nicht umgesetzte Sichtbarkeiten wie `members` und `scope_members` sicher. Ein Signup kann weder eine stabile `MEM-*`-ID noch ein Recht aus Metadaten übernehmen. Browserrollen dürfen Rechte und Audit-Ereignisse nicht schreiben.

### Schritt 2 – P-Hain-Dashboard

- `events`, `posts`, `knowledge_entries`, `content_blocks`
- `page_documents`, immutable `page_revisions` und kontrollierte Modul-Assets
- Erstellen, Entwurf, Veröffentlichen, Ändern, Ausblenden
- öffentlich/geschützt klar anzeigen
- Änderungswünsche mit Bauteil-ID

### Schritt 3 – Reparaturen und Möglichkeiten

- `requests`, `request_requirements`, Statusverlauf
- private Details getrennt von öffentlicher Zusammenfassung
- sicherheitskritische Hinweise und Eskalationswege

### Schritt 4 – Mitglieder, Dynastien, Skills

- viele-zu-viele-Mitgliedschaften
- eigenes Profil bearbeiten
- Fähigkeiten und Evidenz
- Rubybubys und Julius aus den statischen Testdaten migrieren

### Schritt 5 – Erklärbares Matching

- generischer Fähigkeiten-Graph
- konkrete Situation statt Berufstitel
- Filter nach Sicherheit, Ort, Zeit, Interesse und Verfügbarkeit
- nachvollziehbare Vorschläge und freiwillige Annahme

### Schritt 6 – Geschützte KI-Funktionen

- erst nach Datenschutz-, Kosten- und Berechtigungskonzept
- Edge Function, Limits und Protokollierung
- keine Regelsetzung durch das Modell

## 9. Noch offen

- genaue Standard-Sichtbarkeit der einzelnen P-Hain-Module
- Einladungs- oder offener Registrierungsweg
- wer Mitgliedschaften und erweiterte Rechte legitim vergibt
- Lösch-, Export- und Aufbewahrungsfristen
- Moderations- und Beschwerdeweg
- ob Chats in Version 1 nötig sind
- rechtliche Prüfung für GemDen, FFE, Aufträge und Bezahlung
- wann der Systemindex zusätzlich in eine read-only Datenbankansicht importiert wird

## 10. Definition für den ersten sicheren Pilot

Der erste Pilot ist erst fertig, wenn:

- Leni sich anmelden kann,
- sie ausschließlich P-Hain verwalten kann,
- anonyme Besucher nur veröffentlichte Inhalte sehen,
- private Reparaturdaten anonym nicht abrufbar sind,
- jeder Schreibweg durch RLS und nicht nur durch versteckte Buttons geschützt ist,
- Änderungen nachvollziehbar und rücknehmbar sind,
- alle Formulare ihren echten Speicherstatus klar anzeigen.

Diese Definition ist noch nicht erfüllt. Fertig sind der statische, ehrlich gekennzeichnete P-Hain-Prototyp und das produktiv verifizierte Datenbankfundament. Noch fehlen echte Anmeldung, reale Konten, die kontrollierte Erstvergabe des P-Hain-Rechts, die Client-Anbindung und das Dashboard.
