$('.project').hover(
  function(event) {
    $(event.currentTarget).find('.project-overlay').fadeIn();
  }, function(event) {
    $(event.currentTarget).find('.project-overlay').fadeOut();
  }
);
