//const jquery = require('../libs/jquery/dist/jquery.min.js');
const $ = require('jquery');
const welcomeButton = require('./common/welcomeButton.js');
const blur = require('./common/blur.js');
const hamburger = require('./common/hamburger.js');
const map = require('./common/map.js');
const formWelcome = require('./common/formWelcome.js');
const formWork = require('./common/formWork.js');
const blogMenu = require('./common/blogMenu.js');
const adminTabs = require('./common/adminTabs.js');
const preloader = require('./common/preloader.js');
const slider = require('./common/slider.js');

if($('.blur-wrapper').length){
	blur.init();
}

if($('.authorization-btn__link').length){
	welcomeButton.init();
}

if($('.hamburger').length){
	hamburger.init();
}
if($('#map').length){
	map.init();
}

if($('.authorization-btn__link').length){
	formWelcome.init();
}
if($('.communications').length){
	formWork.init();
}

if($('.blog-menu').length){
	blogMenu.init();
}
if($('.admin-panel').length){
	adminTabs.init();
}


if($('#forest').length){
	preloader.init();
}
if($('.slider').length){
	slider.init();
}
/*
import preloader from './common/preloader';

$(document).ready(() => {
  preloader();
})*/