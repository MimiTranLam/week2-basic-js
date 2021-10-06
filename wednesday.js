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

//////// ^ try debug

/* Arrays */
// P1
/*
const programmers = [];

programmers[0] = "Bill";
programmers[1] = "Mark";
programmers[2] = "Elon";
programmers[1] = "Alan";
//programmers.shift();

console.log(programmers);

// P2
const myCompanies = ["grab", "vingroup"];
const theirCompanies = ["microsoft", "facebook"];

const techCompanies = myCompanies.concat(theirCompanies);

console.log(techCompanies);

/* Array Methods */
// P1
/*
arr1 = ["A", "B", "C"];
console.log(arr1);

function reverseArray1(arr1){
  console.log(arr1.reverse());
}
reverseArray1(arr1);

var arr2 = [1, 2, 3, 4, 5];
console.log(arr2)

function reverseArray2(arr2){
  console.log(arr2.reverse());
}
reverseArray2(arr2);

// P2
/*
evenNumber = []
oddNumber = []

function evenOdd(arr2){
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 == 0){
      evenNumber.push(arr2[i])
    } else {
      oddNumber.push(arr2[i])
    }
  }
}

evenOdd(arr2);
console.log(evenNumber);
console.log(oddNumber);
*/
// P3
/*
evenNumbers = []

function getRandomInt(){
  for (i = 0; i < 101; i++){
    evenNumbers.push(Math.floor(Math.random() * 101));
  }
}

getRandomInt();

// P4
function checkEven(number){
  if (number % 2 === 0){
    return 1;
  } else {
    return 0;
  }
}

oddNumbers = []
//const isCorrect = array.every(callback[,thisArg])
function oddOut(){
  for (var i = 0; i < evenNumbers.length; i++){
    if (evenNumbers[i] % 2 !== 0){
      evenNumbers.splice(i, 1);
      oddNumbers.push(evenNumbers[i]);
      }
}

function checkAllOddOut(){
    for (var i = 0; i < evenNumbers.length; i++) {
      const number = evenNumbers[i];
      let even = evenNumbers.every(checkEven(number));
        if(even == 1){
            console.log("These are even: " + evenNumbers);
            console.log("These are odd: " + oddNumbers);
        } else {
            oddOut();}
        }
    }
}

function checkAllOddOut(){
    for (var i = 0; i < evenNumbers.length; i++) {
      const number = evenNumbers[i];
      let isEven = evenNumbers.forEach(checkEven(number));
      let even = 1;
        if(isEven == even){
            console.log("These are even: " + evenNumbers);
            console.log("These are odd: " + oddNumbers);
        } else {
            for (var i = 0; i < evenNumbers.length; i++){
                if (evenNumbers[i] % 2 !== 0){
                evenNumbers.splice(i, 1);
                oddNumbers.push(evenNumbers[i]);
                }
            }
        }
    }
}

checkAllOddOut();
*/
/* Objects */
// P1
var charles = {
  age: 28,
  city: "Ho Chi Minh",
  fullName: "Charles Lee",
  companies: ["CoderSchool"],
};

function isCoderSchoolStaff(charles) {
  if (person.company === "CoderSchool") {
    console.log("Is working at CoderSchool!");
  }
}

isCoderSchoolStaff(charles);

// P2
function describePerson(charles) {
  info = Object.keys(person);
  console.log(`${person.fullName} + ${person.age} + ${person.companies}`);
}

describePerson();

function logLastName(charles){
  var full = person.fullName
  var wordArray = full
}

/*
Define a function, logLastName(), that takes an argument, person, and logs that person's last name.
Define a function, getInitials(), that takes an argument, person, and logs that person's first and last name's initials.
Define a function ,ageOneYear(), that takes an argument, person, and increased that person's age by one year.
Define a function, getBirthYear(), that takes an argument, person, and determines their birth year based on their age and the current year.
*/