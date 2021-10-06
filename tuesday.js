/* Into ZiffZubb */
// my experiment
function getRandomNum(){
    result = Math.floor(Math.random() * 40);
    return result;
}

start = 1
end = getRandomNum()
console.log(start, end)

function ziffZubb(start, end){
    for (let num = start; num < end; num++){
        if (num % 3 === 0){
            console.log('Ziff');
        }
        else if (num % 5 === 0){
            console.log('Zubb');
        }
        else if (num % 3 === 0 && num % 5 === 0){
            console.log('ZiffZubb');
        } else {
            console.log(num);
        }
    }
}

ziffZubb(start, end);

// teacher's solution
function ziffZubb(start, end){
    for (let i = start; i < end; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('ZiffZubb');
        }
        else if (i % 3 === 0){
            console.log('Ziff');
        }
        else if (i % 5 === 0){
            console.log('Zubb');
        } else {
            console.log(i);
        }
    }
}

ziffZubb(1, 20);

/* Greatest Common Divisor */
// solution 1 - finding max and min step by step
function getRandomNum(){
    result = Math.floor(Math.random() * 40);
    return result;
}

gcd1 = getRandomNum();
gcd2 = getRandomNum();

if (gcd1 > gcd2){
    max = gcd1
    min = gcd2
}
else if (gcd2 > gcd1) {
    max = gcd2
    min = gcd1
}
console.log(max, min);

function gcd(max, min){
    for (r = max % min; r > 0;){
        if (max % min == 0){
            console.log("the GCF is: " + min);
        } else {
            r = max % min;
            min = max;
            r = min;
        }
    }
    console.log("the GCF is: " + min);
}

gcd(max, min);

//solution 2 - finding max and min with Array.sort
function getRandomNum(){
    result = Math.floor(Math.random() * 40);
    return result;
}

a = getRandomNum();
b = getRandomNum();
console.log(a, b);

var numArray = [a, b];
    numArray = numArray.sort(function (a, b) {  return a - b;  });
max = numArray[1]
min = numArray[0]
console.log(max, min);

function gcd(max, min){
    for (r = max % min; r > 0;){
        if (max % min == 0){
            console.log("the GCF is: " + min)
        } else {
            r = max % min;
            min = max;
            r = min;
        }
    }
    console.log("the GCF is: " + min);
}

gcd(max, min);

// solution 3 - without euclidian algorith, this one actually works...
function getRandomNum(){
    result = Math.floor(Math.random() * 40);
    return result;
}

gcd1 = getRandomNum();
gcd2 = getRandomNum();
console.log(gcd1, gcd2);

factorsGcd1 = []
for(let i = 1; i < (gcd1+1); i++){
    if (Number.isInteger(gcd1/i)){
        factorsGcd1.push(i)
    }
}

factorsGcd2 = []
for(let i = 1; i < (gcd2+1); i++){
    if (Number.isInteger(gcd2/i)){
        factorsGcd2.push(i)
    }
}

let factors = factorsGcd1.concat(factorsGcd2);
let orderedFactors = factors.sort((a, b) => a - b);
console.log(orderedFactors);

//go through orderedFactors and if a number occurs twice, put its position into new array simFactors
//simFactors = orderedFactors.filter(orderedFactors[n] == orderedFactors[n+1])
simFactors = []
function sim() {
  for (n = 0; n < (orderedFactors.length); n++){
    if (orderedFactors[n] === orderedFactors[n+1]){
      simFactors.push(n)
    }
  }
  console.log(simFactors);
}
sim();
//pop

function gcd(){
  position = simFactors.pop();
  gcd = orderedFactors[position];
  console.log(gcd);
}
gcd();

/* Lowest Common Multiple */
function getRandomNum(){
    result = Math.floor(Math.random() * 40);
    return result;
}

var lcm1 = getRandomNum();
lcm2 = getRandomNum();
console.log(lcm1, lcm2);

function lcm(lcm1, lcm2){
  for (i = 1; i < Infinity; i++){
    if (i % lcm1 == 0 && i % lcm2 == 0){
      return i;
      console.log(`LCM of ${lcm1} and ${lcm2} is ${i}.`);
    }
  }
}

lcm(lcm1, lcm2);

/* Prime number */
function getRandomNum(){
    result = Math.floor(Math.random() * 50);
    return result;
}

var n = getRandomNum();
console.log("n is " + n);
factors = [];

function prime(n) {
    for (let i = 1; i < n+1; i++){
    if (Number.isInteger(n/i)){
      factors.push(i)
    }
  }
  console.log("its factors:" + factors)
  if (factors.indexOf(n) == 1){
      console.log("true:" + n + "is a prime")
    } else {
        console.log("false:" + n + "is not a prime")
    }
}

prime(n);

/* Capture Time */
ms = Date.now();
console.log(ms + "ms");

// minutes
function minutes(){
    secs = ms / 1000
    mins = secs / 60
    console.log(mins + "mins");
}

minutes();

//hours
function hours(){
    hrs = mins / 60
    console.log(hrs + "hrs");
}

hours();

//Years, Months, Days, Minutes, and Seconds.
function dateTime(){
    days = hrs / 24
    months = days / 30.437
    years = months / 12
    console.log("approx time passed since January 1st, 1970 = " + years + "years, " + months + "months, " + days + "days, " + mins + "mintes and " + secs + "seconds.");
}

dateTime();

//age
let myAgeInMs = Date.now() - new Date("2003-01-13")
console.log("I am " + myAgeInMs + " milliseconds old!")

function ageInWeeks(){
    ms = myAgeInMs
    secs = ms / 1000
    mins = secs / 60
    hrs = mins / 60
    days = hrs / 24
    weeks = days / 7
    console.log("... and I am " + weeks + " weeks old!")
}

ageInWeeks();

/* Advanced Random Number */
// Get random int
// P1
var random = []

for (i = 1; i < 6; i++){
  num = Math.random()
  random.push(num)
}

console.log(random)

// P2
function getRandomInt(){
    for (i = i; i < 101; i++){
      zeroToTen = Math.floor(Math.random() * 10);
      console.log(zeroToTen);
    }
}
  
getRandomInt();

// P3
var start = Math.floor(Math.random() * 100);
var end = Math.floor(Math.random() * 100);

var numArray = [start, end];
    numArray = numArray.sort(function (a, b) {  return a - b;  });

//range = numArray[1] - numArray [0]
//console.log(numArray + " has range: " + range)

function getRandomInt(){
  randBetween = Math.floor(Math.random() * (numArray[1] - numArray[0]) + 1) + numArray[0];
  console.log(randBetween);
}

getRandomInt();

// Get random item
// P1
var arr = ["apple", "orange", "kiwi"]

function getRandomItem(arr){
  n = Math.floor(Math.random() * 3);
  return arr[n];
}

console.log(getRandomItem(arr));

// P2
var arr = ["apple", "orange", "kiwi"]

function getRandomInt(){
  randBetween = Math.floor(Math.random() * (arr.length - 1));
  console.log(randBetween);
  item = arr[randBetween];
  console.log(item);
}

getRandomInt();

/* Nested Loops */
// note
for (var i = 0; i < 10; i++) {
    var s = "";
    for (var j = 0; j < 10; j++) {
      s = `${s} outer ${i} inner ${j}`;
    }
    console.log(s);
  }

// when i increases its value by one from 0 to 9 OR for loop starts with i at zero, loop ends when i is less than 10, i increases its value by 1 each loop cycle
// s is a string
// when j increases its value by one from 0 to 9 OR for loop starts at zero, loop ends when i is less than 10, i increases its value by 1 each loop cycle
// put inside s string "variable s(space) outer variable i(number of outer loop cycles done) inner variable j(number of inner loop cycles done)
// inner loop run 9 times in one outer loop cycle

//P1
n = 10

function loops1(n){
  s = [];
  for(var i = 1; i < n; i++){
    t = i - 1;
    s.push(i);
    for(var j = 1; j < t; j++){
    s.push(i);
    }
  }
  result = s.join(" ");
  console.log(result);
}

loops1(n);
