/* 
Setting color. 
Created by Dawn C. Hayes March 2017. 
*/

function setup() {
  createCanvas(400, 400);
}

// an ellipse is draw at an x position of 250 and a y position of 175 with a width of 50 and a height of 50.
function draw() {
  background(255);
  stroke(255, 255, 0); // stroke() sets the color of the outline
  strokeWeight(3);     // strokeWeight() sets the thickness of the outline
  fill(255, 35, 125);  // fill() sets the color of the object
  ellipse(250, 175, 50, 50);
}