function toggle(id) {
  const collapseNav = document.getElementById("collapse-nav");
  collapseNav.classList.toggle("toggle");
}

function shinkNavbarWhenScroll() {
  //determine event when webpage scroll
  const navbar = document.getElementById("navbar");
  const verticalLogo = document.querySelector(
    ".navbar__homepage-logo--vertical"
  );

  //set the break point when the navbar change and logo rotate
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.backgroundColor = "#323339";
    verticalLogo.style.top = "0px";
    verticalLogo.style.transform = "rotate(0deg)";
  } else {
    navbar.style.backgroundColor = "transparent";
    verticalLogo.style.top = "60px";
    verticalLogo.style.transform = "rotate(90deg) translate(50%, -50%)";
  }
}

const toggleBtn = document.getElementById("collapse-btn");

toggleBtn.addEventListener("click", toggle);

window.addEventListener("scroll", shinkNavbarWhenScroll);
