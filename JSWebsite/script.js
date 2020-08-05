/*global createCanvas, background, rect, fill, noStroke, width
line, strokeWeight, stroke, circle, ellipse*/

//ALL THE CODE FOR INDEX.HTML
//https://tinyurl.com/jjsroottech

var position;

function setup() {
  createCanvas(800, 500);
  background(200);
  position = 0;
}

function draw() {
  background(0, 183, 255);
  noStroke();
  fill(110, 73, 18);
  rect(0, 250, width, 250);
  //rect(x top L, y top L, width, height)
  fill(0);
  rect(0, 300, width, 150);

  stroke(255, 255, 255);
  strokeWeight(5);
  line(0, 375, 50, 375);
  //line(x1, y1, x2, y2)
  line(100, 375, 150, 375);
  line(200, 375, 250, 375);
  line(300, 375, 350, 375);
  line(400, 375, 450, 375);
  line(500, 375, 550, 375);
  line(600, 375, 650, 375);
  line(700, 375, 750, 375);
  line(800, 375, 850, 375);

  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);

  rect(110 + position, 285, 80, 50);

  fill(222, 255, 8);
  circle(110 + position, 340, 15);
  ellipse(190 + position, 340, 30, 30);
  //ellipse(x center, y center, diameter)
  //rect(x top L, y top L, width, height)

  
  if(keyIsPressed && keyCode == LEFT_ARROW)
    position--;
  if(keyIsPressed && keyCode == RIGHT_ARROW)
    position++;
  
  
  //position=position+1;
  //position+=1;

  fill(255);
  ellipse(100 - position, 60, 50);
  ellipse(140 - position, 40, 50, 50);
  ellipse(170 - position, 70, 50, 50);
  ellipse(130 - position, 80, 50, 50);

  ellipse(400 - position, 160, 50);
  ellipse(440 - position, 140, 50, 50);
  ellipse(470 - position, 170, 50, 50);
  ellipse(430 - position, 180, 50, 50);
}
