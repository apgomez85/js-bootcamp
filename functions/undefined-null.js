//Undefined for variable

let name;

if (name === undefined) {
  console.log('Please provide a name');
} else {
  console.log(name);
}

//Undefined for function arguments
//Undefined as a function return default value

let square = function(num) {
  console.log(num);
};

square();

let result = square();
console.log(result);

//Null as assigned value instead of undefined
let age = 27;

age = null;
console.log(age);
