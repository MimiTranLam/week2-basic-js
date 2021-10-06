//Write a function that takes a number n as an argument and print out the following:
n = 4

function loops1(n){
  a = [];
  for(var l = 1; l < (n+1); l++){
    a.push(l);
    for(var m = 1; m < (n+1); m++){
    a.push(m);
    for(var j = 1; n < (n+1); n++){
    a.push(j);
    for(var o = 1; o < (n+1); o++){
    a.push(o);
    }
    }
    }
  }
  result = a.join(" ");
  console.log(result);
}

loops1(n);
