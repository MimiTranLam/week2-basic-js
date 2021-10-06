console.log('part 3');

evenNumbers = []

function getRandomInt(){
  for (i = 0; i < 101; i++){
    evenNumbers.push(Math.floor(Math.random() * 101));
  }
}
getRandomInt();
console.log(evenNumbers);

oddNumbers = [];

function oddOut(){
  for (var i = 0; i < evenNumbers.length; i++) {
      r = evenNumbers[i] / 2;
    if (!Number.isInteger(r)){
      evenNumbers.splice(evenNumbers[i]);
      oddNumbers.push(evenNumbers[i]);
    }
}

oddOut();
console.log(oddNumbers);