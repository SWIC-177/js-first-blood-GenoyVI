const person = {
  name: "John Doe",
  age: 23,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

const otherPerson = person;

otherPerson.name = "Jane Doe";

const zipcode = person.address.zip; // 10001
console.log(`Person's name is: ${person.name}`);
console.log(`Other Person's name is: ${otherPerson.name}`);
console.log(`Zipcode is: ${zipcode}`);
