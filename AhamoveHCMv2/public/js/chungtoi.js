$(document).ready(function(){
	// Menu
	$(window).scroll(function(e) {
		if ($(this).scrollTop() > 0)
		{
			$(".menu").addClass("menu-fixed");

			// đổi sang logo có chữ
			$(".img-logo-topmenu").attr("src", "public/images/logo-menutop-2.png");

			// đổi màu chữ menu (xanh đậm)
			$("ul.main-nav > li > a").css("color", "#16254C");
		}
		else
		{
			$(".menu").removeClass("menu-fixed");

			// đổi sang logo gốc không có chữ
			$(".img-logo-topmenu").attr("src", "public/images/logo-menutop.png");	

			// đổi màu chữ menu (trắng - măc định)
			$("ul.main-nav > li > a").css("color", "#fff");
		}

	});
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
				items:3
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