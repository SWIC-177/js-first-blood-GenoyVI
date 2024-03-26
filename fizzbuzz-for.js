for (let i = 1; i <= 100; i += 1) {
  // a for loop with initialization, declaration, and increments of 1.
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz"); // using the modulo operator; logging to console if i is divisible by 3 and 5 without a remainder
  } else if (i % 3 === 0) {
    console.log("Fizz"); // funny word
  } else if (i % 5 === 0) {
    console.log("Buzz"); // another funny word
  } else {
    console.log(i); // a final else to log all unaccounted for exceptions.
  }
}
