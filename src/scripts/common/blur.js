
const blur = (function () {
    return {
        init: function () {


            var blur = (function () {
                var wrapper = document.querySelector('.blur-wrapper'),
                    form = document.querySelector('.blur-wrapper__form');
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
        },
    };
}());
module.exports = blur;