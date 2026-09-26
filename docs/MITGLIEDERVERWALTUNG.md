# GemDen-Mitgliederverwaltung

Stand: 26. September 2026

## Der empfohlene Weg über die Website

Die Verwaltungsseite liegt unter:

```text
https://gemden.red/verwaltung/mitglieder/
```

Sie öffnet die Mitgliederliste nur für ein angemeldetes Konto mit dem eng begrenzten Recht:

```text
permission_key = manage_members
scope_type     = platform
scope_id       = GemDen
```

Ohne dieses Recht werden weder Konten noch E-Mail-Adressen geladen. Der geheime Supabase-Schlüssel befindet sich ausschließlich in der serverseitigen Edge Function und nie im Browser.

### 1. Ein Mitglied einladen

1. Mit dem freigeschalteten Verwaltungskonto anmelden.
2. `Mitglieder verwalten` im persönlichen Konto öffnen.
3. Anzeigename und bestätigte E-Mail-Adresse eintragen.
4. `Einladung per E-Mail senden` wählen.

Beim Klick passiert sofort Folgendes:

- Supabase Auth legt ein eingeladenes Konto an.
- Der vorhandene Datenbank-Trigger legt ein privates Profil im Entwurfsstatus an.
- Supabase verschickt den einmaligen Einladungslink.
- Es wird noch keine `MEM-*`-ID und kein erweitertes Recht vergeben.

### 2. Die feste Mitglieds-ID vergeben

Das neue Konto erscheint in der Mitgliederliste mit `MEM-ID offen`.

1. Den automatisch vorgeschlagenen Wert prüfen, zum Beispiel `MEM-LENI`.
2. Bei Bedarf vor der ersten Vergabe korrigieren.
3. `MEM-ID dauerhaft festlegen` wählen und die Sicherheitsabfrage bestätigen.

Eine bestätigte ID kann absichtlich nicht mehr umbenannt werden. Sie verbindet später Profil, Portfolio, Möglichkeiten und persönliche Seite. Eine Korrektur wäre deshalb eine eigene Datenmigration und keine normale Verwaltungsaktion.

### 3. Die Einladung annehmen

Das eingeladene Mitglied:

1. öffnet den Link aus der Einladungs-E-Mail,
2. landet unter `https://gemden.red/konto/`,
3. setzt dort ein eigenes Passwort mit mindestens zwölf Zeichen,
4. pflegt anschließend Profil, Fähigkeiten, Nachweise, Projekte, Möglichkeiten und die persönliche Seite selbst.

Falls der Einladungslink abgelaufen ist, kann die Person auf der Kontoseite mit derselben E-Mail-Adresse einen neuen einmaligen Link anfordern. Die Kontoseite legt dabei kein zweites Konto an.

### 4. Optional ein Kiez-Recht vergeben

Mitgliedschaft und erweitertes Recht sind getrennt. Ein Recht wird nur nach einer eigenständigen Legitimation vergeben.

1. Beim Mitglied den Kiez auswählen.
2. Die Entscheidung mit mindestens zwölf Zeichen begründen.
3. `Kiez-Recht erteilen` wählen.

Die Oberfläche kann ausschließlich `manage_kiez` für einen vorhandenen Kiez vergeben. Globale Plattformrechte sind dort nicht möglich. Ein aktives Kiez-Recht kann mit einer neuen Begründung widerrufen werden. Vergabe und Widerruf landen im unveränderbaren Datenbank-Audit.

## Bedeutung der Anzeigen

| Anzeige | Bedeutung |
|---|---|
| `Einladung offen` | Das Konto existiert, der E-Mail-Link wurde aber noch nicht bestätigt. |
| `Einladung angenommen` | Die E-Mail-Adresse ist bestätigt; eine normale Anmeldung kann noch ausstehen. |
| `Schon angemeldet` | Das Mitglied hat mindestens eine echte Sitzung verwendet. |
| `MEM-ID offen` | Das Konto besitzt noch keine stabile fachliche Mitglieds-ID. |
| `MEM-… dauerhaft bestätigt` | Die fachliche Identität ist fest zugeordnet und nicht mehr umbenennbar. |
| `Kiez-Recht aktiv` | Das angezeigte, auf genau einen Kiez begrenzte Verwaltungsrecht ist wirksam. |

## Was weiterhin über Supabase möglich ist

Im Supabase Dashboard kann ein Projektverantwortlicher unter `Authentication → Users` ebenfalls einen Benutzer einladen. Das ist ein technischer Notweg. Für den normalen Betrieb ist die GemDen-Verwaltungsseite besser geeignet, weil sie:

- den Rücksprung auf das GemDen-Konto fest vorgibt,
- den Mitgliedsstatus verständlich anzeigt,
- `MEM-*`-IDs nur einmalig und geprüft vergibt,
- ausschließlich erlaubte Kiez-Rechte anbietet,
- Vergabe und Widerruf mit Akteur und Begründung protokolliert.

Stabile IDs oder Berechtigungen sollten nicht beiläufig im Table Editor geändert werden. Der Browser darf diese Spalten ohnehin nicht direkt schreiben; die Verwaltungsfunktionen prüfen zusätzlich das `manage_members`-Recht.

## Bewusste Grenzen der ersten Version

Die Mitgliederverwaltung kann nicht:

- Passwörter lesen oder für andere setzen,
- Konten löschen,
- E-Mail-Adressen ändern,
- bestätigte `MEM-*`-IDs umbenennen,
- globale Admin- oder Plattformrechte vergeben,
- offene Selbstregistrierung aktivieren.

Kontolöschung, Sperrung, Datenexport und Aufbewahrungsfristen brauchen eigene Regeln und werden nicht nebenbei als weiterer Button eingebaut.

## Einmalige Aktivierung des ersten Verwaltungszugangs

Die Technik ernennt absichtlich niemanden automatisch zum Mitglieder-Admin. Nach ausdrücklicher Entscheidung wird genau einem bestehenden, aktiven Konto mit bestätigter `MEM-*`-ID das Recht `manage_members:platform:GemDen` gegeben. Das Repository enthält dafür das nicht automatisch ausführbare Beispiel:

```text
supabase/bootstrap/grant_first_member_manager.sql.example
```

Erst danach erscheint im persönlichen Konto der Link `Mitglieder verwalten` und die geschützte Mitgliederliste kann geladen werden.
