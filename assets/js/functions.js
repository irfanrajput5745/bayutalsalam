$('.property_sale_slider_img').slick({
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  Arrow: true,
  dots: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
    dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
);
$('.main_property_sale_card').slick({
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  responsive: [ 
    {
      breakpoint: 769,
      settings: {
    dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.testimonial_slider').slick({
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  responsive: [ 
    {
      breakpoint: 769,
      settings: {
    dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
);

$('.our_team_slider').slick({
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  arrows: true,
  dots: true,
  slidesToScroll: 1,
  responsive: [ 
    {
      breakpoint: 769,
      settings: {
    dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
);
$('.approved_broker_logo').slick({
  infinite: true,
  slidesToShow: 1,
  // autoplay: true,
  arrows: true,
  dots: false,
  slidesToScroll: 1,
  responsive: [ 
    {
      breakpoint: 769,
      settings: {
    dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
);

// Stiky header
$(window).scroll(function () {
  var window_top = $(window).scrollTop() + 1;
  if (window_top > 100) {
    $("header").addClass("menu_fixed animated fadeIn");
    $("body").addClass("magic-nav");
  } else {
    $("header").removeClass("menu_fixed animated fadeIn");
    $("body").removeClass("magic-nav");
  }
});


// Scroll to top
// Back to top


$( document ).ready(function() {
  var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});
});

// Thumbnail Slider Start
$(function() { 
  // Card's slider
    var $carousel = $('.slider-for');
  
    $carousel
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.slider-nav'
      })
      
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true
    });
  });
// Thumbnail Slider End