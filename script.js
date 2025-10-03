const toggleBtn = document.querySelector(".theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    toggleBtn.textContent = "🌙";
  } else {
    toggleBtn.textContent = "☀️";
  }
});
