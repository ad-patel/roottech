/* global createCanvas, background, windowWidth, windowHeight,
noStroke, fill, rect, image, textSize, text, stroke, strokeWeight, line, 
width, height, loadImage, ellipse, textFont, mouseY, mouseX, color*/

var img, colorBox;
var team, programs, panels, instagram;
var teamShow, programsShow, panelsShow, instagramShow;

function preload() {
  img = loadImage(
    "roottechlogo.png"
  );
  team = loadImage(
    "team.png"
  );
  programs = loadImage(
    "programs.png"
  );
  panels = loadImage(
    "panels.png"
  );
  instagram = loadImage(
    "insta.png"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(179, 253, 255);
  colorBox = color(179, 253, 255);
  teamShow = programsShow = panelsShow = instagramShow = false;
}

function draw() {
  background(179, 253, 255);
  noStroke();
  fill(255);
  rect(50, 50, width - 100, 100); //rect(x, y, width, height)
  image(img, 80, 65, 70, 70);
  fill(0);
  textSize(48);
  textFont("Arial");
  text("RootTech", 170, 115);
  stroke(0, 149, 153);
  strokeWeight(5);
  line(width / 2, 200, width / 2, height - 50);
  noStroke();
  fill(207);
  ellipse(115, 250, 50, 50); //x, y of center, diameter in x, in y
  fill(150);
  ellipse(115, 350, 50, 50);
  fill(87);
  ellipse(115, 450, 50, 50);
  fill(48);
  ellipse(115, 550, 50, 50);
  fill(0);
  textSize(30);
  textFont("Courier New");
  text("The Team", 170, 255);
  text("The Programs", 170, 355);
  text("Panelists", 170, 455);
  text("Instagram", 170, 555);
  noStroke();
  fill(colorBox);
  rect(width / 2 + 50, 250, width / 2 - 100, 300);
  if (teamShow) {
    image(team, width / 2 + 75, 275, width / 2 - 150, 550);
  } else if (programsShow) {
    image(programs, width / 2 + 75, 160, width / 2 - 150, 550);
  } else if (panelsShow) {
    image(panels, width / 2 + 75, 225, width / 2 - 150, 400);
  } else if (instagramShow) {
    image(instagram, width / 2 + 135, 350, 100, 100);
    fill(255);
    textSize(32);
    textFont("Arial");
    text("@roottech2020", width / 2 + 270, 410);
  }
}

function mousePressed() {
  if (mouseX > 90 && mouseX < 140 && mouseY > 225 && mouseY < 275) {
    colorBox = color(207);
    teamShow = true;
    programsShow = panelsShow = instagramShow = false;
  } else if (mouseX > 90 && mouseX < 140 && mouseY > 325 && mouseY < 375) {
    colorBox = color(150);
    programsShow = true;
    teamShow = panelsShow = instagramShow = false;
  } else if (mouseX > 90 && mouseX < 140 && mouseY > 425 && mouseY < 475) {
    colorBox = color(87);
    panelsShow = true;
    teamShow = programsShow = instagramShow = false;
  } else if (mouseX > 90 && mouseX < 140 && mouseY > 525 && mouseY < 575) {
    colorBox = color(48);
    instagramShow = true;
    teamShow = programsShow = panelsShow = false;
  }
}
