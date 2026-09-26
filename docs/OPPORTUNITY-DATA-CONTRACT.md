# GemDen / FFE – Datenvertrag für Möglichkeiten v1

## Zweck

GemDen bildet fünf menschliche Signale in einem gemeinsamen Objekt ab:

| Signal | Aussage |
|---|---|
| `have` | Ich habe etwas, das nutzbar, teilbar oder verleihbar sein kann. |
| `can` | Ich kann etwas einbringen oder weitergeben. |
| `need` | Ich brauche Hilfe, Wissen, Material oder Mitwirkung. |
| `time` | Ich habe in einem bestimmten Rahmen Zeit. |
| `chance` | Ich sehe eine Chance, aus der Zusammenarbeit entstehen kann. |

Ein Eintrag ist eine **Möglichkeit**, keine Zuteilung, Zusage, Bewertung oder
rechtliche Vereinbarung.

## Kernobjekte

### `opportunities`

Enthält Eigentümer, Signal, Beziehungsmodus, Beschreibung, Ort, Zeit,
Vergütungsrahmen, Risikohinweis, Sichtbarkeit und Lebenszyklus.

- `relationship_mode` beschreibt den gewünschten Rahmen: Auftrag, Job,
  Lernen, Freiwilligkeit, Care, Commons, Projekt, Event oder Kooperation.
- `compensation_type` macht sichtbar, ob Bezahlung, Auslagenerstattung,
  Tausch, Freiwilligkeit oder noch offene Klärung gemeint ist.
- `risk_level` ist ein Intake-Hinweis. `regulated` und `sensitive` brauchen
  eine sichtbare Erläuterung und sind niemals automatische Freigaben.
- `publication_status` und `visibility` sind getrennt. `public` allein
  veröffentlicht nichts.
- `lifecycle_status` beschreibt offen, pausiert, geschlossen oder archiviert.

### `opportunity_requirements`

Verknüpft eine Möglichkeit mit generischen Fähigkeiten.

- `required`: im beschriebenen Kontext notwendig.
- `helpful`: hilfreich, aber kein Ausschlusskriterium.
- `learnable`: kann in diesem Zusammenhang gelernt oder begleitet werden.
- `hard_gate` ist nur bei `required` erlaubt und muss ausdrücklich gesetzt
  werden. Es wird nicht aus Scores oder KI-Schätzungen abgeleitet.
- `evidence_expectation` beschreibt transparent, ob und welcher Nachweis vor
  einer Zusammenarbeit erwartet wird.

## Sicherheits- und Veröffentlichungsgrenzen

1. Neue Browser-Einträge entstehen ausschließlich als `draft`.
2. RLS bindet Lesen und Schreiben an die stabile Mitgliedsidentität des
   angemeldeten Kontos.
3. Anonyme Besucher sehen nur `published` + `public`; zusätzlich muss das
   Eigentümerprofil selbst öffentlich, veröffentlicht und aktiv sein.
4. `members` bleibt technisch geschlossen, bis echte Mitgliedschaftsregeln
   existieren.
5. Entwurfsanforderungen können nur am eigenen Entwurf verändert werden.
6. Es gibt keine globale Punktzahl, keine automatische Zuteilung und keine
   implizite Qualifikationsfreigabe.

## Produktweg v1

1. Mitglied legt eine Möglichkeit als privaten Entwurf an.
2. Ort, Zeit, Beziehungs- und Vergütungsrahmen werden sichtbar geklärt.
3. Fähigkeiten werden als notwendig, hilfreich oder erlernbar verknüpft.
4. Eine bewusste Freigabe kann den Eintrag in den öffentlichen Strom bringen;
   ohne öffentliches Eigentümerprofil bleibt er unsichtbar.
5. Pause, Abschluss und Archiv bleiben Zustände des Eintrags.
6. Ein angemeldetes Mitglied kann auf eine offene, öffentlich sichtbare
   Möglichkeit genau eine private Resonanz senden.
7. Die Person hinter der Möglichkeit kann diese Resonanz annehmen oder
   ablehnen; die antwortende Person kann sie zurückziehen.
8. Erst eine Annahme öffnet einen privaten Klärungsraum. Weder E-Mail-Adressen
   noch eine Zusage, Buchung oder Bewertung werden dabei automatisch erzeugt.

Der getrennte Antwort- und Nachrichtenvertrag steht in
`docs/RESONANCE-DATA-CONTRACT.md`.
