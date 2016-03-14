//definig the variable
var cities = ["NYC", "SF", "LA", "ATX", "SYD"]; //list of city options for drop down

$(document).ready(function() {
  for(i=0;i<cities.length;i++) { //start with 0 cities selected, then when you click 'cities' show all options
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>'); //displays list of cities
  }
  $('form').on('change', '#city-type',function(){ //click the form btn, show #city-type
    var city = $('#city-type').val(); //select a city variable
    if(city == 'NYC') { //if var NYC is selected...
      $('body').attr('class','nyc'); //attribute the class 'nyc'
    }
    else if (city == 'SF') { //if var SF is selected
      $('body').attr('class','sf'); //attribute class 'sf'
    }
    else if (city == 'LA') { //if var LA is selected
      $('body').attr('class','la'); //attribute class 'la'
    }
    else if (city == 'ATX') { //if var ATX is selected
      $('body').attr('class','austin'); //attribute class 'austin'
    }
    else if (city == 'SYD') { //if var SYD is selected
      $('body').attr('class','sydney'); //attribute class 'sydney'
    }
  });
});