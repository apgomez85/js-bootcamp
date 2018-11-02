//Objects are pointers, when passed into funtion it does not create a clone\
//Can only manipulate objects properties, not the object itself

let myAccount = {
  name: 'Adrian Gomez',
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount;
};

let addIncome = function(account, amount) {
  account.income = account.income + amount;
};

let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${
    account.income
  } in income. $${account.expenses} in expenses.`;
};

addExpense(myAccount, 50);
addIncome(myAccount, 121);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
