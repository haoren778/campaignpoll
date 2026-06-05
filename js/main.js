document.getElementById("registerForm")?.addEventListener("submit", async e => {
  e.preventDefault();

  const name = e.target[0].value;
  const slogan = e.target[1].value;

  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, slogan })
  });

  const data = await res.json();
  alert("Campaign created!\nShare link:\n" + data.link);
});
