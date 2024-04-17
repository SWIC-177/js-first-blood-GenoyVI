function outerFunction() {
  var outerVariable = "I am from the outer function";

  function innerFunction() {
    var innerVariable = "I am from the inner function";
    console.log(outerVariable + " and " + innerVariable);
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // Output: I am from the outer function and I am from the inner function

var originalArray = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

var modifiedArray = originalArray.map(function (obj) {
  return {
    name: obj.name,
    age: obj.age + 1,
  };
});

console.log(modifiedArray);
