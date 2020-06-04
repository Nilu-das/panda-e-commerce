$(document).ready(function () {
    $('.venobox').venobox({
        border: '10px'
    });
    //header part slider
    $('.banner_slider_part').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
    });
    //tem part slide
    $('.tem_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
    });
    //testimonial slider
    $('.slider_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide_img'
    });
    $('.slide_img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider_text',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        arrows: true,
        autoplay: true,
        prevArrow: '.tem_left_angle',
        nextArrow: '.tem_right_angle',
    });
    
    //sticky top menu design
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-top');
        
        if(scrolling >= 600){
            sticky.addClass('nav-bg');
        }
        else{
            sticky.removeClass('nav-bg');
        }
    });
    //scroll spy
    $('body').scrollspy({target: ".navbar", offset: 50});
});