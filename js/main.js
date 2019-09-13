$(document).ready(function(){

	$('.slider__inner').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	});

	$('.anounces__inner').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		centerMode: true,
		centerPadding: '130px',
		slidesToShow: 3,
		slidesToScroll: 1,
		
		responsive: [
            {
			  breakpoint: 768,
              settings: {
				slidesToShow: 1,
				centerPadding: '150px',
              }
            },
            {
                breakpoint: 540,
                settings: {
					centerMode: true,
					slidesToShow: 1,
					centerPadding: '0px',
                }
            },
        ]
	});

	// Submenu open/close
	$('#openSub, #openSubmenu, .openSub').click(function(){
		$('.submenu__wrapper').fadeIn('slow');
		$('.right-side').addClass('right-side-bg');
		$('#logo').addClass('d-n');
		$('#logo-sub').removeClass('d-n');
	});
	$('.submenu__close').on('click', function() {
		$('.submenu__wrapper').fadeOut('fast');
		$('.right-side').removeClass('right-side-bg');
		$('#logo').removeClass('d-n');
		$('#logo-sub').addClass('d-n');
	});
	
	// Burger-menu
	$('.btn-menu').click(function(){
		$('.menu-list').slideToggle();
	});

});




// $(window).scroll(function() {
// 		let scrTop = $(this).scrollTop();

// 		$('.banner__descr').css({
// 			'transform' : 'translate(0%, -' + scrTop /5 + '%'
// 		});
// });