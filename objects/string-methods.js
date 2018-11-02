let name = '  Adrian Gomez ';

//length property
console.log(name.length);

//convert to upper case method
console.log(name.toUpperCase());

//convert to lower case
console.log(name.toLowerCase());

//Includes method
let password = 'abcpassword123';
console.log(password.includes('password'));

//Trim
console.log(name.trim());

//Challenge Area
let isValidPassword = function(str) {
  return str.length > 8 && !str.includes('password');
};

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('asdfj21f96asd4f'));
console.log(isValidPassword('asdfpasdfb164passwordasdf'));
