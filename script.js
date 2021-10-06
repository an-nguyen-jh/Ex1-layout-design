function toggle(id) {
  const collapseNav = document.getElementById("collapse-nav");
  collapseNav.classList.toggle("toggle");
}

function shinkNavbarWhenScroll() {
  //determine event when webpage scroll
  const navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.backgroundColor = "#323339";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
}

const toggleBtn = document.getElementById("collapse-btn");
//const infoBtn = document.getElementById("collapse-info");

toggleBtn.addEventListener("click", () => {
  toggle("collapse-nav");
});

window.addEventListener("scroll", shinkNavbarWhenScroll);
