# Searching and sorting: Recursion drills—Power calculator

In this challenge, you will solve several algorithmic problems using recursion. The objective is to practice using recursion to think about and solve problems. You do not have to worry about the efficiency of your solutions.

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Existing files

|**File**|**Description**|
|---|---|
|`__tests__/power.test.js`|Contains tests for the power problem. You are welcome to look at this file, but do not modify it.|
|`src/power.js`|Write your solutions to the power problem in this file.|

## Power calculator

Given two integers `a` and `b` where `b` is not negative, then `a` raised to the power `b` is `a` multiplied by itself `b` times. `a` is called the _base_ and `b` is called the _exponent_.

For example, 2 raised to the power 3 is `2 * 2 * 2 = 8`. And 3 raised to the power 5 is `3 * 3 * 3 * 3 * 3 = 243`.

Any number raised to the power 0 is 1.

Write a function called `power()` that takes two parameters, an integer as a base, and a non-negative integer as an exponent. The function returns the value of the base raised to the power of the exponent.

If the exponent is negative, throw an Error with the message `exponent should be >= 0`.

- `power(10,2)` should return `100`.
- `power(10,-2)` throw Error `exponent should be >= 0`.