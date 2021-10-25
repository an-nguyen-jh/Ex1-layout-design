const getElmById = document.getElementById.bind(document);
const zoomSlide = getElmById("zoom");
const zoomValue = getElmById("zoom-num");
const bannerContainer = getElmById("banner-container");
const zoomOutBtn = document.querySelector(
  ".control-group .control-group-btn:first-child"
);
const zoomInBtn = document.querySelector(
  ".control-group .control-group-btn:last-child"
);
const zoomControlGroup = getElmById("zoom-control-group");
const changeBannerBtn = getElmById("change-banner-size-btn");
const saveChangeBtn = getElmById("save-btn");
let isChange = false;

let oldZoom = parseInt(zoomSlide.value);

const IMAGE_URL = "./sky.jpg";
let IMAGE_WIDTH, IMAGE_HEIGHT;
const BANNER_WIDTH = bannerContainer.clientWidth;
const BANNER_HEIGHT = bannerContainer.clientHeight;
const ZOOM_SCALE = 30;
//center bg position
const BG_POSITION_CENTER = 0.5;
//get actual image width & height to calculate backgounr position
const image = new Image();
image.src = IMAGE_URL;
image.onload = function () {
  IMAGE_WIDTH = image.width;
  IMAGE_HEIGHT = image.height;
  const scale = (ZOOM_SCALE * oldZoom * BG_POSITION_CENTER) / 100;
  bannerContainer.style.backgroundPosition = `-${BANNER_WIDTH * scale}px -${
    BANNER_HEIGHT * scale
  }px`;
};
//set default value for background image and load Image
bannerContainer.style.backgroundImage = `url("${IMAGE_URL}")`;
bannerContainer.style.backgroundSize = `${100 + ZOOM_SCALE * oldZoom}%`;

//handle cange banner size function
function changeBannerSize() {
  if (isChange) {
    const zoomSize = parseInt(zoomSlide.value);
    const deviationScale = zoomSize - oldZoom;
    //calculate position deviation
    const deviation = (ZOOM_SCALE * deviationScale * BG_POSITION_CENTER) / 100;
    const offsetWidth = BANNER_WIDTH * deviation;
    const offsetHeight = BANNER_HEIGHT * deviation;
    //get new size of bg size
    const sizePercent = 100 + ZOOM_SCALE * zoomSize;
    //calc new bg position of zoomed image
    let bgPosX =
      parseInt(bannerContainer.style.backgroundPositionX) - offsetWidth;
    let bgPosY =
      parseInt(bannerContainer.style.backgroundPositionY) - offsetHeight;
    // control postion to fit in container
    if (bgPosX > 0) {
      bgPosX = 0;
    }
    if (bgPosY > 0) {
      bgPosY = 0;
    }
    if (bgPosX < -(BANNER_WIDTH * (sizePercent / 100 - 1))) {
      bgPosX = -BANNER_WIDTH * (sizePercent / 100 - 1);
    }
    if (bgPosY < -(BANNER_HEIGHT * (sizePercent / 100 - 1))) {
      bgPosY = -BANNER_HEIGHT * (sizePercent / 100 - 1);
    }
    //set bg position & relative number to iamge
    bannerContainer.style.backgroundSize = `${sizePercent}%`;
    zoomValue.innerText = zoomSize;
    bannerContainer.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
    oldZoom = zoomSize;
  }
}

function zoomBannerWithBtn(value) {
  if (isChange) {
    let zoomSize = parseInt(zoomSlide.value) + value;
    if (zoomSize < 0) {
      zoomSize = 0;
      value = 0;
    }
    if (zoomSize > parseInt(zoomSlide.max)) {
      zoomSize = parseInt(zoomSlide.max);
      value = 0;
    }
    //calculate position deviation
    const deviation = (ZOOM_SCALE * value * BG_POSITION_CENTER) / 100;
    const offsetWidth = BANNER_WIDTH * deviation;
    const offsetHeight = BANNER_HEIGHT * deviation;
    const sizePercent = 100 + ZOOM_SCALE * zoomSize;

    //background position offset
    let bgPosX =
      parseInt(bannerContainer.style.backgroundPositionX) - offsetWidth;
    let bgPosY =
      parseInt(bannerContainer.style.backgroundPositionY) - offsetHeight;
    // control postion to fit in container
    if (bgPosX > 0) {
      bgPosX = 0;
    }
    if (bgPosY > 0) {
      bgPosY = 0;
    }
    if (bgPosX < -(BANNER_WIDTH * (sizePercent / 100 - 1))) {
      bgPosX = -BANNER_WIDTH * (sizePercent / 100 - 1);
    }
    if (bgPosY < -(BANNER_HEIGHT * (sizePercent / 100 - 1))) {
      bgPosY = -BANNER_HEIGHT * (sizePercent / 100 - 1);
    }
    //set bg position & relative number to iamge

    bannerContainer.style.backgroundSize = `${sizePercent}%`;

    bannerContainer.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
    zoomValue.innerText = zoomSize;
    zoomSlide.value = zoomSize;
  }
}

function handleDraggStart(e) {
  if (isChange) {
    const point = e.srcElement;

    e.preventDefault();
    point.isDown = true;
    //zoom side when start dragg
    point.zoomSize = parseInt(zoomSlide.value);
    //postion to calc change px when dragg
    point.mouseOldX = e.clientX;
    point.mouseOldY = e.clientY;
    //old bg image position
    point.oldPositionX = parseInt(bannerContainer.style.backgroundPositionX);
    point.oldPositionY = parseInt(bannerContainer.style.backgroundPositionY);
  }
}
function handleDraggMove(e) {
  const point = e.srcElement;
  if (point.isDown && isChange) {
    const scale = (ZOOM_SCALE * point.zoomSize) / 100;
    //offset horizontal & vertical
    const dx = e.clientX - point.mouseOldX;
    const dy = e.clientY - point.mouseOldY;
    //new bg position
    let bgPosX = point.oldPositionX + dx * 2;
    let bgPosY = point.oldPositionY + dy * 2;
    //calc bg postion to fit container
    if (bgPosX > 0) {
      bgPosX = 0;
    }
    if (-bgPosX > BANNER_WIDTH * scale) {
      bgPosX = -(BANNER_WIDTH * scale);
    }
    if (bgPosY > 0) {
      bgPosY = 0;
    }
    if (-bgPosY > BANNER_HEIGHT * scale) {
      bgPosY = -(BANNER_HEIGHT * scale);
    }
    //move banner bg image position
    bannerContainer.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
  }
}

function handleDraggEnd(e) {
  if (isChange) {
    const point = e.srcElement;
    e.preventDefault();
    point.isDown = false;
  }
}

bannerContainer.addEventListener("mousedown", handleDraggStart);
bannerContainer.addEventListener("mousemove", handleDraggMove);
bannerContainer.addEventListener("mouseup", handleDraggEnd);

zoomSlide.addEventListener("change", changeBannerSize);
zoomInBtn.addEventListener("click", zoomBannerWithBtn.bind(null, 1));
zoomOutBtn.addEventListener("click", zoomBannerWithBtn.bind(null, -1));

//switch to open change zoom group
changeBannerBtn.addEventListener("click", function () {
  this.style.display = "none";
  zoomControlGroup.style.display = "grid";
  //add event listener
  saveChangeBtn.style.display = "block";
  isChange = true;
});

saveChangeBtn.addEventListener("click", function () {
  this.style.display = "none";
  zoomControlGroup.style.display = "none";
  changeBannerBtn.style.display = "block";
  isChange = false;
  console.log(isChange);
});
