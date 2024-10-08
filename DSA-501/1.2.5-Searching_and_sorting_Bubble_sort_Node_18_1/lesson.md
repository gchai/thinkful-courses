# Bubble sort

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to implement bubble sort and give the runtime.

#### Overview

###### Sorting items in an array is among the most common activities in programming. In this lesson, you'll learn about bubble sort, a simple sorting algorithm that compares two adjacent elements and swaps their positions if they are out of order.

## Key Terms

Bubble sort algorithm

Also called sinking sort, a comparison sorting algorithm that repeatedly steps through the elements in an array, compares two adjacent elements, and swaps them if they are in the wrong order

## Understanding bubble sort

The video below provides a brief introduction to bubble sort. Start by watching the video, and then read through the rest of the lesson and complete any practice tasks.

Bubble sort (or sinking sort) is a simple comparison sorting algorithm. It repeatedly steps through the elements in an array, compares two adjacent elements, and swaps them if they are in the wrong order. The pass through the array repeats until the array is sorted. The algorithm is named for the way that smaller or larger elements "bubble" to the top of the array.

The idea behind bubble sort is that, after each pass through the array, the elements furthest to the right are ordered correctly. To see how this works, consider how a bubble sort algorithm sorts the array [7, 5, 9, 3, 1]:

1. The first pass through the array will start by comparing the first pair of values, 7 and 5. 5 is smaller than 7, so the algorithm will swap the two values.
    
2. Then it will move on to compare the next pair of values, 7 and 9. 9 is greater than 5, so it moves on to the next pair, 9 and 3.
    
3. 3 is smaller than 9, so the algorithm will swap the two values.
    
4. It then compares the next pair, 9 and 1. 1 is smaller than 9, so the algorithm will swap the two values.
    
5. After the first pass through the array, the elements are in the following order: [5, 7, 3, 1, 9]. 9 is in the correct position.
    
6. Now, the algorithm needs to iterate through the array again because it wasn't in order. The algorithm will continue to iterate through the entire array over and over, swapping elements until it can make one full pass through the array without swapping any elements. Only then is the array sorted.
    

Here's a visualization of this process:

![](https://images.ctfassets.net/c7lxnbtvvcxm/1SwFQEPVS1uIsVbQFEkN98/5cb8a0bc93fd23f7685b48381aeb5645/Eng-bubble-sort.gif)

## Bubble sort in JavaScript

Just like other algorithms, you will separate the comparison logic from the sorting algorithm. To accomplish this, the caller will supply a compare function that tells bubble sort whether or not two adjacent elements are in order.

Watch the following video for an overview of this topic. Then practice applying your new bubble sort skills by completing the practice task below.

### Do this

#### Implement a bubble sort

Now you will implement a bubble sort algorithm as a higher-order function that takes the following two parameters:

- compare: A function that compares two elements. It takes two parameters: left and right. It returns one of the following:
    
    - 0 if the left element is equal to the right element
        
    - A positive value if the left element is greater than the right element by the ordering criterion
        
    - A negative value if the left element is less than the right element by the ordering criterion
        
- elements: The array to which the bubble sort algorithm is applied.
    

Next, create a file named bubbleSort.js. In bubbleSort.js, add the following code:

`function bubbleSort(compare, elements) {` `if (Array.isArray(elements)) {` `let inOrder;` `do {` `inOrder = true; // Assume that the array is in order` `for (` `let index = 0, length = elements.length - 1;` `index < length;` `index++` `) {` `const leftElement = elements[index];` `const rightElement = elements[index + 1];` `if (compare(leftElement, rightElement) > 0) {` `elements[index] = rightElement;` `elements[index + 1] = leftElement;` `inOrder = false; // The array wasn't in order, so swap elements and then check it again.` `}` `}` `} while (inOrder === false);` `}` `return elements;` `}`

`module.exports = bubbleSort;`

Now that you have an implementation of bubbleSort(), you will use it to sort an array.

Next, create a new file named useBubbleSort.js. In useBubbleSort.js, add the following code:

`const sort = require("./bubbleSort");` `const elements = [4685, 471, 880, 808];` `function compare(left, right) {` `console.log("compare", left, "to", right);` `return left - right;` `}`

`console.log(sort(compare, elements));`

Then run the code, using the node useBubbleSort.js command. You will see the following:

`compare 4685 to 471` `compare 4685 to 880` `compare 4685 to 808` `compare 471 to 880` `compare 880 to 808` `compare 880 to 4685` `compare 471 to 808` `compare 808 to 880` `compare 880 to 4685`

`[ 471, 808, 880, 4685 ]`

As you can see in the output above, you can use the compare function passed into bubbleSort() to observe exactly what the algorithm is doing—without changing the code in bubbleSort(). This can be very helpful when debugging the sort algorithm.

In this case, bubble sort had to do 9 comparisons to sort 4 numbers. It might take 20 comparisons to sort 5 numbers, and so on. In the worst case, the number of comparisons goes up polynomially to the number of elements in the array.

## The efficiency of bubble sort

Bubble sort is the classic "terrible" sorting algorithm. This algorithm isn't suitable for large datasets because its average-case complexity is O(n²). This simple algorithm doesn't perform well in real-world use; it's used primarily as an educational tool to introduce the concept of sorting.

The best-case time complexity of bubble sort is O(n). This happens when the list is already sorted in ascending order. In this case, none of the elements are moved but the algorithm still makes n comparisons making the time complexity O(n).

|Description|Notation|Explanation|
|---|---|---|
|Worst case|O(n²)|Every element is out of order.|
|Average case|O(n²)|Some elements are out of order.|
|Best case|O(n)|The list is already sorted.|