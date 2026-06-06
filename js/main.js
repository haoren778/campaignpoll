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
