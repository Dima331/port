//const jquery = require('../libs/jquery/dist/jquery.min.js');
const $ = require('jquery');
const welcomeButton = require('./common/welcomeButton.js');
const blur = require('./common/blur.js');
const hamburger = require('./common/hamburger.js');
const map = require('./common/map.js');
const formWelcome = require('./common/formWelcome.js');

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
/*if($('#map').length){
	formWelcome.init();
}*/
//module.exports = jq;