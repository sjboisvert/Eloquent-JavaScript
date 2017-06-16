/*  Given that 0 is even, 1 is odd, and for any other positive whole number N,
**  its evenness is the same as N - 2, write a recursive function that
**  accepts a number parameter and returns a boolean
*/

function isEven(n){
  if (n < 0)
    n *= -1;
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else
    return isEven(n - 2);
}
