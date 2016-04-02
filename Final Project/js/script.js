// external js: isotope.pkgd.js

$(document).ready( function() {

  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });


});
