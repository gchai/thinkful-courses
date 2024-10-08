# DSA introduction: Assessment – Greatest common divisor

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

The greatest common divisor (GCD) of two positive integers `a` and `b` is the largest of the common divisors of `a` and `b`. If a number `c` can be divided by another number `d` without leaving a remainder, it's said that `d` is a _divisor_ of `c`.

For example, the GCD of 24 and 30 is 6, because the divisors of 24 are 1, 2, 3, 4, 6, 8, 12, and 24, and the divisors of 30 are 1, 2, 3, 5, 6, 10, 15, and 30.  
The common divisors of 24 and 30 are 1, 2, 3, and 6. And 6 is the largest of these common divisors.

## Existing files

|**File**|**Description**|
|---|---|
|`__tests__/gcd.test.js`|Contains tests for the GCD problem. You are welcome to look at this file, but do not modify it.|
|`src/gcd.js`|Write your solutions to the GCD problem in this file.|

## Tasks

You are given two different algorithms that solve the GCD problem. For each of these algorithms, implement them in JavaScript and observe their behavior as they run.

### Algorithm 1

The following algorithm is written in pseudocode. Your task is to implement it in JavaScript.

This algorithm was developed by Euclid (circa 300 B.C.). The steps are as follows:

```
function gcd1
  // accepts a - a non-negative integer
  //         b - a non-negative integer

  if a is equal to 0 then the GCD of a and b is b, so return b
  if b is equal to 0 then the GCD of a and b is a, so return a
  while b is not 0 do
    let r be the remainder of dividing a by b
    set a to equal b
    set b to equal r
  return a
```

Write this algorithm in the file named `src/gcd.js`.

### Algorithm 2

The following algorithm is written in pseudocode. Your task is to implement it in JavaScript.

This is a brute-force approach to solving the GCD problem. It iterates over all the divisors of both `a` and `b` and finds the common ones then finds the largest.

```
function gcd2
  // accepts a - a non-negative integer
  //         b - a non-negative integer

  if a is equal to 0 then the GCD of a and b is b, so return b
  if b is equal to 0 then the GCD of a and b is a, so return a

  initialize an array named divA with the value [1, a]
  initialize an array named divB with the value [1, b]
  initialize an empty array named common

  for i = 2 to a - 1 do
    if a can be divided by i without a remainder then
      add i to the array divA

  for i = 2 to b - 1 do
    if b can be divided by i without a remainder then
      add i to the array divB

  for each number n in the array divA do:
    if n is in the array divB then
       add n to the array common

  initialize a variable named largest to the smallest possible number
  for each number n in commmon do:
    if n is greater than largest then
      assign largest the value n

  return largest
```

Write this algorithm in the file named `src/gcd.js`.