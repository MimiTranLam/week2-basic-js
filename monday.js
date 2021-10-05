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
    a = min
  }
  if (b < a && b < c) {
    b = min
  }
  if (c < a && c < b) {
    c = min
  }
  return min
}

var smallest = small()

function big(a, b, c) {
  if (a > b && a > c) {
    a = max
  }
  if (b > a && b > c) {
    b = max
  }
  if (c > a && c > b) {
    c = max
  }
  return max
}

var largest = big()

console.log(`${smallest} is the smallest number and ${largest} is the largest number out of a = ${a}, b = ${b} and c = ${c}.`)

const abc = [a, b, c]

/* Loops */
/* Functions */
// P1
function wow(){
    console.log("Wow, it worked!")
}

// invocation. but not needed to be called. cuz javascript is magic.
wow();

// P2
function movie(){
    console.log("Arrival")
}

// P3
function conditional(){

}