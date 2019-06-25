$(document).ready(function(){
	// logo partner
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 7,
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:7
			}
		}
	}); 
});