# Data structures: Arrays

Here are two problems that involve the use of arrays. For each problem, two different algorithms are suggested. Implement the two algorithms and consider the running time behavior of each.

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Existing files

|**File path**|**Description**|
|---|---|
|`src/missingNumber.js`|Implement your solution to the missing number problem in this file.|
|`src/minimumAndMaximum.js`|Implement your solution to the minimum and maximum problem in this file.|
|`__tests__/missingNumber.test.js`|Tests for the missing number problem. You do not need to edit this file.|
|`__tests__/minimumAndMaximum.test.js`|Tests for the minimum and maximum problem. You do not need to edit this file.|

## Tasks

### Find the missing number

Given an array of length n-1 containing all the integers from 1 to n with one number missing, find the missing number. The array is not necessarily sorted.

For example, given the array `[2, 5, 1, 4]`, you would say that the number `3` was missing.

Implement two different algorithms for solving this problem.

1. **Brute force:** Use a loop to consider every possible integer from 1 to n and check if that integer exists in the array or not.
2. **Sum and subtract:** Find the expected sum of all integers from 1 to n. Then find the actual sum of the numbers in the array. The difference is the missing number.

### Find maximum and minimum

Given an unsorted array of numbers, find the maximum and minimum numbers in the array. For example, given the array `[8, 3, 7, 9, 4, 1, 2, 5, 6]`, your function should return an output array with two values like this: `[1, 9]`, where the first element is the minimum and the second element is the maximum. If the given array is empty, return the empty array `[]`.

Keep in mind that numbers in the array may also be negative.

Implement two different algorithms to solve this problem.

1. **Using `sort()`:** Start by sorting the array using the built-in array `sort()` method. Then simply return the first and last elements of the array. Note that `sort()` compares the string values of array elements, so the results will not be in numerical order. E.g., `[5,0,-3,510000,6].sort()` outputs `[ -3, 0, 5, 510000, 6 ]`. The `sort()` method will work to pass the test cases, since the numbers in the tests range within -9 and 9.
2. **Using iteration:** Iterate over the entire array and track the smallest (minimum) and largest (maximum) numbers found so far.

### Compare the running time of the algorithms (not graded)

Use the code below (or write your own function) to compare the running time of the algorithms. Use a large array of numbers to compare the running time of the functions.

```
function compareRunningTime(func1, func2) {
  const start1 = Date.now();
  func1();
  const end1 = Date.now();

  const start2 = Date.now();
  func2();
  const end2 = Date.now();

  const time1 = end1 - start1;
  const time2 = end2 - start2;

  console.log(`Function 1 took ${time1}ms`);
  console.log(`Function 2 took ${time2}ms`);

  if (time1 < time2) {
    console.log('Function 1 is faster');
  } else if (time2 < time1) {
    console.log('Function 2 is faster');
  } else {
    console.log('Both functions took the same amount of time');
  }
}
```