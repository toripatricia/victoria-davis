// === MOBILE MENU TOGGLE ===
const hamburger = document.getElementById("hamburger");
const navMenus = document.querySelectorAll(".nav-links");

hamburger.addEventListener("click", () => {
  navMenus.forEach(menu => menu.classList.toggle("show"));
});


// === MOBILE MEDIA DROPDOWN (ACCORDION) ===
const mediaToggle = document.getElementById("mediaToggle");
const mediaDropdown = document.getElementById("mediaDropdown");

mediaToggle.addEventListener("click", (e) => {
  if (window.innerWidth <= 900) {
    e.preventDefault(); 
    mediaDropdown.classList.toggle("open");
  }
});