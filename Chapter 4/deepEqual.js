/*  Write a function, deepEqual, that takes two values and returns true only if they are the same value or 
**  are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual
*/


function deepEqual(a, b){
  if ((typeof(a) == "object" && typeof(a) != null) && (typeof(b) == "object" && typeof(b) != null)){
    keysa = Object.keys(a);
    keysb = Object.keys(b);
    if (keysa.length != keysb.length)
      return false;
    for (var i in a){
      if (deepEqual(a[i], b[i]) == false)
        return false;
    }
    return true;
  }
  else if ((typeof(a) == "object" && typeof(a) != null) || (typeof(b) == "object" && typeof(b) != null))
    return false;
  else{
    if (a === b)
      return true;
    else
      return false;
  }
}
