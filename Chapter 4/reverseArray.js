/*  reverseArray- takes an array as argument and produces a 
**  new array that has the same elements in the inverse order.
**  reverseArrayInPlace- does what the reverse method does: it 
**  modifies the array given as argument in order to reverse its elements


function reverseArray(array){
  var newArray = [];
  for (var i = 0; i < array.length; i++){
    newArray.unshift(array[i]);
  }
  return newArray;
}
function reverseArrayInPlace(array){
  for(var i = 0; i < Math.floor(array.length / 2); i++){
    var tmp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tmp;
  }
  return array;
}
