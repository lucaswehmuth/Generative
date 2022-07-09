var fr;

var previousX;
var previousY;

function setup() {
  // createCanvas(400, 400);
  createCanvas(windowWidth-20, windowHeight-20);
  fr = createP('');
  previousX = mouseX;
  previousY = mouseY;
}

function draw() {
  if ((mouseX != previousX) || (mouseY != previousY)){
    const col = {};
    const {r,g,b} = col;
    col.r = random(0,255);
    col.g = random(0,255);
    col.b = random(0,255);
    fill(col.r, col.g, col.b);
    ellipse(mouseX, mouseY, 50, 50)
  }
  
  previousX = mouseX;
  previousY = mouseY;

  fr.html(floor(frameRate()));
}
