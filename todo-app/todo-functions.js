// Get Todos from localStorage
const getSavedTodos = function() {
  const todosJSON = localStorage.getItem('todos');

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// Save Todos to localStorage
const saveTodos = function(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Render Todos to the DOM
const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector('#todo-list').innerHTML = '';

  document
    .querySelector('#todo-list')
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(function(todo) {
    document.querySelector('#todo-list').appendChild(generateTodoDOM(todo));
  });
};

const generateTodoDOM = function(todo) {
  const todoEl = document.createElement('div');
  const check = document.createElement('input');
  const textEl = document.createElement('span');
  const button = document.createElement('button');

  check.setAttribute('type', 'checkbox');
  textEl.textContent = todo.text;
  button.textContent = 'Remove';

  todoEl.appendChild(check);
  todoEl.appendChild(textEl);
  todoEl.appendChild(button);

  return todoEl;
};

const generateSummaryDOM = function(incompleteTodos) {
  const newParagraph = document.createElement('h2');
  newParagraph.textContent = `You have ${incompleteTodos.length} todos left.`;
  return newParagraph;
};
