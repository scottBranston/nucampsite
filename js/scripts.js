$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) { //if this is a pause button
            $(".carousel").carousel("pause");                          //pause when clicked
            $("#carouselButton").children("i").removeClass("fa-pause");//remove pause icon
            $("#carouselButton").children("i").addClass("fa-play");    //show play icon
        } else {
            $(".carousel").carousel("cycle");                          //play carousel
            $("#carouselButton").children("i").removeClass("fa-play"); //remove play icon
            $("#carouselButton").children("i").addClass("fa-pause");   //show pause icon
        }
    });
});