/*  A list is a nested set of objects, with the first object 
**  holding a reference to the second, the second to the third, 
**  and so on. Write a function arrayToList that builds up a 
**  list object from an array, and write a listToArray function 
**  that produces an array from a list.
**
**  Also write the helper functions prepend, which takes an element 
**  and a list and creates a new list that adds the element to the 
**  front of the input list, and nth, which takes a list and a number
**  and returns the element at the given position in the list, or 
**  undefined when there is no such element.

function arrayToList(array){
  var list = null;
  for(var i = (array.length - 1); i > -1; i--){
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list){
  var array = [];
  for (var node = list; node; node = node.rest){
    array.push(node.value);
  }
  return array;
}

function prepend(elem, list){
  return {value: elem, rest: list};
}

function nth(list, num){
  if (num == 0)
    return list.value;
  else{
    var i = num - 1;
    var newList = list.rest;
    return nth(newList, i);
  }
}
