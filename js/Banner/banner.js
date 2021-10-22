const zoomSlide = document.getElementById("zoom");
const zoomValue = document.getElementById("zoom-num");
const bannerContainer = document.getElementById("banner-container");
const banner = document.getElementById("banner");
const zoomOutBtn = document.querySelector(
  ".control-group .control-group-btn:first-child"
);
const zoomInBtn = document.querySelector(
  ".control-group .control-group-btn:last-child"
);

let isDragg = false;

const BANNER_WIDTH_PART = window.innerWidth / 10;
const BANNER_HEIGHT_PART = window.innerHeight / 10;

const CONTAINER_WIDTH = window.innerWidth - bannerContainer.offsetLeft;
const CONTAINER_HEIGHT = window.innerHeight - bannerContainer.offsetTop;

//add default size for banner
banner.style.width = `${BANNER_WIDTH_PART * parseInt(zoomValue.innerText)}px`;
banner.style.height = `${BANNER_HEIGHT_PART * parseInt(zoomValue.innerText)}px`;

function changeBannerSize() {
  //const newZoomValue = document.getElementById("zoom-num");
  const zoomSize = parseInt(zoomSlide.value);

  banner.style.width = `${BANNER_WIDTH_PART * zoomSize}px`;
  banner.style.height = `${BANNER_HEIGHT_PART * zoomSize}px`;
  banner.style.left = `${
    (CONTAINER_WIDTH - BANNER_WIDTH_PART * zoomSize) / 2
  }px`;
  zoomValue.innerText = zoomSize;
}
function zoomBannerWithBtn(value) {
  let zoomSize = parseInt(zoomSlide.value) + value;
  console.log(zoomSize);
  if (zoomSize < 0) {
    zoomSize = 0;
  }
  if (zoomSize > parseInt(zoomSlide.max)) {
    zoomSize = parseInt(zoomSlide.max);
  }
  banner.style.width = `${BANNER_WIDTH_PART * zoomSize}px`;
  banner.style.height = `${BANNER_HEIGHT_PART * zoomSize}px`;
  banner.style.left = `${
    (CONTAINER_WIDTH - BANNER_WIDTH_PART * zoomSize) / 2
  }px`;
  zoomValue.innerText = zoomSize;
  zoomSlide.value = zoomSize;
}

function handleDraggStart(e) {
  const point = e.srcElement;
  e.preventDefault();
  point.isDown = true;
  //position mouse down
  point.mouseOldX = e.clientX;
  point.mouseOldY = e.clientY;
  //positon top-left edge
  point.oldLeft = parseInt(point.offsetLeft);
  point.oldTop = parseInt(point.offsetTop);
}
function handleDraggMove(e) {
  const point = e.srcElement;
  if (point.isDown) {
    //offset compare to old position
    const dx = e.clientX - point.mouseOldX;
    const dy = e.clientY - point.mouseOldY;

    //move banner

    point.style.left = `${point.oldLeft + dx}px`;

    point.style.top = `${point.oldTop + dy}px`;
  }
}
function handleDraggEnd(e) {
  const point = e.srcElement;
  e.preventDefault();
  point.isDown = false;
  const leftPos = parseInt(point.style.left);
  const topPos = parseInt(point.style.top);
  if (leftPos < 0) {
    point.style.left = "0px";
  } else if (leftPos + point.offsetWidth > CONTAINER_WIDTH) {
    point.style.left = `${CONTAINER_WIDTH - point.offsetWidth}px`;
  }
  if (topPos < 0) {
    point.style.top = "0px";
  } else if (topPos + point.offsetHeight > CONTAINER_HEIGHT) {
    // alert(CONTAINER_HEIGHT - point.offsetHeight);

    point.style.top = `${CONTAINER_HEIGHT - point.offsetHeight}px`;
  }
}

banner.addEventListener("mousedown", handleDraggStart);
banner.addEventListener("mousemove", handleDraggMove);
banner.addEventListener("mouseup", handleDraggEnd);

zoomSlide.addEventListener("change", changeBannerSize);
zoomInBtn.addEventListener("click", () => zoomBannerWithBtn(1));
zoomOutBtn.addEventListener("click", () => zoomBannerWithBtn(-1));
