$(document).ready(function(){
    $('#banner').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:8000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
	$(".menu").click(function() {
        $("ul").slideToggle().toggleClass('active');    
    });
    $('.stellarnav').stellarNav({               
        breakpoint: 991,
        position: 'right'               
    });

    AOS.init();
    //toggle the component with class accordion_body
  $(".accordion_head").click(function() {
    if ($('.accordion_body').is(':visible')) {
      $(".accordion_body").slideUp(300);
      $(".plusminus").text('+');
    }
    if ($(this).next(".accordion_body").is(':visible')) {
      $(this).next(".accordion_body").slideUp(300);
      $(this).children(".plusminus").text('+');
    } else {
      $(this).next(".accordion_body").slideDown(300);
      $(this).children(".plusminus").text('-');
    }
  });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("top0");
    }
    else{
        $('header').removeClass("top0");
    }
});




  
