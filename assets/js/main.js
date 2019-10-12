//===Language switcher===
function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'slide',
            animSpeed: 500,
            testMode: true,
            onChange: function(evt) {
                    alert("The selected language is: " + evt.selectedItem);
                }

        });
    };
}

//===toggle searchbox===
//function searchbox() {
//	//Search Box Toggle
//	if($('.seach-toggle').length){
//		//Dropdown Button
//		$('.seach-toggle').on('click', function() {
//			$(this).toggleClass('active');
//			$(this).next('.search-box').toggleClass('visible');
//		});
//	}
//}


$(document).ready(function(){
     $(".search-toggle").click(function(){
        $(".search-box").toggleClass("visible");
    });
});



$(document).ready(function(){
   // ---- Active
    $('.slider-active').owlCarousel({
      nav:false,
      loop:true,
      dots:true,
      autoplay:false,
      autoplayTimeout:2000,
//    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
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
  })
});


  $(function () {
        if ($('.header-bottom-area').length) {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 140) {
                    $('.header-bottom-area').addClass('navbar-fixed-top');
                } else {
                    $('.header-bottom-area').removeClass('navbar-fixed-top');
                }
            });
        }
});


$(document).ready(function(){
   // ---- Active
    $('.service-slider-active').owlCarousel({
      nav:false,
      loop:true,
      dots:true,
        margin:30,
      autoplay:false,
      autoplayTimeout:2000,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      responsive:{
          0:{
              items:1

          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
  })
});

$(document).ready(function(){
   // ---- Active
    $('.team-slider-active').owlCarousel({
      nav:true,
      loop:true,
      dots:true,
      autoplay:false,
      autoplayTimeout:2000,
    navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
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
  })
});
$(document).ready(function(){
   // ---- Active
    $('.r-slider-active').owlCarousel({
      nav:true,
      loop:true,
      dots:true,
      autoplay:true,
      autoplayTimeout:2000,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
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
  })
});
$(document).ready(function(){
   // ---- Active
    $('.brand-slider-active').owlCarousel({
      
      loop:true,
      dots:true,
      autoplay:false,
      autoplayTimeout:2000,
      responsive:{
          0:{
              items:1

          },
          600:{
              items:1
          },
          1000:{
              items:5
          }
      }
  })
});
$(document).ready(function(){
   // ---- Active
    $('.testimonial-active').owlCarousel({
      
      nav:true,
      loop:true,
      dots:true,
        margin:20,
      autoplay:false,
      autoplayTimeout:2000,
    navText:['<i class="fas fa-long-arrow-alt-right"></i>'],
      responsive:{
          0:{
              items:1

          },
          600:{
              items:1
          },
          1000:{
              items:2
          }
      }
  })
});

$(document).ready(function(){
   // ---- Active
   "use strict";

    $('.color-trigger').on('click', function () {
        $(this).parent().toggleClass('visible-palate');
    });
	
	$('.color-palate .colors-list .palate').on('click', function() {
		var newThemeColor = $(this).attr('data-theme-file');
		var targetCSSFile = $('link[id="theme-color-file"]');
	   $(targetCSSFile).attr('href',newThemeColor);
	   $('.color-palate .colors-list .palate').removeClass('active');
        $(this).addClass('active');
	});


});



//$(document).ready(function(){
// var carousel = $(".testimonial-active");
//    carousel.owlCarousel({
//        loop : true,
//        items : 3,
//        margin:0,
//        center:true,
//        dots : false,
//        autoplay:false,
//         autoplayTimeout:2000,
//    });
//
//    checkClasses();
//    carousel.on('translated.owl.carousel', function(event) {
//        checkClasses();
//    });
//
//    function checkClasses(){
//        var total = $('.testimonial-active .owl-stage .owl-item.active').length;
//
//        $('.testimonial-active .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');
//
//        $('.testimonial-active .owl-stage .owl-item.active').each(function(index){
//            if (index === 0) {
//                // this is the first one
//                $(this).addClass('firstActiveItem');
//            }
//            if (index === total - 1 && total>1) {
//                // this is the last one
//                $(this).addClass('lastActiveItem');
//            }
//        });
//    }
//
//  });
