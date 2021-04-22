//슬릭구현

$(function(){
    //mainSlider
    $('.mainSlider').slick({
        dots:false,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        arrows:false,
        autoplaySpeed:10000,
    })
    
    //mainCon02
    $('.con02Img').slick({
        centerMode:true,
        slidesToShow:2,
        slidesToScroll:2,
        dots:true,
        prevArrow:$('.prevBtn02'),
        nextArrow:$('.nextBtn02'),
    })
     //wow
    new WOW().init();
})


