var points = []
var mult = 0.001
var fr
var ind
var running = true
var r1,g1,b1,r2,g2,b2

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(30)
  angleMode(DEGREES)
  noiseDetail(1)

  var density = 50
  var space = width/density
  fr = createP('')
  ind = createP('')

  for (var x=0; x < width; x+=space){
    for (var y=0; y < height; y+=space){
      var p = createVector(x + random(10, -10), y + random(-10, 10))
      points.push(p)
    }
  }

  // r1,g1,b1,r1,g2,b2 = random(255), random(255), random(255), random(255), random(255), random(255)
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)
}

function draw() {
  noStroke()
  // fill(255)

  for (var i = 0; i < points.length; i+=1){
    ind.html(i)
    
    var r = map(points[i].x, 0, width, r1, r2)
    var g = map(points[i].y, 0, height, g1, g2)
    var b = map(points[i].x, 0, width, b1, b2)
    var alpha = map(dist(width/2, height/2, points[i].x, points[i].y), 0, 400, 400, 0)

    fill(r, g, b, alpha)
    // fill(r, g, b)

    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

    points[i].add(createVector(cos(angle), sin(angle)))

    if (dist(width/2, height/2, points[i].x, points[i].y) < 400){
      ellipse(points[i].x, points[i].y, 1)
    }

  }

  fr.html(floor(frameRate()));
  // await sleep(2000)
}

function mouseClicked() {
  
  if (running == true){
    noLoop()
    running = false
  } else{
    loop()
    running = true
  }
}