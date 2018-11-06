const todos = [
  'Learn to code',
  'Exercise',
  'Eat Well',
  'Save money',
  'Clean up'
];

todos.splice(2, 1);
todos.push('Drink more water');
todos.shift();

console.log(`You have ${todos.length} todos.`);

todos.forEach(function(item, index) {
  console.log(`${index + 1}. ${item}`);
});
