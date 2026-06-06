document.getElementById('campaignForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const campaignName = document.getElementById('campaignName').value;
  const candidateNames = document.getElementById('candidateNames').value;

  // 生成随机 campaign ID
  const campaignId = Math.random().toString(36).substr(2, 9);

  // 保存 campaign 数据（模拟）
  const campaignData = {
    id: campaignId,
    name: campaignName,
    candidates: candidateNames.split(',').map(c => c.trim()).filter(c => c)
  };

  // 模拟保存到服务器（实际应该用后端数据库）
  localStorage.setItem('campaign_' + campaignId, JSON.stringify(campaignData));

  // 显示结果
  document.getElementById('result').style.display = 'block';
  document.getElementById('shareLink').value = window.location.origin + '/candidate.html?id=' + campaignId;
});

function copyLink() {
  const linkInput = document.getElementById('shareLink');
  linkInput.select();
  document.execCommand('copy');
  alert('Link copied to clipboard!');
}
