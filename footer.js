const footerTranslations = {
  en: { rights: 'All rights reserved.', home: 'Home', closet: 'Closet', calendar: 'Calendar', about: 'About me' },
  es: { rights: 'Todos los derechos reservados.', home: 'Inicio', closet: 'Armario', calendar: 'Calendario', about: 'Sobre mí' }
};

function renderFooter() {
  const language = document.documentElement.lang === 'es' ? 'es' : 'en';
  document.querySelectorAll('[data-footer-year]').forEach((item) => {
    item.textContent = new Date().getFullYear();
  });
  document.querySelectorAll('[data-footer]').forEach((item) => {
    item.textContent = footerTranslations[language][item.dataset.footer];
  });
}

document.addEventListener('click', (event) => {
  if (event.target.closest('[data-language]')) setTimeout(renderFooter);
});

renderFooter();
