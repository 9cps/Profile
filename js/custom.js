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

// Click to download 

// PAGE UP
$("#brand-logo").click(function () {
  $("#home").click();
});

$("#page-up").click(function () {
  $("#home").click();
});

function openNav() {
  $('#nav_contact').attr('ref', 'close'); //set to open
  document.getElementById("mySidenav").style.width = "50px";
  $('#nav_contact').css('background-color', '#ffc200');
}

function closeNav() {
  $('#nav_contact').attr('ref', 'open'); //set to open
  document.getElementById("mySidenav").style.width = "0";
  $('#nav_contact').removeAttr('style');
}

// Open first page close
setTimeout(closeNav(), 10000);

// Open and close nav contact
$("#nav_contact").click(function() {
  const key = $('#nav_contact').attr('ref');
  if(key == 'open'){
    openNav();
  }else{
    closeNav();
  }
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
