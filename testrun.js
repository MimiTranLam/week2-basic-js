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
console.log(factors);

let orderedFactors = factors.sort((a, b) => a - b);
console.log(orderedFactors);

//go through orderedFactors and if a number occurs twice, put it into new array simFactors
//simFactors = orderedFactors.filter(orderedFactors[n] == orderedFactors[n+1])
simFactors = []
function sim() {
    for (n = 0; n < (orderedFactors.length+1); n++){
        if (orderedFactors[n] == orderedFactors[n+1]){
            simFactors.push(n)
        }
    }
}
//push and order into simF
var gcd = simFactors.pop();
console.log(gcd);

// use entries for the fruit thing

