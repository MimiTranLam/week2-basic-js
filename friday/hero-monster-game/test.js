function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// console.log("Hello");
// sleep(waitIntro).then(() => { console.log("World!"); });

// INPUT & INTRO
const container = document.getElementsByClassName("box");
const enterName = document.getElementById("enter-name");
const word = ["G", "r", "e", "e", "t", "i", "n", "g", "s", ".", ".", "."];

function intro() {
    let i = 0;
    setInterval(type, 250);
    function type() {
      if (i < word.length) {
        var typeLetter = word[i];
        enterName.append(typeLetter);
      }
      i++;
    }
};

window.onload = intro();

const waitIntro = Number((word.length + 2) * 250);
setTimeout(userInput, waitIntro);

function userInput(){
    const nameInput = document.createElement("input");
    nameInput.setAttribute("id", "name-input");
    nameInput.setAttribute("placeholder", "?");
    enterName.appendChild(nameInput);

    nameInput.addEventListener("keyup", (event) => {
        if (event.key == "Enter" && event.code == "Enter") {
            enterName.innerHTML = "";
            enterName.removeChild(nameInput);
            let username = nameInput.value;
            console.log(username);
            welcome(username);
        }
    });
};

function welcome(username) {
    var container = getElementsByClassName("box");
    container.removeChild(enterName);
    const welcome = document.createElement("div");
    welcome.setAttribute("id", "welcome");

    const message = document.createElement("div");
    message.setAttribute("id", "message");
    welcome.appendChild(message);

    message.innerHTML = `Hello ${username}. Welcome to the end of Earth. The people need your help. Ready to save Earth?`;
    console.log(message.innerHTML);
    start();
};

function start() {
    const welcome = document.getElementById("welcome");

    const startButton = document.createElement("button");
    startButton.setAttribute("id", "start");
    startButton.setAttribute("type", "button");
    startButton.innerHTML = "START";
    welcome.appendChild(startButton);

    startButton.addEventListener("click", gameStart);
};

// GAME
let startTime = Date.now();

function gameStart() {
    const welcome = document.getElementById("welcome");
    document.getElementsByClassName("container").removeChild(welcome);
};

//function gameStart() {};

// function makeCanvas(){
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");
//     ctx.fillStyle = "grey";
//     document.body.appendChild(canvas);
// }