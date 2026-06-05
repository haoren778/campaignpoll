export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, slogan } = req.body;
  const id = name.toLowerCase().replace(/\s+/g, "-");

  res.json({
    success: true,
    link: `https://yourdomain.vercel.app/candidate.html?id=${id}`
  });
}
