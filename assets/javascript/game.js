

$(document).ready(() => {
// random number generator
    var randNum = Math.floor(Math.random() * ((120-19) +1) + 19);
    $('#randomnumber').html(randNum);
    


})
var unique = Math.floor(Math.random() * 12) +1;
var pink = Math.floor(Math.random() * 12) +1;
var green = Math.floor(Math.random() * 12) +1;
var red = Math.floor(Math.random() * 12) +1;


var wins = 0;
var losses = 0;
var guesstot = 0;


$('#green').click(function() {
guesstot = guesstot + green
$('#guesstot').text(guesstot);
})

$('#pink').click(function() {
guesstot = guesstot + pink
$('#guesstot').text(guesstot);
})

$('#unique').click(function() {
guesstot = guesstot + unique
$('#guesstot').text(guesstot);
})

$('#red').click(function() {
guesstot = guesstot + red
$('#guesstot').text(guesstot);
$
})