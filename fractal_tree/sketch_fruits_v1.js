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
    stroke(70, 40, 20)
    line(0, 0, 0, -len)
    translate(0, -len)
    rotate(random(-20, -30))
    branch(len * random(0.7, 0.9))
    rotate(random(50, 60))
    branch(len * random(0.7, 0.9))
  } else {
    var r = 80 + random(-20, 20)
    var g = 120 + random(-20, 20)
    var b = 40 + random(-20, 20)
    fill(r, g, b)
    noStroke()
    ellipse(0, 0, 10)
  }
  pop()
}