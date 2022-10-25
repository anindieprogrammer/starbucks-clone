const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

menuBtn.addEventListener("click", navToggle);
