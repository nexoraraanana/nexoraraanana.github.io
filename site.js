document.querySelectorAll('form[data-wa]').forEach((f) => {
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = (n) => (f.elements[n] ? f.elements[n].value.trim() : '');
    const needs = [...f.querySelectorAll('input[name="needs"]:checked')].map((i) => i.value).join(', ') || '-';
    const text = f.dataset.tpl.replace('{name}', val('name') || '-').replace('{city}', val('city') || '-').replace('{needs}', needs).replace('{msg}', val('msg'));
    window.open('https://wa.me/' + f.dataset.wa + '?text=' + encodeURIComponent(text.trim()), '_blank', 'noopener');
  });
});
