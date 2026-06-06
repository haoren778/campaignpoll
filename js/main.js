document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('siteLang') || 'en';
  document.getElementById('langSelect').value = lang;
  const footer = document.getElementById('langSelectFooter');
  if (footer) footer.value = lang;
  applyLang(lang);
});

function switchLang(el) {
  localStorage.setItem('siteLang', el.value);
  location.reload();
}

function applyLang(lang) {
  const t = {
    en: {
      heroTitle: 'Ready to Win?',
      heroDesc: 'It only takes 30 seconds to start your campaign.',
      btnStart: 'Start My Campaign',
      btnVote: 'Submit Vote',
      footer: 'Made with ❤️ for free elections worldwide'
    },
    'fr-CA': {
      heroTitle: 'Prêt à gagner ?',
      heroDesc: 'Lancez votre campagne en 30 secondes.',
      btnStart: 'Lancer ma campagne',
      btnVote: 'Soumettre le vote',
      footer: 'Fait avec ❤️ pour des élections libres'
    },
    fr: {
      heroTitle: 'Prêt à gagner ?',
      heroDesc: 'Créez votre campagne en 30 secondes.',
      btnStart: 'Lancer ma campagne',
      btnVote: 'Soumettre le vote',
      footer: 'Fait avec ❤️ pour des élections libres'
    },
    de: {
      heroTitle: 'Bereit zu gewinnen?',
      heroDesc: 'Starte deine Kampagne in 30 Sekunden.',
      btnStart: 'Kampagne starten',
      btnVote: 'Abstimmen',
      footer: 'Mit ❤️ für freie Wahlen'
    },
    es: {
      heroTitle: '¿Listo para ganar?',
      heroDesc: 'Crea tu campaña en 30 segundos.',
      btnStart: 'Iniciar campaña',
      btnVote: 'Enviar voto',
      footer: 'Hecho con ❤️ para elecciones libres'
    },
    it: {
      heroTitle: 'Pronto per vincere?',
      heroDesc: 'Crea la tua campagna in 30 secondi.',
      btnStart: 'Avvia la campagna',
      btnVote: 'Invia voto',
      footer: 'Fatto con ❤️ per elezioni libere'
    }
  };

  const sel = t[lang] || t['en'];

  const h2 = document.querySelector('.hero h2');
  if (h2) h2.textContent = sel.heroTitle;

  const hp = document.querySelector('.hero p');
  if (hp) hp.textContent = sel.heroDesc;

  document.querySelectorAll('.btn-primary').forEach(b => {
    if (b.textContent.length < 30) b.textContent = sel.btnStart;
  });

  const foot = document.querySelector('footer');
  if (foot) foot.innerHTML = sel.footer + '<br><a href="https://github.com/haoren778/campaignpoll" target="_blank">View Source</a>';
}

