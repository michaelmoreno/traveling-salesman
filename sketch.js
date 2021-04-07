const nodes = [];
const totalNodes = 11;

let recordDist = 0;
var bestEver;

function setup() {
  createCanvas(window.innerWidth - 100, window.innerHeight - 100);
  for (let i = 0; i < totalNodes; i++) {
    let v = createVector(random(width), random(height));
    nodes[i] = v;
  }

  let d = calcDist(nodes);
  recordDist = d;
  bestEver = nodes.slice();
  
}

function draw() {
  background(0);
  fill(255);
  for (let i = 0; i < nodes.length; i++) {
    ellipse(nodes[i].x, nodes[i].y, 8, 8);
  }

  stroke(255);
  strokeWeight(1);
  beginShape();
  noFill();
  for (let i = 0; i < nodes.length; i++) {
    vertex(nodes[i].x, nodes[i].y);
  }
  endShape();

  stroke(255, 0, 255);
  strokeWeight(4);
  beginShape();
  noFill();
  for (let i = 0; i < nodes.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y);
  }
  endShape();

  let i = floor(random(nodes.length))
  let j = floor(random(nodes.length))
  swap(nodes, i, j)

  let d = calcDist(nodes);
  if (d < recordDist) {
    recordDist = d;
    bestEver = nodes.slice();
    console.log(recordDist)
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function calcDist(points) {
  let sum = 0;
  for (let i = 0; i < points.length-1; i++) {
    let d = dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
    sum += d;
  }
  return sum;
}