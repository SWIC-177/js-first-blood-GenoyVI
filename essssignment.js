function createPerson(name, age) {
  // Create a new object with the given prototype
  const person = Object.create(null);

  // Set properties on the new object
  person.name = name;
  person.age = age;

  // Return the newly created object
  return person;
}

// Usage example
const john = createPerson("John Doe", 25);
console.log(john.name); // Output: John Doe
console.log(john.age); // Output: 25
