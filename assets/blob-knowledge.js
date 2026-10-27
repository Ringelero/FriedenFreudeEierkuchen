(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.GemDenBlobKnowledge=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const normalize=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ß/g,'ss').toLowerCase();
  const stop=/^(wie|was|wo|wer|wann|warum|wieso|welche|welcher|welches|ich|mich|mir|mein|meine|meinen|meinem|meiner|meines|du|dein|deine|den|dem|der|die|das|ein|eine|einen|einem|und|oder|mit|von|zum|zur|im|in|am|an|auf|bei|es|ist|sind|kann|kannst|man|bitte|mochte|will|suche|zeige|sag|machen|mache|mach|hund|hunde|hundes|how|what|where|who|when|why|which|i|my|me|you|your|a|an|the|to|of|for|and|or|with|is|are|can|do|does|please|want|show|find|dog|dogs)$/;
  const concepts=[
    [/^(krall|nagel|naegel|nail|claw)/,'nails'],[/^(ohr|ear)/,'ears'],[/^(zahn|zaehn|teeth|tooth|dental)/,'teeth'],
    [/^(fell|fur|coat|groom|burst|buerst|kamm|kaemm)/,'coat'],[/^(pfot|paw|ballen)/,'paws'],
    [/^(welp|pupp)/,'puppy'],[/^(hundespiel|spiel|play)/,'play'],[/^(ruckruf|rueckruf|recall|abruf)/,'recall'],
    [/^(leine|leash|lead)/,'leash'],[/^(begegn|encounter)/,'encounters'],[/^(belohn|reward|leckerli)/,'rewards'],
    [/^(stubenrein|pipi|pinkeln|toilet)/,'toilet'],[/^(beiss|biting|mouthing|nipping)/,'biting'],
    [/^(allein|alone|separation|trennungs)/,'alone'],[/^(ruhe|schlaf|sleep|settle|rest|relax)/,'rest'],
    [/^(geschirr|harness)/,'harness'],[/^(betreu|sitter|sitting)/,'sitter'],[/^(ressourc|guard|verteidig)/,'guarding'],
    [/^(gassi|spazier|walking|walk)/,'walks'],[/^(karte|maps?|hundeauslauf|auslauf)/,'map'],[/^(video|film|clip)/,'video']
  ];
  const canonical=word=>concepts.find(([rule])=>rule.test(word))?.[1]||word;
  function tokens(value){return [...new Set((normalize(value).match(/[\p{L}\p{N}]+/gu)||[]).filter(word=>word.length>1&&!stop.test(word)).flatMap(word=>/^(hundespielvideo|dogplayvideo|playvideo)$/.test(word)?['play','video']:[canonical(word)]))];}
  function safePath(value){return typeof value==='string'&&value.length<400&&!/[\\\s]/.test(value)&&!/\.\.|%2e|%2f|%5c/i.test(value)&&/^(?:leistungen\/rubybubys-herz-und-schnauze\/(?:[a-z0-9-]+\/)*(?:#[a-z0-9-]+)?|treffpunkte\/\?leistung=SERVICE-RUBYBUBYS-HERZ-SCHNAUZE(?:&[a-z]+=[a-z]+)*|kalender\/\?kalender=CICEK)$/.test(value);}
  function cleanItems(raw){return (Array.isArray(raw?.items)?raw.items:[]).slice(0,80).filter(item=>item&&safePath(item.path)&&typeof item.title==='string'&&typeof item.detail==='string'&&typeof item.terms==='string').map(item=>({id:String(item.id||'').slice(0,80),title:item.title.slice(0,180),detail:item.detail.slice(0,350),path:item.path,terms:item.terms.slice(0,1800)}));}
  function search(items,question,limit=3){
    const words=tokens(String(question||'').slice(0,300));if(!words.length)return [];
    const ranked=items.map((item,order)=>{
      const title=new Set(tokens(item.title)),terms=new Set(tokens(item.terms)),detail=new Set(tokens(item.detail));
      const score=words.reduce((n,word)=>n+(title.has(word)?7:terms.has(word)?4:detail.has(word)?1:0),0);
      return {item,score,order};
    }).filter(row=>row.score>0).sort((a,b)=>b.score-a.score||a.order-b.order);
    const best=ranked[0]?.score||0;
    return ranked.filter(row=>row.score>=best*.55).slice(0,Math.max(1,Math.min(5,limit))).map(row=>row.item);
  }
  function mount({root:relativeRoot,chat}){
    if(chat.querySelector('#blob-knowledge'))return;
    const base=new URL(relativeRoot,location.href);
    const section=document.createElement('section');section.id='blob-knowledge';section.setAttribute('aria-label','Frag Blob nach einem Thema');
    section.innerHTML='<form class="blob-knowledge-form"><label for="blob-question">Was möchtest du wissen?</label><div class="blob-question-row"><input id="blob-question" type="search" maxlength="300" autocomplete="off" placeholder="Wie schneide ich die Krallen?"><button type="submit">Weg finden</button></div></form><div class="blob-question-examples" aria-label="Beispiele"><button type="button" data-question="Krallenpflege">Krallenpflege</button><button type="button" data-question="Hundespielvideo">Hundespielvideo</button><button type="button" data-question="Betreuung">Betreuung</button></div><p class="blob-knowledge-status" role="status">Frag nach einer Anleitung oder einem Angebot. Deine Eingabe bleibt in diesem Browser.</p><div class="blob-knowledge-results"></div>';
    (chat.querySelector('#blob-suggestions')||chat.querySelector('.blob-other-ways')).before(section);
    const input=section.querySelector('#blob-question'),status=section.querySelector('.blob-knowledge-status'),results=section.querySelector('.blob-knowledge-results');
    let loading=null,items=null,generation=0;
    function load(){if(items)return Promise.resolve(items);if(loading)return loading;loading=fetch(new URL('assets/data/blob-knowledge.v1.json',base).href,{credentials:'omit',cache:'no-cache'}).then(response=>{if(!response.ok)throw Error('index');return response.json();}).then(raw=>{const next=cleanItems(raw);if(!next.length)throw Error('index');items=next;return items;}).catch(error=>{loading=null;throw error;});return loading;}
    function addLink(path,title,detail){if(!safePath(path))return;const a=document.createElement('a');a.href=new URL(path,base).href;const strong=document.createElement('strong');strong.textContent=title;const span=document.createElement('span');span.textContent=detail;a.append(strong,span);results.append(a);}
    async function answer(){const question=input.value.trim(),epoch=++generation;results.replaceChildren();if(!question){status.textContent='Frag nach einer Anleitung oder einem Angebot. Deine Eingabe bleibt in diesem Browser.';return;}status.textContent='Passende Seiten werden gesucht …';try{const index=await load();if(epoch!==generation)return;const matches=search(index,question);status.textContent=matches.length?'Hier geht es passend zu deiner Frage weiter:':'Dazu finde ich noch keine passende Seite. Im Lernhaus kannst du alle Themen ansehen oder einen Wunsch als Ticket schicken.';window.dispatchEvent(new Event('blob:react'));if(matches.length)for(const item of matches)addLink(item.path,item.title,item.detail);else addLink('leistungen/rubybubys-herz-und-schnauze/lernen/','Alle Themen im Lernhaus','Die Anleitungen und ihre Originalquellen entdecken.');}catch{if(epoch!==generation)return;status.textContent='Die Themensuche ist gerade nicht erreichbar. Das Lernhaus kannst du trotzdem öffnen.';addLink('leistungen/rubybubys-herz-und-schnauze/lernen/','Lernhaus öffnen','Alle Anleitungen direkt aufrufen.');}}
    section.querySelector('form').addEventListener('submit',event=>{event.preventDefault();answer();});
    input.addEventListener('input',()=>{generation++;results.replaceChildren();status.textContent='Mit „Weg finden“ zeigt Blob dir passende Seiten.';});
    section.querySelectorAll('[data-question]').forEach(button=>button.addEventListener('click',()=>{input.value=button.textContent;answer();}));
    return {section,answer};
  }
  return {normalize,tokens,safePath,cleanItems,search,mount};
});
