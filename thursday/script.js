console.log('Hello JS!')

// P1 - Change text in the first box 3 seconds after the page loads.
function changeFirstBox() {
  document.getElementById("change-text").innerHTML = "changed!";
}

setTimeout(changeFirstBox, 3000);

// P2 - Increment the count in the next box every second.
let count = 0

function changeSecondBox() {
  // count++
  count += 1
  document.getElementById("change-count").innerHTML = count;
}

setInterval(changeSecondBox, 1000);

// P3 - Change the color & text inside the next box every 3 seconds.
const color = [
    "Tomato",
    "Orange",
    "Gold",
    "MediumSeaGreen",
    "Turquoise",
    "MediumSlateBlue",
    "DarkOrchid",
    "HotPink",
    "Salmon",
]

let colorCount = -1

function changeThirdBox(){
    colorCount++
    if (colorCount < color.length){
        document.getElementById("change-color").style.backgroundColor = color[colorCount];
        document.getElementById("change-color").innerHTML = color[colorCount];
    } else if (colorCount = color.length + 1){
        colorCount = -1;
    }
}

setInterval(changeThirdBox, 3000);

// P4 - Increment the count in the next box when when clicked.
let clickCount = 0

function incrementOnClick() {
  clickCount++
  document.getElementById("change-click").innerHTML = clickCount;
}

document
  .getElementById("change-click")
  .addEventListener("click", incrementOnClick);

// P5 - Increment the count in the next box when when hovered.
let hoverCount = 0

function incrementOnHover () {
  hoverCount++
  document.getElementById("change-hover").innerHTML = hoverCount;
}

document
  .getElementById("change-hover")
  .addEventListener("mouseover", incrementOnHover);

// P6 - Switch between loves my and not loves me when the next box is clicked.
document.getElementById("change-he-loves-me").innerHTML = "Does he love me or not?";

function toggleOnClick() {
  clickCount++
  if (clickCount % 2 == 0){
    document.getElementById("change-he-loves-me").innerHTML = "He loves me not.";
  } else {
    document.getElementById("change-he-loves-me").innerHTML = "He loves me!";
  }
}

document
  .getElementById("change-he-loves-me")
  .addEventListener("click", toggleOnClick);

// P7 - Show the time inside the next box when clicked.
function dateTimeNow(){
    var today = new Date();
    var date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
    var time = today.getHours()+":"+today.getMinutes()+":" + today.getSeconds();
    var dateTime = `Today's date is ${date} and the time now is ${time}`;
    document.getElementById("change-to-current-date").innerHTML = dateTime;
}

document
  .getElementById("change-to-current-date")
  .addEventListener("click", dateTimeNow);

// P8 - Show the width & height of the next box when the window is resized.
document.getElementById("change-to-current-width").innerHTML = "Width: " + window.innerWidth;
document.getElementById("change-to-current-height").innerHTML = "Height: " + window.innerHeight;

function widthAndHeight(){
    document.getElementById("change-to-current-width").innerHTML = "Width: " + window.innerWidth;
    document.getElementById("change-to-current-height").innerHTML = "Height: " + window.innerHeight;
}

window.addEventListener("resize", widthAndHeight);

// P9 - Add a new li element that's numbered correctly when its clicked in the next box.
function addToList(){
    li = document.createElement("li");
    li.appendChild(document.createTextNode("hi"));
    document.getElementById("add-list-item").append(li);
}

document
    .getElementById("add-list-item")
    .addEventListener("click", addToList);

// P10 - Show the current URL of the webpage when the next box is clicked.
function changeToURL() {
    document.getElementById("change-to-url").innerHTML = window.location.href;
}

document
  .getElementById("change-to-url")
  .addEventListener("click", changeToURL);

// P11 - Add some typewriteing when the next box is clicked.
/*
const word = ["b", "l", "a", "h", " "]
const word2 = ["b", "l", "a", "s", "p", "h", "e", "m", "y", " "]

letter = -1
function type() {
    for (letterN = 1; letterN < word.length; letter++){
        letters = word[letterN];
        document.getElementById("typewrite").append(letters);
    }
}

document
    .getElementById("typewrite")
    .addEventListener("click", type);

setTimeout(type, 150);
// ----------------------
const word = ["b", "l", "a", "s", "p", "h", "e", "m", "y", " "];

let i = 0;

function startTyping() {
  while (i < word.length) {
    i++;
    var letterIs = i;
    setTimeout(() => {
      typeLetter = word[letterIs];
      document.getElementById("typewrite").append(typeLetter);
    }, 150);
  }
}

document.getElementById("typewrite").addEventListener("click",startTyping);
*/

// P11 - teacher's solution
function startTyping() {
  var text = "blashemy";
  var index = 0,
  var temp = "";
  function type() {
    temp += text[index];
    index++;
    typeBox.innerHTML = temp;
    if (index > text.legnth) {
      index = 0;
      temp = "",
      return;
    }
  }
  
  setInterval(typing, 150);
  
  /* Magic-8-Ball */
  /*
  const yes = ["Yes!", "Sure!", "Of course!"];
  const no = ["No way!", "Never!", "Not a chance!"];
  
  function getRandomItem() {
    arr = Math.round(Math.random() * (2-1+1)) + 1;
    if (arr = 1) {
    item = Math.round(Math.random() * 2);
    document.getElementById("magic-9-ball").innerHTML = yes[item];
    } else if (arr = 2) {
    item = Math.round(Math.random() * 2);
    document.getElementById("magic-9-ball").innerHTML = no[item];
   }
  
