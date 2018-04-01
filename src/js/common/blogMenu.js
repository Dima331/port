const $ = require('jquery');
const blogMenu = (function () {
    return {
        init: function () {
            var elem = document.querySelector('.blog__right');
            var texts = document.querySelectorAll('.blog-descripshion');
            var links = document.querySelectorAll('.blog-menu__item-link');
            var textsOffset = [];
            
            texts.forEach(function(text){
                textsOffset.push(text.offsetTop);	
            })
            console.log(textsOffset);
            
            window.addEventListener('scroll', function(){
                textsOffset.forEach(function(offset, i){
                      if (window.pageYOffset >= offset) {
                            links.forEach(function(el, i) {
                                el.parentNode.classList.remove('blog-menu__item_active');
                            })
                      links[i].parentNode.classList.add('blog-menu__item_active');
                  } 
              })
            })
            $(document).ready(function () {
                $('.blog-menu__item-link').on("click", function (e) {
                    event.preventDefault();
                    var id  = $(this).attr('href'),
                    top = $(id).offset().top;
                    $('body,html').animate({scrollTop: top}, 1500);
            

                });
            });

        },
    };
}());

module.exports = blogMenu;
