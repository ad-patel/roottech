/* global createCanvas, 
ellipse, mouseX, mouseY, 
noStroke, fill, 
random, background*/

var r, g, b, randomSize;

function setup(){
  createCanvas(800, 500);
  background(0, 0, 0);
}

function mouseDragged(){
  noStroke();
  fill(r, g, b);
  r = random(0, 256);
  g = random(0, 256);
  b = random(0, 256);
  ellipse(mouseX, mouseY, randomSize);
  randomSize = random(1, 101);
}

/*
function mouseDragged(){
  noStroke();
  fill(mouseX/2.5, mouseY/1.5, 100); //fill(r,g,b)
  ellipse(mouseX, mouseY, 20, 20);
  //ellipse(x center, y center, diameter)
}
*/