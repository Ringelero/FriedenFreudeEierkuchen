import {test} from 'node:test';import assert from 'node:assert/strict';
import {expandCalendarRows} from '../kalender/recurrence.mjs';
const calendar=lines=>['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//GemDen Local Checks//DE',...lines,'END:VCALENDAR',''].join('\r\n');
const event=(lines)=>['BEGIN:VEVENT','UID:fixture',...lines,'END:VEVENT'];
const row=(raw,more={})=>({id:'local-fixture',title:'Fixture',kind:'event',is_recurring:true,raw_ics:raw,...more});
const range=(r,from='2026-10-01T00:00:00Z',to='2026-11-01T00:00:00Z',limits={})=>expandCalendarRows([r],new Date(from),new Date(to),limits);
test('recurrence keeps true DTSTART and COUNT when view begins later',()=>{
 const r=row(calendar(event(['DTSTART:20260928T120000Z','DTEND:20260928T130000Z','RRULE:FREQ=DAILY;COUNT=5','SUMMARY:Five days'])));
 const data=range(r);assert.equal(data.warnings.length,0);assert.deepEqual(data.events.map(e=>e.starts_at),['2026-10-01T12:00:00.000Z','2026-10-02T12:00:00.000Z']);assert.ok(data.events.every(e=>!e.can_edit));
});
test('EXDATE, RDATE and moved or cancelled exceptions survive expansion',()=>{
 const raw=calendar([...event(['DTSTART:20261001T120000Z','DTEND:20261001T130000Z','RRULE:FREQ=DAILY;COUNT=4','EXDATE:20261002T120000Z','RDATE:20261009T120000Z','SUMMARY:Normal']),...event(['RECURRENCE-ID:20261003T120000Z','DTSTART:20261005T150000Z','DTEND:20261005T160000Z','SUMMARY:Moved']),...event(['RECURRENCE-ID:20261004T120000Z','DTSTART:20261004T120000Z','DTEND:20261004T130000Z','STATUS:CANCELLED'])]);
 const data=range(row(raw));assert.equal(data.warnings.length,0);assert.deepEqual(data.events.map(e=>[e.starts_at,e.title]),[['2026-10-01T12:00:00.000Z','Normal'],['2026-10-05T15:00:00.000Z','Moved'],['2026-10-09T12:00:00.000Z','Normal']]);
 const moved=range(row(raw),'2026-10-05T00:00:00Z','2026-10-06T00:00:00Z');assert.equal(moved.events.length,1);assert.equal(moved.events[0].title,'Moved');
});
test('a detached moved occurrence is included even beyond the recurrence search boundary',()=>{
 const raw=calendar([...event(['DTSTART:20261101T120000Z','DTEND:20261101T130000Z','RRULE:FREQ=DAILY;COUNT=2']),...event(['RECURRENCE-ID:20261102T120000Z','DTSTART:20261008T120000Z','DTEND:20261008T130000Z','SUMMARY:Moved into view'])]);
 assert.equal(range(row(raw)).events[0].title,'Moved into view');
});
test('all-day dates remain floating days in the display timezone and DTEND stays exclusive',()=>{
 const r=row(calendar(event(['DTSTART;VALUE=DATE:20261025','DTEND;VALUE=DATE:20261027','SUMMARY:Two days'])),{is_recurring:false,is_all_day:true});
 const data=range(r);assert.equal(data.warnings.length,0);assert.equal(data.events.length,1);const e=data.events[0],start=new Date(e.starts_at),end=new Date(e.ends_at);assert.equal(start.getDate(),25);assert.equal(start.getHours(),0);assert.equal(end.getDate(),27);assert.equal(end.getHours(),0);assert.equal(e.is_all_day,true);
});
test('VTIMEZONE preserves local recurring times across Berlin daylight saving change',()=>{
 const zone=['BEGIN:VTIMEZONE','TZID:Europe/Berlin','BEGIN:STANDARD','DTSTART:19701025T030000','TZOFFSETFROM:+0200','TZOFFSETTO:+0100','RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU','END:STANDARD','BEGIN:DAYLIGHT','DTSTART:19700329T020000','TZOFFSETFROM:+0100','TZOFFSETTO:+0200','RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU','END:DAYLIGHT','END:VTIMEZONE'];
 const data=range(row(calendar([...zone,...event(['DTSTART;TZID=Europe/Berlin:20261018T100000','DTEND;TZID=Europe/Berlin:20261018T110000','RRULE:FREQ=WEEKLY;COUNT=2'])])));
 assert.equal(data.warnings.length,0);assert.deepEqual(data.events.map(e=>e.starts_at),['2026-10-18T08:00:00.000Z','2026-10-25T09:00:00.000Z']);
});
test('unsupported timezone, malformed data and exhausted budgets produce visible fallback, not invented dates',()=>{
 const malformed=range(row('invalid'));assert.equal(malformed.events[0].native_unexpanded,true);assert.equal(malformed.warnings.length,1);
 const unknown=range(row(calendar(event(['DTSTART;TZID=Unknown/Zone:20261001T120000','DTEND;TZID=Unknown/Zone:20261001T130000']))));assert.equal(unknown.events[0].native_unexpanded,true);
 const bounded=range(row(calendar(event(['DTSTART:20200101T120000Z','DTEND:20200101T130000Z','RRULE:FREQ=DAILY']))),'2026-10-01T00:00:00Z','2026-11-01T00:00:00Z',{seriesSteps:10});assert.equal(bounded.events.length,1);assert.equal(bounded.events[0].native_unexpanded,true);
});
