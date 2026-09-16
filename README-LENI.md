# P-Hain-Verwaltung für Leni

## Kurz gesagt

Du sollst P-Hain später direkt auf `gemden.red` verwalten können. Dafür brauchst du dann nur ein Konto — keinen GitHub-Zugang und keinen Programmcode.

## Was schon da ist

Der öffentliche P-Hain-Prototyp zeigt bereits die geplanten Bereiche:

- Übersicht
- Termine
- Reparaturen
- Möglichkeiten und Nachbarschaftshilfe
- Hauswissen
- Kiezbrett

Die Oberfläche ist aktuell noch statisch. Eingaben erzeugen nur eine Vorschau und werden ausdrücklich **nicht** gespeichert oder versendet.

## Was dein Konto später können soll

Mit dem Bereichsrecht `manage_kiez:KIEZ-P-HAIN` kannst du voraussichtlich:

- Termine anlegen, ändern und absagen
- öffentliche Kieztexte bearbeiten
- Wissenseinträge und Wartungshinweise pflegen
- Beiträge freigeben, ändern oder ausblenden
- geschützte Reparaturanfragen sehen und ihren Status aktualisieren
- Sichtbarkeit pro Inhalt wählen
- freigegebene Module sortieren

Diese Berechtigung gilt nur für P-Hain. Sie macht dich nicht automatisch zur globalen Administratorin oder politischen Entscheiderin von FFE.

## Änderungswünsche an die Gestaltung

Für Dinge, die das Dashboard nicht direkt ändern darf, ist eine Schaltfläche „Änderungswunsch“ geplant. Sie übermittelt:

- die stabile ID des betroffenen Seitenteils
- die aktuelle Seite
- deinen Wunsch
- optional einen Screenshot

Julius kann den Wunsch dann mit Codex bearbeiten, ohne erst raten zu müssen, welchen Teil du meinst.

## Nächster technischer Schritt

Supabase Auth, Datenbanktabellen und die Zugriffsregeln müssen noch eingerichtet und mit der Website verbunden werden. Erst danach wird dein echtes Konto angelegt. Bis dahin ist diese Datei eine Bedienvorschau, keine Zugangsanleitung.
