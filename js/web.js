$(document).ready(function(){
  $('.slick-js').slick({
    dots: true,
    
    speed: 1000,
    autoplay: true,
  
  });
  $('.slider-product').slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      }, {
      breakpoint: 600,
        settings: {
          slidesToShow: 2,
          
        }
    }]
    
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
	

