/*
Original code by Daniel Shiffman
Modified by Dawn C. Hayes
Modified by Lisa Marie Goicochea
*/

function setup() {
  createCanvas(400,480);
}

function draw() {
  background(235); // value between 0-255
  strokeWeight(2); //thickness of outline
  stroke(255); // color
  
  // purple circles
  var x = 0;
  while (x <= width) {
    fill(125, 35, 255); // color of ellipse
    ellipse(x, 200, 50, 50); // x and y coordinates of ellipse as well as size
    x = x + 50;
  }
  // pink circles
  for (x = 0; x <= width; x += 50) {
    fill(255, 0, 200); // color of ellipse
    ellipse(x, 300, 50, 50); // x and y coordinates of ellipse as well as size
  }
}