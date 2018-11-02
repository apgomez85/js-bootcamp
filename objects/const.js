//can't reassign a const once it's been created

const isRaining = true;

// isRaining = false; -> will not work

console.log(isRaining);

const person = {
  age: 27
};

// person = {}; will not work

person.age = 28;
console.log(person);
