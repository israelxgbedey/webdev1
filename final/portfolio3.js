const dropdown = document.querySelector(".dropdown-menu");
const navMenu = document.querySelector(".navbar .menu ul.nav-menu");

dropdown.addEventListener("click", function() {
  this.classList.toggle("rotateUp");
  navMenu.classList.toggle("toggle-menu");
});


window.sr = ScrollReveal();
sr.reveal("img", {
  duration: 800,
  origin: "bottom",
  mobile: true
});