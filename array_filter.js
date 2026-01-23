// JavaScript array.filter() practice

const numbers = [1, 2, 3, 4, 5, 6];

// Filter even numbers
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);

// Filter numbers greater than 3
const greaterThanThree = numbers.filter(function (num) {
  return num > 3;
});

console.log(greaterThanThree);