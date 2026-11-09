(function () {
  const service = 'SERVICE-RUBYBUBYS-HERZ-SCHNAUZE';
  const storageKey = 'gemden_gassi_plan_v1';
  const placeId = /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
  const berlin = { south: 52.33, north: 52.69, west: 13.08, east: 13.77 };

  function distance(from, place) {
    const rad = Math.PI / 180;
    const lat = (place.latitude - from.latitude) * rad;
    const lon = (place.longitude - from.longitude) * rad;
    const a = Math.sin(lat / 2) ** 2 + Math.cos(from.latitude * rad)
      * Math.cos(place.latitude * rad) * Math.sin(lon / 2) ** 2;
    return 12742 * Math.asin(Math.sqrt(Math.min(1, a)));
  }

  function nearbyBounds({ latitude, longitude }) {
    // Snap the box to a grid. Distance uses the device coordinates in memory only.
    const lat = Math.round(latitude * 50) / 50;
    const lon = Math.round(longitude * 50) / 50;
    const lonSpan = Math.min(1, 0.06 / Math.cos(lat * Math.PI / 180));
    return {
      south: Math.max(-85, lat - 0.06), north: Math.min(85, lat + 0.06),
      west: Math.max(-180, lon - lonSpan), east: Math.min(180, lon + lonSpan)
    };
  }

  function rank(items, location) {
    const places = items.filter(place => placeId.test(place.id)
      && place.services?.some(link => link.id === service && link.dog_access === 'designated_off_leash'));
    if (!location) return places;
    return places.map(place => ({ ...place, distance: distance(location, place) }))
      .sort((a, b) => a.distance - b.distance);
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = { distance, nearbyBounds, rank };
    return;
  }

  const client = window.FFE_SUPABASE_CLIENT;
  const lang = document.documentElement.lang;
  const base = lang === 'en' ? '/en/' : '/';
  const format = new Intl.NumberFormat(lang, { maximumFractionDigits: 1 });
  const el = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const anchor = (text, href) => {
    const link = el('a', text);
    link.href = href;
    return link;
  };
  const button = (text, onClick) => {
    const control = el('button', text);
    control.type = 'button';
    control.addEventListener('click', onClick);
    return control;
  };

  function placeLink(id, slot) {
    const query = new URLSearchParams({ leistung: service, ort: id });
    if (slot) query.set('zeit', slot);
    return base + 'treffpunkte/?' + query;
  }

  async function addToCalendar(place, slot) {
    const start = Date.parse(slot.start);
    const end = Date.parse(slot.end);
    const link = new URL(placeLink(place.id, slot.start), 'https://gemden.red').href;
    const title = 'Gassirunde';
    const native = window.Capacitor?.Plugins?.GemDenWidget;
    if (native?.addToCalendar) {
      try {
        await native.addToCalendar({ start, end, title, place: place.name, link });
        return;
      } catch { /* The calendar file is the fallback. */ }
    }
    const escape = value => String(value).replaceAll('\\', '\\\\').replaceAll(/\r?\n/g, '\\n').replaceAll(',', '\\,').replaceAll(';', '\\;');
    const stamp = time => new Date(time).toISOString().replaceAll(/[-:]/g, '').replace(/\.\d{3}/, '');
    const contents = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//GemDen//Gassi//DE', 'BEGIN:VEVENT',
      'UID:' + place.id + '-' + start + '@gemden.red', 'DTSTAMP:' + stamp(Date.now()),
      'DTSTART:' + stamp(start), 'DTEND:' + stamp(end), 'SUMMARY:' + title,
      'LOCATION:' + escape(place.name), 'DESCRIPTION:' + escape(link), 'URL:' + link,
      'END:VEVENT', 'END:VCALENDAR', ''].join('\r\n');
    const url = URL.createObjectURL(new Blob([contents], { type: 'text/calendar;charset=utf-8' }));
    const download = anchor(title, url);
    download.download = 'gemden-gassi.ics';
    document.body.append(download);
    download.click();
    download.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function rpc(name, args) {
    if (!client) throw Error('offline');
    const { data, error } = await client.rpc(name, args);
    if (error) throw error;
    return data;
  }

  function savedPlace() {
    try {
      const id = localStorage.getItem(storageKey);
      return placeId.test(id) ? id : '';
    } catch {
      return '';
    }
  }

  async function savePlace(id, name) {
    try {
      if (id) localStorage.setItem(storageKey, id);
      else localStorage.removeItem(storageKey);
    } catch {
      return false;
    }
    const widget = window.Capacitor?.Plugins?.GemDenWidget;
    if (widget) await widget.setPlace({ id, name }).catch(() => {});
    return true;
  }

  function attendance(dogs, companions) {
    const dogLabel = Number(dogs) === 1 ? 'Hund' : 'Hunde';
    const personLabel = Number(companions) === 1 ? 'Begleitperson' : 'Begleitpersonen';
    return `${Number(dogs) || 0} ${dogLabel} · ${Number(companions) || 0} ${personLabel}`;
  }

  async function renderPlan(target) {
    const id = savedPlace();
    target.replaceChildren();
    if (!id) {
      target.append(el('p', 'Auf diesem Gerät ist noch kein Gassi-Ort gemerkt.', 'gassi-note'));
      return;
    }
    target.append(el('p', 'Gassifenster werden geladen …', 'gassi-note'));
    try {
      const data = await rpc('get_place_walks', { place: id, service, chosen_slot: null, guest_key: null, page: 0 });
      if (savedPlace() !== id) return;
      const serverTime = Date.parse(data.server_time) || Date.now();
      const slots = data.slots.filter(slot => Date.parse(slot.start) > serverTime);
      // Show the next windows with plans first, falling back to the next free windows.
      const planned = slots.filter(slot => Number(slot.coming_count) || Number(slot.companion_count));
      const shown = (planned.length ? planned : slots).slice(0, 3);
      const date = new Intl.DateTimeFormat(lang, { weekday: 'short', day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: data.place.time_zone });
      const widget = window.Capacitor?.Plugins?.GemDenWidget;
      if (widget) widget.setPlace({
        id,
        name: data.place.name,
        summary: attendance(data.place.here_count, data.place.companion_here_count),
        next: shown.length ? date.format(new Date(shown[0].start)) : ''
      }).catch(() => {});
      target.replaceChildren(el('strong', data.place.name));
      if (shown.length) {
        const list = el('ul', '', 'gassi-windows');
        const time = new Intl.DateTimeFormat(lang, { hour: '2-digit', minute: '2-digit', timeZone: data.place.time_zone });
        for (const slot of shown) {
          const item = el('li');
          item.append(anchor(date.format(new Date(slot.start)) + '–' + time.format(new Date(slot.end)), placeLink(id, slot.start)),
            el('div', attendance(slot.coming_count, slot.companion_count) + ' angekündigt', 'gassi-note'),
            button('In den Handy-Kalender', () => addToCalendar(data.place, slot)));
          list.append(item);
        }
        target.append(list);
      } else {
        target.append(el('p', 'Für diesen Ort gibt es derzeit keine Gassifenster.', 'gassi-note'));
      }
      target.append(button('Gemerkten Ort entfernen', async () => {
        if (await savePlace('', '')) renderPlan(target);
      }));
    } catch {
      if (savedPlace() !== id) return;
      target.replaceChildren(el('p', 'Die Gassifenster sind gerade nicht verfügbar.', 'gassi-note'),
        button('Gemerkten Ort entfernen', async () => {
          if (await savePlace('', '')) renderPlan(target);
        }));
    }
  }

  for (const target of document.querySelectorAll('[data-gassi-plan]')) {
    const details = target.closest('details');
    if (details && !details.open) {
      details.addEventListener('toggle', () => { if (details.open) renderPlan(target); });
    } else {
      renderPlan(target);
    }
  }

  const locate = document.getElementById('gassi-locate');
  if (!locate) return;
  const form = document.getElementById('gassi-search');
  const status = document.getElementById('gassi-status');
  const results = document.getElementById('gassi-results');
  let request = 0;

  async function currentPosition() {
    const options = { enableHighAccuracy: false, maximumAge: 120000, timeout: 12000 };
    if (window.Capacitor?.isNativePlatform() && window.Capacitor.Plugins.Geolocation) {
      return window.Capacitor.Plugins.Geolocation.getCurrentPosition(options);
    }
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options));
  }

  function placeCard(place) {
    const card = el('article', '', 'gassi-card');
    const nearby = Number.isFinite(place.distance) ? ' · ' + format.format(place.distance) + ' km' : '';
    const actions = el('div', '', 'gassi-actions');
    card.append(el('h3', place.name), el('p', place.locality + nearby));
    actions.append(anchor('Treffpunkt öffnen ↗', placeLink(place.id)));
    if (place.services.some(link => link.id === service && link.walks_enabled)) {
      card.append(el('p', attendance(place.here_count, place.companion_here_count) + ' gerade da'),
        el('p', attendance(place.coming_count, place.companion_count) + ' im laufenden Fenster eingetragen', 'gassi-note'));
      actions.append(button('Für Gassiplan merken', async () => {
        if (!await savePlace(place.id, place.name)) {
          status.textContent = 'Der Ort konnte auf diesem Gerät nicht gespeichert werden.';
          return;
        }
        status.textContent = 'Der Ort ist für deinen Gassiplan gemerkt.';
        renderPlan(document.querySelector('[data-gassi-plan]'));
      }));
    } else {
      card.append(el('p', 'Hier gibt es Ortsinfos und noch keine Gassifenster.', 'gassi-note'));
    }
    card.append(actions);
    return card;
  }

  async function search(serial, term, position) {
    results.replaceChildren();
    status.textContent = 'Hundeausläufe werden gesucht …';
    try {
      const items = [];
      const bounds = position ? nearbyBounds(position) : berlin;
      let more;
      for (let page = 0; page < 6; page++) {
        const data = await rpc('discover_places', { service, search: term, ids: null, bounds, page });
        if (serial !== request) return;
        items.push(...data.items);
        more = data.has_more;
        if (!more) break;
      }
      const places = rank(items, position).slice(0, 8);
      results.replaceChildren(...places.map(placeCard));
      if (!places.length) {
        status.textContent = 'In dieser Auswahl ist kein ausgewiesener Hundeauslauf erfasst. Versuch es über die Berlin-Karte.';
      } else if (more) {
        status.textContent = 'Auswahl aus den ersten Treffern. Weitere Hundeausläufe findest du auf der Karte.';
      } else {
        status.textContent = 'Stand der Check-ins' + ' · ' + new Intl.DateTimeFormat(lang, { timeStyle: 'short' }).format(new Date());
      }
    } catch {
      if (serial === request) status.textContent = 'Die Suche ist gerade nicht verfügbar. Versuch es gleich noch einmal.';
    }
  }

  locate.addEventListener('click', async () => {
    const serial = ++request;
    locate.disabled = true;
    status.textContent = 'Standort wird einmalig bestimmt …';
    try {
      const { coords } = await currentPosition();
      if (serial !== request) return;
      await search(serial, '', coords);
    } catch {
      if (serial === request) status.textContent = 'Standort nicht verfügbar. Suche stattdessen nach einem Ort oder Bezirk.';
    } finally {
      locate.disabled = false;
    }
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const term = document.getElementById('gassi-query').value.trim();
    if (term) search(++request, term);
  });
})();
