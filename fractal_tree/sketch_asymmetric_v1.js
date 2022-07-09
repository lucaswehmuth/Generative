function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  noLoop()
}

function draw() {
  background(220);
  translate(width / 2, height*0.9)
  branch(100)
}

function branch(len){
  push()
  if (len > 10){
    strokeWeight(map(len, 10, 100, 1, 15))
    line(0, 0, 0, -len)
    translate(0, -len)
    rotate(30)
    branch(len * random(0.7, 0.9))
    rotate(-60)
    branch(len * random(0.7, 0.9))
  }
  pop()
}