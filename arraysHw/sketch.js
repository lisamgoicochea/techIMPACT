/*
demonstrates color array.
Modified by Lisa Marie Goicochea

*/

var playlist = ["Never", "give", "up", "always", "believe"]; // string of words to be displayed

function setup() {
  createCanvas(700, 700); // canvas size
  background(30, 60, 150); // rgb for background
  
  for (i = 0; i < 8; i++) {
    // console.log(playlist[i]);
    stroke(222); // color for outline
    fill(240); // color for interior
    textSize(28); // size of text
    text(playlist[i], i * 100 + 40, i * 100 + 40);
  }
}

// uncaught typeError "toString" is undefinied
function draw() {
  
}