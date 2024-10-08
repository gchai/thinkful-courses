# Quicksort

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to implement quicksort and give the runtime.

#### Overview

###### Like merge sort, quicksort takes a divide-and-conquer approach to sorting. Quicksort can sort an array in place, so in many circumstances it's faster than other common sorting algorithms.

## Key Terms

Quicksort algorithm

Also called a partition exchange sort, an algorithm that works by partitioning an array into two parts, then sorting the parts independently

## Understanding quicksort

The video below provides a brief introduction to quicksort. Start by watching the video, and then read through the rest of the lesson and complete the practice exercises. This will give you a thorough understanding of this topic.

Quicksort works by partitioning an array into two parts, then sorting the parts independently. It is one of the most efficient sorting algorithms, and it's based on splitting (partitioning) an array into smaller ones and swapping (exchanging) based on the pivot element selected. Because of this, quicksort is also called a partition exchange sort.

Here's the idea behind quicksort: for each pass through the array, the algorithm selects a pivot value and places the pivot into the correct location in the array. Specifically, the elements on the left side of the pivot are smaller than the pivot, and the elements on the right side of the pivot are larger than the pivot. Then the two sides are partitioned again and again until all elements are in the correct order.

In the partition phase, the algorithm compares each element to the pivot. If the value is greater than the pivot, it doesn't make any changes to the array. If the value is less than the pivot, the algorithm swaps the current element with the previous element that was greater than the pivot.

The partition function will have the following signature:

`function partition (compare, elements, lowerIndex, upperIndex) {` `...`

`}`

- compare is a function that returns a value greater than 0 if the pivot is greater than the current element by the ordering criterion.
    
- elements is the array of data being sorted.
    
- lowerIndex is the first index being sorted.
    
- upperIndex is the last index being sorted.
    

### Quicksort walk-through

The partition process can be challenging to understand from just a verbal summary. So to better understand the approach, take a look below at a more detailed example.

Given the array [50, 23, 9, 18, 61, 32], you will use quicksort to sort the array.

![](https://images.ctfassets.net/c7lxnbtvvcxm/5NtQGfuapkqbdN6cxCg6Q2/51142ba7033144396ca626c3de7b0566/Eng-quicksort.gif)

The first step is to pick a pivot. The pivot can be any element of the array, and it doesn't have to be the middle of the array. In fact, some partition algorithms select a random pivot. To keep things simple, here you will always select the last element in the array (32, in this case) as the pivot.

Next, partition the array on the basis of the pivot value. Partitioning rearranges the array in such a way that the pivot (32) eventually comes to its correct position of the sorted array. This means that any elements to the left of the pivot are less than the pivot, and any elements to the right are greater than the pivot. During this process, there is a partitionIndex variable that starts at lowerIndex. This variable is used to keep track of the index that will eventually be swapped with the pivot.

For the array given above, this process goes through the following steps:

1. Start from the first element and compare it with the pivot. Because 50 is greater than 32, you don't make any changes. Move on to the next element.
    
2. Compare the next element with the pivot. Because 23 is less than 32, you swap 50 and 23. Then increment partitionIndex by 1. The array becomes [23, 50, 9, 18, 61, 32].
    
3. Compare the next element with the pivot. 9 is again less than 32, so you swap 50 and 9. Then increment partitionIndex by 1. The array becomes [23, 9, 50, 18, 61, 32].
    
4. Compare the next element with the pivot. 18 is less than 32, so you swap 50 and 18. Then increment partitionIndex by 1. The array becomes [23, 9, 18, 50, 61, 32].
    
5. Compare the next element with the pivot. 61 is greater than 32, so there are no changes.
    
6. Next, swap the pivot elements[5] with elements[partitionIndex] (partitionIndex === 3) so that 32 is in the correct position. The array becomes [23, 9, 18, 32, 61, 50]. At this point, 32 is in the correct position in the array because all elements to the left of the pivot are less than 32, and all of the elements to the right are greater than 32.
    
7. Return partitionIndex (3) so that it can be used in the recursive calls. Here, index (3) can be ignored in future calls because it is in the correct position in the array.
    
8. Next, recursively call quickSort() with indexes 0 and partitionIndex - 1 and then partitionIndex+1 through 5.
    
    1. Partition 0 through partitionIndex-1 (2). The new pivot is 18 because it is the element at index 2 in [23, 9, 18, 32, 61, 50].
        
        1. Compare 18 to 23: 23 is greater than 18, so no changes are made.
            
        2. Compare 18 to 9: 9 is smaller than 18, so 9 and 23 are swapped. The array becomes [9, 23, 18, 32, 61, 50]. Then increment partitionIndex by 1.
            
        3. Next, swap the pivot elements[2] with elements[partitionIndex] (partitionIndex === 1). The array becomes [9, 18, 23, 32, 61, 50]. Now both 18 and 32 are in the correct position in the array, as are 9 and 23.
            
    2. Partition partitionIndex+1 (4) through 5. The new pivot is 50 because it is the element at index 5 in [9, 18, 23, 32, 61, 50].
        
        1. Compare 61 to 50: Because 61 is greater than 50, no change is made.
            
        2. Next, swap the pivot elements[5] with elements[partitionIndex] (partitionIndex === 4). The array becomes [9, 18, 23, 32, 50, 61].
            

## Quicksort in JavaScript

As with other algorithms, you will separate the comparison logic from the sorting algorithm. To accomplish this, the caller will supply a compare function that tells quicksort whether or not the pivot is greater than, less than, or equal to a given element.

Watch the following video for an overview of this topic. Then practice applying your new quicksort skills by completing the practice task below.

### Do this

#### Implement quicksort

Now you will implement a quicksort algorithm as a higher-order function that takes the following two parameters:

- compare: A function that compares two elements, so it takes two parameters: left and right. It returns one of the following:
    
    - 0 if the left element is equal to the right element
        
    - A positive value if the left element is greater than the right element by the ordering criterion
        
    - A negative value if the left element is less than the right element by the ordering criterion
        
- elements: The array to which the quicksort algorithm is applied.
    

Next, create a file named quickSort.js. In quickSort.js, add the following:

`function quickSort(` `compare,` `elements = [],` `lowerIndex = 0,` `upperIndex = elements.length - 1` `) {` `if (lowerIndex < upperIndex) {` `const index = partition(compare, elements, lowerIndex, upperIndex);` `quickSort(compare, elements, lowerIndex, index - 1);` `quickSort(compare, elements, index + 1, upperIndex);` `}` `return elements;` `}` `function partition(compare, elements, lowerIndex, upperIndex) {` `const pivotValue = elements[upperIndex];` `let partitionIndex = lowerIndex;` `for (let index = lowerIndex; index < upperIndex; index++) {` `const comparison = compare(pivotValue, elements[index]);` `if (comparison > 0) {` `if (partitionIndex !== index) {` `[elements[index], elements[partitionIndex]] = [` `elements[partitionIndex],` `elements[index],` `];` `}` `partitionIndex++;` `}` `}` `[elements[partitionIndex], elements[upperIndex]] = [` `elements[upperIndex],` `elements[partitionIndex],` `];` `return partitionIndex;` `}`

`module.exports = quickSort;`

The above quickSort() function starts by handling the recursive base case, which is when lowerIndex >= upperIndex. In this case, it just returns the array. Next, it calls partition() to update the array so that the first pivot is in the correct location and it returns the index of the pivot. Then, it recursively calls quickSort() with the indexes above and below the previous pivot index. This recursion continues until the base case is reached. Note that no new arrays are created, and only four variables are needed for additional storage.

Now, create a new file named useQuickSort.js. In useQuickSort.js, add the following code:

`const sort = require("./quickSort");` `function compare(left, right) {` `console.log("compare", left, right);` `return left - right;` `}`

`console.log(sort(compare, [50, 23, 9, 18, 61, 32]));`

Then run the code, using the command node useQuickSort.js. You'll see the following:

`compare 32 50` `compare 32 23` `compare 32 9` `compare 32 18` `compare 32 61` `compare 18 23` `compare 18 9` `compare 50 61`

`[ 9, 18, 23, 32, 50, 61 ]`

As you can see in the output above, you can use the compare function passed into quickSort() to observe exactly what the algorithm is doing, without changing the code in quickSort(). This can be very helpful when debugging the sort algorithm.

In this case, quickSort() had to do eight comparisons to sort six numbers. In the worst case, the number of comparisons goes up exponentially to the number of elements in the array.

## The efficiency of quicksort

Quicksort is very efficient at sorting smaller sets of data. But keep in mind that with very large datasets that won't fit in your computer's memory, merge sort works better than quicksort.

Quicksort's average-case and best-case time complexity is O(n log n). This occurs when the array is rearranged into two same-length subarrays in every partition step (similar to merge sort).

|Description|Notation|Explanation|
|---|---|---|
|Worst case|O(n²)|The pivot element lies in an extreme end of the sorted array. One subarray is always empty, and another subarray contains n-1 elements.|
|Average case|O(n log n)|The depth of the recursion is O(log n). At each level, the partitions do O(n) operations. O(log n) times O(n) is equal to O(n log n)|
|Best case|O(n log n)|The pivot happens to be in the middle.|

Note: Some implementations of quicksort can have a best-case time complexity of O(n).