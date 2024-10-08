# Binary search

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to implement a binary search algorithm and give the runtime.

#### Overview

###### Searching a sorted collection is a common task. If the list to be searched contains more than a few items, a binary search will require far fewer comparisons than a linear search. However, binary searches impose the requirement that the list be sorted.

## Key Terms

Binary search algorithm

Also known as a half-interval search algorithm, an algorithm to find a specific element located in a sorted array

## Understanding binary search

The video below provides a brief introduction to binary search. Start by watching the video, and then read through the rest of the lesson and complete any practice tasks.

Binary search, also known as a half-interval search, is a search algorithm to find a specific element located in a sorted array. It only works with sorted arrays. Binary search is advantageous over linear search because it searches more quickly and efficiently. It does this by halving the number of elements to check with each iteration.

As you learned in the previous lesson, a linear search algorithm searches the array starting at index 0, then 1, 2, 3, 4, and so on. In contrast, a binary search divides the array in half each time that it looks for a target value.

In a binary search, you define an index to refer to the element in the middle of the array. Then you test whether the target value is less than, greater than, or equal to the value at the index. If the target value is less than or greater than the index, the algorithm removes either the left or right half of the array from the search, respectively. If the element is found, the position (or index) of the element is returned. If the desired element isn't in the array, -1 is returned.

This can be confusing, so take a look at the following visualization of this process. In this example, the algorithm is searching an array of increasing numbers to search for the value 37.

![](https://images.ctfassets.net/c7lxnbtvvcxm/7Iww330GPHyivflbbLx20B/f2bb078c09a938767689b27cb31f8d83/Eng-binary-search.gif)

Binary search algorithms work as follows:

1. You need to keep track of three things to perform a binary search: lowerIndex, index, and upperIndex.
    
    - lowerIndex will always start at 0: let lowerIndex = 0;
        
    - upperIndex is calculated using array.length: let upperIndex = array.length—1;
        
    - index is calculated by summing lowerIndex and upperIndex, and then dividing by 2. Math.floor() is used to round down in case of an odd number of elements: const index = Math.floor((lowerIndex+upperIndex)/2).
        
2. The while loop will then repeat until it ends. In this case, the loop is as follows: while(lowerIndex <= upperIndex).
    
3. The algorithm compares the number at index to the target number to determine if it is greater than, less than, or equal to the target value.
    
    - If the value at index is equal to the target value, return index.
        
    - If the value at index is less than the target value, then the target value will be somewhere to the right of the index. The algorithm will then assign the lowerIndex to index+1, thus ignoring the left half of the array.
        
    - If the value at index is greater than the target value, then the target value will be somewhere to the left of the index. The algorithm will then assign upperIndex to index-1, thus ignoring the right half of the array.
        
4. If the target value isn't found, the value of index is recalculated to be in the middle of the new values for lowerIndex and upperIndex (const index = Math.floor((lowerIndex+upperIndex)/2)). Then the loop continues at the previous step. The loop may iterate once, or it may iterate dozens of times, depending on the array size and the target number.
    

Put this all together, and you have a binary search!

## Binary search in JavaScript

Just as you did with linear search, you will separate the matching logic from the search algorithm. To accomplish this, the caller will supply a compare function. This function tells the binary search whether to search to the left, search to the right, or return index because the current element is a match.

Watch the following videos for an overview of this topic. Then practice applying your new binary search skills by completing the practice task below.

### Do this

#### Implement a binary search

Now you will implement a binary search algorithm as a higher-order function that takes the following two parameters:

- compare: A function that takes the current element, current index, and original array as parameters. It returns one of the following:
    
    - 0 if the current element is equal to the desired value
        
    - A positive value if the current element is greater than desired value by the ordering criterion
        
    - A negative value if the current element is less than desired value by the ordering criterion
        
- sortedElements: The sorted array to which the binary search algorithm is applied.
    

Next, create a file named binaryIndexOf.js. In binaryIndexOf.js, add the following code:

`function binaryIndexOf(compare, sortedElements) {` `if (Array.isArray(sortedElements)) {` `let lowerIndex = 0;` `let upperIndex = sortedElements.length - 1;` `while (lowerIndex <= upperIndex) {` `const index = Math.floor((upperIndex + lowerIndex) / 2);` `const comparison = compare(sortedElements[index], index, sortedElements);` `if (comparison > 0) {` `lowerIndex = index + 1;` `}` `if (comparison === 0) {` `return index;` `}` `if (comparison < 0) {` `upperIndex = index - 1;` `}` `}` `}` `return -1;` `}`

`module.exports = binaryIndexOf;`

As you can see, lowerIndex always starts at zero (let lowerIndex = 0;), and upperIndex starts at the largest index for the array (let upperIndex = sortedElements.length-1;). If the array is empty, lowerIndex === 0 and upperIndex === -1, which means that the while loop never executes. If lowerIndex <= upperIndex, then the while loop does execute.

In the while loop, the first step is to calculate the value of index. There may be an odd number of elements, so you will use Math.floor() to round down to the nearest integer. Now, index points to the middle of the array.

Next, call the compare() function, passing in sortedElements[index], index, and sortedElements. The return value from compare will tell the algorithm what to do next.

- If compare() returns 0, the target value is found, so index is returned.
    
- If compare() returns a value greater than 0, the target value is greater than the value at index, so lowerIndex is moved to index+1. In other words, the algorithm ignores the elements to the left of index.
    
- If compare() returns a value less than 0, the target value is less than the value at index, so upperIndex is moved to index-1. In other words, the algorithm ignores the elements to the right of index.
    

This process then repeats, moving lowerIndex and upperIndex closer and closer together. This continues until compare() returns 0, or until lowerIndex is greater than upperIndex and -1 is returned.

Now that you have an implementation of binaryIndexOf(), you will use it to search for matching elements. Create a new file named binarySearch.js. In binarySearch.js, add the following code:

`const search = require("./binaryIndexOf");` `const elements = [1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136];` `function forNumber(target) {` `return (element, index) => {` `console.log("compare", target, "to", element, "at index", index);` `if (element === target) {` `return 0;` `}` `if (element < target) {` `return 1;` `}` `if (element > target) {` `return -1;` `}` `};` `}`

`console.log(search(forNumber(274), elements));`

Then run the code, using the command node binarySearch.js. You will see the following:

`compare 274 to 44 at index 6` `compare 274 to 504 at index 10` `compare 274 to 149 at index 8` `compare 274 to 274 at index 9`

`9`

In this case, binary search required only four steps to find the target value. A linear search would have required nine steps.

As you can see, you can use the compare function passed into binaryIndexOf() to observe exactly what the algorithm is doing—without changing the code in binaryIndexOf.js. This can be very helpful when debugging the search algorithm.

## The efficiency of binary search

Binary search is a classic example of dividing a problem into a number of smaller problems. With each iteration of the search, the number of elements being considered gets cut in half. As a rule, a linear search will be faster for fewer than 10 elements. However, for larger arrays, a binary search will be more efficient.

As you can see in the table below, the worst-case time complexity of binary search is O(log n), where n is the number of elements in the array being searched. As with linear search, the worst case for binary search occurs when the element doesn't exist in the array. When the element isn't in the array, the algorithm needs to go through log(n) elements to determine that the element isn't there.

The best-case time complexity of binary search is O(1). This happens when the matching element is in the middle of the array (first comparison).

The average-case complexity is O(log n). This happens when the matching element is somewhere in the array but not in the middle.

|Description|Notation|Explanation|
|---|---|---|
|Worst case|O(log n)|There is no matching element in the array.|
|Average case|O(log n)|The matching element is somewhere in the array but not in the middle.|
|Best case|O(1)|The matching element is in the middle of the array.|