/*  Using the example data set from this chapter,
**  compute the average age difference between mothers and children
*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

//filter ancestry array to people who have a mother in the dataset
var hasMom = {};
hasMom = ancestry.filter(function(person){
  return (byName[person.mother]);
});

//create array of age difference between mother and child
var ageDif = [];
hasMom.forEach(function(person){
  var mom = byName[person.mother];
  ageDif.push(person.born - mom.born);
});

//return average of age differences between mothers and children
console.log(average(ageDif));
// → 31.2
