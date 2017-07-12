/*  Compute and output the average age of the people 
**  in the ancestry data set per century. A person is 
**  assigned to a century by taking their year of death, 
**  dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var centuries = {};

function groupBy(array){
  array.forEach(function(person){
    var age = person.died - person.born;
    var year = Math.ceil(person.died / 100);
    if (centuries[year])
      return centuries[year].push(age);
    else
      return centuries[year] = [age];
  });
}

groupBy(ancestry);
for (years in centuries){
  console.log(years + ' : ' + average(centuries[years]));
}
