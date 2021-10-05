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