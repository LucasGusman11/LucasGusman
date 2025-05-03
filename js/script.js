
let currentLang = 'es';

function updateLanguage(lang) {
  document.querySelectorAll('[data-es]').forEach(el => {
    if (el.hasAttribute("placeholder")) {
      el.setAttribute("placeholder", el.getAttribute(`data-${lang}`));
    } else {
      el.textContent = el.getAttribute(`data-${lang}`);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateLanguage(currentLang);

  const toggleBtn = document.getElementById('lang-toggle-btn');
  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage(currentLang);
    toggleBtn.src = currentLang === 'es' ? 'img/es.png' : 'img/en.png';
  });
});
