$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        navText: [ '', ' ' ],
        nav: true,
        dots: true,
        responsive:{
            428:{
                items:1
            },
            1100:{
                items:5
            }
        }
    });
    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );
});