// Preview-only helpers. Remove this script tag when a design moves to the real site.
(() => {
  const designs = ['1-ascent', '2-resume', '3-trail', '4-letter', '5-summit',
    '6-collage', '7-portfolio', '8-portrait', '9-index', '10-sketchbook'];
  const index = designs.findIndex((slug) => location.pathname.includes(`/${slug}`));

  const bar = document.createElement('div');
  bar.style.cssText = 'display:flex;flex-wrap:wrap;gap:4px 16px;align-items:center;justify-content:center;' +
    'padding:6px 16px;background:#fff;color:#111827;font:14px/1.4 system-ui,sans-serif;border-bottom:1px solid #d1d5db';
  const link = (text, href) => `<a href="${href}" style="color:#1d4ed8;padding:6px 0">${text}</a>`;
  const next = designs[(index + 1) % designs.length];
  bar.innerHTML = `<span>Design preview ${index + 1} of ${designs.length}</span>` +
    link('All designs', '../') + link('Next design', `../${next}/`);
  document.body.prepend(bar);

  // Nothing is sent from a preview: no form backend exists yet.
  document.querySelectorAll('form[data-preview]').forEach((form) => {
    const status = document.createElement('p');
    status.setAttribute('role', 'status');
    status.style.fontWeight = '600';
    form.append(status);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      status.textContent = 'This is a design preview, so your request was not sent.';
    });
  });
})();
