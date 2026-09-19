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

Zusätzlich ist die technische Datenbankgrundlage jetzt im Repository vorbereitet: private Profilentwürfe, Kieze, eng begrenzte Rechte, Zugriffsschutz und Änderungsverlauf. Sie ist noch nicht auf das produktive Supabase-Projekt angewendet. Deshalb gibt es weiterhin keinen echten Login und keine versteckte Speicherung.

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

Die vorbereitete Supabase-Migration und ihre Zugriffstests müssen zuerst lokal ausgeführt, gegen den bestehenden Projektstand geprüft und anschließend kontrolliert angewendet werden. Danach werden die echten Auth-Konten angelegt und dein reales Benutzerkonto erhält ausschließlich das Recht `manage_kiez:KIEZ-P-HAIN`. Erst dann wird das Dashboard verbunden. Bis dahin ist diese Datei eine Bedienvorschau, keine Zugangsanleitung.
