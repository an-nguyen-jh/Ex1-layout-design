// handle text shink to fit width
const menuBtn = document.getElementById("menu-btn");
const pictureNav = document.getElementById("picture-nav");
const articleNav = document.getElementById("article-nav");
const pictures = document.querySelector(".picture-section .scroll-container");
const articles = document.querySelector(".article-section .scroll-container");
const scrollSectionList = document.querySelectorAll(
  ".section-heading__content__chevron-btn"
);

const PICTURES_SCROLL_WIDTH = pictures.scrollWidth;
const ARTICLES_SCROLL_WIDTH = articles.scrollWidth;
const SCROLL_CONTAINER_WIDTH =
  document.querySelector(".scroll-group").offsetWidth;
const CARD_WIDTH = document.querySelector(".scroll__card").offsetWidth;

const navigationList = ["sub-masthead", "credit-img"];

function toggleMenu() {
  const collapseNav = document.getElementById("header-menu");
  collapseNav.classList.toggle("toggle");
  header.classList.toggle("toggle");
}

// add scroll behavior to scroll button
function scrollCardList(scrollElm, scrollWidth) {
  let translateLen = CARD_WIDTH;
  if (translateLen > scrollWidth - SCROLL_CONTAINER_WIDTH) {
    translateLen = scrollWidth - SCROLL_CONTAINER_WIDTH;
  }

  scrollElm.scrollLeft = Math.floor(scrollElm.scrollLeft - translateLen);
}

//handle dragg to scroll in scroll container
function handleDragStart(e) {
  e.preventDefault();
  this.isDown = true;
  //postion to calc change px when dragg
  this.style.cursor = "grabbing";
  this.style.userSelect = "none";
  this.mouseOldX = e.pageX;
}

function handleDragMove(e) {
  e.preventDefault();
  if (!this.isDown) return;

  const dx = e.pageX - this.mouseOldX;
  this.scrollLeft -= Math.floor(dx * 2);
}

function handleDragEnd(e) {
  this.isDown = false;
  e.preventDefault();
  this.style.cursor = "grab";
  this.style.removeProperty("user-select");
}

menuBtn.addEventListener("click", toggleMenu);
pictureNav.addEventListener("click", function () {
  scrollCardList(pictures, PICTURES_SCROLL_WIDTH);
});

articleNav.addEventListener("click", function () {
  scrollCardList(articles, ARTICLES_SCROLL_WIDTH);
});
//if pictures or articles width smaller than container width
// set justify-content center & remove navigation
if (PICTURES_SCROLL_WIDTH <= SCROLL_CONTAINER_WIDTH) {
  pictures.style.justifyContent = "center";
  pictures.style.cursor = "auto";
  pictureNav.style.display = "none";
} else {
  pictures.addEventListener("mousedown", handleDragStart);
  pictures.addEventListener("mousemove", handleDragMove);
  pictures.addEventListener("mouseup", handleDragEnd);
  pictures.addEventListener("mouseleave", handleDragEnd);
}
if (ARTICLES_SCROLL_WIDTH <= SCROLL_CONTAINER_WIDTH) {
  articles.style.justifyContent = "center";
  articleNav.style.display = "none";
  pictures.style.cursor = "auto";
} else {
  articles.addEventListener("mousedown", handleDragStart);
  articles.addEventListener("mousemove", handleDragMove);
  articles.addEventListener("mouseup", handleDragEnd);
  articles.addEventListener("mouseleave", handleDragEnd);
}
console.log(scrollSectionList);
scrollSectionList.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    //support recently
    // document.getElementById(navigationList[i]).scrollIntoView({
    //   behavior: "smooth",
    // });
    const offsetTop = document.getElementById(navigationList[i]).offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
