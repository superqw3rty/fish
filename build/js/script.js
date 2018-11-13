var menu_open = document.querySelector(".main-header__nav-burger");
var menu_close = document.querySelector(".main-header__nav-cross");
var header = document.querySelector(".main-header__heading");
var body = document.body;

	menu_open.addEventListener("click", function (evt) {
			header.classList.add("main-header__heading--opened");
			body.classList.add("body-overflow");
	});

	menu_close.addEventListener("click", function (evt) {
			header.classList.remove("main-header__heading--opened");
			body.classList.remove("body-overflow");
	});



/*var list = document.querySelectorAll(".main-header__nav-item");
list.forEach(function(node) {
	node.addEventListener("click", function (evt) {
			node.querySelectorAll("ul").forEach(function(ul) {
				ul.classList.add("main-header__sub-nav--opened");
			})
	});
})*/

document.ready=function (){
if(document.body.scrollHeight<=document.documentElement.clientHeight){
document.body.style.position='absolute';
document.body.style.width=document.documentElement.clientWidth+17 + 'px';
document.body.style.left=-17 + 'px';
}
}
window.onresize=function (){
if(document.body.scrollHeight<=document.documentElement.clientHeight){
document.body.style.position='absolute';
document.body.style.width=document.documentElement.clientWidth+17 + 'px';
document.body.style.left=-17 + 'px';
}
}
