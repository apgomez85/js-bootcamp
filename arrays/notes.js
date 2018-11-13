const notes = [
  {},
  {
    title: 'My next trip',
    body: 'I would like to got to Japan'
  },
  {
    title: 'Habbits to work on',
    body: 'Study more frequently'
  },
  {
    title: 'Office modification',
    body: 'Get a new seat'
  }
];

const findNote = function(notes, noteTitle) {
  const index = notes.findIndex(function(note, index) {
    if (note.title) {
      return note.title.toLowerCase() === noteTitle.toLowerCase();
    }
  });
  return notes[index];
};

const note = findNote(notes, 'office modification');
console.log(note);

const findNotes = function(notes, query) {
  return notes.filter(function(notes, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, 'eating'));

// console.log(notes.length);
// console.log(notes);

// const index = notes.findIndex(function(note, index) {
//   return note.title === 'Office modification';
// });

// console.log(index);
