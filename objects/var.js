//differences and why not to use var
//1. allows for declaring same variable more than once

var firstName = 'Adrian';
firstName = 'Mike';

var firstName = 'Jen';

console.log(firstName);

//2. has function scope

if (10 === 10) {
  var secondName = 'Perez';
}

console.log(secondName);

// const setName = function() {
//   var lastName = 'Gomez';
// };

// setName();
// console.log(lastName);       ->           will not work

//3.can declare a variable before it's called. will remain undefined if not assigned a value before call
age = 10;
console.log(age);
var age;
