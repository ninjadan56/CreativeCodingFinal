//source for mapping
//Dan Schiffman Earthquake data mapping Video: https://youtu.be/ZiYdOwOrGyc

//https://docs.mapbox.com/mapbox.js/api/v3.2.1/ map box api
//https://www.youtube.com/watch?v=mj8_w11MvH8&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=10 api use
//usgs data csv

let back;
let p1;
let p2;// variables for the pictures.
let p3;

let frame = 0;
let numFrames = 3;
let images = [numFrames];


let clat = 40.675; //40.673
let clon = -73.992; //-73.997

let ww = 1024; //height and width of canvas.
let hh = 512;

let xx = 600;
let yy = 100; // position of first circle.
let rad = 25; //radius of circles.
let s = 400; //side of rect.

let pollutants;
let circles = []; //just in case I wanted more circle in class than hardcoding th rest

function preload() { //preload all images and files so that its there ready to use.
  back = loadImage('assets/map.PNG');
  p1 = loadImage('assets/p1.jpg');
  p2 = loadImage('assets/p2.PNG');
  p3 = loadImage('assets/p3.PNG');
  // pollutants = loadStrings('csv.csv');
  images[0] = loadImage('assets/p4.jpg');
  images[1] = loadImage('assets/p5.jpg');
  images[2] = loadImage('assets/p6.jpg');
}

function setup() {
  createCanvas(ww, hh);
  background(back);
  fill(255);
  text('GOWANUS CANAL', ww/2-50, 20)
  moreDots();
  for (let i = 0; i < 6; i++) {
  let x = xx;
  let y = yy;
  let r = rad;
  let b = new Circle(x, y, r);
  circles.push(b);
}
}

function draw(){
  // background(back);

  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  // if (keyIsPressed === true) {
  //   setup();
  // }


}

function keyPressed(){
  if (keyCode === 32){
    setup();
  }
  if (keyCode === 75){
    frame = (frame) % numFrames;  // Use % to cycle through frames
    image(images[frame], 0, 0, ww, 512);
    if (frame<numFrames){
    frame++;
    }
    else frame = 0;
  }
}


class Circle {
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  clicked(px,py){ //clicked function for class to see if mouse presses within circle.
    let d1 = dist(px, py, 600, 100);
    let d2 = dist(px, py, 400, 300);
    let d3 = dist(px, py, 520, 230);
    if (d1 < rad){
      noStroke();
      fill(105);
      rectMode(CENTER);
      rect(ww/2+100, hh/2, s, s);
      fill(255);
      textSize(20);
      textAlign(CENTER);
      text('Average Lead Content is 533 mg/kg. Total Concentration is 4220 mg/kg. 6 inches below the surface, Total Concentration is 2880 mg/kg.', ww/2+100, hh/2+70, s, s);
      text('press spacebar to exit popup', ww/2+100, hh/2+170);
      image(p1, 480, 200, 250, 200);
    }
    if (d2 < rad){
      noStroke();
      fill(105);
      rectMode(CENTER);
      rect(ww/2-100, hh/2, s, s);
      fill(255);
      textSize(20);
      textAlign(CENTER);
      text('Average Arsenic Content is 12.1 mg/kg. Total Concentration is 44.7 mg/kg.', ww/2-100, hh/2+70, s, s);
      text('press spacebar to exit popup or k to go through pictures', ww/2-100, hh/2+170);
      image(p2, 300, 200, 250, 200);
    }
    if (d3 < rad){
      noStroke();
      fill(105);
      rectMode(CENTER);
      rect(ww/2-20, hh/2, s, s);
      fill(255);
      textSize(20);
      textAlign(CENTER);
      text('Blue Crabs living in the the New York Harbour have a concentration of PCBs of 67-127µg/kg. While Blue Crabs in the Canal have a concentration of 133-194 µg/kg.', ww/2-20, hh/2+70, s, s); //PCBs are highly toxic industrial compounds
      text('press spacebar to exit popup', ww/2-20, hh/2+170);
      image(p3, 380, 230, 230, 180);
    }
  }

  show(){
    stroke(255, 0, 255);
    fill(255, 0, 255, 200);
    ellipse(this.x, this.y, this.r, this.r);
  }
}


function mousePressed(){
  for (i = 0; i < circles.length; i++){
    circles[i].clicked(mouseX,mouseY)
  }
}


//Hard coded more Dots in becuase I couldn't figure out how to make a class that would place the circles exactly where I want them to.
function moreDots(){
  stroke(255, 0, 255);
  fill(255, 0, 255, 200);
  ellipse(400, 300, rad, rad);
  ellipse(520, 230, rad, rad);
}
