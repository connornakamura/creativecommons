//map function





var slider
var ycor = 0
var xpos = 0
var xpos1 = 0
var slider
var slider1

function setup() {
  createCanvas(2000,2000);


  img = loadImage("lawrence.jpg");
  img1 = loadImage("aaron.jpg");
  wikipedia = loadImage("wikipedia.jpg");

slider = createSlider(0, 250, 0);

slider1 = createSlider(0,450,0);

button = createButton('Click me');
button.position(windowWidth/1.6, 1200);



}

var phrases = ["2001 Creative Commons founded.", "2002 Version 1.0 licenses released.", "2003 Approxamitely 1 million license in use", "2004 Estimated 4.7 million licensed works by the end of the year.","Version 2.0 released.","2005 Estimated 20 million works. Version 2.5 released. Science projects at Creative Commons launched."]

var textbox= {
  above: 200,
  below:400,
  size: 15,

}
var above = 200
var below = 400
var sliderx = 100
var slidery = 300




//window width and window height
function draw() {



  background(0);
  slider.position(sliderx,slidery);
  slider.style('width', windowWidth-200+"px");

  slider1.position(100,500);
  slider1.style('width', windowWidth-200+"px");

  var val = slider.value();


stroke(255,255,255);
textSize(30);
text("Important People",windowWidth/2 - windowWidth/7, 500);
text("Creative Commons",windowWidth/2 - windowWidth/7, 50);

if (0 < val) {
  //stroke(255,0,0);
  textSize(15);
  text(phrases[1], windowWidth * 1/5, textbox.below);
}
if (50 < val) {
  //stroke(255,0,0);
  textSize(15);
  text(phrases[2], windowWidth * 2/5, textbox.above);
}
if (100 < val) {
  //stroke(255,0,0);
  textSize(15);
  text(phrases[3], windowWidth * 3/5, textbox.below);
}
if (150 < val) {
  //stroke(255,0,0);
  textSize(15);
  text(phrases[4], windowWidth * 4/5, textbox.above);
  text(phrases[5], windowWidth * 4/5, 220);
}
if (200 < val) {
  //stroke(255,0,0);
  textSize(15);
  text(phrases[6], windowWidth * 5/5, textbox.below);
}

  // set the fill color
  fill(255, 0, 0);

  // black outline
  stroke(0);

  // set the ellipse mode
  ellipseMode(CENTER);

  // increment x variable

  // if the circle moves off screen, reset it's position
if(true){

ycor = ycor + 5

//  if(ycor = windowHeight)
  //{
    //ycor = ycor - 5
  //}

  //if(ycor = 0)
  //{
//    ycor = ycor + 5
  //}
image(wikipedia, 100, ycor);

}





if(true){

xpos = xpos + 5;
  if(xpos > windowWidth/8)
  {
    xpos = windowWidth/8;
  }
image(img, xpos,850);
// write text
fill(255,0,0);
textSize(20);
text("Lawrence Lessig",xpos, 1200);
text("testing 123 testing 123 testing 123 testing 123", xpos, 1250, xpos + 100, 1900); // Text wraps within text box

}


if(button.mousePressed){
  console.log("working");
xpos1=xpos1+5
  if(xpos1 > windowWidth/1.7)
  {
    xpos1 = windowWidth/1.7;
  }
  fill(255,0,0);
  image(img1, xpos1, 850);
  textSize(20);
  text("Aaron Swartz",xpos1, 1200);
  text("testing 123 testing 123 testing 123 testing 123", xpos1, 1250, xpos1 + 100, 1900); // Text wraps within text box)



}
}
