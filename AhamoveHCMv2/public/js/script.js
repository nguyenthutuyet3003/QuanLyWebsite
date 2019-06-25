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

		vitrihientai = $('html').scrollTop();
		console.log(vitrihientai);
		console.log($('.banner-profit').offset().top);
		if(vitrihientai > $('.banner-profit').offset().top - 600)
		{
			$('.card:nth(0)').addClass('slide-from-left');
			$('.card:nth(1)').addClass('slide-from-top');
			$('.card:nth(2)').addClass('slide-from-bottom');
			$('.card:nth(3)').addClass('slide-from-right');

		}

		if (vitrihientai >= $('.banner-profit').offset().top - 300 || vitrihientai <= $('.banner-profit').offset().top - 600)
		{
			$('.card:nth(0)').removeClass('slide-from-left');
			$('.card:nth(1)').removeClass('slide-from-top');
			$('.card:nth(2)').removeClass('slide-from-bottom');
			$('.card:nth(3)').removeClass('slide-from-right');
		}
		
		if(vitrihientai >= $('.shipperfast-background').scrollTop() - 800)
		{
			$('.card-shipper:nth(0)').addClass('slide-from-top');
			$('.card-shipper:nth(1)').addClass('slide-from-top');
			$('.card-shipper:nth(2)').addClass('slide-from-top');
		}
		
		if (vitrihientai >= $('.shipperfast-background').offset().top - 300 || vitrihientai <= $('.shipperfast-background').offset().top - 800)
		{
			$('.card-shipper:nth(0)').removeClass('slide-from-top');
			$('.card-shipper:nth(1)').removeClass('slide-from-top');
			$('.card-shipper:nth(2)').removeClass('slide-from-top');
		}

		if(vitrihientai >= $('.service').scrollTop() - 100)
		{
			$('.detail-service > img:nth(0)').addClass('scale-in-center');
			$('.detail-service > img:nth(1)').addClass('scale-in-center');
			$('.detail-service > img:nth(2)').addClass('scale-in-center');
			$('.detail-service > img:nth(3)').addClass('scale-in-center');
		}
		
		if (vitrihientai >= $('.service').offset().top + 200 || vitrihientai <= $('.service').offset().top - 100)
		{
			$('.detail-service > img:nth(0)').removeClass('scale-in-center');
			$('.detail-service > img:nth(1)').removeClass('scale-in-center');
			$('.detail-service > img:nth(2)').removeClass('scale-in-center');
			$('.detail-service > img:nth(3)').removeClass('scale-in-center');
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

	// Nút trược xuống form đăng kí
		// Nút ở trên thanh menu
		$('.buttonexperience').click(function(){
			$('html').animate({scrollTop: $('#table-form').offset().top - $('.menu').height()}, 2000);
			return true;
		});
		// Nút ở dưới banner
		$('.btn-experience').click(function(){
			$('html').animate({scrollTop: $('#table-form').offset().top - $('.menu').height()}, 2000);
			return true;
		});
	// Nút chuyển trang bảng giá
	$('.btn-pricelist').click(function(){
		location.href = 'banggia.html';
	});
});

// Messeger Thu Gon
$(document).ready(function(){
	var currentItem = 0;
	var arrFeedbacks = 
	[
		{
			title: "Tiên - ValiTrip : 08535353xx",
			description: "Giá ship rẻ + không thu phí khi trả hàng về. Sau 1 tháng sử dụng tôi cảm thấy cực kì thích dịch vụ này.",
			time: "10 phút trước"
		},
		{
			title: "Thuỷ Tiên - Chợ Lạc Xoong: 09091051xx",
			description: "Trên app chỉ giao được siêu tốc tối đa 5 điểm, nhưng khi thoả thuận giữa 2 bên thì bên Ahamove đã mở thêm cho mình lên tới 10-15 điểm. Giúp tiết kiệm chi phí vận chuyển cực kì nhiều.",
			time: "1 phút trước"
		},
		{
			title: "Phạm Đinh Cảnh: 09384837xx",
			description: "Vừa tải app về là có bạn bên Ahamobe hỗ trợ liền, rất nhiệt tình và dễ thương. 5 sao!",
			time: "5 phút trước"
		},
		{
			title: "Đinh Hương Giang: 08912284xx",
			description: "Dạo này mang bầu, không tự đi giao cho khách được. Cũng may là có Ahamove, giờ không lo về vấn đề ship hàng nữa.",
			time: "3 phút trước"
		},
		{
			title: "Nguyễn Thị Thu Thảo: 07889814xx",
			description: "Hay bị mấy anh shipper tự do boom, không qua lấy hàng khiến tôi quyết định tìm đến Ahamove. Sau 2 tuần rồi, tôi cảm thấy quyết định mình thật đúng đắn",
			time: "Vừa xong"
		},
		{
			title: "Hảo - Chu's Bakery : 09327199xx",
			description: "Ahamove giúp mình có thể giao bánh được cho khách tới tận 11h khuya. Cám ơn Ahamove!",
			time: "2 phút trước"
		},
		{
			title: "Nguyễn Quốc Dũng: 0388822xx",
			description: "Dạo này Sài Gòn hay mưa nhiều, book thử 1 cuốc xem có ai nhận không. Thật không tin là có anh shipper mặc áo mưa chạy ship luôn. Quá dữ.",
			time: "7 phút trước"
		},
		{
			title: "Minh Tuấn - Dog Paradise :09327199xx",
			description: "Mặc dù có shipper cho công ty riêng của mình rồi, nhưng những ngày lễ tết hoặc khi hết giờ làm việc của shipper, thì Ahamove luôn là giải pháp dự phòng hoàn hảo nhất cho các chi nhánh của tôi.",
			time: "Vừa xong"
		},
		{
			title: "Ngân - Măng’s Mania: 03680720xx",
			description: "Giao diện thân thiện với người dùng. Tài xế Ahamove rất dễ thương về phần tiền bạc, không có chuyện đòi và vòi tiền thêm.",
			time: "4 phút trước"
		}
	];

	$(document).ready(function () {

		setInterval(changeNotification, 9000);
		
		function changeNotification()
		{
			showNewNotification();
			setTimeout(hideOldNotification, 8000);
			
		}

		function hideOldNotification()
		{
			$(".dialog-box").animate({left: "-100%"}, 1000);
		}	

		function showNewNotification()
		{
			// update new data
			$(".content-person .nttitle").html(arrFeedbacks[currentItem].title);
			$(".content-person .ntcontent").html(arrFeedbacks[currentItem].description);
			$(".content-person .nttime").html(arrFeedbacks[currentItem].time);
			
			if (currentItem >= arrFeedbacks.length - 1)
			{
				currentItem = 0;
			}
			else
			{
				currentItem++;	
			}
			
			$(".dialog-box").animate({left: "2%"}, 1000);
		}
	});	
});
