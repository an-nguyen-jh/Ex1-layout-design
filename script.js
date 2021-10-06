function toggle(id) {
  const collapseNav = document.getElementById("collapse-nav");
  collapseNav.classList.toggle("toggle");
}

function shinkNavbarWhenScroll() {
  //determine event when webpage scroll
  const navbar = document.getElementById("navbar");
  //console.log(window.innerHeight, window.innerWidth);
  //set the break point when the navbar change background
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.backgroundColor = "#323339";
    // navbar.style.lineHeight = "60px";
  } else {
    navbar.style.backgroundColor = "transparent";
    // navbar.style.lineHeight = "80px";
  }
}

const toggleBtn = document.getElementById("collapse-btn");

toggleBtn.addEventListener("click", toggle);

window.addEventListener("scroll", shinkNavbarWhenScroll);
