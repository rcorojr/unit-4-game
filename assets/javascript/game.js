

$(document).ready(() => {
// random number generator
    var randNum = Math.floor(Math.random() * ((120-19) +1) + 19);
    $('#randomnumber').html(randNum);
    


})

//random number generator for buttons
var unique = Math.floor(Math.random() * 12) +1;
var pink = Math.floor(Math.random() * 12) +1;
var green = Math.floor(Math.random() * 12) +1;
var red = Math.floor(Math.random() * 12) +1;

var wins = 0;
var losses = 0;
var guesstot = 0;






//onclick events for buttons to add ot the guess total
$('#green').click(function() {
guesstot = guesstot + green
$('#guesstot').text(guesstot);
if (guesstot === randNum){

}
})

$('#pink').click(function() {
guesstot = guesstot + pink
$('#guesstot').text(guesstot);
if (guesstot === randNum){

}
})

$('#unique').click(function() {
guesstot = guesstot + unique
$('#guesstot').text(guesstot);
if (guesstot === randNum) {

}
})

$('#red').click(function() {
guesstot = guesstot + red
$('#guesstot').text(guesstot);
if (guesstot === randNum){

}

})

function win ()

function lose ()

//finish if/else statements to recognize a win and a loss. wins and losses need to increase by one
//