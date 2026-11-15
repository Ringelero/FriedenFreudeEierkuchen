# GemDen-Mitgliederverwaltung

Stand: 5. Oktober 2026

## Der normale Weg über die Website

Die geschützte Verwaltungsseite liegt unter:

```text
https://gemden.red/verwaltung/mitglieder/
```

Sie lädt Konten und E-Mail-Adressen nur für ein angemeldetes, aktives Konto mit dem eng begrenzten Recht:

```text
permission_key = manage_members
scope_type     = platform
scope_id       = GemDen
```

Der geheime Supabase-Schlüssel bleibt in der serverseitigen Edge Function. Der Browser kann keine Auth-Admin-Aktion direkt ausführen.

## Die Oberfläche

Oben stehen vier Kennzahlen:

- alle vorhandenen Konten,
- aktive Konten,
- vorübergehend deaktivierte Konten,
- Konten ohne bestätigte `MEM-*`-ID.

Mit der Suche lassen sich Anzeigename, E-Mail-Adresse oder `MEM-*`-ID finden. Der Statusfilter begrenzt die Liste auf aktive, deaktivierte oder noch nicht bestätigte Einladungen.

Jede Kontokarte trennt drei Bereiche:

1. stabile Mitglieds-ID,
2. Kontodaten und Zugang,
3. begrenztes Kiez-Recht.

Ganz unten zeigt der unveränderbare Verlauf, welches Verwaltungskonto wann für welches Mitglied welche Entscheidung mit welcher Begründung getroffen hat.

## 1. Ein Mitglied einladen

1. Anzeigename und eindeutig bestätigte E-Mail-Adresse eintragen.
2. Grund und Legitimation der Einladung dokumentieren.
3. `Einladung per E-Mail senden` wählen.
4. Die Sicherheitsabfrage bestätigen.

Danach passiert sofort Folgendes:

- Supabase Auth legt ein eingeladenes Konto an.
- Der Datenbank-Trigger erzeugt ein privates Profil im Entwurfsstatus.
- Supabase verschickt den einmaligen Einladungslink.
- Die Einladung erscheint im Verwaltungsverlauf.
- Es wird noch keine `MEM-*`-ID und kein erweitertes Recht vergeben.

Eine Einladung ist eine echte E-Mail-Aktion und wird deshalb vor dem Versand nochmals bestätigt.

## 2. Die feste Mitglieds-ID vergeben

Das neue Konto erscheint mit `MEM-ID offen`.

1. Den vorgeschlagenen Wert prüfen, zum Beispiel `MEM-LENI`.
2. Bei Bedarf vor der ersten Vergabe korrigieren.
3. `MEM-ID dauerhaft festlegen` wählen.
4. Die Sicherheitsabfrage bestätigen.

Eine bestätigte ID kann absichtlich nicht mehr umbenannt werden. Sie verbindet Profil, Portfolio, Möglichkeiten und persönliche Seite. Eine spätere Korrektur wäre eine eigene Datenmigration und keine normale Kontobearbeitung.

## 3. Anzeigename bearbeiten

1. In der Kontokarte den neuen Anzeigenamen eintragen.
2. Den Grund mit mindestens zwölf Zeichen dokumentieren.
3. `Anzeigename speichern` wählen.

Die E-Mail-Adresse bleibt davon unberührt. Alter und neuer Anzeigename, handelndes Verwaltungskonto und Begründung werden im Verlauf festgehalten.

## 4. Einen neuen Login-Link senden

Unter `Login und Kontostatus`:

1. den Grund dokumentieren, zum Beispiel einen abgelaufenen Einladungslink,
2. `Neuen Login-Link senden` wählen,
3. den echten Versand an die angezeigte Adresse bestätigen.

Der Server verwendet `shouldCreateUser: false`. Dadurch kann dieser Weg kein zweites Konto anlegen. Für deaktivierte Konten wird kein Link versendet.

Das Mitglied öffnet den Link, landet unter `https://gemden.red/konto/` und kann dort ein eigenes Passwort mit mindestens zwölf Zeichen setzen. GemDen liest oder speichert dieses Passwort nicht.

## 5. Ein Konto deaktivieren

Unter `Login und Kontostatus`:

1. den Grund der vorübergehenden Sperre dokumentieren,
2. `Konto deaktivieren` wählen,
3. die Sicherheitsabfrage bestätigen.

Die Deaktivierung wirkt doppelt:

- Supabase Auth sperrt neue Anmeldungen.
- Die Datenbank setzt `account_status = paused`; vorhandene Bereichsrechte sind dadurch sofort unwirksam, auch wenn ein älteres Zugriffstoken noch nicht abgelaufen ist.

Das Konto und seine Inhalte werden nicht gelöscht. Das aktuell verwendete Verwaltungskonto kann sich absichtlich nicht selbst deaktivieren.

## 6. Ein Konto reaktivieren

Bei einem deaktivierten Konto:

1. den Grund und die Legitimation der Reaktivierung dokumentieren,
2. `Konto reaktivieren` wählen,
3. die Sicherheitsabfrage bestätigen.

Supabase Auth hebt die Sperre auf und die Datenbank setzt das Konto wieder auf `active`. Vorhandene, nicht abgelaufene und nicht widerrufene Rechte werden damit wieder wirksam.

## 7. Optional ein Kiez-Recht verwalten

Mitgliedschaft und erweitertes Recht sind getrennt. Ein Recht wird nur nach einer eigenständigen Legitimation vergeben.

1. Beim Mitglied den Kiez auswählen.
2. Die Entscheidung mit mindestens zwölf Zeichen begründen.
3. `Kiez-Recht erteilen` wählen.

Die Oberfläche kann ausschließlich `manage_kiez` für einen vorhandenen Kiez vergeben. Globale Plattformrechte sind dort nicht möglich. Ein aktives Kiez-Recht lässt sich mit einer neuen Begründung widerrufen. Vergabe und Widerruf bleiben im Verwaltungsverlauf und im technischen Datenbank-Audit erhalten.

## Bedeutung der Anzeigen

| Anzeige | Bedeutung |
|---|---|
| `Konto aktiv` | Anmeldung und gültige Rechte können verwendet werden. |
| `Konto deaktiviert` | Login ist gesperrt und vorhandene Rechte sind unwirksam; Daten bleiben bestehen. |
| `Einladung offen` | Das Konto existiert, der E-Mail-Link wurde aber noch nicht bestätigt. |
| `E-Mail bestätigt` | Die Adresse ist bestätigt; eine normale Anmeldung kann noch ausstehen. |
| `Schon angemeldet` | Das Mitglied hat mindestens eine echte Sitzung verwendet. |
| `MEM-ID offen` | Das Konto besitzt noch keine stabile fachliche Mitglieds-ID. |
| `MEM-… dauerhaft bestätigt` | Die fachliche Identität ist fest zugeordnet. |
| `Dieses Verwaltungskonto` | Das Konto, mit dem die Seite gerade bedient wird. |
| `Kiez-Recht aktiv` | Das auf genau einen Kiez begrenzte Verwaltungsrecht ist wirksam, solange das Konto aktiv bleibt. |

## Der Verwaltungsverlauf

Der Verlauf enthält:

- Zeitpunkt,
- handelndes Verwaltungskonto,
- betroffenes Mitglied,
- Art der Aktion,
- dokumentierte Begründung,
- bei Bedarf die nachvollziehbare Änderung, zum Beispiel alter und neuer Name.

Passwörter, Login-Links und E-Mail-Inhalte werden dort nicht gespeichert. Browserrollen können die Zeilen weder anlegen, ändern noch löschen; auch privilegierte Änderungen und Löschungen werden durch einen Append-only-Trigger abgewiesen.

## Wann das Supabase Dashboard sinnvoll ist

Der normale Betrieb soll über die GemDen-Seite laufen. Das Supabase Dashboard bleibt der technische Notweg, zum Beispiel wenn die Website oder Edge Function gestört ist.

Unter `Authentication → Users` lassen sich Auth-Konten technisch prüfen. Stabile IDs, Status und Berechtigungen sollten nicht beiläufig im Table Editor geändert werden, weil dabei die begründeten, geprüften Verwaltungswege umgangen würden.

Ein Besuch des Dashboards zählt zugleich als Projektaktivität. Die Website allein verhindert eine automatische Pause eines ungenutzten Free-Projekts nicht zuverlässig; entscheidend ist echte Backend-Aktivität beziehungsweise das Öffnen des Projekts im Dashboard.

## Bewusste Grenzen

Die Mitgliederverwaltung kann nicht:

- Passwörter lesen oder für andere setzen,
- Konten hart löschen,
- E-Mail-Adressen ändern,
- bestätigte `MEM-*`-IDs umbenennen,
- globale Admin- oder Plattformrechte vergeben,
- offene Selbstregistrierung aktivieren.

Kontolöschung, vollständiger Export und Aufbewahrungsfristen brauchen eine eigene fachliche und rechtliche Regelung.

## Produktivprüfung

Die Kontoverwaltung V2 wurde am 5. Oktober 2026 produktiv angewendet. 40 Datenbank-Gegenproben liefen mit ausschließlich temporären Testkonten und wurden vollständig zurückgerollt. Danach bestanden weiterhin genau ein echtes Auth-Konto, ein reales Profil und ein aktives `manage_members:platform:GemDen`-Recht; es verblieben keine Testnutzer oder Testrechte.
