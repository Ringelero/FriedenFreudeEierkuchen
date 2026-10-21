import ICAL from '../assets/vendor/ical.js-2.2.1/ical.min.mjs';

const LIMITS={steps:25000,seriesSteps:5000,seriesItems:200,items:1000,bytes:1048576};
function localDate(t){return new Date(t.year,t.month-1,t.day,t.hour||0,t.minute||0,t.second||0);}
function instant(t){return t.isDate||t.zone===ICAL.Timezone.localTimezone?localDate(t):t.toJSDate();}
function overlap(start,end,from,to){return start<to&&(end>from||(+start===+end&&start>=from));}
function checkedZone(component){
  for(const name of ['dtstart','dtend','recurrence-id','rdate','exdate'])for(const property of component.getAllProperties(name)){
    const tzid=property.getParameter('tzid');
    if(tzid&&!ICAL.TimezoneService.has(tzid)&&!['UTC','GMT','Etc/UTC'].includes(tzid))throw Error('timezone');
  }
}

// Bounds apply to the full requested range. Always iterate from the true DTSTART:
// starting at the view boundary would change COUNT, weekdays and exceptions.
export function expandCalendarRows(rows,from,to,customLimits={}){
  if(!(from instanceof Date)||!(to instanceof Date)||!Number.isFinite(+from)||!Number.isFinite(+to)||to<=from||to-from>63*86400000)throw Error('range');
  const limits={...LIMITS,...customLimits},events=[],warnings=[];let steps=0,bytes=0;
  for(const row of rows){
    const output=[],seen=new Set();let incomplete=false;
    try{
      if(typeof row.raw_ics!=='string')throw Error('data');const size=new TextEncoder().encode(row.raw_ics).length;if(size>65536)throw Error('data');
      bytes+=size;if(bytes>limits.bytes||events.length>=limits.items)throw Error('budget');
      ICAL.TimezoneService.reset();
      const calendar=new ICAL.Component(ICAL.parse(row.raw_ics));
      if(calendar.name!=='vcalendar')throw Error('calendar');
      for(const component of calendar.getAllSubcomponents('vtimezone')){
        const id=component.getFirstPropertyValue('tzid');if(id)ICAL.TimezoneService.register(id,new ICAL.Timezone({component,tzid:id}));
      }
      const components=calendar.getAllSubcomponents('vevent');
      if(!components.length||new Set(components.map(c=>c.getFirstPropertyValue('uid'))).size!==1)throw Error('events');
      for(const component of components)checkedZone(component);
      const masters=components.filter(c=>!c.hasProperty('recurrence-id'));
      if(masters.length!==1)throw Error('master');
      const master=new ICAL.Event(masters[0],{strictExceptions:true});
      if(masters[0].getFirstPropertyValue('status')==='CANCELLED')continue;
      const append=details=>{
        const key=details.recurrenceId?.toString()||'single';
        if(seen.has(key))return;seen.add(key);
        if(details.item.component.getFirstPropertyValue('status')==='CANCELLED')return;
        const start=instant(details.startDate);let end=instant(details.endDate);
        if(details.startDate.isDate&&end<=start){end=new Date(start);end.setDate(end.getDate()+1);}
        if(!Number.isFinite(+start)||!Number.isFinite(+end)||end<start)throw Error('date');
        if(!overlap(start,end,from,to))return;
        if(output.length>=limits.seriesItems||events.length+output.length>=limits.items){incomplete=true;return;}
        output.push({...row,id:row.is_recurring?row.id+':'+key:row.id,source_event_id:row.id,title:(details.item.summary||row.title||"Untitled").slice(0,160),body:(details.item.description||'').slice(0,5000),starts_at:start.toISOString(),ends_at:end.toISOString(),is_all_day:details.startDate.isDate,can_edit:false,native_expanded:true});
      };
      if(master.isRecurring()){
        const exceptions=components.filter(c=>c.hasProperty('recurrence-id'));
        let shift=0;
        for(const component of exceptions){const exception=new ICAL.Event(component);shift=Math.max(shift,+instant(exception.recurrenceId)-+instant(exception.startDate));}
        const iterator=master.iterator();let seriesSteps=0;
        while(true){
          if(++steps>limits.steps||++seriesSteps>limits.seriesSteps){incomplete=true;break;}
          const occurrence=iterator.next();if(!occurrence)break;
          if(instant(occurrence).getTime()>+to+shift)break;
          append(master.getOccurrenceDetails(occurrence));if(incomplete)break;
        }
        // A single moved exception can enter this view from outside its original range.
        for(const component of exceptions){const exception=new ICAL.Event(component);append(master.getOccurrenceDetails(exception.recurrenceId));}
      }else append({item:master,startDate:master.startDate,endDate:master.endDate,recurrenceId:null});
      events.push(...output);
      if(incomplete)throw Error('budget');
    }catch{
      events.push({...row,can_edit:false,native_unexpanded:true,source_label:"From your calendar app"});
      warnings.push("A calendar app entry is not fully resolved here. The complete version remains in your calendar app.");
    }
  }
  return {events,warnings:[...new Set(warnings)]};
}
