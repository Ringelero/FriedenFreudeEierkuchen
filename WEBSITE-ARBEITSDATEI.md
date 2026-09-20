# GemDen / FriedenFreudeEierkuchen – Website-Arbeitsdatei

Version: 0.5
Stand: 19. September 2026
Status: gemeinsame technische und inhaltliche Planungsgrundlage  
Kein Ersatz für Satzung, Buch oder legitimierte FFE-Entscheidungen

## 0. Zweck dieser Datei

Diese Datei hält die Website-Architektur, bereits getroffene Projektentscheidungen, den technischen Stand und offene Fragen zusammen. Sie soll verhindern, dass Website, Backend, Blob und Buch auseinanderlaufen.

Sie darf:

- technische Zusammenhänge festhalten,
- bereits getroffene Entscheidungen in Website-Struktur übersetzen,
- Umsetzungsschritte und offene Punkte sichtbar machen,
- stabile IDs und Datenbeziehungen dokumentieren.

Sie darf nicht:

- neue politische FFE-Regeln erfinden,
- kulturelle Namen, Rituale oder Ränge festlegen,
- offene Rechtsfragen als geklärt darstellen,
- Teil IV des Buches als aktuellen Regelstand behandeln.

## 1. Verbindliche Lesereihenfolge

Für Website- und App-Arbeit gilt:

1. `FFE_Website_Handoff_v0.2.md`
2. `FFE_Buch_Systemindex_v0.6.json`
3. `Das_Buch_v2.30_Vorsatzungsfassung_II.md` für nötige Details und Begründungen

Aktueller Quellenstand:

| Quelle | Version | Datum | Rolle |
|---|---:|---:|---|
| Website-Handoff | 0.2 | 16.09.2026 | Umsetzungs- und Routingregeln |
| FFE Buch-Systemindex | 0.6 | 16.09.2026 | maschinenlesbare aktuelle Struktur |
| Das Buch | v2.30 | 16.09.2026 | redigierte inhaltliche Hauptquelle |

Website-Handoff und Buch sind bereitgestellte Arbeitsquellen und derzeit nicht als öffentliche Dateien im GitHub-Repository veröffentlicht. Der Systemindex ist die bewusst veröffentlichte maschinenlesbare Website-Quelle.

Der Systemindex nennt 69 Kerninstitutionen, 69 operative Profile und 22 Entscheidungsmethoden. Die Profilabdeckung ist `69/69`.

### Archivregel

Teil IV des Buches hat den Status:

> `historical_only · non_current · do_not_route_as_rule_without_explicit_archive_request`

Bei einem Widerspruch gilt zuerst Teil II, danach der aktuelle Teil III. Archivmaterial wird nur auf ausdrücklichen historischen Wunsch gezeigt und immer als Archiv gekennzeichnet.

### Normpriorität

Von höher nach niedriger:

1. zwingendes externes Recht
2. Grundrechte-Charta
3. Verfassungsprinzipien
4. Satzung und Ordnungen
5. Methoden
6. Kultur und Rituale
7. Experimente

Website-Komfort, Gamification, Ästhetik oder KI-Vorschläge stehen nicht über diesen Ebenen.

## 2. Statussprache der Website

Die Website soll Aussagen sichtbar einordnen:

- **aktueller Kern** – in Teil II beziehungsweise aktuellem Systemindex geführt
- **Methode** – empfohlenes Werkzeug, nicht automatisch bindende Regel
- **Kultur/Ritual** – lokal gestaltbar, unter höheren Normen
- **Experiment/Pilot** – testbar und rücknehmbar
- **offen** – noch nicht legitim entschieden
- **historisches Archiv** – nicht der heutige Regelstand
- **selbst berichtet** – Evidenzangabe ohne unabhängige Prüfung

Ein Entwurf darf nicht wie eine beschlossene Regel aussehen.

## 3. Leitbild

`gemden.red` soll keine Website sein, die man nur liest. Sie wird eine von Kunst, Technik, Figuren, Community und später KI bewohnte Welt, die Menschen entdecken und mitgestalten.

Gleichzeitig wird sie ein praktisches Werkzeug:

- Menschen beschreiben Bedürfnisse, Ideen, Probleme, Zeit und Fähigkeiten in natürlicher Sprache.
- Blob hilft beim Verstehen, Nachfragen und Navigieren.
- Das System zeigt passende Fähigkeiten, Menschen, Projekte, Produkte, Lernwege und Zuständigkeiten.
- Die Betroffenen entscheiden selbst.
- Gründe, Grenzen, Zuständigkeiten, Quellen und Ergebnisse bleiben nachvollziehbar.
- Wichtige Funktionen behalten einen manuellen Weg.

## 4. Institutionelle Rollen

### GemDen

**Projektentscheidung:** GemDen ist Julius’ private Firma beziehungsweise technische und kreative Betreiberin der Plattform. GemDen entwickelt Website, digitale Werkzeuge, Gestaltung, Produkte und Leistungen.

**Grenze:** Technischer Betrieb erzeugt keine automatische politische Autorität innerhalb von FFE. `T05` beschreibt Zugriffsmacht ausdrücklich als begrenzte Aufgabe, nicht als Krone.

**Offen:** Rechtsform, Anmeldung, Außendarstellung, Verträge und wirtschaftliche Beziehungen müssen separat rechtlich und steuerlich geklärt werden.

### FriedenFreudeEierkuchen (FFE)

**Projektentscheidung:** FFE ist Dach-Community und mögliche zukünftige Genossenschaft. Sie verbindet Communitys, Kieze, Dynastien, Mitglieder, Projekte, Commons, Wissen und gemeinsame Verfahren.

**Status:** Vor-Satzungsfassung. Die Struktur ist für Prototypen nutzbar, aber laut Quelle politisch und rechtlich noch nicht vollständig final.

### Communitys

Die Website zeigt zunächst:

1. **Kieze** – ortsbezogene Gemeinschaften, Termine, Wissen, Hilfe und gemeinsames Handeln.
2. **Dynastien** – Verbindungen über Kultur, Projekte, Fähigkeiten, Orte, Produkte oder Commons.
3. **Mitglieder** – Menschen mit eigenem Profil, Fähigkeiten, Grenzen, Evidenz und Portfolio.

Ein Mitglied kann mehreren Kiezen und Dynastien angehören. Das Datenmodell ist deshalb viele-zu-viele.

## 5. Grundstruktur aller intelligenten Website-Wege

Jeder wichtige Weg soll diese Kette nachvollziehbar abbilden:

> Institution → Situation → operatives Profil → Methode/Werkzeug/Ritual → Evidenz

### Institution

Eine stabile Kern-ID aus dem Buch/Systemindex, zum Beispiel:

- `W01` Möglichkeiten-Marktplatz & Matching
- `K05` Akademie, Angeberschein & Skill Trees
- `K10` Rubin-KI als Navigator
- `R01` Dynastien & polyzentrische Kreise
- `F04` Privatsphäre & Datenautonomie
- `T05` Digitale Verfassung & Zugriffsmacht
- `T10` Graceful Degradation & manueller Fallback

### Situation

Ein konkreter Auslöser. Website-eigene Situations-IDs beginnen mit `SIT-` und werden als technische Routing-IDs gekennzeichnet, nicht als neue politische Regel.

Beispiele:

- `SIT-W01-NEED` – jemand beschreibt einen Bedarf
- `SIT-W01-LIGHT-CREATION` – eine interaktive Lichterkette wird gewünscht
- `SIT-PHAIN-REPAIR-DEMO` – ein Reparaturproblem wird im Kiez eingeordnet
- `SIT-ROUTE-PRIVACY` – der Systemwegweiser erkennt eine Datenschutzfrage

### Operatives Profil

Jede Kerninstitution hat ein Profil `OP-<KERN-ID>`, zum Beispiel `OP-W01`. Es enthält:

- Aktivierungssituation
- Ziel
- notwendige Prüffragen
- harte Grenzen
- empfohlenen Weg
- Werkzeuge
- kulturellen Rahmen
- Querverweise
- typische Fehlentwicklungen
- Eskalation
- erwartetes Ergebnis
- Normstatus

### Methode, Werkzeug oder Ritual

Methoden aus `D02` besitzen IDs `V01` bis `V22`. Werkzeuge und Rituale müssen nach Zweck, Status und Normebene unterschieden werden. Ein Ritual darf kein Grundrecht ersetzen.

### Evidenz

Ein Ergebnis braucht einen nachvollziehbaren Bezug, zum Beispiel:

- öffentliches Arbeitsbeispiel
- selbst berichtete Arbeitserfahrung
- externe Qualifikation mit Herkunft
- dokumentiertes Projektergebnis
- überprüfter Wissenseintrag
- Entscheidungsbrief und Review

Evidenz bewertet eine Behauptung in einem Kontext, nicht den Wert eines Menschen.

## 6. Aktuelle Informationsarchitektur

### Hauptnavigation

- **Start** – Vision, GemDen/FFE-Trennung und zentrale Einstiege
- **Community**
  - Kieze
    - P-Hain
  - Dynastien
    - Rubybubys
  - Mitglieder
    - Julius
- **Leistungen** – Wunsch/Auftrag über Fähigkeiten statt statischen Angebotskatalog
- **FFE-System** – Institutionen, operative Profile, Methoden und Entwicklungsnetz

Spätere mögliche Hauptbereiche:

- Produkte
- Projekte und Commons
- Wissen/Lernen
- persönliches Dashboard

Neue Bereiche müssen nicht in jede HTML-Datei kopiert werden. Die kompakte barrierearme Navigation und Blob lesen ihre Hauptziele aus gemeinsamen JavaScript-Komponenten. Später sollen Community-Module aus Daten erzeugt werden.

## 7. Register stabiler Website-IDs

| ID | Typ | Aktueller Zweck | Status |
|---|---|---|---|
| `KIEZ-P-HAIN` | Kiez | Pilot rund um Straßmannstraße im Übergang Prenzlauer Berg/Friedrichshain | Experiment |
| `DYN-RUBYBUBYS` | Dynastie | erste Dynastie in FFE | aktiv, kulturelle Details offen |
| `MEM-JULIUS` | Mitglied | öffentliches Mitglieds- und Fähigkeitsprofil | Prototyp |
| `MEM-LENI` | Mitglied | reservierte stabile ID für Lenis künftiges Konto | vorbereitet, noch keinem Auth-Konto zugeordnet |
| `SKILL-SMART-HOME` | Fähigkeit | Smart-Home-Systeme verbinden | öffentlicher Testbestand |
| `SKILL-ELECTRICAL-UNDERSTANDING` | Fähigkeit | elektrische Zusammenhänge verstehen | mit Sicherheitsgrenze |
| `SKILL-TINKERING` | Fähigkeit | tüfteln und Prototypen bauen | öffentlicher Testbestand |
| `SKILL-TROUBLESHOOTING` | Fähigkeit | Fehler systematisch finden | öffentlicher Testbestand |
| `SKILL-TECH-COMMUNICATION` | Fähigkeit | Technik verständlich erklären | öffentlicher Testbestand |
| `EVID-JULIUS-BETTERATHOME` | Evidenz | angegebene Arbeitserfahrung | selbst berichtet |
| `EVID-JULIUS-ADLON` | Evidenz | angegebene Arbeitserfahrung | selbst berichtet |

Neue IDs bleiben nach Veröffentlichung stabil. Namen und Texte dürfen sich ändern, ohne Beziehungen zu zerstören.

## 8. P-Hain

**Projektentscheidung:** Der frühere Reiter „Richard-Sorge-Kiez“ wird vollständig entfernt. Der neue Kiez heißt **P-Hain**. Er beschreibt die Verbindung von Prenzlauer Berg und Friedrichshain rund um den örtlichen Pilotbereich.

P-Hain ist kein separates Hausportal, sondern ein Kiez mit öffentlichen und später geschützten Bereichen.

### Öffentlicher Pilot

- Übersicht
- Termine
- Reparatur-Einordnung
- fünf W01-Signale
- Hauswissen
- Kiezbrett

Die fünf Signale sind:

- Ich habe
- Ich kann
- Ich brauche
- Ich habe Zeit
- Es gibt eine Chance

### Schutz

Ohne Konto dürfen nur bewusst veröffentlichte Daten erscheinen. Konkrete Wohnungsdetails, Kontaktdaten, interne Reparaturinformationen und geschützte Gespräche gehören nicht in den öffentlichen Abruf.

### Inhaltliche Grenzen

- Wartungstipps benötigen Quelle, Zuständigkeit und Prüfdatum.
- Bei Gefahr weist Blob an reale Notfall-, Verwaltungs- oder Fachstellen weiter.
- Die Website stellt keine Ferndiagnose.
- Ein Konflikt- oder Sorgenkanal wird erst mit geklärter Moderation und Schutzstruktur gebaut.

### Offene Punkte

- genaue Standardsichtbarkeit jedes Moduls
- welche Module im ersten echten Pilot aktiv sind
- Moderations- und Beschwerdeweg
- ob ein Chat nötig ist
- Zuständigkeit und fachliche Prüfung für Hauswissen

## 9. Dynastien und Rubybubys

`R01` erlaubt Dynastien nach Ort, Projekt, Fähigkeit, Kultur, Produkt oder Commons. Lokale Namen und Rituale bleiben mit gemeinsamen funktionalen Beschreibungen interoperabel.

Für `DYN-RUBYBUBYS` steht fest:

- Name: Rubybubys
- erste Dynastie innerhalb von FFE
- Julius ist öffentlich zugeordnet

Offen und deshalb auf der Website offen markiert:

- Geschichte
- Rituale
- Ränge
- Sprache der Meisterschaft
- weitere Mitglieder und Rollen

Leitpfad aus `R01`:

> Name → Geschichte → Rituale → Ränge → Fähigkeiten → Meisterschaft → Projekte → Portfolio

Kulturelle Titel sind technisch von Berechtigungen, Mandaten und politischen Rechten getrennt.

## 10. Julius als Mitglied

Julius ist kein eigener oberster Website-Bereich mehr, sondern:

> Community → Mitglieder → Julius

Die alte Adresse `/julius/` leitet aus technischer Rückwärtskompatibilität auf `/community/mitglieder/julius/` weiter. Sie ist kein zweites Profil.

Öffentliche erste Fähigkeiten:

- Smart-Home-Systeme verbinden
- elektrische Zusammenhänge verstehen
- tüfteln und Prototypen bauen
- Fehler systematisch finden
- Technik verständlich erklären

Öffentliche Evidenz ist aktuell ausdrücklich als **selbst berichtet** gekennzeichnet. Zukünftige Projektbeispiele können eigene Evidenz-IDs bekommen.

Sicherheitsgrenze: Elektrotechnisches Verständnis oder Erfahrung ist keine pauschale Berechtigung für jede zulassungs- oder sicherheitskritische Arbeit.

## 11. Leistungen als fähigkeitsbasiertes Matching

Der Hauptreiter heißt weiterhin **Leistungen**, beginnt aber nicht mit einer vollständigen Liste von Angeboten.

### Ablauf

1. Ein Mensch beschreibt Wunsch, Problem oder Idee.
2. Blob erkennt eine bekannte Situation oder erklärt die Unsicherheit.
3. Notwendige und hilfreiche Fähigkeiten werden getrennt.
4. Ort, Zeit, Sicherheit, Daten, Qualifikation und Grenzen werden geprüft.
5. Öffentliche Profile, Projekte, Produkte oder Lernwege können passen.
6. Jede Empfehlung nennt ihre Gründe.
7. Der Mensch wählt; das angefragte Mitglied darf annehmen oder ablehnen.
8. Nach Abschluss kann auf Wunsch Evidenz ergänzt werden.

### Beispiele

„Coole Lichterkette“ kann benötigen:

- elektrische Zusammenhänge verstehen
- tüfteln und Prototypen bauen
- optional Smart Home
- optional Fehler systematisch finden
- optional Technik verständlich erklären

„Putzen und Ordnung schaffen“ kann benötigen:

- Räume sorgfältig reinigen
- Ordnung schaffen und erhalten
- konzentriert arbeiten
- organisieren und priorisieren

„Belege sortieren“ kann benötigen:

- sorgfältig mit Zahlen und Belegen umgehen
- Ordnung schaffen
- konzentriert arbeiten
- organisieren

Die Übertragbarkeit allgemeiner Fähigkeiten darf notwendige Fachqualifikation nicht ersetzen.

### Harte Produktregeln

- keine globale Bestenliste
- kein geheimer Menschen-Score
- ein Profil wird nur als vollständige Passung gezeigt, wenn es alle als notwendig markierten Fähigkeiten abdeckt; Teiltreffer werden nicht als fertige Empfehlung ausgegeben
- Profilreihenfolgen sind keine Rangfolge und erhalten keine versteckte Gewichtung
- profilbezogene Selbstauskünfte werden nicht als fähigkeitsspezifischer Qualifikations- oder Sicherheitsnachweis ausgegeben
- kein automatisches Zuteilen von Arbeit
- kein erfundener Match bei leerem Bestand
- Geld, Mojo, Rubine, Titel und Beliebtheit kaufen keine Grundrechte oder politische Stimme
- Mitgliedschaft und konkretes Arbeitsverhältnis bleiben getrennt

## 12. Blob

Blob ist Figur, Navigation, Tutorial, Kommentator und später KI-Schnittstelle.

### Heute

- globales gemeinsames JavaScript/CSS-Modul
- spielerisch ziehbar
- kontextbezogene Texte
- zentrale Navigation
- geführte Sprünge zu Formularen
- regelbasierte Fähigkeitszerlegung
- lokale Namensspeicherung auf dem Gerät

### Später

- natürliche Sprache
- datensparsame Rückfragen
- Suche in Fähigkeiten, Projekten, Produkten und Wissen
- persönliche Assistenz nur mit Zustimmung
- Vorschau von Änderungen vor Bestätigung

### Grenzen aus `K10`, `F04`, `T05`, `T06`, `T10`

- Blob ist Navigator, nicht Regierung.
- Blob erfindet keine Regeln, kulturellen Namen oder politischen Entscheidungen.
- Blob zeigt bekannte Fakten, offene Punkte, Alternativen und legitime Entscheider.
- sensible oder rechtlich relevante Fälle werden eskaliert.
- persönliche und gemeinschaftliche Assistenz bleiben unterscheidbar.
- wichtige Funktionen haben einen manuellen Rückfallweg.
- KI-Zugriff ist eine begrenzte technische Aufgabe, keine Krone.

## 13. FFE-Systembereich

Der Bereich `/system/` liest `assets/data/ffe-systemindex-v0.6.json` direkt und stellt dar:

- 69 Kerninstitutionen
- 69 operative Profile
- 22 D02-Entscheidungsmethoden
- neun Entwicklungszweige
- fünf Verantwortungsringe
- 69 Entwicklungsknoten
- Quelle, Version, Profilabdeckung und Normpriorität

Die unveränderte JSON-Quelle bleibt direkt verlinkt. Die Hauptnavigation ist bereits im HTML vorhanden, und der Systembereich nennt ohne JavaScript den direkten Quellenweg. Damit hängt der manuelle Rückfallweg nicht von Blob oder dynamischer Navigation ab.

Der Situationswegweiser verwendet technische `SIT-ROUTE-*`-IDs. Er verlinkt auf aktuelle Kerninstitutionen und Profile; er erzeugt keine neue FFE-Regel.

Jeder Entwicklungsknoten zeigt seinen `evidence_status` und sein Gate direkt auf der Karte. Entwürfe werden visuell und durch Filter von Buchbasis, Forschung und externen Rechts- oder Qualifikations-Gates getrennt. Damit sehen die 63 Entwurfs-Knoten nicht wie beschlossene Qualifikationsstufen aus.

Das Entwicklungsnetz folgt:

> Ich → Projekt → Menschen → Institution → Netzwerk

Ein höherer Ring bedeutet mehr Verantwortung im Kontext, nicht höheren Menschenwert.

## 14. Konten, Rechte und Lenis Oberfläche

### Öffentlicher Zugang

Menschen ohne Konto dürfen bewusst öffentliche Inhalte lesen, zum Beispiel veröffentlichte Termine, Kiezvorstellungen, Dynastien, Profile, Fähigkeiten, Projekte und Angebote.

### Mitglieder

Mitglieder erhalten ein Konto und bearbeiten das eigene Profil sowie ausdrücklich freigegebene Inhalte.

### Bereichsrechte

Rechte werden für konkrete Bereiche vergeben, zum Beispiel:

- `edit_profile:self`
- `manage_kiez:KIEZ-P-HAIN`
- `moderate_posts:KIEZ-P-HAIN`
- `manage_dynasty:DYN-RUBYBUBYS`
- `platform_operator:GemDen`

### Leni

Geplanter erster Bereich:

- Konto auf gemden.red
- Recht `manage_kiez:KIEZ-P-HAIN`
- Termine, Texte, Wissen, Beiträge und Reparaturstatus verwalten
- Sichtbarkeit innerhalb erlaubter Optionen setzen
- Änderungswünsche an stabile Seitenbauteile senden

Sie soll dafür keinen GitHub-Zugang oder Programmcode benötigen.

Der Dashboard-Zugang ist noch nicht gebaut. Die öffentliche P-Hain-Seite täuscht deshalb keine Speicherung vor.

## 15. Zwei Datenschichten

### Versionierte Systemdaten

- Buch/Systemindex
- aktuelle Institutionen und Profile
- Methoden und Entwicklungsnetz
- über Git und legitimierte Quelländerungen versioniert
- für gewöhnliche Dashboards nur lesbar

### Operative Live-Daten

- Konten
- Profile
- Zugehörigkeiten
- Kiezinhalte
- Fähigkeiten und Evidenz
- Termine, Anfragen und Matches
- Berechtigungen
- Änderungsverlauf

Diese Daten sollen über Supabase gespeichert und durch RLS geschützt werden.

Die Trennung verhindert, dass eine Terminbearbeitung versehentlich zur Verfassungsänderung wird.

## 16. Technischer Zielaufbau

### Heute

- GitHub `main`: Quelle des veröffentlichten Codes
- GitHub Pages: statisches Hosting
- `gemden.red`: öffentliche Domain
- HTML, CSS und JavaScript
- statischer FFE-Systemindex v0.6
- statische öffentliche Community-Testdaten v0.1
- keine echte Anmeldung oder Speicherung

### Nächster Aufbau

- GitHub Pages: öffentliche und eingeloggte Browseroberfläche
- Supabase Auth: Konten
- Supabase PostgreSQL: operative Daten
- Supabase Storage: Profilbilder und kontrollierte Anhänge
- Row Level Security: Zugriff pro Zeile und Bereich
- Edge Functions: nur für geheime oder serverseitige Abläufe

Der öffentliche Supabase-Schlüssel darf technisch im Browser stehen. `service_role`, Modellschlüssel und andere Geheimnisse dürfen niemals in GitHub oder Browsercode gespeichert werden.

Details stehen in `BACKEND-PLAN.md`.

## 17. Aktueller Umsetzungsstand

| Bereich | Stand | Nächster Schritt |
|---|---|---|
| Startseite | an v2.30 angepasst | Texte und visuelle Welt gemeinsam weiterentwickeln |
| Community-Hub | umgesetzt | dynamisch aus Backend laden |
| P-Hain | öffentlicher statischer Pilot; stabile Bauteil-IDs und übertragungssichere Vorschau | Konten, Daten und Dashboard |
| Rubybubys | Grundseite umgesetzt | kulturelle Inhalte nur nach echter Entscheidung |
| Julius | unter Mitglieder verschoben | Projekte/Evidenz ergänzen |
| Leistungen | regelbasiertes Matching; alle Pflichtfähigkeiten nötig; Evidenzgrenze sichtbar | Fähigkeitenbestand und echte Anfragen |
| Blob | Navigation und Kontextaktionen; lokaler Speicher fällt sicher aus | geführte Dialogzustände, später geschützte KI |
| FFE-System | Indexbrowser mit sichtbaren Quellenstatus/Gates und Statusfilter | UX testen, spätere Quellupdates automatisieren |
| Smart-Home-Erlebnis | Gardinenprototyp erhalten | echtes Gemälde und Interaktionen |
| Supabase | Fundament produktiv angewendet; 4 RLS-Tabellen, 4 private Funktionen, 6 Trigger, 8 Policies, P-Hain-Audit und 37/37 zurückgerollte Gegenproben verifiziert; erstes Pilotkonto eingeladen; Kontoseite angebunden | Version `20260919000100` in der Remote-Historie markieren, Einladung annehmen und echte Sitzung prüfen |
| Konto | Anmeldung nur für eingeladene Adressen; eigenes Profil und eigene Rechte RLS-geschützt lesbar; freigegebene eigene Profilfelder bearbeitbar | Einladungslink und Rücksprung auf `gemden.red/konto/` produktiv prüfen |
| Lenis Dashboard | beschrieben, nicht gebaut | nach produktiv geprüftem Backend-Fundament und realer Rechtevergabe |

## 18. Bauabschnitte

### Phase A – Architektur-Freeze für den Pilot

- aktuelle Website gemeinsam testen
- Begriffe und sichtbare Status prüfen
- nächsten Systemindex technisch bereinigen: veraltete Übergangsmetadaten wie `active-v0.5` und `core-page-awaiting-dedicated-profile` mit der tatsächlichen `69/69`-Profilabdeckung abgleichen, ohne politische Inhalte umzudeuten
- keine offenen Kulturentscheidungen schließen
- P-Hain-Module für Version 1 auswählen

### Phase B – Supabase-Fundament

- Schema und erste Migration: **produktiv angewendet; offizieller Historienabgleich der Version noch offen**
- Auth-Trigger für minimale private Profilentwürfe: **produktiv vorhanden; erstes Pilotkonto eingeladen, Annahme offen**
- Profile: **produktives Fundament vorhanden**
- Kieze und `KIEZ-P-HAIN`: **produktiv vorhanden und geprüft**
- bereichsbezogene, ablauf- und widerrufbare Rechte: **produktiv vorhanden; legitime Erstvergabe offen**
- RLS-Tests für erlaubte und verbotene Wege: **37/37 im produktiven Schema bestanden; Testdaten vollständig zurückgerollt**
- durch Browser nicht veränderbarer Änderungsverlauf: **produktiv vorhanden; P-Hain-Anlage protokolliert**

Das Repository enthält weder `service_role` noch echte Konto-UUIDs. Das Bootstrap-Beispiel bricht absichtlich ab, solange Platzhalter oder die legitim vergebende Stelle nicht ersetzt wurden. Vor dem nächsten `db push` wird die bereits angewendete Version `20260919000100` mit der offiziellen Supabase CLI als angewendet in der Remote-Historie markiert.

### Phase C – P-Hain und Lenis Dashboard

- Texte und Termine verwalten
- Sichtbarkeit
- Reparaturanfragen geschützt verwalten
- Kiezbrett/Wissen
- Änderungswünsche mit Bauteil-ID

### Phase D – Mitglieder, Dynastien und Fähigkeiten

- eigene Profilbearbeitung
- viele-zu-viele-Zugehörigkeit
- Rubybubys
- Skills und Evidenz
- Portfolio-Projekte

### Phase E – Erklärbares Matching

- größerer Fähigkeiten-Graph
- Wünsche und Chancen
- Zeit, Ort, Sicherheit und Berechtigungen
- freiwillige Anfrage, Annahme oder Ablehnung
- keine globale Menschenwertung

### Phase F – Blob und sichere KI

- natürlicher Dialog
- datensparsame Toolaufrufe
- menschliche Eskalation
- Preview und Bestätigung
- manueller Fallback

### Phase G – Produkte und wirtschaftliche Abläufe

- GemDen-Produkte
- Community-Projekte und kombinierte Angebote
- Bezahlung, Haftung, Steuern und Beiträge erst nach gesonderter rechtlicher und politischer Klärung

## 19. Offene Entscheidungen

Diese Punkte werden nicht durch Website-Code entschieden:

- genaue öffentliche und geschützte Sichtbarkeit in P-Hain
- Registrierungs- und Einladungsweg
- legitime Vergabe erweiterter Rechte und Mitgliedschaften
- Moderations-, Beschwerde- und Konfliktwege
- Aufbewahrungs-, Export- und Löschfristen
- erste gemeinsame Liste von Skills und Evidenzstufen
- kulturelle Sprache von Rängen und Meisterschaft
- Geschichte und Rituale der Rubybubys
- rechtliche Form von GemDen und FFE
- wirtschaftliche Beziehungen zwischen GemDen, FFE, Mitgliedern und Kundschaft
- Einsatz, Anbieter und Kosten einer späteren KI
- Chats und geschützte Kommunikation
- genaue Produktstruktur
- Ausgestaltung der Föderation „Die Illuminati“ über den im Buch gesetzten Namen hinaus

## 20. Arbeitsweise

- Vor Änderungen wird der aktuelle GitHub-Stand gelesen.
- GitHub ist die Quelle für den veröffentlichten Code.
- Nur betroffene Dateien werden geändert; keine alten Komplettpakete als unbemerkte Grundlage.
- Größere Architekturentscheidungen werden vor Umsetzung hier dokumentiert.
- Stabile IDs werden nicht beiläufig umbenannt.
- Experimente tragen einen Status und einen Rückweg.
- Formulare zeigen ehrlich, ob sie wirklich speichern.
- Buch/Systemindex werden nicht automatisch durch Website-Daten überschrieben.
- Neue politische oder kulturelle Fragen werden als offen markiert und an legitime Menschen/Verfahren zurückgegeben.
- Teil IV bleibt Archiv.
- Nach größeren Architekturänderungen wird das Holocron sinnvoll gebündelt aktualisiert, nicht nach jeder Kleinigkeit.

## 21. Kurzer Prüfkompass für neue Funktionen

Vor einer neuen Funktion fragen:

1. Welche Institution und welche Situation gehören dazu?
2. Welches operative Profil gilt?
3. Welche Normebene hat die Aussage?
4. Wer ist betroffen und wer entscheidet legitim?
5. Welche Daten sind wirklich nötig?
6. Welche harten Grenzen und Eskalationen gelten?
7. Welches Werkzeug passt?
8. Was ist das sichtbare Ergebnis oder die Evidenz?
9. Wie kann man widersprechen, korrigieren, exportieren oder zurückbauen?
10. Funktioniert ein wichtiger Teil auch ohne Blob oder KI?

Wenn diese Fragen nicht beantwortbar sind, bleibt die Funktion ein gekennzeichneter Entwurf oder wird noch nicht gebaut.
