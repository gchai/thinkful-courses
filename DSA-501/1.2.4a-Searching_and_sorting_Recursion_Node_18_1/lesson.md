# Recursion

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to implement recursive functions that use both top-down and bottom-up recursion.

#### Overview

###### You know that a function can call any other function, but did you know that a function can also call itself? A function that calls itself is called a recursive function, and that's exactly what you'll learn about in this lesson.

## Key Terms

Recursion

A problem-solving method that involves a function calling itself

Top-down recursive function

A function that calculates the solutions to each subproblem in the forward phase, passing the results of the calculation to the recursive call

Bottom-up recursive function

A function that breaks down the problem into increasingly smaller problems until the base case is encountered, and then combines the solutions in the backward phase

Stack overflow error

A runtime error where the call stack gets too big and runs out of space

Forward phase

Also called the recursive phase, the phase that happens when the function is calling itself and continues until the base case is satisfied

Backward phase

Also called the back-out phase, the phase that starts when a function call satisfies the base case, then returns a value to the function that called it, and continues until a value is returned to the initial function call

## Recursion

In computer science, recursion is a problem-solving method that involves a function calling itself. In each call, it breaks down the problem into smaller and smaller subproblems until it reaches a problem small enough that it can be solved trivially.

Think of recursion as a process of defining the solution to a problem in terms of a simpler version of itself. Recursion may be applied to several data structures and algorithms to solve problems, but recursion itself isn't a data structure or an algorithm—it is a concept.

A recursive algorithm is broken down into two parts:

- The base case (or base cases), which indicates when to stop
    
- The recursive case (or recursive cases), which is where the function calls itself
    

Base case

The solution to the simplest possible problem; this case provides a terminating condition for the recursive case

Note that the base case doesn't require calling itself. It ensures that you don't infinitely recurse: it provides a terminating condition for the recursive case.

Recursive case

Where you call the same function to solve increasingly simple versions of the problem

A recursive algorithm may have more than one base case or recursive case. In other words, it may involve calling the same function with different arguments for each recursive case.

To better understand this concept, consider the following example. For simplicity, this example consists of a single base case and a single recursive case.

## Factorial

The factorial for any positive integer n is written as n!. It is defined to be the product of all integers between 1 and n, inclusive:

n!=n∗(n−1)∗(n−2)∗…∗1n!=n∗(n−1)∗(n−2)∗…∗1

So if you were to calculate 4!, the result would be 24:

4! turns into 4*3*2*1=24.

And 5! is 120:

5! turns into 5*4*3*2*1=120, which is 5*4!.

As you can see, each factorial calculation for n! is n*(n-1)!. But what is the base case? Because n must be a positive integer, once n is less than or equal to 1, there is no simpler version of n!. Any n less than or equal to 1 is the base case for the factorial function. This means that the function should stop calling itself when n <= 1.

### Do this

#### Implement a recursive factorial

Now, you will implement a recursive factorial function.

First, create a file named factorial.js. In factorial.js, add the following code:

`function factorial(number) {` `console.log("Forward phase", number);` `// Base case` `if (number <= 1) {` `console.log("base case", number);` `return 1;` `}` `// Recursive case` `const numberMinusOneFactorial = factorial(number - 1);` `console.log("Backward phase", number, "*", numberMinusOneFactorial);` `return number * numberMinusOneFactorial;` `}`

`console.log(factorial(5));`

In the above function, note the following:

- The console.log() statements record the phases of the recursive function. More on this later.
    
- The if statement is the base case. It checks to see if the value of number is less than or equal to one. If so, the return value is always 1.
    
- In the recursive case, the function calls itself to calculate factorial(number-1). It is breaking down the problem into a set of smaller problems like the formula above n! = n * (n-1)!.
    
- After the recursive case, the function can calculate the return value for number!.
    

Now, run the code, using the command node factorial.js. You will see something like the following:

`node factorial.js` `Forward phase 5` `Forward phase 4` `Forward phase 3` `Forward phase 2` `Forward phase 1` `base case 1` `Backward phase 2 * 1` `Backward phase 3 * 2` `Backward phase 4 * 6` `Backward phase 5 * 24`

`120`

As you can see, there are two distinct phases in a recursive function: the forward phase and the backward phase.

The forward phase of recursion happens when the function is calling itself. The forward, or recursive phase, continues until the base case is satisfied. The backward phase (also called the back-out phase) starts when a function call satisfies the base case. The call then returns a value to the function that called it. This continues until a value is returned to the initial function call.

As you can see from the output above, the first call to factorial(5) doesn't return until all recursive calls have returned.

The animation below shows each of the recursive calls that are happening within the forward phase of the call to factorial(5):

![](https://images.ctfassets.net/c7lxnbtvvcxm/4HfIhxcYsmiyoI5KQQMTG2/1a0592a197c962d5dd8021d872e8db9a/Eng-recursive.gif)

Once the base case is encountered, the call to factorial(1) returns 1 to the caller, which in turn returns 2*1 to its caller. This pattern continues until control is returned to the caller of factorial(5). This is the backward phase.

In short, the forward phase is breaking down the problem into increasingly smaller problems until the base case is encountered. Then the recursive function switches to the backward phase, which combines the base case with the previous problem to ultimately provide a solution for the original problem. This is called a bottom-up recursion because there is no work done until the base case is encountered.

## Bottom-up recursion

A bottom-up recursive function, like the example above, breaks down the problem into increasingly smaller problems until the base case is encountered. Then it combines the solutions in the backward phase. In other words, there are no solutions or calculations until the base case is reached. This is a very common approach in recursive functions.

As you might have guessed, there is also a top-down approach, which you will read about next.

## Top-down recursion

A top-down recursive function calculates the solutions to each subproblem in the forward phase, passing the results of the calculation to the recursive call. In other words, the solution is incrementally calculated, and by the time the base case is reached, the full solution is calculated.

Next, you will write a top-down recursive factorial function.

### Do this

#### Implement a top-down recursive factorial

Now, implement a top-down recursive factorial function.

First, create a file named topDownFactorial.js. In topDownFactorial.js, add the following code:

`function factorial(number, total = 1) {` `console.log("Forward phase", number, "*", total);` `// Base case stays the same` `if (number <= 1) {` `console.log("base case", number);` `return total;` `}` `total = factorial(number - 1, total * number);` `console.log("Backward phase", number, total);` `return total;` `}`

`console.log(factorial(5));`

In the above function, note the following:

- There is a new parameter, total, used to pass information to the recursive function call. The total parameter starts at 1 so that it can be multiplied by each number in the subproblems.
    
- The if statement for the base case is still the same, but rather than return 1, it always returns the current total.
    
- In the recursive case, the function calls itself, passing in total * number as the total parameter, thus calculating the total in the forward phase.
    
- After the recursive case, no further calculation is required, so this function returns the value from the recursive call.
    

When you run the code using node topDownFactorial.js, you will see something like the following:

`node topDownFactorial.js` `Forward phase 5 * 1` `Forward phase 4 * 5` `Forward phase 3 * 20` `Forward phase 2 * 60` `Forward phase 1 * 120` `base case 1` `Backward phase 2 120` `Backward phase 3 120` `Backward phase 4 120` `Backward phase 5 120`

`120`

In looking at the output above for five factorial, the total is the result of the previous calculation. For example, the first line of output shows the number 5, times the total, 1. The second line of output uses the product of 5 and 1 to get the value 5. The third line of output uses the product of 4 and 5 to get the value 20, and so on. Each recursive call is passed the total derived from the previous calculation for use in its own calculation.

As you can see, there are still two distinct phases in this recursive function: the forward phase and the backward phase. However, the solution is calculated in the forward phase.

Top-down and bottom-up recursive functions can provide simple solutions to complicated problems, but you might run into an error if the number of subproblems gets too big.

## Stack overflow errors

Recursion has a problem: it builds up a call stack of size n, where n is the number of subproblems. This makes it vulnerable to a stack overflow error, where the call stack gets too big and runs out of space. For example, if you call factorial(5000000), you will get a Maximum call stack size exceeded error during the forward phase.

To avoid the stack space limitation, you can rewrite the recursive function to use iteration instead. The following is an iterative factorial() function:

`function factorial(number) {` `// Base case` `if (number <= 1) {` `return 1;` `}` `// Penultimate means second to the last in a series.` `let penultimate = 1;` `let total = 0;` `` // Calculate the factorial from 1 to `number` `` `for (let ultimate = 1; ultimate <= number; ultimate++) {` `console.log(ultimate, "*", penultimate);` `total = ultimate * penultimate;` `penultimate = total;` `}` `return total;`

`}`

All recursive functions can be rewritten to be iterative functions. Sometimes, the recursive function is easier to understand than the iterative version. For example, many programmers would say that the recursive factorial() function is easier to understand than the iterative version.

## Principles of recursive problem-solving

To think recursively, you ask the question, "What could I do if I had the solution to a smaller version of this same problem?"

For example, recall the sum of the first n integers problem that was introduced in a previous lesson. The problem is as follows: given an integer n, find the sum of all integers from 1-n, inclusive. For example, if n=4, the solution involves the sum 1+2+3+4=10.

How would you go about solving this recursively?

### Step 1: The smaller subproblem

The first step is to think about the smaller problem. If you need to find the sum of all numbers from 1-5, you may ask, "Is there a smaller version of this same problem?" In this case, finding the sum of all integers from 1-4 is a smaller problem than finding the sum of all integers from 1-5.

You know that this smaller subproblem would help if you can take the solution to the smaller subproblem and use it to solve the original problem. For example, suppose that you know that the sum of all integers from 1-4 is 10. How can that help you find the sum of all integers from 1-5?

In this case, you take the solution to the subproblem and add 5, giving you 10+5=15.

### Step 2: The recursion

The question now is, "How did you find the solution to the sum of all numbers from 1-4?" Can you apply the same steps that you applied above?

The problem is to find the sum of all integers from 1-4. The smaller problem is to find the sum of all integers from 1-3. Again, supposing that you did have the solution to that smaller problem, what would you do? Given that the sum of all numbers from 1-3 is 6, you would simply add 4 to that solution—giving 6+4=10.

Notice that solving the sum from 1-4 problem involved the same steps as solving the sum from 1-5 problem. You could even go another step; think about solving the sum from 1-3 problem and see if the same steps apply.

At this point, you know the following:

- To solve for n, you need to get the solution for the n-1 subproblem.
    
- If you have the solution for the n-1 subproblem, you just add n to get the final solution.
    

### Step 3: The base case

If you keep reducing the size of the problem as you did in the step above, eventually the problem will get small enough that the answer is trivial. In this case, you are reducing the problem by 1 each time. Eventually, you will get to the sum of all integers from 1-1 problem.

At this point, there really is no calculation necessary. The sum of all integers from 1-1 is just 1. This is the base case.

You now have all the pieces to put together a complete solution.

### Step 4: Putting it all together

It is now time to put the pieces together into a solution to the problem. You have the following pieces:

- The base case: When n is 1, the answer is 1.
    
- The recursive case: When n is greater than 1, find the solution to n-1.
    
- The summation: The answer is to add n to the solution to n-1.
    

In pseudocode, this algorithm may be written as follows:

`function sum(n):` `// Accepts n - find the sum from 1 to n` `// First, check the base case` `if n is equal to 1 then:` `return 1` `// Otherwise, find the solution to the subproblem` `// by making a recursive call` `subproblemSum = sum(n - 1)` `// Summation`

`return n + subproblemSum;`

### Do this

#### Implement the sum to n function

Create a file named sumToN.js, and add the following implementation.

`function sum(n) {` `// Check the base case` `if (n === 1) {` `return 1;` `}` `return n + sum(n - 1);`

`}`

Test that this function provides the correct output.

## String splitter

The two examples above involved numbers, but recursion may be applied to many types of problems. Consider splitting a string according to some given separator.

Given a string and a separator character, split the string by the separator and return an array of the substrings created. You may recognize this as [JavaScript's built-in string split() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split). You are going to use recursion to implement your own version of this function.

For example, given the string "Be generous in prosperity and thankful in adversity" and the separator " ", the algorithm should return the array ["Be", "generous", "in", "prosperity", "and", "thankful", "in", "adversity"].

### The subproblem

What would a smaller version of this problem look like? What affects the complexity of the problem? In this case, it is the number of occurrences of the separator in the string.

Take as an example the string "4-8-2023" and the separator "-". A smaller version of this problem is a string with one less separator, say "8-2023". What if you already had the solution to that subproblem? You can see that the solution would be ["8", "2023"].

The final solution would be inserting the substring "4" into the array, giving ["4", "8", "2023"].

### The recursion

In a similar manner, to find the solution to "8-2023", you can find the solution to the subproblem "2023" and simply insert the string "8" in the resulting array.

### The base case

If you keep reducing the string by the number of separators found in the string, eventually you end up with a string with no separators. If the string contains no separators, what is the solution?

The solution is simply an array containing the given string. Given the string "2023" and the separator " ", the solution is the array ["2023"].

### Putting it all together

You now have the necessary pieces of the solution.

- The base case: For a string containing no separators, return an array containing the string.
    
- The recursive case: Find the first separator, extract the substring from the first character to the first separator, and recursively solve the rest of the string from the first separator onward.
    
- Final solution: Insert the substring into the array returned from the recursive step.
    

In pseudocode, this may be written as follows:

`function split(text, separator):` `// Inputs: text - the string to be split` `separator - the character to be used to split the text` `search for the first occurrence of the separator in the text` `// Base case` `if no separator is found then:` `return [text]` `// Recursive case` `extract substring from character 0 to index of first occurrence of separator` `extract rest of string from first occurrence of separator + 1 to end of string` `recursively solve the rest of string` `insert the substring in the resulting array`

`return the array`

### Do this

#### Implement the string split function

Create a file named split.js, and add the following implementation.

`function split(text, separator) {` `// Find the index of the first occurrence of separator` `let index = text.indexOf(separator);` `// Base case` `if (index === -1) {` `return [text];` `}` `// Find the substrings` `let start = text.substring(0, index);` `let rest = text.substring(index + 1);` `// Recursive call` `let restSolution = split(rest, separator);` `// Insert the first substring` `restSolution.unshift(start);` `return restSolution;`

`}`

Test the function to ensure that it works as expected.

## The efficiency of recursive functions

In JavaScript, a loop is essentially always more efficient than a recursive function call. Allocating memory for the next function call takes time and memory that isn't required in a loop. However, recursion is almost never used for performance reasons; it's used to make the problem simpler and the code easier to understand.