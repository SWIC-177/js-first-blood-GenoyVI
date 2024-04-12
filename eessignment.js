function rawStringExample() {
  const name = "John";
  const age = 30;

  const message = String.raw`Hello, my name is ${name} and I am ${age} years old.`;

  console.log(message);
}

rawStringExample();
