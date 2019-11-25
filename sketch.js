let circleSize =15;

function setup() {
	createCanvas(500, 500);
}

function draw() {
	niceGlitch();
	fill(162,178,255);
	rect(200, 200, 300, 300);

	xLoc = map(mouseX, 0, windowWidth, 210, 490);
	yLoc = map(mouseY, 0, windowHeight, 210, 490);

	fill(255, 130, 150);
	ellipse(xLoc, yLoc, circleSize, circleSize);


}

function keyPressed(){
		if (keyisPressed == 'w'){
		background(random(50,255), random(50,255), random(50,255));
	}
}

function niceGlitch(){
  for(let x = 0; x < windowWidth; x++){
    for(let y = 0; y < windowHeight; y++){
       let c = color(map(x,0,windowWidth, 0, 255),map(y,0, windowHeight,0, 255),map((x+y)*.5,0, windowHeight,0, 255));
       set(x,y,c);
       updatePixels();
    }
	}
}
