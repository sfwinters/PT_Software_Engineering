/*Programming Fundamentals

DRY: "Don't Repeat Yourself;" this is a reminder to use functions, loops, etc to keep code clean and efficient.
KISS: "Keep it Simple, Stupid;" avoid writing code that is unnecessarily complex.
Avoid creating a YAGNI: Wait to include functions until you actually need them.
Do the simplest thing that could possibly work: Another reminder to keep code simple and eliminate unnecessary content.
Don't make me think: The code should be clean and easy to read; another benefit of keeping it simple.
Write code for the maintainer: Similar to "don't make me think," write code as if someone else will have to review or edit it 
    later.
Single responsibility principle: Each component should perform one clear task.
Avoid premature optimization: Make sure that your code is actually working before trying to make it simpler.
Separation of concerns: Similar to "single responsibility principle;" different tasks should be handled by separate 
    components.

None of these were especially surprising to me. They all make sense toward keeping code efficient and easy to read.
I think I'm having the most trouble with "don't make me think/write code for the maintainer." I am still getting used
to coding overall, but I'm used to making notes and keeping track of things in weird ways that probably don't make sense
from an outside perspective. I am working on getting better at (for example) creating descriptive names for variables 
instead of just using "x y z." Especially looking at the below code, haha. */

const f = l => {  //declares the function f with parameter l
    let es = 0, p = 0, c = 1, n = 0 //variables to be used in the function and their current values
    while (c <= l) {  //code inside this block will continue to run as long as c is less than or equal to l
      n = c + p; //the new value of n will become the sum of c and p
      [c, p] = [n, c] //the values of c and p on the left are replaced with the values of n and c from the last step
      es += (c % 2 === 0) ? c : 0 //checks to see if c is an even number and if so, adds it to the value of es. (if odd, adds 0)
    }
    return es
  }
  
  console.log(f(55)) //runs this function with 55 as the value of l

  const f2 = (limit) => {
      let evenSum = 0;
      let previous = 0;
      let current = 1;
      while (current <= limit) {
          let next = current + previous;
          previous = current;
          current = next;
          if (current % 2 === 0) {
              evenSum += current;
          }
      }
      return evenSum;
  }
  console.log(f2(55))

  /*This function could have been called something like addEvenNums. 
  The variable names in f2 are much easier to understand at first glance, so I would rather work with the second code.
  When I ran the first code without the semicolon, it returned an error. The error did not occur when I put it back.*/
