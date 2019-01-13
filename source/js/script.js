var menu_open = document.querySelector(".main-header__nav-burger");
var menu_close = document.querySelector(".main-header__nav-cross");
var header = document.querySelector(".main-header__heading");
var page = document.body;


///          SCROLLBAR WIDTH

  	var div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '500px';
	div.style.height = '500px';
	div.style.visibility = 'hidden';

	document.body.appendChild(div);
	var scrollWidth = div.offsetWidth - div.clientWidth;
	document.body.removeChild(div);


///			MENU

	menu_open.addEventListener("click", function (evt) {
			header.classList.add("main-header__heading--opened");
			page.classList.add("body-overflow");
			page.style.paddingRight = scrollWidth+'px';
			page.style.overflow = 'hidden';
	});

	menu_close.addEventListener("click", function (evt) {
			header.classList.remove("main-header__heading--opened");
			page.classList.remove("body-overflow");
			page.style.paddingRight = 0+'px';
			page.style.overflow = 'auto';
	});



		var forwardBtn = document.querySelector('.fish-description__label-forward');
		var container = document.querySelector('.fish-description__items-wrapper');






