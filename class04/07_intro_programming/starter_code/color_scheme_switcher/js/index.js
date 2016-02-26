jQuery( document ).ready(function() {
    jQuery('#grayButton').click(switchGray);
    jQuery('#whiteButton').click(switchWhite);

    function switchGray() {
        jQuery('body').css("background-color", "gray");
        console.log("I'm gray!");
    }

    function switchWhite() {
        jQuery('body').css("background-color", "white");
        console.log("I'm white!");
    }

    // console.log( "ready!" );
});








// //on click white button set colors white
// document.getElementById ("whiteButton").onclick = switchToWhite;
// //on click grey button set colors grey
// document.getElementById ("grayButton").onclick = switchToGrey;

// //function to make colors white
// function switchToWhite () {

//     //change background 
//     document.body.style.backgroundColor = "white" ;
//     //change text colors
//     document.body.style.color = "black" ;

// }

// //function to make colors grey
// function switchToGrey () {

//     //change background 
//     document.body.style.backgroundColor = "gray" ;
//     //change text colors
//     document.body.style.color = "black" ;
// }

//     //change background 
//     //change text colors