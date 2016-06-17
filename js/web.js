$(document).ready(function(){
  $('.slick-js').slick({
    dots: true,
    
    speed: 1000,
    autoplay: true,
  
  });
SetBannerBackground();

});
function SetBannerBackground() {
  $('[data-bg]').each(function (i) {
    var url_background = $(this).data("bg");
    console.log(url_background);
    $(this).backstretch(url_background);
  });
}
	

