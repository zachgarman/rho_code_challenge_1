// 1 - Write a statement that console logs "Hello" if the two variables are equal


var first = 3;
var second = 5;
if (first === second) {
  console.log('Hello');
} else {
  console.log('Goodbye');
}
// 2 - Expand your answer above to console log "Goodbye" if the variables are not equal
// I added the statement above because it looks better.

/*
3 - Write a statement that assigns the value of the addition of the first & second variables
    to a new variable called third IF first is greater than second. If second is greater than
    first assign the difference of the first & second variables to third.
*/
var third;
if (first > second) {
  third = first + second;
} else if (second > first) {
  third = second - first;
}
