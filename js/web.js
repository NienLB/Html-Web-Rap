$(document).ready(function(){
  $('.slick-js').slick({
    dots: true,
    
    speed: 1000,
    autoplay: true,
  
  });
	$('.center-js').slick({
	autoplay: true,
	speed: 1000,
   infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerPadding: '20px'
});
	


});
