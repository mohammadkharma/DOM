let movies = $("li");
let actors = $(".actors");

movies.on("click mouseleave", function (e) {

    if (e.type === 'click') {
        $(this).addClass("toggle");
        actors.css("visibility", "visible");
    } else {
        $(this).removeClass("toggle");
        actors.css("visibility", "hidden");
    }
    
});