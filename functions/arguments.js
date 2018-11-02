//Multiple arguments
let add = function(a, b) {
  return a + b;
};

let result = add(10, 1);
console.log(result);

//Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
  return 'Name: ' + name + ' - ' + ' Score: ' + score;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

//Challenge area

let getTip = function(amount, tipPercent = 0.2) {
  let result = amount * tipPercent;
  return `A ${tipPercent * 100}% tip on $${amount} would be $${result}`;
};

let tipAmount = getTip(100);
console.log(tipAmount);
