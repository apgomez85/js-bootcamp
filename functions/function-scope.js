//Same rules as scope.js

let convertFahrenheitToCelsius = function(temp) {
  let result = (temp - 32) * (5 / 9);
  return result;
};

console.log(convertFahrenheitToCelsius(68));
