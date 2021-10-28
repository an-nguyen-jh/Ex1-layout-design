// handle text shink to fit width
const menuBtn = document.getElementById("menu-btn");
const pictureNav = document.getElementById("picture-nav");
const articleNav = document.getElementById("article-nav");
const pictures = document.querySelector(".picture-section .scroll-container");
const articles = document.querySelector(".article-section .scroll-container");

const PICTURES_SCROLL_WIDTH = pictures.scrollWidth;
const ARTICLES_SCROLL_WIDTH = articles.scrollWidth;
const SCROLL_CONTAINER_WIDTH =
  document.querySelector(".scroll-group").offsetWidth - pictureNav.offsetWidth;
const CARD_WIDTH = document.querySelector(".scroll__card").offsetWidth;

function toggleMenu() {
  const collapseNav = document.getElementById("header-menu");
  collapseNav.classList.toggle("toggle");
}

function scrollCardList(scrollElm, scrollWidth) {
  let translateLen = CARD_WIDTH;
  if (translateLen > scrollWidth - SCROLL_CONTAINER_WIDTH) {
    translateLen = scrollWidth - SCROLL_CONTAINER_WIDTH;
  }

  scrollElm.scrollLeft = scrollElm.scrollLeft - translateLen;
}

menuBtn.addEventListener("click", toggleMenu);
pictureNav.addEventListener("click", function () {
  scrollCardList(pictures, PICTURES_SCROLL_WIDTH);
});

articleNav.addEventListener("click", function () {
  scrollCardList(articles, ARTICLES_SCROLL_WIDTH);
});
