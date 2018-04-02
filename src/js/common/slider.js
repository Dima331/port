/*const $ = require('jquery');
const slider = (function () {
    return {
        init: function () {*/


/*
var data2 = [{
    title: "Сайт 12",
    image: "site-1.jpg",
    description: "Описание процеса работы 1",
    tags: ["js", "html"]
},
{
    title: "Сайт 22",
    image: "site-2.jpg",
    description: "Описание процеса работы 2",
    tags: ["js", "html"]
},
{
    title: "Сайт 33",
    image: "site-3.jpg",
    description: "Описание процеса работы 3",
    tags: ["js", "html"]
},
{
    title: "Сайт 44",
    image: "site-4.jpg",
    description: "Описание процеса работы 4",
    tags: ["js", "html"]
}
];*/



const $ = require('jquery');


var data1 = [{
    title: "Описание процеса работы 1",
    image: "../../assets/images/content/work-1.png",
    description: "HTML, CSS, JAVASCRIPT"
},
{
    title: "Описание процеса работы 2",
    image: "../../assets/images/content/work-2.png",
    description: "HTML, CSS, JAVAS"
},
{
    title: "Описание процеса работы 3",
    image: "../../assets/images/content/work-3.png",
    description: "HTML, CSS, JAV"
},
{
    title: "Описание процеса работы 4",
    image: "../../assets/images/content/work-4.png",
    description: "HTML, CSS"
}
];

var slider1 = document.querySelector(".slider");


slider(slider1, data1, {
    autoPlay: false,
    speed: 3000
});

// slider(slider2, data2, {autoPlay: true});

/**
* Функция генерирующая слайдер слайдера
*
* @param elem - блок в котором будет слайдер
* @param data - набор данных
* @param params - набор параметров autoPlay, speed
*/
















function slider(elem, data, params) {
    var currentSlide = 0;
    var dataLength = data.length;
    //block-subtitle-slider title
    //intelligence__text description
    //slider__display-img  bigIMG
    //.slider__display-img_left  лево
    //.slider__display-img_right  право
    var slider = elem;

    var mainSlide = $('.slider__display-img');
    var leftSlide = $('.slider__display-img_left');
    var rightSlide = $('.slider__display-img_right');
    var descrSlide = $('.block-subtitle-slider');
    var titleSlide = $('.intelligence__text');

    //mainSlide.classList.add("slide-main");
    //leftSlide.classList.add("slide-left");
    //rightSlide.classList.add("slide-right");
    //descrSlide.classList.add("slide-description");
    //slider.appendChild(mainSlide);
    //slider.appendChild(leftSlide);
    //slider.appendChild(rightSlide);
    //slider.appendChild(descrSlide);


    $('.arrow__left').on("click", function (e) {
        console.log("hell");
        currentSlide = getSlide(currentSlide + 1);
        fillSlider();
    });

    $('.arrow__right').on("click", function (e) {
        currentSlide = getSlide(currentSlide - 1);
        fillSlider();
    });



    function fillSlider() {
        var prev = getSlide(currentSlide - 1);
        var next = getSlide(currentSlide + 1);
        descrSlide.text(data[currentSlide].title);
        titleSlide.text(data[currentSlide].description);
        leftSlide.attr("src", data[prev].image);
        rightSlide.attr("src", data[next].image);
        mainSlide.attr("src", data[currentSlide].image);
        //mainSlide.innerText = data[currentSlide].title;
        //leftSlide.innerText = data[prev].title;
        //rightSlide.innerText = data[next].title;
        //descrSlide.innerText = data[currentSlide].description;
    }

    function getSlide(value) {
        if (value >= dataLength) {
            return 0
        } else if (value < 0) {
            return dataLength - 1;
        } else {
            return value;
        }
    }

    
    fillSlider();














function autoPlay(speed) {
        setInterval(function () {
            currentSlide = getSlide(currentSlide + 1);
            fillSlider();
        }, speed)
    }


    if (params.autoPlay) {
        if (params.speed) {
            autoPlay(params.speed);
        } else {
            autoPlay(1000);
        }
    }
}
var slider = (function () {
    var slideNext = function (slide) {

    };
    return {
        init: function () {

        }
    }
}());

/*
        },
    };
}());*/

module.exports = slider;