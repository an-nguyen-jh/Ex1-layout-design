const navigationLinks = document.querySelectorAll(
  ".navbar__collapse-list li a"
);
const underline = document.querySelector(".navbar__underline");
const toggleBtn = document.getElementById("collapse-btn");
const form = document.getElementById("input-form");

//F1: toggle hamburger menu
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

//F3: 2 function to handle hover when hover mouse in navigation list
function behaviourWhenMouseEnter() {
  underline.style.width = this.offsetWidth * 1.5 + "px";
  underline.style.left = `${
    this.offsetLeft - Math.floor(this.offsetWidth * 0.25)
  }px`;
}

function behaviourWhenMouseLeave() {
  underline.style.width = "0";
}

//F1: Add event listener for hamburger menu
toggleBtn.addEventListener("click", toggle);
//F2: Add event listen for scroll page
window.addEventListener("scroll", shinkNavbarWhenScroll);
//prevent default (page load) when submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
//F3:add event listener  fake hover with mousenter & mouseleave
navigationLinks.forEach((item) => {
  //using position of li elements to defined position of under line
  item.addEventListener("mouseenter", behaviourWhenMouseEnter);
  item.addEventListener("focusin", behaviourWhenMouseEnter);

  item.addEventListener("mouseleave", behaviourWhenMouseLeave);
  item.addEventListener("focusout", behaviourWhenMouseLeave);
});
