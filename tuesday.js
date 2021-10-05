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
// solution 1
function getRandomNum(){
    result = Math.floor(Math.random() * 40);
    return result;
}

gcd1 = getRandomNum();
gcd2 = getRandomNum();
console.log(gcd1, gcd2);

function gcd(gcd1, gcd2){
  if (gcd1 > gcd2){
        max = gcd1
        min = gcd2
    }
    else if (gcd2 > gcd1) {
        max = gcd2
        min = gcd1
    }
    var r = max % min
    console.log("the Greatest Common Denominator of the above numbers is:" + r)
}

gcd(gcd1, gcd2);

//solution 2
function gcd(gcd1, gcd2){
    var numArray = [gcd1, gcd2];
    numArray = numArray.sort(function (a, b) {  return a - b;  });
      var r = Number(numArray[1] % numArray[0]);
      console.log("the Greatest Common Denominator of the above numbers is:" + r)
  }

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
      console.log("true:" ++ n + "is a prime")
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