document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  const logo = document.getElementById("logo");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      logo.src = "byui-logo-white.png";
    } else {
      logo.src = "byui-logo-blue.webp";
    }
  });
});
