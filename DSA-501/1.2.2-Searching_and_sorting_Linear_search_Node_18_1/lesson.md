# Linear search

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to implement a linear search algorithm and give the runtime.

#### Overview

###### Finding a specific element in an array of data is one of the most common activities that you will do in programming. In this lesson, you will learn about linear search, which is the most basic algorithm for searching through an array of data.

## Key Terms

Linear search algorithm

Also known as the sequential search algorithm, an algorithm that checks every element in an array, starting from the leftmost element, and continues until the desired element is found

Brute-force algorithm

Any algorithm that doesn't use any logic to try to do its job quickly or somehow reduce the number of elements that it searches for a matching value

## Understanding linear search

The linear search algorithm, also known as the sequential search algorithm, checks every element in an array until the desired element is found. The algorithm starts at the leftmost element. Then it continues searching until it either finds the desired element or goes through all of the elements in the array. Once the first element with the correct value is found, the position (or index) for that element is returned. If the desired element isn't in the array, -1 is returned.

Consider the following example, where the linear search algorithm is searching an array of numbers to find the value 37.

![](https://images.ctfassets.net/c7lxnbtvvcxm/46csGRZ1Pel5jOKTYG9Utj/01b12d6e195d9530ff38804998e8347e/Eng-linear-search.gif)

In the above example, 11—the index of 37—is returned.

## Linear search in JavaScript

The classic example of a linear search algorithm is the indexOf() function, which searches for a particular value within an array. Take a look at the traditional implementation of indexOf():

`function indexOf(value, elements) {` `for (let index = 0; index < elements.length; index++) {` `if (elements[index] === value) {` `return index;` `}` `}` `return -1;`

`}`

The indexOf() function above accepts two parameters: the desired value and the array to which the linear search algorithm is applied.

The algorithm iterates through the array, checking each value until it finds an element equal to the supplied value. At that point, the index—the first position of the value in the array—is returned. If the algorithm reaches the end of the array without finding the value, it returns -1, indicating that the value wasn't found.

Consider the following code:

`const index = indexOf(5, [1, 3, 5, 7, 9]);`

`console.log(index);`

When you run this code, 2 will be printed because the value 5 is at array index 2.

But what happens if you have an array of objects like the following?

`const people = [` `{` `id: 1,` `first_name: "Monah",` `last_name: "Yarnall",` `age: 17,` `},` `{` `id: 2,` `first_name: "Daphne",` `last_name: "McGaugey",` `age: 81,` `},` `{` `id: 3,` `first_name: "Walker",` `last_name: "Bucknell",` `age: 81,` `},`

`];`

How do you use the above indexOf() function to find the first person whose age is 81? As you can see, the problem with the traditional implementation is that it must exactly match the value of an element in the array; there is no way to match on a property of an object in the element. If you want to match in a different way, you have to write an entirely new function.

A better solution is to separate the matching logic from the linear search algorithm. To accomplish this, you can have the caller pass in a function that implements the matching logic (returning true when a matching element is found). Then the linear search algorithm can call that function to determine whether or not the current element is a match.

The following video provides an overview of this topic. Watch the video, and then complete the practice task below.

### Do this

#### Implement a linear search

Now you will implement a linear search algorithm as a higher-order function that takes the following two parameters:

- isMatch() is a function that takes the current element, current index, and original array as parameters. It returns true when a matching element is found.
    
- elements is the array to which the linear search algorithm is applied.
    

In a new directory, create a file named indexOf.js. In indexOf.js, add the following code:

`function indexOf(isMatch, elements) {` `if (Array.isArray(elements)) {` `for (let index = 0, length = elements.length; index < length; index++) {` `if (isMatch(elements[index], index, elements)) {` `return index;` `}` `}` `}` `return -1;` `}`

`module.exports = indexOf;`

In this implementation, the algorithm goes through all of the elements in the array and calls isMatch(), passing in the element, index, and array. The variable index keeps track of where it is in the array. If isMatch() returns true, it will return the current value for index. But in cases where isMatch() always returns false, -1 is returned after the loop; this indicates that the function didn't find the desired element.

Now that you have an implementation of indexOf(), you will use it to search for matching elements.

Next, create a file named linearSearch.js. In linearSearch.js, add the following code:

`const indexOf = require("./indexOf");` `const people = [` `{` `id: 1,` `first_name: "Monah",` `last_name: "Yarnall",` `age: 17,` `},` `{` `id: 2,` `first_name: "Daphne",` `last_name: "McGaugey",` `age: 81,` `},` `{` `id: 3,` `first_name: "Walker",` `last_name: "Bucknell",` `age: 81,` `},` `];` `function personIs81(person) {` `return person.age === 81;` `}` `console.log(indexOf(personIs81, people));` `function numberIs5(value) {` `return value === 5;` `}`

`console.log(indexOf(numberIs5, [1, 3, 5, 7, 9]));`

Then run the code, using the command node linearSearch.js.

As you can see, passing in the isMatch() function isolates the search algorithm from the matching criteria. Now the search algorithm doesn't need to change, no matter what the matching criteria happen to be.

## The efficiency of linear search

Linear search is a classic example of a brute-force algorithm. In other words, it doesn't use any logic to try to do its job quickly or somehow reduce the number of elements that it searches for a matching value. As a rule, the larger the array is, the longer that linear search will take to find a matching element.

As shown in the table below, the worst-case time complexity of linear search is O(n), where n is the number of elements in the array being searched. With linear search (as well as most other search algorithms), the worst-case scenario occurs when the element doesn't exist in the array. If the element isn't in the array, the algorithm would still need to iterate through all n elements to determine that the element isn't there.

The best-case time complexity of linear search is O(1). This happens when the element that you are looking for is in the first slot of the array. The algorithm wouldn't really iterate n times; it would find the element on the first try.

Linear search is by far the simplest search algorithm; it's one that doesn't focus on speed.

|Description|Notation|Explanation|
|---|---|---|
|Worst case|O(n)|There is no matching element in the array.|
|Average case|O(n)|The matching element is in the middle of the array.|
|Best case|O(1)|The element is in the first slot of the array.|