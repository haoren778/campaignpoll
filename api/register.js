// 这个文件是 Vercel Serverless Function
// 它会接收前端请求，返回 campaign 数据

module.exports = async (req, res) => {
  // 允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const { campaign } = req.query;
    if (!campaign) {
      return res.status(400).json({ error: 'Campaign ID required' });
    }

    // 从 localStorage 模拟读取（实际应该用数据库）
    const data = localStorage.getItem('campaign_' + campaign);
    if (data) {
      return res.status(200).json(JSON.parse(data));
    } else {
      return res.status(404).json({ error: 'Campaign not found' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { campaignId, votes } = req.body;

      // 模拟保存投票数据
      const voteData = {
        campaignId,
        votes,
        timestamp: new Date().toISOString()
      };

      // 这里应该保存到数据库
      console.log('Vote received:', voteData);

      return res.status(200).json({ success: true, message: 'Vote recorded' });
    } catch (error) {
      return res.status(500).json({ error: 'Server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
