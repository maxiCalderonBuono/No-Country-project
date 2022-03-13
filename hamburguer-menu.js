const categories = document.querySelector(".navbar");
const userTools = document.querySelector(".user-tools");
const navIcon = document.getElementById("nav-icon");
const categoriesUsertools = document.querySelector(".categories-tools");

$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
  });
});

window.addEventListener("load", ()=> {
    navIcon.click();
})

navIcon.addEventListener("click", () => {
  categories.classList.toggle("nav-hidden");
  userTools.classList.add("nav-hidden");
  categoriesUsertools.classList.toggle("nav.hidden");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) {
    categories.classList.remove("nav-hidden");
    userTools.classList.remove("nav-hidden");
    navIcon.classList.add("nav-hidden");
    categoriesUsertools.classList.add("nav-hidden");
  } else {
    categories.classList.add("nav-hidden");
    userTools.classList.add("nav-hidden");
    navIcon.classList.remove("nav-hidden");
    categoriesUsertools.classList.remove("nav-hidden");
  }
});
