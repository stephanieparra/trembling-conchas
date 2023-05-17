let bubbles = [];
let concha;

function preload() {
  concha = loadImage("images/pd (1).png");
}

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 80);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(200, 71, 207);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-6, 6);
  }

  show() {
    image(concha, this.x, this.y, this.r, this.r);
    //stroke(255);
    //strokeWeight(4);
    //fill(this.brightness, 125);
    //ellipse(this.x, this.y, this.r * 2);
  }
}
