let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

//challenge area

let makeGuess = function(guess) {
  let randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  console.log(randomNumber);
  return guess === randomNumber;
};

console.log(makeGuess(2));
