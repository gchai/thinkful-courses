# Arrays

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to define and describe arrays. You'll also be able to identify the running time of common array methods.

#### Overview

###### Arrays are probably the most common data structure in use, and you've already used them many times in your programming journey.

## Key Terms

Data structure

A way to organize data in a computer's memory, facilitating efficient access to and modification of the data

## Data structures

A data structure is a way to organize data in a computer's memory, facilitating efficient access to and modification of the data.

Imagine for a moment that you are responsible for a very large warehouse. Suppose that when new products arrive, you simply place them in some unused place on the floor of the warehouse, without any particular organization. Then, imagine that someone eventually asks how many packets of blueberries are in stock. You would find yourself searching the warehouse from top to bottom to answer the question.

But there are various ways to organize the products in the warehouse. You can install shelves and organize the products by name, type, category, or even how soon the product will be needed. Or you can get bins and place products in various bins.

Each decision that you make changes the way that you put new products into the warehouse, or how long it takes you to find a product, or what happens when you remove a product from the warehouse.

Similarly, if you had a large quantity of data to store in the memory of a computer, like a list of products that a customer wants to buy, you would want to organize that data by the way in which you plan to access and use the data. The data structures that you are about to study will provide you with these kinds of options.

## Understanding arrays

An array is an object that contains a sequence of elements numbered 0, 1, 2, ... . The numbers are called index numbers. Elements of an array can be accessed by their index number.

In the memory of the computer, the elements of the array are stored next to each other. You can imagine the computer's memory as being made up of a large sequence of small boxes, where each box can store exactly one value. Each box is numbered for convenience. When you declare an array, you reserve a number of those boxes for your data.

For example, the following snippet initializes an array with some values.

`const names = [` `"Aegnor",` `"Elenwe",` `"Cirdan",` `"Luthien",` `"Amerie",` `"Galion",` `"Daeron",` `"Orophin",`

`];`

Eight memory locations must be reserved to store these values.

![](https://images.ctfassets.net/c7lxnbtvvcxm/kXBxWuncGXXy7qnfuMAni/0e4cbd68b658af7a38fd2f120401853e/Eng-arrays_001.png)

These locations are numbered from 0 through 7. To access a specific value in the array, you can use the index of that element.

`names[0]; // Refers to "Aegnor"`

`names[2]; // Refers to "Cirdan"`

The array reference—names, in this example—points to the location of the first element of the array. That is, the first element of the array is in some arbitrary box in the memory of the computer, and the variable names refers to that box. All the elements of the array may then be found by adding their respective index to that first location.

Because the elements of the array can be accessed directly by their index, it is said that an array is a random-access structure. If the index of an element is known, then accessing that element takes O(1) time.

## Common methods

### The push() method

The push() method of the array adds one or more elements to the end of the array. Because you have direct access to the end of the array in constant time, and you are simply inserting a new element without touching the other elements, this operation can be done in O(1) time.

`names[0]; // Refers to "Aegnor"`

`names[2]; // Refers to "Cirdan"`

![](https://images.ctfassets.net/c7lxnbtvvcxm/45WkVm27mFzFw6eBLypPaA/2004163fc42c30308c004620c4b00530/Eng-arrays_002.png)

### The pop() method

Similarly, the pop() method removes an element from the end of the array without touching the other elements of the array. For this reason, it can be done in O(1) time.

`person = names.pop();`

![](https://images.ctfassets.net/c7lxnbtvvcxm/5yZylLXEJ1vLoQzQaRcjNx/da6f7cd7c6d4e49ac1cc7a8d35d45136/Eng-arrays_003.png)

### The unshift() method

The unshift() method adds one or more elements to the beginning of an array. Unlike the push() method, this does affect every other element in the array. Remember that the first element of the array is found in a specific memory location, and all other elements of the array are found in the locations that come immediately after that first one.

To make room for this new element at the beginning of the array, every other element in the array needs to be moved.

`names.unshift("Glorfindel");`

![](https://images.ctfassets.net/c7lxnbtvvcxm/5QdP0iorRJfj3CpaVvStca/baa873d1f591c77f2053b0da01ac08fd/Eng-arrays_004.png)

Moving each element takes O(n) time.

### The shift() method

The shift() method removes the first element of the array. And similarly to the unshift(), it needs to move each element over by one. This once again results in a running time of O(n).

![](https://images.ctfassets.net/c7lxnbtvvcxm/1y6d0a41UUH8yY7PSYKLpS/491243a6d3633524fa994d875b319fde/Eng-arrays_005.png)

### The splice() method

The splice() method is used to delete or insert elements at arbitrary positions in an array. Inserting an element at some point in the array requires moving all elements following that position in order to make room for the new element.

Similarly, removing an element from some position in the array requires moving the elements that follow to fill the gap.

The worst-case running time occurs when the element removed is the first element of the array or when an element is inserted in the first position in the array. This running time is O(n).

### The map(), filter(), and reduce() methods

You have already used various array iteration methods, such as map(), filter(), and reduce(), as well as several others. In each case, these methods perform some operation for each element of the array. Despite the conciseness of these methods, the running time remains O(n).

## The efficiency of array methods

Arrays are most efficient when accessing the elements in random order or modifying only at the end of the array. Any modification to the middle of the array results in O(n) running time.

|Description|Notation|Explanation|
|---|---|---|
|push()|O(1)|Inserting at the end of the array|
|pop()|O(1)|Removing an element from the end of the array|
|unshift()|O(1)|Inserting at the beginning of the array|
|splice()|O(n)|Inserting or deleting at some arbitrary position of the array|
|map(), filter(), reduce()|O(n)|Requires iterating over all of the array|