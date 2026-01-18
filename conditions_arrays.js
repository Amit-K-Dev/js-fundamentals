// Conditions with Arrays Practice

const numbers = [1, 2, 3, 4, 5, 6];

// Print only even numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// Print numbers greater than 3
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 3) {
    console.log(numbers[i]);
  }
}