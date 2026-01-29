// Arrow function basics

// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};

console.log(add(2, 3));
console.log(addArrow(2, 3));

// Arrow function with one parameter
const square = (num) => {
  return num * num;
};

console.log(square(4));

// Arrow functions with array methods

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

const doubled = evenNumbers.map(num => num * 2);

const total = doubled.reduce((acc, curr) => acc + curr, 0);

console.log(evenNumbers);
console.log(doubled);
console.log(total);

