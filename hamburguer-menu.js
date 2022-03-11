
const ulList = document.querySelector(".nav-body");
const userTools = document.querySelector(".user-tools");
const navIcon = document.getElementById("nav-icon");

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});


navIcon.addEventListener("click", () => {
    console.log("hello")
    ulList.classList.toggle("nav-hidden");
    userTools.classList.toggle("nav-hidden");
})

if (window.innerWidth >= 1200) {
    ulList.classList.remove("nav-hidden");
    userTools.classList.remove("nav-hidden");
    navIcon.classList.add("nav-hidden");
}
