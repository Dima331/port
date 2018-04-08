

const $ = require('jquery');
const hamburger = (function () {
    return {
        init: function () {
            $(document).ready(function () {
                $('.hamburger').on("click", function (e) {
                    $('.full-menu').slideToggle("slow");
                    $('body').toggleClass('stop-scrolling');
                });

                $('.blog__left-button').on("click", function (e) {
                    $('.blog__left').toggleClass('blog__left_width');
                });
            });

            (function () {
                var toggles = document.querySelectorAll(".hamburger__switch");
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

        },
    };
}());
module.exports = hamburger;
