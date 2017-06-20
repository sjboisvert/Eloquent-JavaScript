/*  Write a range function that takes two arguments, start and end, and returns
**  an array containing all the numbers from start up to (and including) end.
**  Next, write a sum function that takes an array of numbers and returns the 
**  sum of these numbers.
**  As a bonus assignment, modify your range function to take an optional third 
**  argument that indicates the “step” value used to build up the array. If no step is 
**  given, the array elements go up by increments of one, corresponding to the old 
**  behavior.
*/

function range(a, b, c){
  if (!c)
    c = 1;
  var array = [];
  if (c > 0){
    for(; b >= a; a += c){
      array.push(a);
    }
    return array;
  }
  else if (c < 0){
    for(; b <= a; a += c){
      array.push(a);
    }
    return array;
  }
}
function sum(array){
  var total = 0;
  for (var i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
}
