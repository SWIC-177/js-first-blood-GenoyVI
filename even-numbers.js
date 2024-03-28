const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i += 1) {
  // initializing and specifying the true/false boolean to iterate over the LENGTH of the array
  if (numbers[i] % 2 === 0) {
    // if condition: no remainder is present during use of the modulo operator
    console.log(numbers[i]);
  }
}
