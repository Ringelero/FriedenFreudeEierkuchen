(function () {
  const scenes = document.querySelector('[data-ruby-scenes]');
  const cardList = scenes?.querySelector('[data-ruby-cards]');
  if (!cardList) return;

  const cards = [...cardList.querySelectorAll('a[href^="#"]')];
  const panels = new Map([...scenes.querySelectorAll('[data-ruby-panel]')].map(panel => ['#' + panel.id, panel]));
  const firstCard = cards[0];
  let selectedCard;

  function select(card) {
    selectedCard = card;
    for (const item of cards) {
      const selected = item === card;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      panels.get(item.hash).hidden = !selected;
    }
  }

  function cardFromLocation() {
    return cards.find(card => card.hash === location.hash) || firstCard;
  }

  cardList.setAttribute('role', 'tablist');
  for (const card of cards) {
    const panel = panels.get(card.hash);
    card.setAttribute('role', 'tab');
    card.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', card.id);
    panel.tabIndex = 0;
    card.addEventListener('click', event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      event.preventDefault();
      if (selectedCard === card) return;
      history.pushState(null, '', card.hash);
      select(card);
    });
  }

  cardList.addEventListener('keydown', event => {
    const index = cards.indexOf(event.target);
    if (index < 0) return;
    const last = cards.length - 1;
    let next;
    switch (event.key) {
      case 'ArrowLeft': next = index === 0 ? last : index - 1; break;
      case 'ArrowRight': next = index === last ? 0 : index + 1; break;
      case 'Home': next = 0; break;
      case 'End': next = last; break;
      case ' ': event.preventDefault(); event.target.click(); return;
      default: return;
    }
    event.preventDefault();
    cards[next].focus();
    cards[next].click();
  });

  select(cardFromLocation());
  window.addEventListener('popstate', () => select(cardFromLocation()));
  window.addEventListener('hashchange', () => select(cardFromLocation()));
})();
