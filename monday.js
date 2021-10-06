/*
for (var step = 0; step === 5; step+=34) {
  console.log("step" + (step +1));
}


for (var step = 0; step < 5; step++) {
    console.log('Walking east one step');
}
*/

/* Area of a circle */
console.log("Area of circle");
var pi = 3.14;
console.log(typeof pi);
var radius = 7;
console.log(typeof radius);
var area = pi * radius ** 2;

console.log("The area of a circle given the radius" + " " + radius + "(m) is" + " " + area + "(m^2)");
console.log(`The area of a circle given the radius ${radius}(m) is ${area} (m^2)`);

/* Operators & Comparison
// P1
10 + 24 === 34 
calculates two numbers as sum

"10" + "24" === "1024" 
string + string returns a string

"Hello" + " " + 2021 === "Hello 2021" 
the result is a string.

1 + 2 * 3 === 7 
multiplies first then add.
  
(1 + 3) ** 2 === 16 
calculate in brackets first then exponent outside of brackets.

1 / 0 === infinity 
should return infinity because magic of abstract math.

6 % 2 === 0 
no remainder for this division.

5.5 % 2 === 1.5 
largest divisible number by 2 less than 5.5 is 4 and leaves a remainder of 1.5.

Number("123") === 123 
returns number.

typeof(1 + "") === string 
number concatentated with string gives a string.

// P2
5 == "5" 
true: are common types. Number is similar to number in string.

5 === "5" 
false: because of strict rule of triple equals sign, both have to be same type for it to be true.

8 != 8.0 
false: are same type with same value. statement would be true if = operator is used.

8 !== 8.0 
false: both are numbers with same value so should be true. statement is false.

"true" === true 
false: one is strictly string, other is just boolean.

4 <= 4.0 
true: both are numbers with same value so statement is true.

7 >= 7 
true: 7 is equal to seven so statement is true.

// P3
true && true 
true: both are true so return true.

true && false
false: DOES NOT return true because both are not true, false is false.

true || true 
true: at least one of them is true so return true.

false || true 
true: at least one of them is true so return true.

!true 
false: DOES NOT return true because _ is true so return false.

!false 
true: _ is false so return true.

false && (true || true) 
false: inside brackets returns true because at least one of them is true, but false AND true returns false because not both of them are true.

false && true || true 
true: on the left returns false because not both of them are true, then false or true will return true because at least one of them is true.
*/

/* Conditionals */
var x = -10

if(x > 0) {
console.log(x + " " + "is a positive number.");
}
if(x == 0) {
console.log(x + " " + "is zero.");  
}
if (x < 0) {
console.log(x + " " + "is a negative number.");
}

// define variables a, b and c by generating a random number between range 0-99. they cannot equal to each other.
function getRandomNum(){
    result = Math.floor(Math.random() * 99);
    return result;
}
  
var a = getRandomNum()
var b = getRandomNum()
var c = getRandomNum()
  
console.log(a, b, c)
  
// loop fx/instructions until none are equal to each other?
// use the thing where you can look at a (0,1,2) and call by order ARRAY
const abc = [a, b, c]
  
if (abc[0] == abc[1] || abc[0] == abc[3]){
    getRandomNum()
}
if (abc[1] == abc[0] || abc[1] == abc[2]){
    getRandomNum()
}
if (abc[2] == abc[0] || abc[2] == abc[1]){
    getRandomNum()
}
// is there a quicker method?

function small(a, b, c) {
  if (a < b && a < c) {
    min = a
  }
  if (b < a && b < c) {
    min = b
  }
  if (c < a && c < b) {
    min = c
  }
  return min
}

var smallest = small()

function big(a, b, c) {
  if (a > b && a > c) {
    max = a
  }
  if (b > a && b > c) {
    max = b
  }
  if (c > a && c > b) {
    max = c
  }
  return max
}

var largest = big()

console.log(`${smallest} is the smallest number and ${largest} is the largest number out of a = ${a}, b = ${b} and c = ${c}.`)

/* Loops */
// P1
function getRandomNum(){
  result = Math.floor(Math.random() * 10);
  return result;
}

var a = getRandomNum();
var b = getRandomNum();
console.log(a,b)

if (a > b){
  max = a;
  min = b;
} else if (b > a){
  max = b;
  min = a;
};
console.log(max,min);

function steps(){
  s = "";
  for (var i = min; i <= max; i++){
  s += `${i} `;
  }
  console.log(s)
}
steps();

// P2
function getRandomNum(){
  result = Math.floor(Math.random() * 999);
  return result;
}

x = getRandomNum();
y = getRandomNum();
console.log(x,y);

if (x > y){
  max = x;
  min = y;
} else if (y > x){
  max = y;
  min = x;
};
console.log(max,min);

sum = 0;
for (i = min; i <= max; i++){
  sum += i; 
};
console.log("Sum of numbers from 1 to 800 is: " + sum);

// P3
function getRandomNum(){
  result = Math.round(Math.random() * (10000 - 1000) + 1) + 1000;
  return result;
}

var input = getRandomNum();
var digits = `${input}`;
console.log(digits.charAt(0) + digits.charAt(1) + digits.charAt(2) + digits.charAt(3));

/* Functions */
// P1

function wow(){
    console.log("Wow, it worked!")
}
wow();

// P2
function movie(){
    console.log("Arrival")
}
movie();

// P3
name = "Mimi"

function middle(name){
  const sentence = "This is a something sentence.";
  var newSentence = sentence.replace("something", name);
  console.log(newSentence);
}

middle(name);

// P4
a = "3"
b = "2"
c = "1"

function conditional(a,b,c){
  const sentence = "... is the smallest number, and ... is the biggest number between a = ...,b = ..., and c = ...";
  var newSent1 = sentence.slice(3, 32);
  var newSent2 = sentence.slice(35, 74);
  var newSent3 = sentence.slice(75, 92);
  var newSent4 = sentence.slice(93, 104);
  newSentence = c + newSent1 + a + newSent2 + a + newSent3 + b + newSent4 + c;
  console.log(newSentence);
}

conditional(a,b,c);

// P5
function getRandomNum(){
  result = Math.floor(Math.random() * 10);
  return result;
}

var n1 = getRandomNum();
var n2 = getRandomNum();

if (n1 > n2){
  a = n1;
  b = n2;
  } else if (n2 > n1){
    a = n2;
    b = n1;
    };

maxMin();
console.log(a,b);

function seriesOfNumber(a,b){
  s = "";
  for (var i = b; i <= a; i++){
  s += `${i} `;
  }
  console.log(s)
}
seriesOfNumber(a,b);

// P6

function steps(){
  s = "";
  for (var i = min; i <= max; i++){
  s += `${i} `;
  }
  console.log(s)
}
steps();

// P7
start = 1969
end = 2020
leaps = []
function getLeapYears(start, end){
  for (i = start; i <= end; i++){
    if (i % 4 === 0 && i % 100 !== 0){
    leaps.push(i);
    }
  }
  console.log(leaps);
}
getLeapYears(start, end)

/* Swapping Values */
a = 111;
b = 999;

console.log("a = " + a + " b = " + b);

let temp;

temp = a;
a = b;
b = temp;

console.log("now a has value, " + a + " now b has value " + b);

/* Random Number */
function play(){
  const randomNumber = Math.round(Math.random());
  if (randomNumber == 0){
    console.log("Yes");
  } else if (randomNumber == 1){
    console.log("No");
  }
}

play();
