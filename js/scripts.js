$(document).ready(function() {

  function changeSlide() {
    $('.gallery').animate({marginLeft: '-400px'}, 500, moveFirstSlide);
  }

  function moveFirstSlide() {
    var firstSlide = $('.gallery li:first');
    var lastSlide = $('.gallery li:last');
    lastSlide.after(firstSlide);
    $('.gallery').css('marginLeft', '0');
  }

  setInterval(changeSlide, 3000);

});