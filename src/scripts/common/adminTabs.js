const $ = require('jquery');
const adminTabs = (function () {
    return {
        init: function () {
            $(document).ready(function () {
                $('#tab1').on("click", function (e) {
                    $('.page-about').removeClass('page_hidden');
                    $('.page-blog').addClass('page_hidden');
                    $('.page-work').addClass('page_hidden');
                });
                $('#tab2').on("click", function (e) {
                    $('.page-about').addClass('page_hidden');
                    $('.page-blog').removeClass('page_hidden');
                    $('.page-work').addClass('page_hidden');
                });
                $('#tab3').on("click", function (e) {
                    $('.page-about').addClass('page_hidden');
                    $('.page-blog').addClass('page_hidden');
                    $('.page-work').removeClass('page_hidden');
                });
            });

        },
    };
}());
module.exports = adminTabs;