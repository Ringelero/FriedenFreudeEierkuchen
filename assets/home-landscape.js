/* One-time decorative feedback; links and text work independently. */
(function () {
  const routes = [...document.querySelectorAll('.home-landscape .flow-route')];
  if (!routes.length) return;
  // Keep the live guide on the painted floor when translated copy changes the scroll height.
  const hero = document.querySelector('.home-hero');
  const scene = hero?.querySelector('.blob-home-scene');
  const seat = scene?.querySelector('[data-blob-seat]');
  const phone = matchMedia('(max-width:760px)');
  const alignResident = () => {
    if (!hero || !scene || !seat) return;
    if (!phone.matches) {scene.style.removeProperty('--home-seat-top'); return;}
    const frame = hero.getBoundingClientRect(), hollow = scene.getBoundingClientRect();
    const height = parseFloat(getComputedStyle(document.body).getPropertyValue('--resident-h')) || 107.5;
    const floor = frame.top + frame.height * .642;
    const top = floor - hollow.top + seat.offsetHeight / 2 - height;
    const bounded = Math.max(seat.offsetHeight / 2, Math.min(hollow.height - seat.offsetHeight / 2, top));
    scene.style.setProperty('--home-seat-top',bounded.toFixed(2) + 'px');
  };
  alignResident();
  window.addEventListener('resize',alignResident,{passive:true});
  if (hero && typeof ResizeObserver !== 'undefined') new ResizeObserver(alignResident).observe(hero);
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const canMove = () => !motion.matches && !document.body.classList.contains('home-motion-paused') && !document.hidden;
  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        if (canMove()) entry.target.classList.add('is-arriving');
        observer.unobserve(entry.target);
      }
    },{threshold:.25});
    routes.forEach(route => observer.observe(route));
  }
  routes.forEach(route => {
    route.addEventListener('pointerdown',() => {if (canMove()) route.classList.add('is-touched');},{passive:true});
    route.addEventListener('animationend',event => {if (event.animationName === 'flowTouch') route.classList.remove('is-touched');});
  });
})();
