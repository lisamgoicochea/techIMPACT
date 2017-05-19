/* 
Code by Kayla Serpa and Lisa Marie Goicochea May 2017
Driver - Kayla
Typer - Lisa Marie
*/

var circX = 75;
var circY = 80;
var circSize = 100
var circR = 212
var circG = 31
var circB = 105
var speed = 4

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(46, 88, 94);
  fill(circR, circG, circB);
  ellipse(circX, circY, circSize, circSize);
  circX = circX + speed;
  
  if (mouseIsPressed) {
    
    speed = speed*-1;
    
  }
  else {
    
    circY = circY + speed;
  }
  /*var value = 0;
  function draw() {
  fill ();
  rect(25, 25, 50, 50);
  }
  function mouseDragged() {
    value = value + 5;
    if (value > 255) {
      value = ;
    }
  }
*/
}