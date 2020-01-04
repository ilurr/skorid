$(document).ready(function() {
	var header_top = $('.header').outerHeight();
	var header_bottom = $('.header__bottom').outerHeight();
	var header_space = header_top - header_bottom;
	
    var prevArrow = "<a href='#' class='arrow arrow--left'><span class='icon icon-angle-left'></span></a>";
    var nextArrow = "<a href='#' class='arrow arrow--right'><span class='icon icon-angle-right'></span></a>";
		
	// scroll
	$(window).scroll(function () {

		var scrollpos = $(window).scrollTop();
		// back to top
		if(scrollpos > $(window).height()) {
			$(".button__backtop").removeClass("button--hide");
		} else {
			$(".button__backtop").addClass("button--hide");
		}
	});
	
    // slider
    if($('.js--big').length>0) {
		$('.js--big').slick({
			autoplay: true,
			slidesToShow: 1,
			variableWidth: true,
			//centerPadding: '10px',
			centerMode: true,
			autoplaySpeed: 10000,
			pauseOnFocus: true,
			fade: false,
			dots: true,
			arrows: false,
			cssEase: 'ease'
		});
	}
    if($('.js--editors').length>0) {
		$('.js--editors').slick({
			autoplay: true,
			slidesToShow: 2,
			autoplaySpeed: 10000,
			pauseOnFocus: true,
			fade: false,
			dots: false,
			arrows: true,
			cssEase: 'ease',
			prevArrow: prevArrow,
			nextArrow: nextArrow
		});
	}
    if($('.js--topic').length>0) {
		$('.js--topic').slick({
			autoplay: true,
			slidesToShow: 2,
			autoplaySpeed: 8000,
			pauseOnFocus: true,
			fade: false,
			dots: false,
			arrows: true,
			cssEase: 'ease',
			prevArrow: prevArrow,
			nextArrow: nextArrow
		});
	}
    if($('.js--schedule2').length>0) {
		$('.js--schedule2').slick({
			autoplay: false,
			slidesToShow: 1,
			pauseOnFocus: true,
			fade: true,
			infinite: false,
			dots: false,
			arrows: true,
			cssEase: 'ease',
			prevArrow: prevArrow,
			nextArrow: nextArrow
		});
	}

	// search
	$('#js--search').click(function(e){
		e.preventDefault();
		$('body').toggleClass('-search');
		var has = $('body').hasClass('-search');
		if(has){
			$('.search__input').focus();
		}
	});
	
	// search
	$('.search__overlay').click(function(e){
		e.preventDefault();
		$('body').toggleClass('-search');
	});
	
	// menu
	$('#js--menu').click(function(e){
		e.preventDefault();
		$('body').toggleClass('-menu');
		$(this).toggleClass('active');
		$('#js--nav').toggleClass('-hide');
	});

	// ads
	$('#js--close').click(function(e){
		e.preventDefault();
		$('.ads__horizontal').hide();
	});

	// gallery
    if($('.js--gallery').length>0) {
		$('.js--gallery').magnificPopup({
			mainClass: 'mfp-with-zoom',
			delegate: '.gallery__item', 
			type: 'image',
			closeBtnInside: false,
			verticalFit: true,
			removalDelay: 300,
			fixedContentPos: true,
			gallery:{
				enabled: true,
				preload: [0,2],
				tCounter: '<span class="mfp-counter">%curr% <i>dari</i> %total%</span>',
				arrowMarkup: '<button title="%title%" type="button" class="arrow arrow--%dir%"><span class="icon icon-angle-%dir%"></span></button>', 
			},
			zoom: {
				enabled: true,
				duration: 300, 
				opener: function(element) {
					return element.find('img');
				}
			}

		});
	}
	
	// kompetisi
	$('.competition__item').each(function (){
		var list = $(this).find('.competition__sublist').outerHeight();
		var hbtn = $(this).find('.competition__title').outerHeight();
		$(this).find('.competition__title').on('click', function(e){
			e.preventDefault();
			var pr = $(this).parent();
			//console.log(pr);
			if(pr.hasClass('active')){
				pr.removeAttr('style');
				pr.removeClass('active');
			} else {
				pr.toggleClass('active');
				pr.css('height', (list + hbtn));
			}
		})
	});

    // tabs
    $('[data-type="tabs"]').each(function(){

        var $active, $content, $links = $(this).find('a');
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        //$active = $active.parent();
        var $activeNameClass = $active.attr('class');
        $active.addClass('-active');
        $content = $($active.attr('href'));

        $links.not($active).each(function () {
            $($(this).attr('href')).hide();
        });

        $(this).on('click', 'a', function(e){
            $active.removeClass('-active');
            $content.hide();

            $active = $(this);
            $content = $($(this).attr('href'));

            $active.addClass('-active');
            $content.show();

            e.preventDefault();
        });
    });

});
