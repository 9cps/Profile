(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

// PAGE UP
$("#page-up").click(function () {
  $("#home").click();
});

// Responsive icon box
$(window).resize(function () {
  var widthWindow = $(window).width();
  if (widthWindow <= '767') {
      $('#coding-box').removeAttr("class");
      $('#coding-box').attr("class", "col-12");
      $('#framwork-box').removeAttr("class");
      $('#framwork-box').attr("class", "col-12");
      $('#database-box').removeAttr("class");
      $('#database-box').attr("class", "col-12");
  }
  else
  {
    $('#coding-box').removeAttr("class");
    $('#coding-box').attr("class", "col-4");
    $('#framwork-box').removeAttr("class");
    $('#framwork-box').attr("class", "col-4");
    $('#database-box').removeAttr("class");
    $('#database-box').attr("class", "col-4");
  }
});
$(window).trigger('resize');
