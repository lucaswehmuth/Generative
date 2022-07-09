var points = []
var mult = 0.001

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(30)
  angleMode(DEGREES)
  noiseDetail(1)

  var density = 45
  var space = width/density

  for (var x=0; x < width; x+=space){
    for (var y=0; y < height; y+=space){
      var p = createVector(x + random(10, -10), y + random(-10, 10))
      points.push(p)
    }
  }
}

function draw() {
  noStroke()
  fill(255)

  for (var i = 0; i < points.length; i+=1){

    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
    console.log(angle)

    points[i].add(createVector(cos(angle), sin(angle)))

    ellipse(points[i].x, points[i].y, 1)
  }
}
