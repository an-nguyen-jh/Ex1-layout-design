// handle text shink to fit width
const menuBtn = document.getElementById("menu-btn");

function toggleMenu() {
  const collapseNav = document.getElementById("header-menu");
  collapseNav.classList.toggle("toggle");
}
menuBtn.addEventListener("click", toggleMenu);
