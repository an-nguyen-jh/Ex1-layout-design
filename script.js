function toggle(id) {
  const collapseNav = document.getElementById("collapse-nav");

  if (collapseNav.classList.contains("toggle")) {
    collapseNav.classList.remove("toggle");
  } else {
    collapseNav.classList.add("toggle");
  }
}

const toggleBtn = document.getElementById("collapse-btn");
const infoBtn = document.getElementById("collapse-info");

toggleBtn.addEventListener("click", () => {
  toggle("collapse-nav");
});
