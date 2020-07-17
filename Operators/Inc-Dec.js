// use of Increment-Decrement operator
var x=3;
var y=x++;
var y=y+1;
console.log(y);

//Increment operator expression
var a=0,b=0;
var c= a++ +  b++;
console.log(c);


var a=0,b=0;
var c= a++ +  ++b;
console.log(c);

var a=0,b=0;
var c= ++a +  ++b;
console.log(c);

var a=2,b=1,c=3;
var d= a++ +  ++b + c++;
console.log(d);


//Decrement operator expression
var a=2,b=3;
var c= a-- + --b;
console.log(c);

var a=2,b=3;
var c= --a + --b;
console.log(c);

var a=2,b=3,c=5;
var d= a-- + --b + --c;
console.log(d);

var a=2,b=3,c=5;
var d= a++ + --b + ++c;
console.log(d);
