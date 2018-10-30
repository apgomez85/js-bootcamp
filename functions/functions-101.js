//Function - input(argument), code, output(return value)

let greetUser = function() {
  console.log('Welcome User!');
};

greetUser();

let square = function(num) {
  let result = num * num;
  return result;
};

console.log(square(3));

let convertFahrenheitToCelsius = function(temp) {
  let result = (temp - 32) * (5 / 9);
  return result;
};

console.log(convertFahrenheitToCelsius(68));
