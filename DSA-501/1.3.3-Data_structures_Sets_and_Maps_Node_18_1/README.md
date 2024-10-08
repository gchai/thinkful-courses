# Data structures: Sets and Maps

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

In this challenge, you will implement several functions that use Sets and Maps.

## Existing files

|**File path**|**Description**|
|---|---|
|`src/setOperations.js`|Implement your solutions to the Set operations tasks in this file.|
|`src/equalArrays.js`|Implement your solution to the equal arrays problem in this file.|
|`__tests__/setOperations.test.js`|Tests for the Set operations. You do not need to edit this file.|
|`__tests__/equalArrays.test.js`|Tests for the equal arrays problem. You do not need to edit this file.|

## Tasks

### Set operations

In this task, you will implement some common Set operations: union, intersection, and difference.

#### `union()`

The union of two Sets is all the elements that belong to either Set.

![image.png](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/a577967b135c9c9c54bf432ed76c570c-image.png)

Write a function that accepts two Sets and returns the union of the two Sets.

For example, given the Set `{1,2,3,4}` and the Set `{3,4,5,6}`, the result will be the Set `{1,2,3,4,5,6}`.

#### `intersect()`

The intersection of two Sets is the elements that belong to both Sets.

![image.png](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/a8b67f1f0903a0945ef304718316b7e2-image.png)

Write a function that accepts two Sets and return the Set containing the elements that appear in both Sets.

For example, given the Set `{1,2,3,4}` and the Set `{3,4,5,6}`, the result will be the Set `{3,4}`.

#### `difference()`

The difference between two Sets A and B is all the elements that belong to A but not B.

![image.png](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/88870d4bb1eccc114ffb50b83ef93bf0-image.png)

Write a function that accepts two Sets and returns the difference between the Sets.

For example, given the Set `{1,2,3,4}` and the Set `{3,4,5,6}`, the difference is the Set `{1,2}`.

Write the solutions to these tasks in the file named `src/setOperations.js`.

### Array equality

Two arrays are equal if they contain the same elements but not necessarily in the same order. If any element in the arrays are repeated, then the counts of the occurrence of that element must be the same in both arrays.

For example, the arrays `[5,4,3,2]` and `[2,3,4,5]` are equal because they are both the same length and contain the same elements. The arrays `[5,4,4,3]` and `[4,3,4,5]` are also equal because they contain the same elements and even though the number 4 is repeated, it appears 2 times in both arrays.

The arrays `[9, 7, 7, 7]` and `[9, 7, 9, 9]` are not equal because the counts of 7 and 9 are not the same.

Write a function that accepts two arrays and returns true if the two arrays are equal, false otherwise. You may find it useful to use a Map in this solution.

Write the solution to this task in the file named `src/equalArrays.js`.