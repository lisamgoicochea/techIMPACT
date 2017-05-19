/*
Demonstrates definition and use of a function with parameters and arguments.

Created by Dawn C. Hayes March 2017
Modified by Lisa Marie Goicochea May 2017
*/

function setup() {
  createCanvas(600, 400);  
}

function draw() {
  background(0);
  moon(445, 200, 150);
  
  star(370, 25);
  star(50, 175);
  star(115, 35);
  star(25, 44);
  star(100, 17);
  star(215, 235);
  star(418, 293);
  star(525, 370);
  star(175, 350);
  star(235, 115);
  star(444, 325);
  star(317, 200);
  star(535, 315);
  star(293, 218);
}

// functions should be defined outside of the setup() and draw() loops.

function moon(xloc, yloc, diam) {
   noStroke();
   fill(255, 255, 153);
   ellipse(xloc, yloc, diam);
}

function star(xloc, yloc) {
  fill(255);
  ellipse(xloc, yloc, 5);
}