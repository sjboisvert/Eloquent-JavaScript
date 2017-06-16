/*  Write a program that uses console.log to 
**  print all the numbers from 1 to 100 with
**  three exceptions: for numbers divisible
**  by 3, print "Fizz", for numbers divisible
**  by 5, print "Buzz", and for numbers
**  divisible by 3 and 5, print "FizzBuzz"

for (var i = 1; i < 101; i++){
  if (i % 3 == 0 && i % 5 == 0)
    console.log("FizzBuzz");
  else if (i % 3)
    console.log("Fizz");
  else if (i % 5)
    console.log("Buzz");
  else
    console.log(i);
}
