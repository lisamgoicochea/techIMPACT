/*
https://vimeo.com/channels/learningp5js/138935677
Modified by Lisa Marie Goicochea May 2017
*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  
  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
    if (mouseIsPressed) { // if mouse is pressed
      background(0, 255, 0); // background color
    }
    fill(255, 0, 200); // fill color
  }
  rect(300, 200, 100, 100); // rectangle shape
}