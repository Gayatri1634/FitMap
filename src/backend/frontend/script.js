document.getElementById("goalForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  
  const data = {
    height: document.getElementById("height").value,
    weight: document.getElementById("weight").value,
    goal: document.getElementById("goal").value,
  };

  const response = await fetch("http://127.0.0.1:5000/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  localStorage.setItem("recommendation", result.message);
  window.location.href = "recommendation.html";
});
