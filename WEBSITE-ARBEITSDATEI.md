# GemDen / FriedenFreudeEierkuchen – Website-Arbeitsdatei

Stand: 15. September 2026

Diese Datei ist die gemeinsame Planungsgrundlage für die Website. Sie beschreibt Entscheidungen, offene Fragen, Datenmodell und Bauabschnitte. Sie ist weder Satzung noch Ersatz für „Das Buch“.

## Statussprache

- **Beschlossen:** gilt für die weitere Planung.
- **Vorschlag:** soll gemeinsam geprüft werden.
- **Offen:** wurde noch nicht entschieden.
- **Später:** sinnvoll, aber nicht Teil des nächsten Bauabschnitts.

## 1. Leitbild

gemden.red soll keine Website sein, die man nur liest. Sie wird eine von Kunst, Technik, Figuren, Community und später KI bewohnte Welt, die Menschen entdecken und mitgestalten.

Gleichzeitig soll daraus ein praktisches Werkzeug entstehen:

- Menschen beschreiben Bedürfnisse, Ideen und Fähigkeiten in natürlicher Sprache.
- Blob hilft beim Verstehen und Strukturieren.
- Das System findet passende Fähigkeiten, Menschen, Projekte und Hilfsmittel.
- Die Betroffenen entscheiden selbst, was sie tun möchten.
- Entscheidungen, Zuständigkeiten und Gründe bleiben nachvollziehbar.

## 2. Wer ist wer?

### GemDen

**Beschlossen:** GemDen ist Julius’ private Firma beziehungsweise die technische und kreative Betreiberin der Plattform. GemDen entwickelt die Website, digitale Werkzeuge, Produkte und Leistungen.

Die technische Betreiberrolle darf nicht automatisch politische Macht innerhalb von FriedenFreudeEierkuchen erzeugen.

### FriedenFreudeEierkuchen (FFE)

**Beschlossen:** FFE ist die Dach-Community und die mögliche zukünftige Genossenschaft. Sie verbindet Communitys, Kieze, Dynastien, Mitglieder, Projekte, Wissen und gemeinsame Verfahren.

### Communitys

**Beschlossen:** Unter Community werden zunächst drei unterschiedliche Arten von Räumen sichtbar:

1. **Kieze** – ortsbezogene Gemeinschaften, Termine, Nachbarschaft und gemeinsames Handeln.
2. **Dynastien** – kulturelle und soziale Gemeinschaften mit Geschichte, Rollen, Ritualen, Lernwegen und Projekten.
3. **Mitglieder** – Menschen mit einem eigenen Profil und Portfolio.

Ein Mitglied kann gleichzeitig mehreren Kiezen und mehreren Dynastien angehören.

### P-Hain

**Beschlossen:** Der bisherige „Richard-Sorge-Kiez“ wird vollständig entfernt. Der neue Kiez heißt **P-Hain** und beschreibt die Mischung aus Prenzlauer Berg und Friedrichshain rund um Straßmannstraße und Richard-Sorge-Straße.

P-Hain wird später neu auf dem gemeinsamen Datenmodell aufgebaut. Es ist kein separates „Hausportal“, sondern ein Kiez mit öffentlichen und geschützten Bereichen.

### Rubybubys

**Beschlossen:** Die Rubybubys sind die erste Dynastie innerhalb von FFE.

### Julius

**Beschlossen:** Julius ist ein Mitglied und gehört zu den Rubybubys. Sein Portfolio wird daher nicht dauerhaft als unabhängiger Hauptbereich behandelt, sondern unter Community → Mitglieder → Julius eingeordnet. Mitgliedschaft, Fähigkeiten, Projekte und Portfolio bleiben voneinander unterscheidbare Daten.

## 3. Vorgeschlagene Informationsarchitektur

Die Navigation muss erweiterbar sein. Neue Bereiche werden als Datensätze oder Module ergänzt und nicht überall von Hand in jede HTML-Datei kopiert.

### Hauptbereiche

- **Start** – Einstieg in die Welt und aktuelle Schwerpunkte.
- **Community**
  - Kieze
    - P-Hain
  - Dynastien
    - Rubybubys
  - Mitglieder
    - Julius
    - Leni und weitere Mitglieder später
- **Leistungen** – Einstieg über einen Wunsch oder Auftrag; keine endlose Angebotsliste.
- **Produkte** – spätere Produkte von GemDen und beteiligten Projekten.
- **Wissen / System** – **Vorschlag, später:** Methoden, Verfahren, Entscheidungen und Lernmaterial von FFE.

Der Blob kann diese Struktur spielerisch erklären und als Navigation zugänglich machen. Eine verständliche normale Navigation bleibt als barrierearme Rückfallebene sinnvoll.

## 4. Leistungen werden zu fähigkeitsbasiertem Matching

### Grundentscheidung

**Beschlossen:** Leistungen werden nicht primär als festgeschriebene Liste von Berufen oder Angeboten modelliert. Menschen beschreiben allgemeine und konkrete Fähigkeiten. Blob zerlegt einen Wunsch oder Auftrag in Anforderungen und sucht passende Profile.

Beispiel:

> „Ich wünsche mir eine coole Lichterkette.“

Blob könnte darin unter anderem erkennen:

- elektrische Zusammenhänge verstehen
- sicher mit Kleinspannung arbeiten
- löten oder elektronische Bauteile verbinden
- tüfteln und Fehler finden
- gestalten und bauen
- Smart-Home-Komponenten integrieren

Julius’ Profil könnte dafür Fähigkeiten wie **Smart Home**, **Elektrotechnik**, **Elektronik**, **Tüfteln**, **Fehlersuche** und **Bauen** enthalten. Das System erklärt, welche Fähigkeiten zum Wunsch passen, und empfiehlt anschließend mögliche Personen. Die betroffene Person entscheidet, ob sie den Auftrag annehmen möchte.

### Übertragbare Fähigkeiten

Fähigkeiten sollen nicht nur an Berufsbezeichnungen hängen. Beispielsweise können diese Fähigkeiten in sehr verschiedenen Tätigkeiten helfen:

- konzentriert arbeiten
- Ordnung schaffen und erhalten
- organisieren und priorisieren
- zuverlässig dokumentieren
- freundlich kommunizieren
- sorgfältig mit Zahlen oder Gegenständen umgehen

Damit könnten je nach zusätzlichem Fachwissen Aufgaben bei der Post, in der Buchhaltung, in der Hausorganisation oder in einem Projekt passen. Fachliche, gesetzliche oder sicherheitsrelevante Voraussetzungen müssen trotzdem ausdrücklich erfasst werden; allgemeines Organisationstalent ersetzt keine notwendige Qualifikation.

### Aufbau einer Fähigkeit

**Vorschlag:** Eine Fähigkeit besteht nicht nur aus einem Schlagwort, sondern kann enthalten:

- verständlicher Name und Beschreibung
- Ober- und Unterfähigkeiten
- verwandte Fähigkeiten
- Erfahrungsstand ohne globale Rangliste
- Nachweise, Beispiele und abgeschlossene Projekte
- Werkzeuge, Zertifikate oder Voraussetzungen
- gewünschte Einsatzbereiche
- Grenzen und Dinge, die die Person nicht tun möchte
- Verfügbarkeit und räumlicher Bezug

### Ablauf des Matchings

1. Ein Mensch beschreibt einen Wunsch, ein Problem oder eine Idee.
2. Blob fragt nur notwendige Details nach.
3. Der Auftrag wird in **notwendige** und **hilfreiche** Fähigkeiten zerlegt.
4. Sicherheits-, Orts-, Zeit- und Berechtigungsanforderungen werden geprüft.
5. Das System findet mögliche Mitglieder, Teams, Projekte oder Produkte.
6. Blob erklärt jedes Ergebnis: „Diese Person passt, weil …“
7. Der Mensch wählt selbst; angefragte Mitglieder dürfen annehmen oder ablehnen.
8. Nach Abschluss können Erfahrung und ein Nachweis ergänzt werden.

**Beschlossen:** Es gibt keine globale Bestenliste und keine versteckte soziale Rangordnung. Ein Match ist auf eine konkrete Aufgabe bezogen. Geld, Rubine, Mojo, Titel oder Beliebtheit kaufen keine Grundrechte und keine politische Stimme.

## 5. Profile, Dynastien und Rollen

### Mitgliedsprofil

Jedes Mitglied kann eine eigene öffentliche Seite besitzen mit:

- Name und selbst gewählter Beschreibung
- Bild oder Figur
- Fähigkeiten und Interessen
- Portfolio und Projekte
- Dynastien und Kieze, die öffentlich gezeigt werden dürfen
- Kontakt- oder Anfrageweg
- Sichtbarkeitseinstellungen

Mitglieder bearbeiten ihr eigenes Profil über die Website, nicht über GitHub.

### Dynastie

**Vorschlag aus der bisherigen FFE-Planung:** Eine Dynastie kann diese Ebenen besitzen:

> Name → Geschichte → Rituale → Ränge → Fähigkeiten → Meisterschaft → Projekte → Portfolio

Kulturelle Ränge und Titel müssen technisch von Berechtigungen getrennt bleiben. Ein schöner Titel ist keine Administratorrolle und keine zusätzliche politische Stimme.

### Rollen und Mandate

Rollen beschreiben zeitlich und sachlich begrenzte Verantwortung. Jede Rolle sollte möglichst enthalten:

- Zweck und Aufgaben
- Geltungsbereich
- Beginn und Ende
- erlaubte Aktionen
- Rechenschaft und Überprüfung
- Übergabe- oder Widerrufsverfahren

## 6. Konten und Berechtigungen

### Öffentlicher Zugang

**Beschlossen:** Menschen ohne Konto dürfen öffentliche Inhalte lesen, zum Beispiel öffentliche Termine, Kiezvorstellungen, Dynastien, Profile, Fähigkeiten, Projekte und Angebote.

Private Daten wie konkrete Wohnungsangaben, interne Reparaturdetails, E-Mail-Adressen, Verwaltungsnotizen und geschützte Gespräche sind nicht öffentlich.

### Mitglieder

**Beschlossen:** Mitglieder erhalten ein Konto und dürfen ihr eigenes Profil und freigegebene eigene Inhalte bearbeiten.

### Bereichsbezogene Rechte

**Beschlossen:** Erweiterte Rechte werden nicht als eine einzige globale Rangstufe vergeben, sondern für einen konkreten Bereich. Beispiel:

- Leni: `manage_kiez:P-Hain`
- Mitglied: `edit_profile:self`
- Moderatorin: `moderate_posts:P-Hain`
- GemDen: technische Plattformverwaltung

Die politische Ordnung von FFE und die technische Administration von GemDen bleiben getrennt.

### Lenis Oberfläche

Leni soll sich auf gemden.red anmelden und P-Hain intuitiv verwalten können. Ohne Code kann sie voraussichtlich:

- Termine erstellen, ändern und absagen
- öffentliche Kieztexte und Hinweise bearbeiten
- Beiträge, Hilfen und Wissenseinträge verwalten
- Reparaturanfragen sichten und ihren Status ändern
- die Sichtbarkeit von Inhalten wählen
- Module und Reiter in einer vorgegebenen Struktur sortieren, sofern freigegeben

Für strukturelle oder gestalterische Wünsche gibt es direkt am betroffenen Seitenteil eine Schaltfläche wie „Änderungswunsch“. Der Wunsch speichert eine stabile Bauteil-Bezeichnung, die Seite, Lenis Text und optional einen Screenshot. Julius und Codex können ihn anschließend gezielt umsetzen.

`README-LENI.md` mit GitHub-Anweisungen ist damit fachlich überholt und soll später durch eine kurze Bedienhilfe für das Dashboard ersetzt werden.

## 7. P-Hain als modularer Kiez

**Vorschlag:** P-Hain startet klein und kann Module später ein- oder ausschalten:

- Übersicht und wichtige Hinweise
- Termine und Teilnahmeinteresse
- Reparaturen und Hausaufgaben
- Nachbarschaftshilfe
- Wissen, Tipps und regelmäßige Wartung
- Teilen, Leihen und Verschenken
- Schwarzes Brett für lose öffentliche Beiträge
- Ideenbox
- geschützte Gespräche oder Chat **später**

Ein **Schwarzes Brett** ist ein allgemeiner Strom kurzer Beiträge, die nicht sauber in Termine, Reparaturen oder Hilfen passen, etwa „Paket angenommen“, „Pflanze abzugeben“ oder „Wer hat meine Schlüssel gefunden?“. Es ist optional und darf entfallen, wenn die anderen Module genügen.

**Aus der bisherigen FFE-Planung übernommen:** Eine Ideenbox ist früh sinnvoll; ein eigener Sorgen- oder Konfliktkanal wird erst gebaut, wenn Zuständigkeiten, Schutz und Moderation dafür geklärt sind.

## 8. Blob

Blob ist gleichzeitig Figur, Guide, Navigation, Tutorial und später KI-Schnittstelle. Er soll die Website leichter verständlich machen, ohne die Entscheidung des Menschen zu übernehmen.

### Erste umsetzbare Stufe

- animierter, regelbasierter Assistent
- geführte Fragen statt freier KI
- Suche über Fähigkeiten und Filter
- nachvollziehbare Empfehlungen
- Übergabe an Formulare und echte Menschen

### Spätere Stufe

- natürliche Sprache
- Verständnis freier Wünsche
- Vorschläge für Auftragszerlegung
- Suche in Fähigkeiten, Projekten, Produkten und Wissen
- personalisierte Hilfen mit Zustimmung
- Vorschau von Website-Änderungen vor Bestätigung

### Grenzen

- Blob erfindet keine FFE-Namen, Regeln oder politischen Entscheidungen.
- Blob erklärt Unsicherheit und zeigt Gründe.
- Sensible Entscheidungen brauchen Menschen und nachvollziehbare Verfahren.
- Jede besondere kulturelle Bezeichnung erhält zusätzlich eine verständliche Funktionsbeschreibung.

## 9. Was aus der Genossenschaftsidee zusätzlich in die Website gehört

Diese Punkte ergeben sich aus den verfügbaren Auszügen von `FFE_Hinweise_und_Einigungen_zum_Buch_v1.1.md` und `FFE_Entwicklungsnetz_v0.2.md`. Der vollständige Abgleich mit „Das Buch v2.24“ ist noch offen.

### Warum-Ebene

Regeln, Empfehlungen, Rollen und wichtige Funktionen erhalten eine kurze Erklärung: Warum gibt es das? Welches Problem soll es lösen? Wer ist betroffen?

### Sichtbarer Entscheidungsstatus

Inhalte können als **beschlossen**, **Vorschlag**, **Experiment**, **in Diskussion**, **pausiert** oder **beendet** markiert werden. So wirkt ein Entwurf nicht versehentlich wie eine feste Regel.

### Entwicklung als Netz statt als starre Leiter

Menschen entwickeln sich nicht nur nach oben. Fähigkeiten, Projekte und Verantwortung bilden einen Graphen mit mehreren Wegen. Als Orientierung können Verantwortungsringe dienen:

> Ich → Projekt → Menschen → Institution → Netzwerk

### Nachvollziehbare Bausteine

Für wichtige Verfahren und Wissensknoten soll das spätere System möglichst erfassen:

- Voraussetzungen
- Auslöser
- Vorgehen oder Playbook
- beteiligte Rollen und Ämter
- Methoden und Rituale
- Belege und Erfahrungen
- Querverweise
- typische Fehlentwicklungen
- Überprüfung und Rücknahme

Das folgt dem Grundmuster:

> Institution → Verfahren → Werkzeug → Evidenz

### Entscheidungskompass

**Später:** Ein interaktiver Helfer kann Communitys nicht nur eine Methode nennen, sondern anhand ihrer Situation mehrere passende Verfahren vergleichen. Er entscheidet nicht für sie.

### Geschichte, Prüfung und Rücknahme

Wichtige Änderungen sollen einen Verlauf besitzen: Wer hat was geändert, warum, wann wird es geprüft und wie kann eine frühere Version wiederhergestellt werden? Das gilt für Inhalte technisch; für politische Entscheidungen braucht es zusätzlich das jeweilige FFE-Verfahren.

### Lokale Selbstständigkeit

Kieze und Dynastien können unterschiedliche Module, Rituale und Arbeitsweisen verwenden, solange gemeinsame Rechte, Datenschutz und grundlegende Schnittstellen eingehalten werden.

### Gemeinsame Wissensquelle

**Später:** Buch, Website und Blob sollen nicht drei widersprüchliche Wahrheiten pflegen. Wiederverwendbare, maschinenlesbare Wissensknoten können aus einer gemeinsamen Quelle in verschiedene Darstellungen übersetzt werden. Das Buch bleibt dabei ein bewusst redigiertes Werk und wird nicht automatisch von der Website überschrieben.

## 10. Technischer Zielaufbau

### Heute

- GitHub ist die Quelle für den aktuellen Website-Code.
- GitHub Pages liefert HTML, CSS und JavaScript aus.
- gemden.red ist die öffentliche Domain.
- Supabase ist angelegt, aber das gemeinsame Datenmodell und die Anmeldung sind noch nicht fertig eingerichtet.

### Ziel

- GitHub Pages: öffentliche Oberfläche und Animationen
- Supabase Auth: Konten und Anmeldung
- Supabase Database: Profile, Kieze, Dynastien, Fähigkeiten, Termine, Aufträge und Rechte
- Supabase Storage: Profilbilder und später Anhänge
- Row Level Security: Regeln, wer welche Zeile lesen oder ändern darf
- Blob: zuerst regelbasiert, später optional mit sicher angebundener KI über eine Serverfunktion

Der öffentliche Supabase-Schlüssel darf im Browser stehen. Ein Service-Role-Schlüssel oder andere geheime Schlüssel dürfen niemals in GitHub, HTML oder Browser-JavaScript gespeichert werden.

### Vorgeschlagene Kerntabellen

| Tabelle | Zweck |
|---|---|
| `profiles` | öffentliches und internes Mitgliedsprofil |
| `skills` | allgemeine und konkrete Fähigkeiten |
| `profile_skills` | Fähigkeiten eines Mitglieds mit Erfahrung, Wunsch und Sichtbarkeit |
| `skill_relations` | Ober-, Unter- und verwandte Fähigkeiten |
| `skill_evidence` | Projekte, Nachweise und bestätigte Erfahrungen |
| `kieze` | Kiezräume wie P-Hain |
| `kiez_memberships` | viele-zu-viele-Zuordnung von Mitgliedern und Kiezen |
| `dynasties` | Dynastien wie Rubybubys |
| `dynasty_memberships` | viele-zu-viele-Zuordnung mit kultureller Rolle |
| `roles` | sachliche, zeitlich begrenzte Rollen |
| `permission_grants` | konkrete Rechte für ein Objekt oder einen Bereich |
| `content_blocks` | bearbeitbare Seitenabschnitte mit stabiler Bezeichnung |
| `change_requests` | Änderungswünsche an konkrete Seitenabschnitte |
| `events` | Termine |
| `event_responses` | Interesse oder Teilnahme |
| `requests` | Wünsche, Probleme und Aufträge |
| `request_requirements` | notwendige und hilfreiche Fähigkeiten eines Auftrags |
| `matches` | erklärbare Zuordnung von Auftrag und möglichen Helfenden |
| `posts` | Schwarzes Brett und Mitteilungen |
| `knowledge_entries` | Tipps, Wartung und gemeinsames Wissen |
| `products` | spätere Produkte und zugehörige Fähigkeiten |

Wichtig: Ein Profil erhält nicht einfach ein einzelnes Feld `kiez`. Mitgliedschaften sind viele-zu-viele-Beziehungen.

## 11. Bestehende Website: notwendige spätere Migration

Diese Änderungen sind beschlossen, aber werden erst nach gemeinsamer Freigabe als zusammenhängender Umbau umgesetzt:

- Ordner `community/richard-sorge-kiez/` vollständig entfernen.
- Alle Links und Blob-Ziele zum Richard-Sorge-Kiez entfernen.
- P-Hain neu im Datenmodell und unter Community → Kieze anlegen.
- Julius unter Community → Mitglieder → Julius verschieben.
- Rubybubys unter Community → Dynastien anlegen und Julius zuordnen.
- Statische Leistungs-Karten durch Blob-Einstieg und Fähigkeitssuche ersetzen.
- `README-LENI.md` durch Dashboard-Hilfe ersetzen.
- `BACKEND-PLAN.md` nach Freigabe an dieses übergreifende Modell anpassen oder archivieren.

**Offen:** Ob die alte Julius-Adresse vorübergehend weiterleitet oder sofort verschwindet. Der alte Richard-Sorge-Kiez soll nach der aktuellen Entscheidung nicht als eigener Inhalt bestehen bleiben.

## 12. Bauabschnitte

### Phase 0 – Architektur gemeinsam festlegen

- diese Arbeitsdatei besprechen
- vollständiges „Das Buch v2.24“ bereitstellen und abgleichen
- öffentliche und geschützte Inhalte festlegen
- Namen und erste Module von P-Hain festlegen
- Umfang des ersten Fähigkeitenmodells festlegen

### Phase 1 – Daten- und Kontogrundlage

- Supabase-Schema
- Anmeldung
- Profile
- viele-zu-viele-Mitgliedschaften
- bereichsbezogene Rechte und RLS-Regeln
- Änderungsverlauf

### Phase 2 – P-Hain und Lenis Dashboard

- neuer P-Hain
- Termine und Kiezinhalte
- Reparaturanfragen
- Lenis Verwaltung
- Änderungswünsche an Seitenteile
- öffentliche und geschützte Ansichten

### Phase 3 – Mitglieder und Dynastien

- Mitgliederübersicht
- Julius als Mitgliedsportfolio
- Rubybubys als Dynastie
- eigene Profilbearbeitung
- mehrere Mitgliedschaften pro Person

### Phase 4 – Fähigkeiten und Leistungen

- Fähigkeiten-Graph
- Erfahrungen und Nachweise
- Auftragseingabe
- regelbasiertes, erklärbares Matching
- Annahme oder Ablehnung durch Mitglieder

### Phase 5 – Blob-Erlebnis

- gemeinsame Blob-Komponente
- Navigation und geführte Dialoge
- physikalische Animationen
- Kontextwechsel zwischen Kiez, Mitgliedern und Leistungen
- spätere KI-Schnittstelle

### Phase 6 – FFE-Wissen und Entscheidungswerkzeuge

- strukturierte Wissensknoten
- Entscheidungskompass
- Entwicklungsnetz
- Verknüpfung mit redigierten Buchinhalten

### Phase 7 – Produkte und wirtschaftliche Abläufe

- Produkte
- Anfragen und Vereinbarungen
- Bezahlung und Abrechnung nur nach gesonderter rechtlicher und fachlicher Planung
- mögliche Beiträge an GemDen oder FFE erst nach transparenter gemeinsamer Entscheidung

## 13. Offene Entscheidungen

- Welche Teile von P-Hain sind exakt öffentlich, nur für Kiezmitglieder oder nur für Verwalterinnen sichtbar?
- Wer darf neue Mitglieder, Kieze und Dynastien anlegen oder bestätigen?
- Welche Seitenteile darf Leni direkt strukturell verändern, welche nur inhaltlich?
- Welche zehn bis zwanzig Fähigkeiten bilden den ersten sinnvollen Testbestand?
- Wie heißen Erfahrungs- und Nachweisstufen in der Sprache von FFE? Kulturelle Namen bestimmt Julius beziehungsweise die Community, nicht die KI.
- Braucht P-Hain in Version 1 bereits ein Schwarzes Brett, oder reichen Termine, Reparaturen, Hilfe und Wissen?
- Wann und mit welchem Schutzkonzept kommen Chats oder Konfliktkanäle?
- Welche rechtliche Form und Außendarstellung erhalten GemDen und FFE?
- Wie wird der besondere Status „Caesar“ sichtbar erklärt, ohne daraus Veto, zusätzliche Stimme oder Befehlsmacht zu machen?
- Was muss nach Sichtung des vollständigen Buchs ergänzt, geändert oder gestrichen werden?

## 14. Arbeitsweise

- Vor Codeänderungen wird der aktuelle GitHub-Stand gelesen.
- Es werden nur betroffene Dateien geändert.
- Größere Architekturentscheidungen werden vor der Umsetzung in dieser Datei festgehalten.
- Experimente sind willkommen, bekommen aber einen sichtbaren Status und einen Rückweg.
- Wichtige FFE-Inhalte folgen weiterhin: Hinweis → Diskussion → Einigung → Dokumentation → spätere Umsetzung.
- Änderungen an „Das Buch“ geschehen nicht automatisch aus dieser Website-Planung heraus.

