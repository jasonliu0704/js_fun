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

// map() usage
var statuses = people.map(function(person) {
  return person.status;
});

// Simple map() implementation
function map(array, fn) {
  var mappedArray = [];
  for (var i = 0; i < array.length; i++) {
    mappedArray.push(fn(array[i]));
  }
  return mappedArray;
}

// Simple map() usage
statuses = map(people, function(person) {
  return person.status;
});

