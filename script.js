function toggle(id) {
  const collapseNav = document.getElementById("collapse-nav");
  collapseNav.classList.toggle("toggle");
  // console.log(collapseNav.style);
  // if (collapseNav.style.opacity === "0") {
  //   collapseNav.style.opacity = "1";
  //   collapseNav.style.height = "calc(100vh -60px)";
  // } else {
  //   collapseNav.style.opacity = "0";
  //   collapseNav.style.height = "0xp";
  // }
}

const toggleBtn = document.getElementById("collapse-btn");
//const infoBtn = document.getElementById("collapse-info");

toggleBtn.addEventListener("click", () => {
  toggle("collapse-nav");
});
