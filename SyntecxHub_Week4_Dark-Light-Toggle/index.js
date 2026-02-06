const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

// Apply saved theme on page load
const savedTheme = localStorage.getItem("lumina-theme");

if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  icon.classList.replace("fa-moon", "fa-sun");
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  const isDark = body.classList.contains("dark-theme");

  // Icon switch
  if (isDark) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("lumina-theme", "dark");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("lumina-theme", "light");
  }
});
