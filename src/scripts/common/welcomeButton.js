const $ = require('jquery');
const welcomeButton = (function () {
    return {
        init: function () {
            $(document).ready(function () {
                $('.authorization-btn__link').on("click", function (e) {
                    $('.flipper').css('transform', 'rotateY(180deg)');
                    $('.authorization-btn').css('display', 'none');
                });
                $('#main').on("click", function (e) {
                    $('.flipper').css('transform', 'rotateY(0deg)');
                    $('.authorization-btn').css('display', 'block');
                });
            });
        },
    };
}());

module.exports = welcomeButton;
//module.exports = jq;