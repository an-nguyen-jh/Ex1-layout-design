const imagesLinkArray = [
  "https://source.unsplash.com/random",
  "https://source.unsplash.com/random",
  "https://source.unsplash.com/random",
  "https://source.unsplash.com/random",
  "https://source.unsplash.com/random",
  "https://source.unsplash.com/random",
];

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const mainImage = document.getElementById("main-image");
const imagesList = document.getElementById("image-list");

let index = 0;
//function to convert html to Node element
function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}
//========================================== Generator ==================================================//
//generator main image & image list
const mainImageElm = htmlToElement(`
<img
class="carousel__main-image"
src="${imagesLinkArray[index]}"
alt="Main image display"
/>`);

//create image list and display in bottom of carousel
imagesLinkArray.forEach((imageLink) => {
  const imageItem = htmlToElement(`
  <img
  class="carousel__image-item"
  src="${imageLink}"
  alt="Image Item"
/>`);
  imagesList.appendChild(imageItem);
});

//add first image to main image element in carousel
mainImage.appendChild(mainImageElm);
//========================================== Handle Event ==================================================//

//create function to handle navigation Button
function preImage() {}

function nextImage() {}
