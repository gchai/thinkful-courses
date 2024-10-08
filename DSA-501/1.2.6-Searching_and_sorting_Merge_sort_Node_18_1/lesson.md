# Merge sort

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to implement merge sort and give the runtime.

#### Overview

###### Merge sort takes a divide-and-conquer approach to sorting. As you'll see in this lesson, it breaks down the array into continually smaller chunks, then merges them back together in the correct order.

## Key Terms

Merge sort algorithm

A divide-and-conquer algorithm that continuously splits arrays in half until every element is alone in its own array, then merges each subarray in order

## Understanding merge sort

The video below provides a brief introduction to merge sort. Start by watching the video, and then read through the rest of the lesson and complete the practice exercises. This will give you a thorough understanding of this topic.

Similar to binary search, merge sort is a divide-and-conquer algorithm. The goal is to break down the problem into subproblems until you have a lot of simple problems that can be easily put back together.

Merge sort starts by taking the entire array and breaking it into many subarrays. To do this, it continuously splits every array in half, until every element is alone in its own array. Then, during the return phase, each subarray is merged in order. Merging two single-element arrays in order is rather easy: look at the first element of each array, select the smaller element, and then add the other element.

This merge technique works for sorted arrays of any length: look at the first element of each array, slice off the smaller of the two elements, and repeat as long as there are elements in both arrays. Then add on any left-over elements.

For example, take the following array: [5, 2, 8, 15, 3]. This array gets divided and merged as follows:

![](https://images.ctfassets.net/c7lxnbtvvcxm/53fk8iTqQBt3aWEZx8pq9S/c8608c9f10909770ba577ca2dbe8bf95/Eng-merge-sort.png)

Once merge sort breaks down part of the array into single elements, it starts merging them. Because both arrays are already sorted, it can easily compare which number in each is smaller and put both in the right place.

Thus, in the final merge of the [2, 5] and [3, 8, 15] arrays, the algorithm compares the first element of each array (2 versus 3), and slices off the smaller element, 2. It then compares the first element of the remaining arrays, which is 5 versus 3 now, and slices off 3. Then it compares 5 and 8, and slices off 8. It continues until each element is in the correct order in the new array.

## Merge sort in JavaScript

Just like other algorithms, you will separate the comparison logic from the sorting algorithm. To accomplish this, the caller will supply a compare function that tells merge sort whether or not two adjacent elements are in order.

### Do this

#### Implement merge sort

Now you will implement a merge sort algorithm as a higher-order function that takes the following two parameters:

- compare: A function that compares two elements, so it takes two parameters: left and right. It returns one of the following:
    
    - 0 if the left element is equal to the right element
        
    - A positive value if the left element is greater than the right element by the ordering criterion
        
    - A negative value if the left element is less than the right element by the ordering criterion
        
- elements: The array to which the merge sort algorithm is applied.
    

Next, create a file named mergeSort.js. In mergeSort.js, add the following code:

`function mergeSort(compare, elements) {` `if (Array.isArray(elements)) {` `if (elements.length <= 1) {` `return elements;` `}` `const middle = Math.floor(elements.length / 2);` `const leftElements = elements.slice(0, middle);` `const rightElements = elements.slice(middle);` `const leftElementsSorted = mergeSort(compare, leftElements);` `const rightElementsSorted = mergeSort(compare, rightElements);` `return merge(compare, leftElementsSorted, rightElementsSorted);` `}` `return elements;` `}` `/**` `* Merges two sorted arrays` `*` `* @param compare` `* Function to compare elements of the array` `* @param left` `* The left sorted array` `* @param right` `* The right sorted array` `* @returns {*[]}` `* The left and right sorted arrays merged in sorted order` `*/` `function merge(compare, left, right) {` `const sorted = [];` `let leftIndex = 0;` `let rightIndex = 0;` `while (leftIndex < left.length && rightIndex < right.length) {` `const comparison = compare(left[leftIndex], right[rightIndex]);` `if (comparison <= 0) {` `sorted.push(left[leftIndex]);` `leftIndex++;` `} else {` `sorted.push(right[rightIndex]);` `rightIndex++;` `}` `}` `return sorted.concat(` `leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex)` `);` `}`

`module.exports = mergeSort;`

This is how the above mergeSort() function works:

1. The first step is to handle the recursive base case, which is when the array has one or fewer elements. In this case, just return the array.
    
2. Next, calculate the value of middle. There may be an odd number of elements, so use Math.floor() to round down to the nearest integer. Now, middle points to the middle of the array.
    
3. Next, create two new arrays from the original array, splitting the arrays at index middle.
    
4. Then, make two recursive calls to mergeSort(). Each recursive call is passed one of the new arrays.
    
5. Finally, when the recursive calls return, merge the two sorted arrays by calling the merge() function. Within the merge(), you initialize an empty array, sorted, to hold the final result. You also initialize two pointers, leftIndex and rightIndex, which point at the first element in the left and right arrays respectively. During each iteration of the loop, the elements at leftIndex and rightIndex are compared; the smaller of the two is pushed into the sorted array, and its corresponding pointer index is incremented by one. This loop continues until one of the pointers exceeds the length of the array. At the end, any remaining elements are concatenated with the sorted array.
    

Now that you have an implementation of mergeSort(), you will use it to sort an array.

Next, create a new file named usemergeSort.js. In usemergeSort.js, add the following code:

`const sort = require("./mergeSort");` `const elements = [260, 926, 954, 208, 669, 183];` `function compare(left, right) {` `console.log("compare", left, "to", right);` `return left - right;` `}`

`console.log(sort(compare, elements));`

Then run the code, using the command node usemergeSort.js. You will see the following:

`compare 926 to 954` `compare 260 to 926` `compare 669 to 183` `compare 208 to 183` `compare 208 to 669` `compare 260 to 183` `compare 260 to 208` `compare 260 to 669` `compare 926 to 669`

`[ 183, 208, 260, 669, 926, 954 ]`

As you can see in the output above, you can use the compare function passed into mergeSort() to observe exactly what the algorithm is doing without changing the code in mergeSort; this can be very helpful when debugging the sort algorithm.

In this case, merge sort had to make 9 comparisons to sort 6 numbers. It would take 11 comparisons to sort 7 numbers, and so on. In the worst case, the number of comparisons goes up logarithmically to the number of elements in the array.

## The efficiency of merge sort

Merge sort is the best sorting algorithm that you have learned so far, and it is significantly better than bubble sort's O(n²). Keep in mind that it also works better with larger amounts of data.

In merge sort, the time complexity of the divide step is O(log n) because the subarray split is done evenly. The merge step takes O(n) time per level, making merge sort's average-case and worst-case time complexity O(n log n).

|Description|Notation|Explanation|
|---|---|---|
|Worst case|O(n log n)|Every element is out of order.|
|Average case|O(n log n)|Some elements are out of order.|
|Best case|O(n log n)|All the elements in the first array are either smaller or larger than all the elements in the second array.|

Note: Some implementations of merge sort can have a best-case time complexity of O(n).