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
function checkAllOddOut(){
    for (var i = 0; i < evenNumbers.length; i++) {
      const number = evenNumbers[i];
      let even = evenNumbers.every(checkEven(number));
        if(even == 1){
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
    if (charles.company === "CoderSchool") {
      console.log("Is working at CoderSchool!");
    }
  }
  
  isCoderSchoolStaff(charles);
  
  // P2
  function describePerson(charles) {
    console.log(`${charles.fullName} + ${charles.age} + ${charles.companies}`);
  }

  describePerson();
  
  // P3
    function logLastName(charles){
    var full = person.fullName;
    var wordArray = full.split(" ");
    console.log(wordArray);
  }

  logLastName();
  
  
  // P4


  /*
  Define a function, logLastName(), that takes an argument, person, and logs that person's last name.
  Define a function, getInitials(), that takes an argument, person, and logs that person's first and last name's initials.
  Define a function ,ageOneYear(), that takes an argument, person, and increased that person's age by one year.
  Define a function, getBirthYear(), that takes an argument, person, and determines their birth year based on their age and the current year.
  */
