// JavaScript Arrays Practice

// Creating an array
const numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log(numbers[0]);   // first element
console.log(numbers[4]);   // last element

// Looping through array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
};

// Array methods practice

// Adding an element
numbers.push(6);
console.log(numbers);

// Removing the last element
numbers.pop();
console.log(numbers);

// Array length
console.log("Array length:", numbers.length);