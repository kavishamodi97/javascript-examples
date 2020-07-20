var a = 20,
  b = "20";
var type1 = typeof(a);
var type2 = typeof(b);
console.log(type1);
console.log(type2);

/// use of "===" operator
if (a === b) {
  console.log("Yes It matched!!!");
} else {
  console.log("NO"); //print
}

///use of "==" operator(does not check datatype)
if (a == b) {
  console.log("Yes It matched!!!"); //print
} else {
  console.log("NO");
}
