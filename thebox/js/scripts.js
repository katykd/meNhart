var data = [
  {
    title: 'If You’re Too Busy For These 5 Things: Your Life Is More Off-Course Than You Think',
    entryTimeDay: '14',
    entryTimeMonth: 'Dec',
    image: 'post1image',
    subhead: "<p>The reason for this phenomenon is quite simple — through air traffic control and the inertial guidance system, pilots are constantly course-correcting. When immediately addressed, these course corrections are not hard to manage. When these course corrections don’t regularly happen, catastrophe can result.</p><p>For example, in 1979, a passenger jet with 257 people onboard left New Zealand for a sightseeing flight to Antarctica and back. However, the pilots were unaware that someone had altered the flight coordinates by a measly two degrees, putting them 28 miles east of where they assumed to be.</p><p>Approaching Antarctica, the pilots descended to give the passengers a view of the brilliant landscapes. Sadly, the incorrect coordinates had placed them directly in the path of the active volcano, Mount Erebus.</p><p>The snow on the volcano blended with the clouds above, deceiving the pilots into thinking they were flying above flat ground. When the instruments sounded a warning of the quickly rising ground, it was too late. The plane crashed into the volcano and everyone onboard died.</p>"
  },
  {
    title: '5 Reasons Why You Should Build A Small Business — Not A Start-up',
    entryTimeDay: '14',
    entryTimeMonth: 'Dec',
    image: 'post1image',
    subhead: "<p>The reason for this phenomenon is quite simple — through air traffic control and the inertial guidance system, pilots are constantly course-correcting. When immediately addressed, these course corrections are not hard to manage. When these course corrections don’t regularly happen, catastrophe can result.</p><p>For example, in 1979, a passenger jet with 257 people onboard left New Zealand for a sightseeing flight to Antarctica and back. However, the pilots were unaware that someone had altered the flight coordinates by a measly two degrees, putting them 28 miles east of where they assumed to be.</p><p>Approaching Antarctica, the pilots descended to give the passengers a view of the brilliant landscapes. Sadly, the incorrect coordinates had placed them directly in the path of the active volcano, Mount Erebus.</p><p>The snow on the volcano blended with the clouds above, deceiving the pilots into thinking they were flying above flat ground. When the instruments sounded a warning of the quickly rising ground, it was too late. The plane crashed into the volcano and everyone onboard died.</p>"
  },
  {
    title: 'Here is article THREE. How interesting! Here is article one.',
    entryTimeDay: '14',
    entryTimeMonth: 'Dec',
    image: 'post1image',
    subhead: "<p>The reason for this phenomenon is quite simple — through air traffic control and the inertial guidance system, pilots are constantly course-correcting. When immediately addressed, these course corrections are not hard to manage. When these course corrections don’t regularly happen, catastrophe can result.</p><p>For example, in 1979, a passenger jet with 257 people onboard left New Zealand for a sightseeing flight to Antarctica and back. However, the pilots were unaware that someone had altered the flight coordinates by a measly two degrees, putting them 28 miles east of where they assumed to be.</p><p>Approaching Antarctica, the pilots descended to give the passengers a view of the brilliant landscapes. Sadly, the incorrect coordinates had placed them directly in the path of the active volcano, Mount Erebus.</p><p>The snow on the volcano blended with the clouds above, deceiving the pilots into thinking they were flying above flat ground. When the instruments sounded a warning of the quickly rising ground, it was too late. The plane crashed into the volcano and everyone onboard died.</p>"
  },
  {
    title: 'This is our 4th article.',
    entryTimeDay: '19',
    entryTimeMonth: 'Aug',
    image: 'post1image',
    subhead: "<p>The reason for this phenomenon is quite simple — through air traffic control and the inertial guidance system, pilots are constantly course-correcting. When immediately addressed, these course corrections are not hard to manage. When these course corrections don’t regularly happen, catastrophe can result.</p><p>For example, in 1979, a passenger jet with 257 people onboard left New Zealand for a sightseeing flight to Antarctica and back. However, the pilots were unaware that someone had altered the flight coordinates by a measly two degrees, putting them 28 miles east of where they assumed to be.</p><p>Approaching Antarctica, the pilots descended to give the passengers a view of the brilliant landscapes. Sadly, the incorrect coordinates had placed them directly in the path of the active volcano, Mount Erebus.</p><p>The snow on the volcano blended with the clouds above, deceiving the pilots into thinking they were flying above flat ground. When the instruments sounded a warning of the quickly rising ground, it was too late. The plane crashed into the volcano and everyone onboard died.</p>"
  }
];

$.each(data, function(key, article) {
  var tpl = '<article class="post">';
      tpl += '<div class="top">'
      tpl += '<a href="#" class="articletitle">' + article.title + '</a>'
      tpl += '<div class="entry-time">'
      tpl += '<div class="entry-time-day">' + article.entryTimeDay + '</div>'
      tpl += '<div class="entry-time-month">' + article.entryTimeMonth + '</div>'
      tpl += '</div>'
      tpl += '</div>'
      tpl += '<div class="body">'
      tpl += '<a href="#">'
      tpl += '<img src="images/' + article.image + '.png" alt="post1image">'
      tpl += '</a>'
      tpl += '<div class="subhead">' + article.subhead + '</div>'
      tpl += '<a class="read-more" href="#">READ MORE</a>';
      tpl += '</div>'
      tpl += '</article>'

  $('.main-posts').append(tpl);
});

$('.read-more').on('click', function(event) {
  event.preventDefault();
  var $target = $(event.currentTarget);

  if($target.hasClass('isOpen')) {
    // Close the text
    $target.removeClass('isOpen');
    $target.parents('.post').find('p').slideUp(1000);
    $target.html('Read More');
  } else {
    // Open the text
    $target.addClass('isOpen');
    $target.parents('.post').find('p').slideDown();
    $target.html('Read Less');
  }
});
