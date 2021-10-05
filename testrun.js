/*
function getRandomNum(){
    result = Math.floor(Math.random() * 30);
    return result;
}

lcm1 = getRandomNum();
lcm2 = getRandomNum();
console.log(lcm1, lcm2);

function maxMin(lcm1, lcm2) {
    if (lcm1 > lcm2){
        max = lcm1
        min = lcm2
    }
    else if (lcm2 > lcm1){
        max = lcm2
        min = lcm1
    }
    console.log("ordered: " + max + "," + min);
}

lcmMax = lcm1*lcm2
console.log(lcmMax)

function lcm(min, max) {
  for (let i = 1;i < lcmMax;i++){
    if(i % min === 0){
      console.log("i is divisible by min")
    }
    else if (i % max === 0){
      console.log("i is divisible by max")
    }
    else if (i % min === 0 && i % max === 0){
      console.log("i is a common multiple of max and min")
      } else {
        console.log(i)
      }
  }
}
*/
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


/*
function getRandomNum(){
    result = Math.floor(Math.random() * 50);
    return result;
}

var n = getRandomNum();
console.log("n is " + n);
integers = [];

function prime(n) {
    for (let i = 1; i < (n+1); i++){
      calc = n/i
    if (Number.isInteger(calc)){
      console.log("this gives an integer")
      //integers.push(i)
    }
  }
   console.log(integers)
}

if (integers.indexOf(n) == 1){
      console.log("true")
    }

prime();
*/