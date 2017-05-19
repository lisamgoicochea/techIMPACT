/* 
Code by Kayla Serpa and Lisa Marie Goicochea May 2017
Driver - Kayla
Typer - Lisa Marie

My name is Lisa Marie and I was the typer for this sketch. We attempted to make a moving ball that would be affected when the mouse was pressed. 
Our original idea was to have the shape repeatedly show up with no outline (such as a paintbrush on the "paint" application) when hovered over with a mouse.
*/

var circX = 75; // X coordinate
var circY = 80; // Y coordinate
var circSize = 100 // circle size
var circR = 212 // R value of RGB
var circG = 31 // G value of RGB
var circB = 105 // B value of RBG
var speed = 4 // defining the value of speed

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(46, 88, 94);
  fill(circR, circG, circB);
  ellipse(circX, circY, circSize, circSize);
  circX = circX + speed;
  
  if (mouseIsPressed) { // command for ellipse to stop moving when mouse is pressed
    
    speed = speed*-1; // adjusted speed
    
  }
  else {
    
    circY = circY + speed;
  }
  /*var value = 0;
  function draw() {
  fill ();
  rect(25, 25, 50, 50);
  }
  function mouseDragged() { // trying to use the mouseDragged function
    value = value + 5;
    if (value > 255) {
      value = ;
    }
  }
*/
}