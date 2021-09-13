
var hungry = true;
var sleepy = true;

if (hungry == true){
  console.log("Let's have a dinner");
}
else{
  console.log("Let's wait until class finish");
}


// Second case

// enter your age here
var age = 24;

if (age < 18){
  console.log("you cannot enter the cinema");
}
else {
  console.log("you may enter the cinema");
}
// Exercise
//Do some line of code to define odd or even number
//Tips using baki.. modula
var number = 13;

if ( number % 2 == 0){
  console.log("This is an even number")
}
else {
  console.log("This is an odd number")
}

//Challenge
var price = 100;
var passengerAge = 2;

if (passengerAge < 19){
  var finalprice = price * 0.5;
  console.log("The final price is RM"+price);
}

else if (passengerAge <41){
  var finalprice = price *0.75
  console.log("The price is RM"+finalprice);
}
else{
  var finalprice = price * 0.5;
  console.log("The final price is RM"+finalprice);
}
  
//repetition
// tambah sampai 10
var multiplier = 7;

for (var i = 1; i < 10; i++) {
  console.log(i);
}

// tolak/ descending
var multiplier = 7;

for (var i = 10; i > 0; i--){
  console.log(i);
}

var multiplier = 7;
for(var i = 1; i < 10; i+=2){
  console.log(i)
}

//Siti sifir
var multiplier = 7;
var lines = 12;

for (var i = 1; i < lines+1; i++){
  console.log(i+" x" + multiplier + " = " + multiplier *i);
}
