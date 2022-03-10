
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

