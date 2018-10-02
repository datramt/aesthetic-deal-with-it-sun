let granularity;

function setup() {
  createCanvas(400, 400);
  background(220);
  pixelDensity(1);
  angleMode(DEGREES);
  stroke(255, 100, 200);
  strokeJoin(ROUND);
	
	granularity = 2;
}

function draw() {
  background(255, 100, 200);
  granularity = (cos(frameCount/2)+1.1)*10;
  stroke(255, 100, 200);
  strokeWeight(10/granularity);
  
  let shadeLift = -cos(frameCount/2)*140-140;
  
  push();
  translate(width/2, height/2);
  rotate(frameCount/2);
   for (let i = 0; i < granularity; i++) {
    fill(255, map(i, 0, granularity, 255, 50), 70);
    arc(0, 0, 300, 300, map(i, 0, granularity, 90, 270), map(i, 0, granularity, 450, 270), CHORD);
  }
  pop();
  
  noStroke();
  fill(0);
  ellipse(width/2+height*0.15, height/2+height*0.09, 30);
  ellipse(width/2-height*0.15, height/2+height*0.09, 30);
  arc(width/2+height*0.185, height/2-height*0.01+shadeLift, 150, 140, 0, 180);
  arc(width/2-height*0.185, height/2-height*0.01+shadeLift, 150, 140, 0, 180);
  
  noFill();
  strokeWeight(12);
  stroke(0);
  arc(width/2-height*0.07, height/2-height*0.1, 200, 140, 90, 150);
  arc(width/2+height*0.07, height/2-height*0.1, 200, 140, 30, 90);
  
  line(width/2-width*0.1, height/2+height*0.23, width/2+width*0.1, height/2+height*0.23)
  
}

