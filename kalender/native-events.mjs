// Keep parsing imported calendars off the page's main thread.
export function unavailable(row) {
  return {...row, can_edit:false, native_unexpanded:true, source_label:'Aus deiner Kalender-App'};
}

export function expandNativeEvents(rows, start, end, signal) {
  const native=rows.filter(row=>row.is_recurring||row.is_all_day);
  if(!native.length)return Promise.resolve({events:rows,warnings:[]});
  const ordinary=rows.filter(row=>!row.is_recurring&&!row.is_all_day);
  const fallback=()=>({events:[...ordinary,...native.map(unavailable)],warnings:['Einige Kalender-App-Einträge konnten hier nicht aufgelöst werden. Du kannst sie weiterhin in deiner Kalender-App öffnen.']});
  if(typeof Worker==='undefined')return Promise.resolve(fallback());
  return new Promise((resolve,reject)=>{
    let worker,timer,finished=false;
    const finish=(value,error)=>{if(finished)return;finished=true;clearTimeout(timer);signal?.removeEventListener('abort',abort);worker?.terminate();error?reject(error):resolve(value);};
    const abort=()=>finish(null,new DOMException('Kalender gewechselt.','AbortError'));
    if(signal?.aborted){abort();return;}
    try{
      worker=new Worker(new URL('./recurrence-worker.mjs',import.meta.url),{type:'module'});
      signal?.addEventListener('abort',abort,{once:true});
      timer=setTimeout(()=>finish(fallback()),4000);
      worker.onmessage=event=>{
        const data=event.data;
        if(!Array.isArray(data?.events)||!Array.isArray(data?.warnings)){finish(fallback());return;}
        finish({events:[...ordinary,...data.events],warnings:data.warnings});
      };
      worker.onerror=()=>finish(fallback());
      worker.postMessage({rows:native,start:start.toISOString(),end:end.toISOString()});
    }catch{finish(fallback());}
  });
}
