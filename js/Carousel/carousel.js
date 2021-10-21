const imagesLinkArray = [
  "https://images.unsplash.com/photo-1545623703-583dd2364bbd?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1577737330379-1f82737418ab?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1570279402939-62a46724e051?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/flagged/photo-1573763435095-2077a3fd80b0?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1573150323599-ac3231efdbc9?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTJ8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1568816642854-e5a99030f9af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80",
  "https://images.unsplash.com/photo-1624798225136-0f618af39bac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVjYXRpJTIwbXVsdGlzdHJhZGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1624870420774-8b3b08b7db0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGR1Y2F0aSUyMG11bHRpc3RyYWRhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1624400567110-5f023807720a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGR1Y2F0aXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1624798223318-1b32138b678c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGR1Y2F0aXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1545623703-583dd2364bbd?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1577737330379-1f82737418ab?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1570279402939-62a46724e051?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/flagged/photo-1573763435095-2077a3fd80b0?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1573150323599-ac3231efdbc9?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTJ8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1568816642854-e5a99030f9af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80",
  "https://images.unsplash.com/photo-1624798225136-0f618af39bac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVjYXRpJTIwbXVsdGlzdHJhZGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1624870420774-8b3b08b7db0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGR1Y2F0aSUyMG11bHRpc3RyYWRhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1624400567110-5f023807720a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGR1Y2F0aXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1624798223318-1b32138b678c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGR1Y2F0aXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

const htmlNodePrototype = {
  mainImg: (imgLink, index) =>
    `<img class="carousel__main-image" async src="${imgLink}" data-idx="${index}" alt="Main image display"/>`,
  imgItem: (imageLink, index) =>
    `<img class="carousel__image-item" async src="${imageLink}" data-idx="${index}" alt="Image Item" />`,
};

const mainImagesContainer = document.getElementById("main-image-list");
const imagesContainer = document.getElementById("image-list");

const preButton = document.querySelector(
  ".carousel__control.carousel__control__left-btn"
);
const nextButton = document.querySelector(
  ".carousel__control.carousel__control__right-btn"
);

let index = 0;
const MAIN_IMG_WIDTH = mainImagesContainer.offsetWidth;

//function to convert html to Node element
function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}
//========================================== Generator ==================================================//
//generator main image & image list

//create image list and display in bottom of carousel
imagesLinkArray.forEach((imageLink, i) => {
  const imageItem = htmlToElement(htmlNodePrototype.imgItem(imageLink, i));
  const mainImgItem = htmlToElement(htmlNodePrototype.mainImg(imageLink, i));

  mainImagesContainer.appendChild(mainImgItem);
  imagesContainer.appendChild(imageItem);
  imageItem.addEventListener("click", chooseImage.bind(imageItem));
});

//add active class to first image & disable preBtn
imagesContainer.firstChild.classList.add("carousel__image-active");
preButton.disabled = true;

//========================================== Handle Event ==================================================//

const imagesList = document.getElementsByClassName("carousel__image-item");

function scrollSubImage(
  imageOffsetLeft,
  imageOffsetWidth,
  scrollLeft,
  containerOffsetLeft
) {
  const imageRightOffset =
    imageOffsetLeft + imageOffsetWidth - containerOffsetLeft;
  if (imageRightOffset > scrollLeft + MAIN_IMG_WIDTH) {
    imagesContainer.scrollLeft = imageRightOffset - MAIN_IMG_WIDTH;
  }
  if (imageOffsetLeft - containerOffsetLeft < scrollLeft) {
    imagesContainer.scrollLeft = imageOffsetLeft - containerOffsetLeft;
  }
}

//create function to handle navigation Button
function previousImage() {
  //S1: index equal 0 & and pre button been disable enable image
  if (index === imagesLinkArray.length - 1) {
    nextButton.disabled = false;
  }
  //S2: if index not out of range in image array we switch image to pre image in array
  if (index > 0) {
    imagesList[index].classList.remove("carousel__image-active");
    //S3: decrease index of array iamge
    index--;
    //change width
    mainImagesContainer.style.transform = `translateX(${
      -MAIN_IMG_WIDTH * index
    }px)`;

    //add new image
    imagesList[index].classList.add("carousel__image-active");
    scrollSubImage(
      imagesList[index].offsetLeft,
      imagesList[index].offsetWidth,
      imagesContainer.scrollLeft,
      imagesContainer.offsetLeft
    );
  }
  // disable next button
  if (index === 0) {
    preButton.disabled = true;
  }
}

function nextImage() {
  //S1: index equal 0 & and pre button been disable enable image
  if (index === 0) {
    preButton.disabled = false;
  }

  //S2: if index not out of range in image array we switch image to next image in array
  if (index < imagesLinkArray.length - 1) {
    //S3: increase index of array iamge
    imagesList[index].classList.remove("carousel__image-active");
    index++;
    //change width of container to do to next image
    mainImagesContainer.style.transform = `translateX(${
      -MAIN_IMG_WIDTH * index
    }px)`;
    //at active behaviour to image in image list
    imagesList[index].classList.add("carousel__image-active");
    scrollSubImage(
      imagesList[index].offsetLeft,
      imagesList[index].offsetWidth,
      imagesContainer.scrollLeft,
      imagesContainer.offsetLeft
    );
  }
  // disable next button
  if (index === imagesLinkArray.length - 1) {
    nextButton.disabled = true;
  }
}

function chooseImage() {
  //get store attribute in image
  const imgIdx = parseInt(this.getAttribute("data-idx"));
  //remove active behavior
  imagesList[index].classList.remove("carousel__image-active");
  mainImagesContainer.style.transform = `translateX(${
    -MAIN_IMG_WIDTH * imgIdx
  }px)`;

  scrollSubImage(
    this.offsetLeft,
    this.offsetWidth,
    imagesContainer.scrollLeft,
    imagesContainer.offsetLeft
  );

  //copy index
  index = imgIdx;
  //disable button when using click image
  if (index === 0) {
    preButton.disabled = true;
    nextButton.disabled = false;
  } else if (index === imagesLinkArray.length - 1) {
    nextButton.disabled = true;
    preButton.disabled = false;
  }
  if (index > 0 && index < imagesLinkArray.length - 1) {
    preButton.disabled = false;
    nextButton.disabled = false;
  }
  //add active behavior
  imagesList[imgIdx].classList.add("carousel__image-active");
}

preButton.addEventListener("click", previousImage);
nextButton.addEventListener("click", nextImage);
