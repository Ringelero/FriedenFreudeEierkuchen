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

Zusätzlich ist die technische Datenbankgrundlage produktiv vorhanden: private Profilentwürfe, Kieze, eng begrenzte Rechte, Zugriffsschutz und Änderungsverlauf. Die erste allgemeine Kontoseite ist mit Supabase verbunden. Lenis reales Konto und das P-Hain-Dashboard sind trotzdem noch nicht freigeschaltet; die sichtbaren P-Hain-Formulare speichern weiterhin nichts.

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

Das Supabase-Fundament ist seit dem 19. September 2026 produktiv vorhanden und hat 37/37 Zugriffstests bestanden. Als Nächstes werden die echten Auth-Konten mit eindeutig bestätigten E-Mail-Adressen eingeladen; anschließend erhält dein reales Benutzerkonto ausschließlich das Recht `manage_kiez:KIEZ-P-HAIN`. Erst danach wird das Dashboard verbunden und mit deinem echten Login erneut geprüft. Bis dahin ist diese Datei eine Bedienvorschau, keine Zugangsanleitung.
