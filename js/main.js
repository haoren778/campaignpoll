document.getElementById('campaignForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const campaignName = document.getElementById('campaignName').value;
  const candidateNames = document.getElementById('candidateNames').value;

  // 整理数据
  const campaignData = {
    name: campaignName,
    candidates: candidateNames.split(',').map(c => c.trim()).filter(c => c)
  };

  // 把数据转换成 Base64 字符串（塞进 URL）
  const encodedData = btoa(encodeURIComponent(JSON.stringify(campaignData)));

  // 生成最终链接
  const finalLink = `${window.location.origin}/candidate.html?data=${encodedData}`;

  // 显示结果
  document.getElementById('result').style.display = 'block';
  document.getElementById('shareLink').value = finalLink;
});

function copyLink() {
  const linkInput = document.getElementById('shareLink');
  linkInput.select();
  linkInput.setSelectionRange(0, 99999); // For mobile
  document.execCommand('copy');
  alert('✅ Link copied! Send it to your friends.');
}
// 设置默认语言
const defaultLang = 'en';

function switchLang(select) {
  const lang = select.value;
  localStorage.setItem('siteLang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  // 示例：切换页面文字（你以后可以扩展）
  const texts = {
    en: { start: 'Start My Campaign', vote: 'Submit Vote' },
    fr: { start: 'Lancer ma campagne', vote: 'Soumettre le vote' },
    de: { start: 'Kampagne starten', vote: 'Abstimmen' },
    es: { start: 'Iniciar campaña', vote: 'Enviar voto' }
  };

  const t = texts[lang] || texts[lang.split('-')[0]] || texts['en'];

  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Start')) btn.textContent = t.start;
  });
}

// 页面加载时恢复语言
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLang') || defaultLang;
  document.getElementById('langSelect').value = savedLang;
  const footer = document.getElementById('langSelectFooter');
  if (footer) footer.value = savedLang;
  applyLang(savedLang);
});
