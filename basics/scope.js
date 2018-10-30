//Lexical Scope (Static Scope)
//Global Scope - Defined outside of all code blocks
//Local Scope - Defined inside a code block

//In a scope you can access variables defined in that scope, or in any parent/ancestor scope

//Global Scope (varOne)
//Local Scope (varTwo)

let varOne = 'varOne';

if (true) {
  console.log(varOne);
  let varTwo = 'varTwo';
  console.log(varTwo);
}

console.log(varTwo);

//Delaring variable in local scope creates a Leaked variable in global - avoid by using let,var, const
