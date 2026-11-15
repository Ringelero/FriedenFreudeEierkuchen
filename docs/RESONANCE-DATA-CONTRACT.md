# GemDen / FFE – Datenvertrag für Resonanz v1

## Zweck

Resonanz ist eine private, selbstbestimmte Interessenbekundung auf eine
öffentliche Möglichkeit. Sie eröffnet einen Weg zur gemeinsamen Klärung, aber
erzeugt weder Auftrag noch Vertrag, Kontaktfreigabe, Bewertung oder automatische
Zuordnung.

## Kernobjekte

### `opportunity_responses`

Eine Antwort verbindet genau eine offene Möglichkeit mit genau einem anderen
aktiven Mitglied. Der Browser darf nur drei Werte senden:

- die technische ID der Möglichkeit,
- die Art der Resonanz (`help`, `participate`, `learn` oder `question`),
- eine persönliche Nachricht mit höchstens 2.000 Zeichen.

Eigentümer- und Antwortidentität, Anzeigenamen, stabiler Möglichkeitsschlüssel,
Titel, Signalart und Startstatus werden in einem privaten Datenbanktrigger aus
der angemeldeten Sitzung und der veröffentlichten Möglichkeit abgeleitet. Ein
Mitglied kann nicht auf die eigene Möglichkeit und nicht zweimal auf dieselbe
Möglichkeit reagieren.

### `opportunity_response_actions`

Statuswechsel sind unveränderliche Aktionszeilen. Der Browser sendet nur die
Antwort-ID und den gewünschten Zielstatus.

| Ausgang | Handelnde Person | Erlaubtes Ziel |
|---|---|---|
| `pending` | Eigentümer der Möglichkeit | `accepted` oder `declined` |
| `pending` | antwortendes Mitglied | `withdrawn` |
| `accepted` | antwortendes Mitglied | `withdrawn` |

Akteur und Ergebnis werden serverseitig abgeleitet. Direkte Updates oder
Löschungen einer Antwort sind für Browserrollen nicht erlaubt.

### `opportunity_response_messages`

Nachrichten sind unveränderliche Zeilen in einem privaten Klärungsraum. Sie
können nur von den beiden Beteiligten und nur im Zustand `accepted` angelegt
werden. Absender-ID und Anzeigename stammen aus der aktuellen Sitzung. Nach
Ablehnung oder Rückzug können keine neuen Nachrichten entstehen; vorhandene
Nachrichten bleiben für beide Beteiligten als Verlauf sichtbar.

## Sichtbarkeit und Sicherheitsgrenzen

1. Eine neue Resonanz ist nur auf `public` + `published` + `open` möglich und
   nur, wenn das Eigentümerprofil selbst öffentlich, veröffentlicht und aktiv
   ist.
2. Antwort, Aktionsverlauf und Nachrichten sind ausschließlich für
   Möglichkeitseigentümer und antwortendes Mitglied lesbar.
3. Anonyme Rollen erhalten keinerlei Leserecht auf diese drei Tabellen.
4. E-Mail-Adressen, Auth-IDs und Sitzungsschlüssel werden weder kopiert noch in
   der öffentlichen Oberfläche ausgegeben.
5. Jede Identität wird durch `auth.uid()` und die bestätigte `MEM-*`-ID
   serverseitig gebunden; vom Browser gesendete Identitätsfelder sind nicht
   zugelassen.
6. Eine pausierte, geschlossene oder zurückgezogene Möglichkeit nimmt keine
   neuen Antworten an. Bestehende private Verläufe bleiben davon getrennt.
7. Löschen, vollständiger Kontoexport und Aufbewahrungsfristen brauchen vor
   einer breiteren Öffnung einen eigenen, ausdrücklichen Produktvertrag.

## Bedienweg

1. Im öffentlichen Möglichkeitenstrom öffnet ein angemeldetes Mitglied
   „Privat Resonanz geben“.
2. Nach dem Senden erscheint der Status im eigenen Konto unter „Gesendet“.
3. Die Person hinter der Möglichkeit sieht die Antwort unter „Eingegangen“ und
   entscheidet bewusst über Annahme oder Ablehnung.
4. Bei Annahme erscheint auf beiden Seiten derselbe private Klärungsraum.
5. Die antwortende Person kann ihre Resonanz jederzeit zurückziehen und damit
   den Raum für neue Nachrichten schließen.
