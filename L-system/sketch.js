// Tutorial by Barney Codes
// https://www.youtube.com/watch?v=3Mu0--aGfqg

let rules = {
  "X": "F+[[X]-X]-F[-FX]+X",
  "F": "FF"
}

let len = 3;
let ang = 25;

let drawRules;

let word = "X";

function setup() {
  createCanvas(400, 400);
  
  drawRules = {
    "F": () => {
      stroke(150, 100, 0)
      line(0, 0, 0, -len);
      translate(0, -len);
    },
    "-": () => {
      rotate(PI/180 * ang);
    },
    "+": () => {
      rotate(PI/180 * -ang);
    },
    "[":push,
    "]": () => {
      noStroke();
      fill(0, 255, 0);
      ellipse(0, 0, 2, 5);
      pop();
    }
  }
  
  noLoop()
  console.log(word)
  draw()
}

function draw() {
  background(220);
  
  push();
  translate(width/4, height);
  rotate(PI/180 * ang);
  
  for(let i = 0; i < word.length; i++){
    let c = word[i];
    
    if(c in drawRules){
      drawRules[c]();
    }
  }
  
  pop();
}

function mouseReleased(){
  word = generate();
  draw()
  console.log(word)
}

function generate(){
  let next = "";
  
  for(let i = 0; i < word.length; i++){
    let c = word[i];
    
    if(c in rules){
      next += rules[c];
    } else {
      next += c;
    }
  }
  
  return next;
}
  