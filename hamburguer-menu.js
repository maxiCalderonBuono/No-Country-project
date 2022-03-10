
const ulList = document.querySelector(".nav-body")
const navIcon = document.getElementById("nav-icon")

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

console.log(ulList)

navIcon.addEventListener("click", () => {
    console.log("hello")
    ulList.classList.toggle("nav-hidden")
})

