/*
|
array of objects.

code by Dawn C. Hayes March 2017
Modified by Lisa Marie Goicochea
*/

var stars = []; // empty array
var moon;

function setup() {
  createCanvas(600,400);
  
  for (var i = 0; i < 400; i++); { // for loop
    stars[i] = { // object array
    x1: random(0, width), // X coordinate is randomly between 0 and width
    y1: random(0, height), // Y coorinate is randomly between 0 and width
    display: function() {
      stroke(random(225)); // stroke color
      point(this.x1, this.y1);
    }
  }
}
moon = {
  x: 100, // X coordinate of moon
  y: 350, // Y coordinate of moon
  diam: 100, // diameter of moon
  xspeed: .5, // X coordinate speed of moon
  yspeed: .5, // Y coordinate speed of moon
  }

  cloud = {
    x: 50, // X coordinate of cloud
    y: 150, // Y coordinate of cloud
    diam: 75, // diameter of moon
    col: 255 // color of moon
  }
function draw() {
  background(0, 14, 35);
  for (var i = 0; i < stars.length; i++) {
    stars[i].display(); // displays each star
  }
  noStroke();
  fill(225, 225, 134);
  ellipse(moon.x, moon.y, moon.diam, moon.diam);
  
  if (moon.x > 0 || moon.x < width && moon.y > 0 || moon.x < height) {
    moon.x = moon.x + moon.xspeed;
    moon.y = moon.y - moon.yspeed;
  }
  
  // cloud constructor function
  noStroke();
  fill(cloud.col);
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam); // coordinates for cloud
  ellipse(cloud.x + 30, cloud.y - 15, cloud.diam, cloud.diam + 35);
  ellipse(cloud.x, cloud.y + 10, cloud. diam + 30, cloud.diam);
  ellipse(cloud.x, cloud.y + 15, cloud.diam + 70, cloud. diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
  
  noStroke();
  fill(cloud.col);
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam); // coordinates for cloud
  ellipse(cloud.x + 90, cloud.y - 15, cloud.diam, cloud.diam + 70);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);
  ellipse(cloud.x + 90, cloud.y + 15, cloud.diam + 70, cloud. diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);
  }