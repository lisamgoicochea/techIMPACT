/* 
Basic P5 sketch.
Created by Dawn C. Hayes March 2017. 
Modified by Lisa Marie Goicochea May 2017.

*/

// every P5 sketch (program) requires at least two functions: function setup() and function draw()
// function is a keyword that P5 recognizes as a funcition indicator
// setup() takes care of initializing the program and runs once.
function setup() { //parenthesis holds arguments or parameters.
  createCanvas(400, 400); // the createCanvas() function sets canvas size
  background(125); // no change nor error
  strokeWeight(4); // once again, it seems to work
  fill(255, 204, 0); // no change nor error
  ellipse(200, 200, 50, 50); // no change nor error
}

// draw() takes care of items that are repeated until the canvas or browser window is closed. Animations can be set within the draw() loop
function draw() { // curly brackets contain a series of statements aka "lines of code".
   // the background() function sets background color
   //the ellipse function is used to draw an ellipse. Arguments are passed into the function to determine
  // location and size

}