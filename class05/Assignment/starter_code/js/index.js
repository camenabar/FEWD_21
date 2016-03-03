$(document).ready(function() {

	$("form").submit(function(e){
		console.log("hello");
		e.preventDefault();

		// var city = $("city-type").val();

		// city = city.toLowerCase();

		// if(city == "New York" || city == "New York City" || city == "NYC"){
		// 	$('.city > div').css('background-image', 'img src=nyc.jpg');
		// 	}

		// if(city == "San Francisco" || city == "SF" || city == "Bay Area"){
		// 	$('.city > div').css('background-image', 'img src=sf.jpg');
		// 	}
		 
		// if(city ==  "Los Angeles" || city == "LA" || city == "LAX"){
		// 	$('.city > div').css('background-image', 'img src=la.jpg');
		// 	}

		// if(city == "Austin" || city == "ATX"){
		// 	$('.city > div').css('background-image', 'img src=austin.jpg');
		// 	}

		// if(city == "Sydney" || city == "SYD"){
		// 	$('.city > div').addClass('sydney');
		// 	}	
	})	

		$('#submit-btn').click(change);
			

			function change() {      
			 var city = $('#city-type').val();

			 if(city == "New York" || city == "New York City" || city == "NYC"){
			 	$('body').removeClass().addClass('nyc');
			 }

			 else if(city == "San Francisco" || city == "SF" || city == "Bay Area"){
			 	$('body').removeClass().addClass('sf');
			 }

			 else if(city == "Los Angeles" || city == "LA" || city == "LAX"){
			 	$('body').removeClass().addClass('la');
			 }

			 else if(city == "Austin" || city == "ATX"){
			 	$('body').removeClass().addClass('austin');
			 }

			 else if(city == "Sydney" || city == "SYD"){
			 	$('body').removeClass().addClass('austin');
			 }

			 else{
			 	$('body').removeClass();
			 }

}

});





