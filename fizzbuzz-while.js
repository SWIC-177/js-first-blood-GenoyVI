let number = 1;

while (number <= 100) {
  // applying to all code below
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz"); // if number/multiple is divisible by 3 AND 5, with NO REMAINDER; print FizzBuzz
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }

  number += 1; // using assigned and declared variable to increment by 1 via a compound assignment operator
}
