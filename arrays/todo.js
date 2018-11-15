const todos = [
  {
    text: 'Learn to code',
    completed: false
  },
  {
    text: 'Exercise',
    completed: true
  },
  {
    text: 'Eat Well',
    completed: true
  },
  {
    text: 'Save money',
    completed: false
  },
  {
    text: 'Clean up',
    completed: false
  }
];

const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (a.completed && !b.completed) {
      return 1;
    } else if (b.completed && !a.completed) {
      return -1;
    } else {
      return 0;
    }
  });
};

const deleteTodo = function(todos, text) {
  const index = todos.findIndex(function(todo, index) {
    if (todo.text) {
      return todo.text.toLowerCase() === text.toLowerCase();
    }
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

const getThingsToDo = function(todos) {
  return todos.filter(function(todos) {
    return !todos.completed;
  });
};

sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos));

// deleteTodo(todos, 'exercise');
// console.log(todos);
