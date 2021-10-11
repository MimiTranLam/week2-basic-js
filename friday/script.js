console.log("hello from js");

const canvas = document.getElementById("myCanvas");

canvas.width = 500;
canvas.height = 500;
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
var characterW = 50;
const CHARACTER_H = 100;

var characterX = CANVAS_WIDTH / 2 - characterW / 2;
var characterY = CANVAS_HEIGHT / 2 - CHARACTER_H / 2;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "grey"; // selecting paint color
ctx.fillRect(characterX, characterY, 200, CHARACTER_H); // center location x = 0 , y =0 , w=50 , h=50 it is a rectangle // center location x = 0 , y =0 , w=50 , h=50 it is a rectangle
var progress = 0;

var isGameOver = false;

function update() {
  if (characterW >= 200) {
    isGameOver = true;
  }

  characterW += 1; //update charx
  console.log("update x ", characterX);
  // characterY = Math.floor(Math.random() * (CANVAS_HEIGHT - CHARACTER_H)); // update chary
  console.log("update y ", characterY);
  progress += 1;
}

function draw() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = "grey"; // selecting paint color
  ctx.fillRect(characterX, characterY, 200, CHARACTER_H);
  ctx.fillStyle = "green"; // selecting paint color
  ctx.fillRect(characterX, characterY, characterW, CHARACTER_H);

  ctx.font = "28px serif";
  ctx.fillText(`Progress: ${progress}%`, 100, 100);
}

function main() {
  if (!isGameOver) {
    update();
    draw();
  }
}

// setInterval(main, 50);