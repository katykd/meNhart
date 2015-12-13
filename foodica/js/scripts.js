var $primarySlider = $('.primaryslider');

// $primarySlider.slick({
//     arrows: true,
//     fade: false,
//     dots: true,
//     speed: 1300,
//     autoplay: true
// });

// $('h1').css({
//   background: 'red'
// });

var car = {
  wheels: 4,
  radio: true,
  name: 'Pat',
  numberOfSeats: 4,
  sayHello: function(name) {
    return 'hello ' + name;
  }
}


/*
 * Let's make a slider
 * All the slides on the page are visible
 * Let's hide all the slides
 * Then let's get a specific slide, and show that slide
 */

$('.primaryslider > .3').css({'display': 'block'});

var number = 0;
setInterval(function () {
  number = number + 1;
  $('.primaryslider > div').css({'display': 'none'});
  $('.primaryslider > .' + number).fadeIn('800');
  if (number === 3) {
    number = 0;
  }
}, 3000);

console.log($primarySlider);
