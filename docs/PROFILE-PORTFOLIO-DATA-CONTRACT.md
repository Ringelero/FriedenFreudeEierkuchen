# Profil- und Portfolio-Datenvertrag v1

Status: am 24. September 2026 produktiv in Supabase angewendet.

## Zweck

Dieser Vertrag trennt eine stabile Mitgliedsidentität von einzeln sichtbaren Profilfeldern, generischen Fähigkeiten, persönlichen Fähigkeitskontexten, Nachweisen und Projekten. Er bildet keine Personenrangliste und vergibt weder Rechte noch Aufträge.

## Kernmodell

| Tabelle | Aufgabe | Eigentum |
|---|---|---|
| `profiles` | Konto, stabile `MEM-*`-ID und Gesamtstatus | Auth-Nutzer |
| `profile_fields` | Einzelne Texte wie Bio, Wirkungsraum, Verfügbarkeit und Grenzen | Mitglied |
| `skills` | Generischer, öffentlich lesbarer Fähigkeitsthesaurus | Plattformvertrag |
| `profile_skills` | Persönlicher Kontext, Absicht, freiwillige Selbsteinschätzung und Grenzen einer Fähigkeit | Mitglied |
| `skill_evidence` | Nachweis mit Herkunft und explizitem Prüfstatus | Mitglied |
| `skill_evidence_links` | Verbindung eines Nachweises mit Fähigkeiten | Mitglied über den Nachweis |
| `projects` | Projekt, eigene Rolle und Lebenszyklus | Mitglied |
| `project_skills` | Im Projekt eingesetzte, gelernte oder benötigte Fähigkeiten | Mitglied über das Projekt |
| `project_evidence_links` | Nachweise eines Projektprozesses oder Ergebnisses | Mitglied über Projekt und Nachweis |

Alle Beziehungen verwenden stabile Fach-IDs oder Datenbank-Fremdschlüssel. Auth-UUIDs und E-Mail-Adressen werden nicht in den öffentlichen Portfoliovertrag kopiert.

## Sichtbarkeit und Veröffentlichung

`visibility` beschreibt die gewünschte Zielgruppe. `publication_status` beschreibt, ob ein Stand tatsächlich freigegeben wurde. Beide Bedingungen sind getrennt.

| Zustand | Eigentümer | Andere Mitglieder | Nicht angemeldet |
|---|---:|---:|---:|
| `private` + `draft` | lesen/bearbeiten/löschen | nein | nein |
| `members` + `draft` | lesen/bearbeiten/löschen | nein | nein |
| `public` + `draft` | lesen/bearbeiten/löschen | nein | nein |
| `public` + `published` | lesen | lesen | lesen |

Die Mitgliedersichtbarkeit bleibt bis zu einem eigenen Mitgliedschaftsvertrag geschlossen. Die Browseroberfläche kann ausschließlich Entwürfe anlegen und verändern. Ein eigener, enger Veröffentlichungsweg ist bewusst noch nicht implementiert.

Ein Portfolioeintrag wird öffentlich nur lesbar, wenn zusätzlich das zugehörige Gesamtprofil `public`, `published` und `active` ist. Dadurch kann ein einzelner versehentlich markierter Datensatz kein geschlossenes Profil öffnen.

## Nachweise und Selbsteinschätzung

Neue Nachweise aus dem eigenen Konto erhalten immer `self_reported`. Ein Mitglied kann sich weder `community_confirmed` noch `externally_verified` selbst verleihen. Die optionale Fähigkeitsstufe ist eine kontextbezogene Selbstaussage und keine globale Wertung.

## Browseroberflächen

`/konto/` kann:

- Profilfelder einzeln mit gewünschter Sichtbarkeit pflegen,
- Fähigkeiten hinzufügen, bearbeiten und entfernen,
- Nachweise erfassen und mit Fähigkeiten verbinden,
- Projekte samt eigener Rolle und eingesetzten Fähigkeiten pflegen,
- die eigenen strukturierten Daten ohne E-Mail, Auth-UUID oder Sitzungsschlüssel als JSON exportieren.

Die öffentliche Julius-Seite nutzt Progressive Enhancement. Solange kein veröffentlichtes Supabase-Profil vorhanden ist, bleibt der vollständige statische Inhalt aktiv. Nach einer späteren ausdrücklichen Veröffentlichung ersetzt der Adapter nur die durch RLS öffentlich lesbaren Profilfelder, Fähigkeiten und Nachweise.

## KI-Grenze

Ollama ist kein Bestandteil dieses Vertrags. Matching und Vorschläge bleiben deterministisch und regelbasiert. Eine spätere Rubin/Psyche-KI darf denselben engen Vorschlagsvertrag bedienen, aber weder veröffentlichen noch Rechte, Prüfstatus oder Aufträge vergeben.

## Bewusst folgende Verträge

- enger, nachvollziehbarer Veröffentlichungsablauf mit Vorschau und Bestätigung,
- Projektbeiträge mehrerer Mitglieder mit beidseitiger Bestätigung,
- Angebote und Bedarfe als eigene, zeitlich begrenzte Objekte,
- Mitgliedschafts- und Dynastiebeziehungen als Graph,
- Löschen, Aufbewahrung und vollständiger Kontoexport,
- Anschluss des regelbasierten Matchings an die strukturierten Tabellen.
