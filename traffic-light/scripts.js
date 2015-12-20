/*
 * For this asignment, create a page with three traffic lights.
 * When you click on a light, the background of the page should
 * change to be the same color as the light.
 * The font colors should also change to make it readable and pretty.
 */
$('.one').on('click', function(){
  $('body').css({
    background: 'red'
  });
  $('h1').css({
    color: 'white'
  });
});

$('.two').on('click', function(){
  $('body').css({
    background: 'black'
  });
  $('h1').css({
    color: 'white'
  });
});

$('.three').on('click', function(){
  $('body').css({
    background: 'blue'
  });
  $('h1').css({
    color: 'white'
  });
});
