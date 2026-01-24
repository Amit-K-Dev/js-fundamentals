// JavaScript array.map() practice

const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubledNumbers);

// Convert numbers to strings
const numberStrings = numbers.map(function (num) {
  return "Number: " + num;
});

console.log(numberStrings);
