var response = "0000000000";

var charSize = 10;
var r = document.querySelector(':root');
r.style = "font-size: " +  String(charSize) + "px";

$("#charLarge").click(function(){
    charSize = charSize < 20 ? charSize + 1 : charSize;
    var r = document.querySelector(':root');
    r.style = "font-size: " +  String(charSize) + "px";
});

$("#charSmall").click(function(){
    charSize =  charSize > 5 ? charSize - 1 : charSize;
    var r = document.querySelector(':root');
    r.style = "font-size: " +  String(charSize) + "px";
});