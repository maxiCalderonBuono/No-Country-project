const categories = document.querySelector(".navbar");
const userTools = document.querySelector(".user-tools");
const navIcon = document.getElementById("nav-icon");
const categoriesUsertools = document.querySelector(".categories-tools");

$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
  });
});



navIcon.addEventListener("click", () => {


  categories.classList.toggle("nav-hidden");
  
});

