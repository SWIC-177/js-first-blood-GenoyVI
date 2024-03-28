const people = [
  {
    name: "brian griffin",
    age: 17,
  },
  {
    name: "mary smith",
    age: 20,
  },
  {
    name: "jane smith",
    age: 25,
  },
  {
    name: "Peter griffin",
    age: 30,
  },
  {
    name: "stewart griffin",
    age: 3,
  },
  {
    name: "John Oliver",
    age: 46,
  },
];

function verifyAdulthood(personName, personAge) {
  for (let i = 0; i < people.length; i += 1) {
    // let due to reassignment
    if (people[i].name === personName && people[i].age === personAge) {
      if (personAge >= 18) {
        return `Welcome, ${personName}!`;
      }
      return `You are not old enough to enter, ${personName}.`;
    }
  }
  return `Person not found.`; // else placed for return
}

for (let i = 0; i < people.length; i += 1) {
  const person = people[i]; // let reacts differently upon reassignment
  const adultMessage = verifyAdulthood(person.name, person.age);
  console.log(`${person.name}: ${adultMessage}`);
}
