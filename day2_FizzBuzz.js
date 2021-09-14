//Fizz Buzz FizzBuzz
//step 1 : print the number

for (var i = 1; i < 101; i++){
  //finally fix the bug!
  if (i % 15 ==0){
    console.log("FizzBuzz");
  //step two - insert condition
  } else if (i % 5 ==0){
      console.log("Buzz");
    }
  else if (i % 3 ==0){
    console.log("Fizz");
  }
  else{
    console.log(i);
  }
}

  


