/* One-time decorative feedback; links and text work independently. */
(function () {
  const routes = [...document.querySelectorAll('.home-landscape .flow-route')];
  if (!routes.length) return;
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
