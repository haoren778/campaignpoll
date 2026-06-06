
// 这个文件是 Vercel Serverless Function
// 它会接收投票请求，记录投票

module.exports = async (req, res) => {
  // 允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { campaignId, votes } = req.body;

      if (!campaignId || !votes || votes.length === 0) {
        return res.status(400).json({ error: 'Invalid data' });
      }

      // 模拟保存投票数据
      const voteData = {
        campaignId,
        votes,
        timestamp: new Date().toISOString()
      };

      // 这里应该保存到数据库
      console.log('Vote received:', voteData);

      // 检查是否已经投过票（模拟）
      const hasVoted = localStorage.getItem('voted_' + campaignId);
      if (hasVoted) {
        return res.status(409).json({ success: false, message: 'You have already voted.' });
      }

      // 标记已投票
      localStorage.setItem('voted_' + campaignId, 'true');

      return res.status(200).json({ success: true, message: 'Thank you for voting!' });
    } catch (error) {
      return res.status(500).json({ error: 'Server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
