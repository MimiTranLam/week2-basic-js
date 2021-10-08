const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const CHARACTER_W = 50;
const CHARACTER_H = 50;
var characterX = CANVAS_WIDTH / 2 - CANVAS_HEIGHT / 2;
var characterY = CANVAS_WIDTH / 2 - CANVAS_HEIGHT / 2;

ctx.fillStyle = "blue"; // selecting paint color
ctx.fillRect(characterX, characterY, CHARACTER_W, CHARACTER_H); // center location x = 0, y = 0
for (let i = 0; i < array.length; i++) {}
function update(){
    // characterX += 50;
    // characterY += 50;
    characterX += Math.floor(Math.randon() * CANVAS_WIDTH);
    characterY += Math.floor(Math.randon() * CANVAS_WIDTH);
}

function draw(){
    ctx.fillStyle = "red";
    ctx.fillRect(characterX, characterY, CHARACTER_W, CHARACTER_H);
}

function main(){
    update();
    draw();
}

setInterval(main, 1500);

