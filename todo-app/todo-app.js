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
    completed: true
  },
  {
    text: 'Clean up',
    completed: false
  }
];

const filters = {
  searchText: ''
};

const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  let count = 0;
  filteredTodos.forEach(todo => {
    if (!todo.completed) {
      count++;
    }
  });

  document.querySelector('#todo-list').innerHTML = '';

  const newParagraph = document.createElement('h2');
  newParagraph.textContent = `You have ${count} todos left.`;
  document.querySelector('#todo-list').appendChild(newParagraph);

  filteredTodos.forEach(function(todo) {
    const todoEl = document.createElement('p');
    todoEl.textContent = todo.text;
    document.querySelector('#todo-list').appendChild(todoEl);
  });
};

todos.forEach(todo => {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = todo.text;
  document.querySelector('#todo-list').appendChild(newParagraph);
});

document.querySelector('#search-todo').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#todo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  todos.push({ text: e.target.elements.addTodo.value, completed: false });
  e.target.elements.addTodo.value = '';
  renderTodos(todos, filters);
});
