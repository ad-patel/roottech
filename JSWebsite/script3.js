/* global createCanvas, background,
noStroke, fill, rect, mouseX, mouseY, text, ellipse, textSize*/

function setup() {
    createCanvas(800, 500);
    background(255, 183, 0);
    noStroke();
    fill(0, 81, 255);
    rect(200, 200, 400, 100);
    //rect(x top L, y top L, width, height)
  }
  
  function mouseClicked() {
    if (mouseX > 200 && mouseX < 600 && mouseY > 200 && mouseY < 300) {
      background(255, 183, 0);
      fill(0, 255, 0);
      textSize(32);
      text("YAYYY", width/2-50, 100);
      fill(255, 0, 0);
      ellipse(400, 250, 100);
    } else {
      background(255, 183, 0);
      noStroke();
      fill(0, 81, 255);
      rect(200, 200, 400, 100);
    }
  }
  