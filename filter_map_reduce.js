// Combining filter, map, and reduce

const numbers = [1, 2, 3, 4, 5, 6];

// Step 1: filter even numbers
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

// Step 2: double the even numbers
const doubledEvenNumbers = evenNumbers.map(function (num) {
  return num * 2;
});

// Step 3: sum the doubled values
const total = doubledEvenNumbers.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log("Even numbers:", evenNumbers);
console.log("Doubled even numbers:", doubledEvenNumbers);
console.log("Total:", total);

