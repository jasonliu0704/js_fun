var people = [
  { name: 'Kimberly',
    status: "I got a blank space, and I'll write your name" },
  { name: 'Vivek',
    status: "I'm too hot (hot damn)" },
  { name: 'Jennifer',
    status: "I'm following the map that leads to you" },
  { name: 'Karthik',
    status: "I <3333 JavaScript callbacks" },
];

// forEach() usage
people.forEach(function(person) {
  console.log(person.status);
});

// Simple forEach() implementation
function forEach(array, fn) {
  for (var i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}

// Simple forEach() usage
forEach(people, function(person) {
  console.log(person.status);
});

