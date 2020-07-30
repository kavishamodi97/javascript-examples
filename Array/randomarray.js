
var names=["a","b","c","d","e"];
whosPaying(names);

//generate random name from array
function whosPaying(names) {
var totalPersonLength=names.length;
var randomNames=Math.floor(Math.random() * totalPersonLength);
var nameIndex=names[randomNames];
console.log(nameIndex + " is going to buy lunch today!");
}
