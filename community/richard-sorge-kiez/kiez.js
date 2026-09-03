(function(){
  const content=window.KIEZ_CONTENT||{};
  const tabs=[...document.querySelectorAll('.kiez-tab')];
  const panels=[...document.querySelectorAll('[data-panel]')];

  function showSection(id){
    tabs.forEach(tab=>tab.classList.toggle('active',tab.dataset.section===id));
    panels.forEach(panel=>panel.classList.toggle('active',panel.id===id));
    document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
  }

  tabs.forEach(tab=>tab.addEventListener('click',()=>showSection(tab.dataset.section)));
  document.querySelectorAll('[data-jump]').forEach(button=>button.addEventListener('click',()=>showSection(button.dataset.jump)));

  function renderList(targetId,items,kind){
    const target=document.getElementById(targetId);
    if(!target)return;
    if(!items||!items.length){target.innerHTML='<div class="empty-state">Noch ist hier nichts eingetragen.</div>';return}
    target.innerHTML=items.map((item,index)=>`<article class="entry ${kind||''}">
      ${item.date?`<span class="entry-date">${item.date}</span>`:''}
      <h3>${item.title}</h3><p>${item.text}</p>
      ${item.interest?`<button class="small-button" data-interest="${index}">${item.interest}</button><span class="interest-status" id="interest-${index}" role="status"></span>`:''}
    </article>`).join('');
    target.querySelectorAll('[data-interest]').forEach(button=>button.addEventListener('click',()=>{
      button.textContent='Vormerken ✔';
      button.classList.add('selected');
      document.getElementById(`interest-${button.dataset.interest}`).textContent=' (Demo-Vormerkung auf diesem Gerät)';
    }));
  }

  renderList('event-list',content.events,'event-entry');
  renderList('knowledge-list',content.knowledge,'knowledge-entry');
  renderList('sharing-list',content.sharing,'sharing-entry');
  renderList('board-list',content.board,'board-entry');

  const repairForm=document.getElementById('repair-form');
  repairForm?.addEventListener('submit',event=>{
    event.preventDefault();
    document.getElementById('repair-status').textContent='Die Meldung ist vorbereitet. Eine echte Speicherung folgt mit der Kiez-Datenbank.';
    repairForm.reset();
  });
})();
