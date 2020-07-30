var arrays = [];
var counter = 1;
function fizzbuzz() {

while(counter <= 100){
   if(counter % 15==0){
      console.log("FizzBuzz");
   }
   else if(counter % 5==0){
      console.log("Buzz");
   }
  else if(counter %3==0){
    console.log("Fizz");
  }

   else{
     console.log(counter);
   }
   //insert a new elements in array
  arrays.push(counter++);
}
}
fizzbuzz();
