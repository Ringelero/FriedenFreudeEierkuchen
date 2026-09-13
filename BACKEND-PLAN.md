# Backend-Plan für Gemden

Dieser Plan beschreibt, wie aus der statischen Website später eine echte gemeinschaftliche Plattform wird.

## Jetzt: statische Startphase

GitHub Pages bleibt zunächst die Website.

- Inhalte liegen in den HTML-, CSS- und JavaScript-Dateien.
- Leni kann den Richard-Sorge-Kiez direkt weiterentwickeln.
- Termine und Texte werden manuell gepflegt.
- Formulare sind zunächst nur vorbereitet und speichern noch nichts dauerhaft.

## Später: erste echte Daten

Als nächster technischer Schritt brauchen wir einen Dienst mit:

- Benutzerkonten
- Anmeldung und Abmeldung
- Datenbank
- Formularspeicherung
- Rollen und Berechtigungen
- optionalen E-Mail- oder Push-Benachrichtigungen

Die Website bleibt dabei die sichtbare Oberfläche. Das Backend speichert die Daten und entscheidet, wer sie sehen oder verändern darf.

## Geplante Kontotypen

- Bewohner: Termine ansehen, Interesse bekunden, Hilfe anbieten, Meldungen erstellen
- Kiez-Redaktion: Termine, Hauswissen und Kiezbrett pflegen
- Hausverwaltung: Reparaturmeldungen bearbeiten und Status ändern
- Gemden-Admin: technische und gemeinschaftliche Gesamtverwaltung

## Erste Datenmodelle

### profiles

- id
- display_name
- email
- avatar
- kiez
- created_at

### events

- id
- title
- description
- start_time
- location
- created_by
- created_at

### event_interests

- event_id
- profile_id
- status

### repair_reports

- id
- description
- location
- urgency
- status
- created_by
- created_at
- resolved_at

### knowledge_entries

- id
- title
- text
- category
- updated_by
- updated_at

### help_posts

- id
- title
- text
- kind
- created_by
- expires_at

## Account-Idee

Für Bewohner sollte der Einstieg möglichst leicht sein:

1. QR-Code scannen.
2. Kiez ansehen, ohne Konto.
3. Für „Ich komme mit“, Meldungen oder Beiträge freiwillig anmelden.
4. Möglichst Anmeldung per E-Mail-Link oder Passkey statt kompliziertem Passwort.

Öffentliche Informationen bleiben ohne Anmeldung sichtbar. Persönliche Beteiligung braucht ein Konto.

## Technische Grundentscheidung

Die Website ist derzeit eine statische GitHub-Pages-Seite. Für Accounts und gespeicherte Daten brauchen wir später einen kleinen Backend-Dienst, zum Beispiel eine verwaltete Datenbank mit Authentifizierung und API.

Die Entscheidung für den konkreten Anbieter treffen wir erst, wenn klar ist:

- wie viele Bewohner teilnehmen,
- ob Daten nur im Richard-Sorge-Kiez oder in mehreren Kiezen genutzt werden,
- ob Leni selbst Daten verwalten möchte,
- ob Nachrichten und Benachrichtigungen nötig sind,
- welche personenbezogenen Daten wir überhaupt speichern wollen.

## Entwicklungsreihenfolge

1. Statische Kiez-Seite ausprobieren.
2. Feststellen, welche Funktionen Bewohner wirklich nutzen.
3. Konto-Anmeldung ergänzen.
4. Reparaturmeldungen dauerhaft speichern.
5. Termine und „Wer geht mit?“ dynamisch machen.
6. Hilfe & Teilen und Kiezbrett ergänzen.
7. Rollen, Moderation und Benachrichtigungen ausbauen.
8. Später weitere Kieze unter Gemden ergänzen.
