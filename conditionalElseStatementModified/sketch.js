/*
Created by Dawn C. Hayes March 2017
Modified by Lisa Marie Goicochea May 2017
*/

var circX = 200; // setting X coordinate of circle
var circY = 200; // setting Y coordinate of circle
var circStroke = 125; // assigning 0-255 for greyscale of circle's outline
var circR = 123; // 123 value of R in RGB
var circG = 11; // 11 value of G in RGB
var circB = 22; // 22 value of B in RGB
var circSize = 75; // size of circle
var recX = 100; // X coordinate for rectangle
var recY = 300; // Y coordinate for rectangle
var recStroke = 35; // assigning value of greyscale for rectangle's outline
var recCol = 200; // assigning color of rectangle
var recSize = 60; // size of rectangle
var canvBG = 20; // color of background
var speed = 2; // value of speed
var alph = 100; // value of alpha



function setup() {
  createCanvas(400,400);
}


function draw() {
  background(canvBG);
  stroke(circStroke);
  fill(circR, circG, circB, alph);
  stroke(circStroke);
  ellipse(circX, circY, circSize, circSize);
  ellipse(circX + 50, circY - 75, circSize, circSize);
  fill(circR, circG, circB, 100);
  
  stroke(recStroke);
  fill(recCol);
  rect(recX, recY, recSize, recSize);
  
  circX = circX + speed;
  recY = recY - speed;
  
  if (circX < width) {

    circSize += 1.5; // circle size increases by through each loop 
    
  } else {
    
    if (circX > width) {
      speed = speed * -1; // reverses direction of X
      circSize *= -1; // circle size will decrease as it is multiplied by -1 through each loop
    }
    
  }
  // not sure how I got the balls to "bounce" after becoming super small
  }