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

// Array.filter() usage
var lamePeople = people.filter(function(person) {
  return person.status.indexOf('JavaScript') !== -1;
});

var sexyPeople = people.filter(function(person) {
  return person.status.indexOf('hot') !== -1;
});

// Simple filter() implementation
function filter(array, fn) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

// Simple filter() usage
lamePeople = filter(people, function(person) {
  return person.status.indexOf('JavaScript') !== -1;
});

sexyPeople = filter(people, function(person) {
  return person.status.indexOf('hot') !== -1;
});

