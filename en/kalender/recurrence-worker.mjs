import {expandCalendarRows} from './recurrence.mjs';
self.onmessage=event=>{
  const {rows,start,end}=event.data;
  self.postMessage(expandCalendarRows(rows,new Date(start),new Date(end)));
};
