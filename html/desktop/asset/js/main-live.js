$(document).ready(function() {

    var prevArrow = "<a href='#' class='arrow arrow--left'><span class='icon icon-angle-left'></span></a>";
	var nextArrow = "<a href='#' class='arrow arrow--right'><span class='icon icon-angle-right'></span></a>";
	
    if($('.js--liveMenu').length>0) {
		$('.js--liveMenu').slick({
			autoplay: false,
			slidesToShow: 8,
			slidesToScroll: 1,
			pauseOnFocus: true,
			dots: false,
			arrows: true,
			cssEase: 'ease',
			prevArrow: prevArrow,
			nextArrow: nextArrow
		});
	}
	
});
