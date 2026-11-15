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

Zusätzlich ist die technische Datenbankgrundlage produktiv vorhanden: private Profilentwürfe, Kieze, eng begrenzte Rechte, Zugriffsschutz und Änderungsverlauf. Die allgemeine Kontoseite kann für jede bestätigte `MEM-*`-Identität eine eigene private Mitgliedsseite aus derselben sicheren Vorlage anlegen und in der Seitenwerkstatt bearbeiten. Eine öffentliche Profilansicht erscheint erst nach ausdrücklicher Einzel- und Gesamtfreigabe. Lenis reales Konto und das P-Hain-Dashboard sind trotzdem noch nicht freigeschaltet; die sichtbaren P-Hain-Formulare speichern weiterhin nichts.

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

Das Supabase-Fundament ist seit dem 19. September 2026 produktiv vorhanden; der generische, eigentümergebundene Weg für private Mitgliedsseiten wurde am 26. September 2026 zusätzlich geprüft. Als Nächstes wird dein echtes Konto ausschließlich über deine eindeutig bestätigte E-Mail-Adresse eingeladen. Nach dem ersten Login bekommt es eine stabile Mitglieds-ID; das Recht `manage_kiez:KIEZ-P-HAIN` folgt getrennt und nur nach dokumentierter Legitimation. Danach werden private Mitgliedsseite, Login, Veröffentlichung und später das verbundene Dashboard mit deinem echten Konto geprüft. Bis dahin ist diese Datei eine Bedienvorschau, keine Zugangsanleitung.
