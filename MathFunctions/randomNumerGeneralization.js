// random number generalization:-Dice Roller
var n=Math.random(); //range 0 to 0.99999999999999999999
n=n*6;
var n=Math.floor(n) + 1;  //Dice range 1 to 6
console.log(n);

// Love score Calculation:- run in web browers:-
var person1=prompt("Enter Person1 Name");
var person2=prompt("Enter Person2 Name");
var randNum=Math.random();
randNum=Math.floor(randNum*100) + 1;
alert("Your Love Score is " +randNum + "%");
