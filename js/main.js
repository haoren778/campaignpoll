function switchLang(el) {
  const lang = el.value;
  localStorage.setItem('siteLang', lang);
  location.href = location.pathname + '?lang=' + lang;
}

(function () {
  const params = new URLSearchParams(location.search);
  const lang = params.get('lang') || localStorage.getItem('siteLang') || 'en';

  const t = {
    en: { title: 'Ready to Win?', desc: 'It only takes 30 seconds.', btn: 'Start My Campaign' },
    fr: { title: 'Prêt à gagner ?', desc: 'Créez votre campagne.', btn: 'Lancer ma campagne' },
    de: { title: 'Bereit zu gewinnen?', desc: 'Starte deine Kampagne.', btn: 'Kampagne starten' },
    es: { title: '¿Listo para ganar?', desc: 'Crea tu campaña.', btn: 'Iniciar campaña' }
  };

  const d = t[lang] || t.en;

  setTimeout(() => {
    document.querySelector('.hero h2').innerText = d.title;
    document.querySelector('.hero p').innerText = d.desc;
    document.querySelector('.btn-primary').innerText = d.btn;
  }, 0);
})();
