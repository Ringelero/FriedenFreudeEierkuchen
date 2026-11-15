import {T} from './learning-data.mjs';

// Search metadata only. The guides remain the canonical source for their text.
export const topicAliases={
  koerpersprache:'Hundesprache Signale wedeln knurren Angst Stress body language signals wag growl fear stress',
  hundespiel:'spielen Spielcheck Spielpause bedrängt play playing consent break',
  belohnung:'Erziehung erziehen Training trainieren belohnen Leckerli Marker Timing positive reinforcement reward treat training',
  leine:'Leinenführigkeit zieht ziehen lockere Leine leash pulling loose lead walking',
  rueckruf:'abrufen kommt nicht zurück Rückruf hier rufen recall come back return',
  begegnungen:'Hundebegegnung Kontakt andere Hunde vorbeigehen Begegnung dog encounters meeting other dogs',
  welpen:'Welpe Welpen Junghund sozialisieren Sozialisierung neue Umgebung puppy socialisation new home',
  stubenrein:'Pipi pinkeln Wohnung Toilette sauber werden stubenrein toilet house training accidents pee',
  welpenbeissen:'Welpe beißt beisst beißen beissen knabbert Hände Kleidung puppy biting mouthing nipping',
  ruhe:'schlafen Schlaf entspannen Pause Ruhe settle sleep rest relax',
  alleinbleiben:'alleine allein sein alleinbleiben Trennungsangst verlassen separation anxiety home alone leave',
  krallen:'Nägel Nagel Naegel Krallen Kralle schneiden kürzen knipsen nails nail claws clipping trimming quick',
  ohren:'Ohr Ohren putzen sauber reinigen Ohrenschmalz ear ears wax cleaning clean',
  zaehne:'Zahn Zähne Zaehne Zahnpasta Zahnbürste Zähneputzen Maul Mundgeruch teeth tooth dental brushing toothpaste breath',
  fell:'Fell bürsten kämmen baden waschen Shampoo verfilzt Filz scheren groom grooming coat fur brushing bath matted',
  pfoten:'Pfote Pfoten Ballen Zehen lecken schmutzig Streusalz paw paws pads toes licking dirty',
  geschirr:'Geschirr anziehen anfassen ausweichen Kooperation freiwillig harness handling cooperative care touch',
  betreuung:'Übergabe Betreuung Kennenlernen Notfallkontakt Ablauf handover sitter care preparation introduction',
  ressourcen:'Futter Spielzeug Knochen verteidigen bewachen wegnehmen knurren resource guarding food toy bone growling',
  hilfe:'Trainer Hundeschule Verhaltenstherapie Tierarzt Schmerzen Aggression Angst Hilfe dog trainer behaviourist vet pain aggression fear help'
};

const service='leistungen/rubybubys-herz-und-schnauze/';
const ruby='SERVICE-RUBYBUBYS-HERZ-SCHNAUZE';
export const discoveryRoutes=[
  {id:'homeless-support',kind:'service',title:T('Rubybubys Obdachlosenhilfe','Rubybubys homelessness support'),detail:T('Vier Einstiege: etwas brauchen, etwas anbieten, gemeinsam aktiv werden und Hilfe finden. Eigene Aktionen sind in Vorbereitung.','Four starting points: ask for something, offer something, get involved together and find support. Our own activities are in preparation.'),path:'leistungen/rubybubys-obdachlosenhilfe/',terms:'Obdachlosenhilfe obdachlos Obdachlose Obdachlosen Wohnungslosenhilfe wohnungslos Wohnungslose Wohnungslosen soziale Hilfe unterstützen homelessness homeless unhoused support ideas'},
  {id:'learning-house',kind:'learning',title:T('Das Lernhaus','The learning house'),detail:T('Alle Anleitungen zu Verhalten, Alltag und Pflege.','All guides to behaviour, everyday life and care.'),path:service+'lernen/',terms:'Lernen Lernbereich Wissen Ratgeber Anleitung Informationen Erziehung learn learning knowledge guide information training'},
  {id:'care-guides',kind:'learning',title:T('Pflege & Hygiene','Care & hygiene'),detail:T('Krallen, Ohren, Zähne, Fell und Pfoten im Überblick.','An overview of nails, ears, teeth, coat and paws.'),path:service+'lernen/#pflege',terms:'Pflege Hygiene Körperpflege alle Anleitungen care hygiene grooming all guides'},
  {id:'play-video',kind:'learning',title:T('Hundespiel im Video beobachten','Observe dog play in a video'),detail:T('Ein kurzer echter Clip mit sechs Beobachtungsfragen.','A short real clip with six observation questions.'),path:service+'lernen/hundespiel-video/',terms:'Hundespiel Spiel spielen Video Film Clip beobachten Fragen Übung play playing video film clip observe questions exercise'},
  {id:'heart-hound',kind:'service',title:T('Rubybubys Herz und Schnauze','Rubybubys Herz und Schnauze'),detail:T('Das Angebot und die Wege zu Treffen, Betreuung und Lernen.','The service and routes to meetups, care and learning.'),path:service,terms:'Herz Schnauze Herzensschnauze Rubybubys Angebot Projekt Hundetreff heart hound service project'},
  {id:'walking-slots',kind:'service',title:T('Gassi gehen & verabreden','Walk & meet up'),detail:T('Treffpunkte und unverbindliche Zweistundenfenster öffnen.','Open meeting places and flexible two-hour windows.'),path:'treffpunkte/?leistung='+ruby,terms:'Gassi gassigehen spazieren Spaziergang wer kommt wer da Treffpunkt Zeitslots walk walking meetup slots attendance'},
  {id:'walking-map',kind:'service',title:T('Gassiorte auf der Karte','Walking places on the map'),detail:T('Berliner Orte, Beschreibungen und andere Treffpunkte entdecken.','Discover Berlin places, descriptions and other meeting points.'),path:'treffpunkte/?leistung='+ruby+'&ansicht=entdecken&darstellung=karte',terms:'Karte Map Berlin Ort Orte Hundeauslauf Auslauf Park Parks Maps location places dog exercise areas'},
  {id:'special-meetups',kind:'service',title:T('Besondere Treffen entdecken','Discover special meetups'),detail:T('Geplante Treffen bei Herz und Schnauze ansehen.','View planned Heart & Hound meetups.'),path:service+'#termine',terms:'Termin Termine Welpentreff Welpentreffen Treffen Event Events Veranstaltung puppy meetup events dates'},
  {id:'walking-help',kind:'service',title:T('Gassihilfe finden oder anbieten','Find or offer walking help'),detail:T('Erste Kontakte und Unterstützung für einzelne Runden.','First contacts and help with individual walks.'),path:service+'gassihilfe/',terms:'Gassihilfe Gassigeher Nachbar Nachbarn helfen Hilfe anbieten Runde Spazierhilfe dog walker walking help neighbours offer'},
  {id:'trusted-care',kind:'service',title:T('Meine Kontakte & Betreuung','My contacts & care'),detail:T('Vertraute Menschen und private Betreuungsabsprachen in deinem Konto.','Trusted people and private care arrangements in your account.'),path:'konto/#konto-kontakte',terms:'Betreuung betreuen aufpassen Hundesitter Sitter Urlaub Übernachtung länger Kontakte care caring sitter holiday overnight longer contacts'},
  {id:'animal-friendly-hosts',kind:'service',title:T('Tierfreundliche Orte & Gastgeber','Animal-friendly places & hosts'),detail:T('Das Vorhaben für Restaurants, Hostels und andere Orte kennenlernen.','Explore the plan for restaurants, hostels and other places.'),path:service+'gastgeber/',terms:'Restaurant Restaurants Hostel Hotel Geschäft Geschäfte Café Cafe Gastgeber tierfreundlich host animal friendly business'},
  {id:'cicek-calendar',kind:'service',title:T('Zeit mit Çiçek','Time with Çiçek'),detail:T('Ihre freigegebenen Gassi- und Betreuungszeiten im Kalender.','Her shared walking and care times in the calendar.'),path:'kalender/?kalender=CICEK',terms:'Cicek Çiçek Blume Hündin buchen buchbar verfügbar Kalender calendar availability book flower'}
];
