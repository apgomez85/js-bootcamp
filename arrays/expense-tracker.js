const account = {
  name: 'Adrian Gomez',
  expenses: [],
  income: [],

  addExpense: function(description, amount) {
    this.expenses.push({ description, amount });
  },

  addIncome: function(description, amount) {
    this.income.push({ description, amount });
  },

  getTotalExpenses: function() {
    let sum = 0;

    this.expenses.forEach(function(expense) {
      sum = sum + expense.amount;
    });
    return sum;
  },

  getTotalIncome: function() {
    let sum = 0;

    this.income.forEach(function(income) {
      sum = sum + income.amount;
    });
    return sum;
  },
  getAccountSummary: function() {
    const totalExpenses = this.getTotalExpenses();
    const totalIncome = this.getTotalIncome();
    const balance = totalIncome - totalExpenses;
    return `${this.name} has a balance of $${balance.toFixed(
      2
    )}. $${totalIncome.toFixed(2)} in income. $${totalExpenses.toFixed(
      2
    )} in expenses.`;
  }
};

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Adrian Gomez has $1250 in expenses.

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());
