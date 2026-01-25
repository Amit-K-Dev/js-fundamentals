// JavaScript array.reduce() practice

const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log("Sum:", sum);

// Multiply all numbers
const product = numbers.reduce(function (accumulator, currentValue) {
  return accumulator * currentValue;
}, 1);

console.log("Product:", product);

