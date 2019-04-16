$("#Blossom").hide();
$("#Bubbles").hide();
$("#Buttercup").hide();
$("#PrincessMor").hide();

$("button").click(function() {
    var age = $(".age").val();
    var color = $(".Color").val();

if (color==="pink" && age<=18){
    $("#PrincessMor").show();
} else if (color==="green" && age <=18) {
    $("#Bubbles").show();
} else if (color==="pink" && age >=18){
    $("#Blossom").show();
} else if (color=== "green" && age >=18) {
    $("#Buttercup").show();
}

});
