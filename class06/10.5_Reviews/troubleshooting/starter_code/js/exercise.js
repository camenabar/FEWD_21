$(document).ready(function(){

    $('.breedContainer .toggler').click(function(){

    	$('.breedContainer').removeClass("breedContainerLG");

        $(this).parent().toggleClass("breedContainerLG");


        if(jQuery(this).attr('src') == "img/240px-Gnome-window-close.svg.png"){
            
            jQuery(this).attr('src',"img/48px-Gnome-list-add.svg.png");
        	
        } else {

            jQuery(this).attr('src',"img/240px-Gnome-window-close.svg.png");
        }

    });
});