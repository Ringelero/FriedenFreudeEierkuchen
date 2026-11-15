# GemDen für Android und iPhone

Die App öffnet die GemDen-Startseite mit dem Gaststart. Die öffentliche Community, Karte, Kalender und Leistungen sind ohne Konto erreichbar. „Jetzt Gassi“ fragt den Standort auf Wunsch einmalig ab. Die Entfernung wird auf dem Gerät berechnet. Der gemerkte Gassi-Ort bleibt auf dem Gerät.

## Einmal-Link für Anmeldung und Registrierung

In Supabase unter **Authentication → URL Configuration** ist `red.gemden.app://auth/callback` als exakte zusätzliche Redirect URL erforderlich. Die vorhandene Site URL und die Website-Rücksprünge bleiben gültig.

Fordere den Link im Konto der installierten App an und öffne die Mail auf demselben Gerät. Das Betriebssystem übergibt den Rücksprung an die App. Der Code wird mit dem lokal gespeicherten PKCE-Verifier gegen eine Sitzung eingetauscht. Ein neuer Link ersetzt eine zuvor angeforderte Anmeldung auf demselben Gerät. Bei einem abgelaufenen oder bereits benutzten Link kann in der App eine neue Mail angefordert werden.

`node --test native-auth.test.cjs` prüft den Rücksprung beim Start und in einer bereits laufenden App.

## Bauen

Aus diesem Verzeichnis mit Node 24 und pnpm 11:

```sh
pnpm install --frozen-lockfile
pnpm sync
```

Für Android werden JDK 21 und Android SDK 36 verwendet. In `android/` baut `./gradlew assembleDebug bundleRelease` die Test-APK und das Release-Bundle. Unter Windows heißt der Wrapper `gradlew.bat`.

Für iOS wird Xcode auf macOS verwendet. `pnpm ios` öffnet das Projekt. Der Workflow **GemDen iOS Simulator** prüft App und eingebettete WidgetKit-Erweiterung ohne Signierung. Für TestFlight brauchen App und Widget ein Apple-Team mit der gemeinsamen App Group `group.red.gemden.app`.

## Gassi und Kalender

Der Nutzer merkt einen Ort in „Jetzt Gassi“. Die App schreibt den zuletzt geladenen Check-in-Stand und das nächste Zeitfenster in den lokalen Widget-Speicher. Der Zeitstempel im Widget bezeichnet den Stand der Abfrage. Ein Tipp öffnet den gemerkten Treffpunkt.

„In den Handy-Kalender“ öffnet auf Android und ab iOS 17 den Systemdialog zum Eintragen des ausgewählten Fensters. Auf der Website steht dafür eine ICS-Datei zur Verfügung.

## Store-Veröffentlichung

Vor Upload müssen der öffentliche Anbietername, die Store-Konten, die Upload-Signierung und die Store-Datenschutzangaben feststehen. Das Testpaket verwendet eine Debug-Signatur. Die erste Store-Fassung braucht zusätzlich einen geprüften Weg für Kontolöschung, Moderation und die Anmeldung aus Einladungs- und Wiederherstellungslinks.
