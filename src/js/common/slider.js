const $ = require('jquery');
const slider = (function () {
    return {
        init: function () {
            $(function() {      
                var width=$('.arrow').height(),                     // Ширина слайдера.
                    interval = 4000;                                    // Интервал смены слайдов.
               
                $('.slide-list li:last').clone().prependTo('.slide-list');     // Копия последнего слайда помещается в начало.
                $('.slide-list li').eq(1).clone().appendTo('.slide-list');     // Копия первого слайда помещается в конец.  
                $('.slide-list').css('margin-bottom', -height);                // Контейнер .slider сдвигается влево на ширину одного слайда.
                setInterval('animation()',interval);                    // Запускается функция animation(), выполняющая смену слайдов.
              });
              function animation(){
               
                var margin = parseInt($('.slider').css('marginBottom'));  // Текущее смещение блока .slider
                height=$('.arrow').height(),                     // Ширина слайдера.
                    slidersAmount=$('.slide-list').children().length;       // Количество слайдов в слайдере.
                if(margin!=(-height*(slidersAmount-1)))                  // Если текущий слайд не последний,
                {
                  margin=margin-height;                                  // то значение margin уменьшается на ширину слайда.
                }else{                                                  // Если показан последний слайд,
                  $('.slide-list').css('margin-bottom', -height);              // то блок .slider возвращается в начальное положение,
                  margin=-height*2;         
                }
                $('.slide-list').animate({marginBottom:margin},1000);          // Блок .slider смещается влево на 1 слайд.
              };

        },
    };
}());

module.exports = slider;