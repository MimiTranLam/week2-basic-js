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
function getRandomNum(){
    result = Math.floor(Math.random() * 40);
    return result;
}

gcd1 = getRandomNum();
gcd2 = getRandomNum();
console.log(gcd1, gcd2);

max = maxMin(gcd1, gcd2);
min = maxMin(gcd1, gcd2);
function maxMin(gcd1, gcd2) {
    if (gcd1 > gcd2){
        max = gcd1
        min = gcd2
    }
    else if (gcd2 > gcd1) {
        max = gcd2
        min = gcd1
    }
    console.log(max, min);
}

// do a thing where it sorts array n1, n2 into ascending order to find max and min without the above function ARRAY
var numArray = [gcd1, gcd2];
numArray = numArray.sort(function (a, b) {  return a - b;  });
console.log(numArray);
// quicker but still solve the logical way behind this

min = numArray[0]
max = numArray[1]

function gcd(max, min){
    var r = max % min
    console.log(min + " " + r)
}

gcd(max, min);

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