/*
Created by Dawn C. Hayes March 2017
Modified by Lisa Marie Goicochea May 2017
*/

var circX = 88; // changed value to 88
var circY = 100; // changed value to 100
var circStroke = 75; // value of circle outline
var circR = 226; // value of R from RGB
var circG = 141; //value of G from RGB 
var circB = 1; //value of B from RGB
var circSize = 22; // size of the circle
var recX = 200; //value of 200
var recY = 400; //value of 400
var recStroke = 11; // color value of stroke
var recCol = 226;// value of recCol
var recSize = 144; // size of rectangle
var canvBG; // background
canvBG = 77, 77, 77; // values for color of background
var speed = 2; // defined value of speed

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(canvBG);// color of background
  stroke(circStroke); // outline of circle
  fill(circR, circG, circB); // inside of circle
  ellipse(circX, circY, circSize, circSize); // coordinates for bottom circle
  ellipse(circX + 50, circY - 75, circSize, circSize); // coordinates for top circle
  fill(circR, circG, circB, 135); // inside of circle
  
  circX = circX + speed;
  
    stroke(recStroke);
    fill(recCol); // inside of circle
    rect(recX, recY, recSize, recSize); // rectangle
  
  recY = recY - speed;
  
  if(circX > width || circX < 0) {
    
    speed = speed *-1; // modifying speed into the negative / opposite direction
    
  }
  
}