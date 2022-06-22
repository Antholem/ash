AOS.init({
  duration: 600
});
  

(function($) {
    'use strict';


        $('.post_gallery').owlCarousel({
            loop:true,
            margin:1,
            nav:true,
            dots: false,
            navText : ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });
  
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.backtop').addClass('reveal');
    } else {
        $('.backtop').removeClass('reveal');
    }
});

  $(window).on ('scroll', function (){
    if ($('.navigation').offset().top > 100) {
      $('.navigation').addClass('fixed-nav');
    } else {
      $('.navigation').removeClass('fixed-nav');
    }
  });

    $('.navbar-collapse .navbar-nav a').on('click', function () {
        $('.navbar-toggler:visible').click();
    });
    

 

    $('a.smoth-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });

 
 $('.testimonial-slider').slick({
		slidesToShow: 1,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000
	});


  
    $(window).on ('load', function (){

    $('.progress-bar').each(function(){
            var width = $(this).data('percent');
            $(this).css({'transition': 'width 3s'});
            $(this).appear(function() {
                console.log('hello');
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50
                });
            });
        });


    }); 


  


})(jQuery);