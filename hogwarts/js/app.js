// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };


$( document ).ready(function() {
    //console.log( "ready!" );
    // let $container = $("#container");
    // let $h1 = $("h1");
    $("body").prepend("<h2>Cameron Binion</h2>");
    $("body").append("<h3>Slytherin</h3>");
    $("body").append("<h4 id=Owl>Flappy</h4>");
    $("body").append("<h4 id=wand>Larch Wand with Unicorn hair Core</h4>");
    $("body").append("<ul><li></li><li id =secret>Invisibility Cloak</li><li id =secret>Magic Map</li><li id=secret>Time Turner</li><li id=Owl>Leash</li><li>Bertie Bott's Every Flavor (Jelly) Beans</li>");
    $("#wand").css("color", "red");
    $("#secret").hide(2000);
    $("#secret").show("slow");
});



