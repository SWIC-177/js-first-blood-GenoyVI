const name = "John Doe";
let otherName = name;

console.log(`Name is: ${name}`); // eslint-disable-next-line no-console
console.log(`Other name is: ${otherName}`);

otherName = "Jane Doe";

console.log(`Name is: ${name}`); // eslint-disable-next-line no-console
console.log(`Other name is: ${otherName}`);

otherName = 23;
console.log(`Name is: ${name}`); // eslint-disable-next-line no-console
console.log(`Other name is: ${otherName}`);
