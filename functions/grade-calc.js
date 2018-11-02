//students score, total possible score
// 15/20 -> you got a C (75%)!

const getGrade = function(score, possibleScore) {
  const gradeScore = (score / possibleScore) * 100;
  let letterScore = '';
  if (gradeScore >= 90) {
    letterScore = 'A';
  } else if (gradeScore >= 80) {
    letterScore = 'B';
  } else if (gradeScore >= 70) {
    letterScore = 'C';
  } else if (gradeScore >= 60) {
    letterScore = 'D';
  } else {
    letterScore = 'F';
  }

  return `You got a ${letterScore} (${gradeScore}%)`;
};

const grade = getGrade(63, 80);
console.log(grade);
