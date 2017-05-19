/* 
Example that reverses drawn shapes across the canvas/window using variables, incrementors and conditional logic (if statement) in the draw() loop.
Created by Dawn C. Hayes March 2017. 
*/

var circX = 200; 
var circY = 200; 
var circStroke = 125; 
var circR = 55; 
var circG = 135; 
var circB = 225; 
var circSize = 75;
var recX = 100;
var recY = 300;
var recStroke = 35;
var recCol = 0;
var recSize = 75;
var canvBG;
canvBG = 125, 55, 255; 
var speed = 2;



function setup() {  
	createCanvas(400, 400); 
}


function draw() {
	background(canvBG); 
	stroke(circStroke); 
	fill(circR, circG, circB);  
	stroke(circStroke);  
	ellipse(circX, circY, circSize, circSize); 
	ellipse(circX + 50, circY - 75, circSize, circSize); // by adding +  50 and -75, the position of the ellipse is offset against the other.
	fill(circR, circG, circB, 135); 
	
	circX = circX + speed; // in the draw() loop, this statement will increment the value of circX by 3.
					   // this gives the appearance of animation that draws the ellipse at circX + 3 each time the code is completed. 
					   // it will then draw the ellipse at the new location after the code is executed. 
					   // this statement also introduces an incrementor, +, that takes a value, adds it to another and assigns it to the variable.
					   
    stroke(recStroke);
    fill(recCol);
    rect(recX, recY, recSize, recSize);
    
    recY = recY - speed; // use a - incrementor to make the rectangle appear to move up on the canvas.
    
    if(circX > width || circX < 0) { // an if statement is used to introduce a path based upon whether a condition is true or not. 
    								 // if the condition is true, the block of code in between the curly braces is executed. 
    								 // if not, P5 will go on to the rest of the code.
    	speed = speed *-1;			// take the speed and multiply itself by -1. This achieves a "reverse movement" effect.
    								// relational operators such as  > and || add more options to consider in testing for a condition being true.
    } 					// in this case, the y position is only reversed if it is less than 0. 
}