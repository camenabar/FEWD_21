$( document ).ready(function() {
     
	// When you click the readmore link the 
     $('.article1 .readMore').click(function(e) {
        e.preventDefault();
        $('.article1 .hidden').slideDown();
        $('.article1 .readMore').hide();
        $('.article1 .readLess').show();
   	 });



   	 $('.article1 .readLess').click(function(e) {
        e.preventDefault();
        $('.article1 .hidden').slideUp();
        $('.article1 .readLess').hide();
        $('.article1 .readMore').show();
     });

     //article 2

        $('.article2 .readMore').click(function(e) {
        e.preventDefault();
        $('.article2 .hidden').slideDown();
        $('.article2 .readMore').hide();
        $('.article2 .readLess').show();
   	 });



   	 $('.article2 .readLess').click(function(e) {
        e.preventDefault();
        $('.article2 .hidden').slideUp();
        $('.article2 .readLess').hide();
        $('.article2 .readMore').show();
     });

     //learn more

      $('.article3 .learnMore').click(function(e) {
        e.preventDefault();
        $('.article3 .hidden').slideDown();
        $('.learnMore').hide();

   	 });





});
