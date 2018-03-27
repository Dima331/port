const jquery = require('../libs/jquery/dist/jquery.min.js');
const $ = require('jquery');
//const welcomeButton = require('common/welcomeButton.js');

$(document).ready(function () {
	$('.authorization-btn__link').on("click", function (e) {
		$('.flipper').css('transform', 'rotateY(180deg)');
		$('.authorization-btn').css('display', 'none');
	});
	$('#main').on("click", function (e) {
		$('.flipper').css('transform', 'rotateY(0deg)');
		$('.authorization-btn').css('display', 'block');
	});
	/* ---- Бургер Меню ---*/
	$('.hamburger').on("click", function (e) {
		$('.menu').slideToggle("slow");
		$('body').toggleClass('stop-scrolling');
	});

	$('.blog__left-button').on("click", function (e) {
		//$('.blog__left').css('width', '50%');
		$('.blog__left').toggleClass('blog__left_width');
	});

	$()
});

/*--- Крестик ---*/
(function () {
	var toggles = document.querySelectorAll(".cmn-toggle-switch");
	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};
	function toggleHandler(toggle) {
		toggle.addEventListener("click", function (e) {
			e.preventDefault();
			(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
		});
	}
})();


/*--- блур ---*/
var blur = (function () {
	var wrapper = document.querySelector('.blur-wrapper'),
		form = document.querySelector('.blur-wrapper__form');

	//const wrapper = $('.blur-wrapper');
	//const form = $('.blur-wrapper__form');
		
	return {
		set: function () {
			var imgWidth = document.querySelector('.about-me__background').offsetWidth,
				posLeft = -wrapper.offsetLeft,
				posTop = -wrapper.offsetTop,
				blurCSS = form.style;
			blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
			blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
		}
	}
}());
blur.set();
window.onresize = function () {
	blur.set();
};


