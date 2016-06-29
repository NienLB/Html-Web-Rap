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
};

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t/1000) % 60);
  var minutes = Math.floor((t/1000/60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan =clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
 }

 var deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
 initializeClock('clockdiv', deadline);
