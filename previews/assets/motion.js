// Gentle 3D tilt for cards named in the script tag's data-tilt attribute. Mouse only, and off for reduced motion.
(() => {
  const selector = document.currentScript?.dataset.tilt;
  const canTilt = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches;
  if (!selector || !canTilt) return;

  document.querySelectorAll(selector).forEach((card) => {
    const resting = getComputedStyle(card).transform;
    const base = resting === 'none' ? '' : resting;
    card.style.transition = 'transform .25s ease-out';
    card.addEventListener('pointermove', (event) => {
      const box = card.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateZ(8px) ${base}`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
})();
