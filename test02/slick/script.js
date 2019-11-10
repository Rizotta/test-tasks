// let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];

//Иницилизируем слайдер с параметрами по умолчанию

// $('.sl').slick();

$(document).ready(function () {
    $('.sl').slick({
      slidesToShow: 3, 
      slidesToScroll: 1 
    });
});