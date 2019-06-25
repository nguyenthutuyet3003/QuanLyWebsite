// Hieu ung bong bong
function initparticles() {
   bubbles();
}
function bubbles() {
   $.each($(".particletext.bubbles"), function() {
      var bubblecount = $(this).width() / 50 * 10;
      for (var i = 0; i <= bubblecount; i++) {
         var size = $.rnd(40, 80) / 10;
         $(this).append(
            '<span class="particle" style="top:' +
            $.rnd(20, 80) +
            "%; left:" +
            $.rnd(0, 95) +
            "%;width:" +
            size +
            "px; height:" +
            size +
            "px;animation-delay: " +
            $.rnd(0, 30) / 10 +
            's;"></span>'
            );
      }
   });
}
$(document).ready(function () {

   jQuery.rnd = function(m, n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor(Math.random() * (n - m + 1)) + m;
   };

   initparticles();
});
// Menu
$(document).ready(function(){
   //Menu
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
});