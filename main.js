function randomQuote(){
    
    var source = "https://thesimpsonsquoteapi.glitch.me/quotes";

    $.ajax({
        type: 'GET',
        url: source,
        dataType: "json",
        success: function(response){
            data = response[0];
            printData(data);
        }
    });
}

function printData(data){
    var quote = data['quote'];
    var image = data['image'];
    var character = data['character'];

    $("#quote").text('"' + quote+ '"');
    $("#character").text(" - " + character);
    $("#image").html("<img src=" + image + " />");

    // if character faces right, float the image left and put the name on the right. Else, do the reverse.
    console.log($(document).width());
    console.log($(window).width());

    if ($(document).width() > 600){
        if (data['characterDirection'] == "Right"){
            $("#character").css("float", "left");
            $("#image").css("float", "right");
            $("#character").css("margin-left", "50px");
        } else {
            $("#character").css("float", "right");
            $("#image").css("float", "left");
            $("#character").css("margin-right", "50px");
        }
    } else {
        $("#character").css("text-align", "center");
    }

}

$(document).ready(function(){
    randomQuote();
});