# Solving problems with Sets, Maps, and arrays

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to use Sets and Maps to implement solutions to simple algorithmic problems.

#### Overview

###### In this lesson, you will walk through the process of thinking about and solving several problems using Sets and Maps. You'll attempt to implement each of these problems in JavaScript.

## Starter code

This lesson requires you to have the following GitHub repository running on your local machine.

- [Starter: Solving problems with Sets and Maps](https://github.com/Thinkful-Ed/starter-solving-problems-with-sets-and-maps)
    

Fork and clone the repository above. Then, follow the instructions on how to get it to run.

Now, it's time to solve a few algorithmic problems with Sets and Maps. The starter code provided contains tests that will help indicate if the implementation is correct.

## Intersection of arrays

Suppose you were given two arrays, a and b, and you needed to find all elements that are present in both arrays. This is a common problem that turns up in many applications.

Here's an example:

|Inputs|Output|Explanation|
|---|---|---|
|a = [10, 20, 30, 40, 50], b = [50, 40, 30, 20, 10]|[10, 20, 30, 40, 50]|All the elements in array a are also present in array b.|
|a = ['A', 'B', 'C', 'A', 'D'], b = ['A', 'A', 'E', 'C', 'D']|['A', 'C', 'D']|Even though 'A' appears twice in both arrays, it only occurs once in the output. 'B' is in the first array but not the second, and 'E' is in the second but not the first. Hence, these elements do not appear in the output.|

One way to approach the problem is as follows: Iterate through one of the arrays. For each element, search for the existence of that element in the second array. You could write that approach in pseudocode as follows:

`result = []` `for each element e of a do:` `search for e in b` `if e is found in b` `add e to the result array if it isn't already there`

`return result`

The search for the element in the second array is an O(n) operation which is executed once for each element in the first array. This gives a running time of roughly O(n²).

Using a Map, you may be able to improve that running time. Maps are very good at lookups. If you were to put all the elements of one array into a Map, then each lookup for that element will only take O(1) time. A second improvement is to use a Set to track the common elements, because that automatically avoids duplication.

`initialize a new Map` `initialize a new Set` `for each element e of a do:` `add e to the Map` `for each element e of b do:` `lookup e in the Map` `if e is in the Map then` `add e to the Set`

`convert the Set to an array and return`

Overall, this second algorithm has a running time of O(n).

### Do this

#### Implement the array intersection algorithm

Use the starter repository to implement the algorithm outlined above. The tests in the repository will help you determine if the algorithm is correct.

## Find all pairs whose sum is equal to given numbers

Given an array of distinct numbers, you wish to find all pairs of numbers in the array that sum to a given number.

For example, suppose that you had the array [3, 2, 4, 6, 7, 5], and you want to find all pairs of numbers in this array that sum to the value 10. You can see that the pair [3, 7] and the pair [4, 6] both sum to 10. No other pair of numbers sum to 10. The returned value will be [[3, 7], [4, 6]].

Also note the following:

- The pair [4, 6] and [6, 4] are the same and considered just one pair.
    
- [5,5] isn't considered a pair because 5 only occurs once in the array. The array does not contain duplicates, so this would never be possible.
    

The brute-force approach is to iterate through each element of the array, and for each element, consider every other element of the array. If they sum to the value, then output that pair. In pseudocode, that algorithm may look like this:

`for each element i in the array do:` `for each element j in the array do:` `if i is not equal to j then` `if i + j is equal to the value`

`add [i, j] to the output`

It should be clear that due to the nested for loops in this solution, the running time is O(n²).

Another approach to the problem is to use a Map. As was the case with the previous problem, the issue is the linear search through the array by the nested for loop. What if you can replace that loop with a lookup that takes O(1) time?

If all the elements in the array were in a Map, such a lookup would be possible. But what would you look up? If the target value is 10 and the current element that you are considering is the value 3, the only way that this value is part of a pair is if the value 10-3=7 also exists in the array. So a lookup for the value 7 tells you if the pair [3, 7] is in the solution.

`inputs: an array of numbers named A` `a target value named N` `initialize a new Map named numbers` `initialize a new Map named solution` `for each element e in A do:` `add e to numbers` `for each element e in A do;` `calculate diff = N - e` `if diff is not equal to e then (1)` `look up diff in numbers` `if diff is in numbers then` `add [e, diff] to solution (2)`

`convert solution to an array and return it`

There are two points to notice about the above algorithm:

1. The check on the line marked (1) ensures that you do not end up with a number paired with itself, like [5, 5].
    
2. As the line marked (2) is written, it will probably result in both [3, 7] and [7, 3] in the solution. You may want to set the minimum of the two numbers as the key and the other number as the value in the solution Map.
    

This algorithm has a running time of O(n).

### Do this

#### Implement the sum of pairs algorithm

Use the starter repository to implement the algorithm outlined above. The tests in the repository will help you determine if the algorithm is correct.

## Same letters

Given a list of words, find all words made up of the same letters. Duplicates letters are okay, so tok and took are both made up of the same letters: t, o, and k.

The function should return a Map where the keys are strings made up of the letters found in a group of words, and the values are arrays consisting of the words that are made up with the same letters in the key.

For example, given the array ["pair", "per", "pole", "pear", "peer", "reap", "lope"], the result will be as follows:

`{` `"aipr": ["pair"],` `"elop": ["pole", "lope"],` `"aepr": ["pear", "reap"],` `"epr": ["per", "peer"]`

`}`

The characters in the keys should be ordered in alphabetical order, and this should be a case-insensitive search. Using Maps, Sets, and arrays will greatly simplify the approach to solving this problem.

The first problem to solve is to determine if a word belongs to a particular group or not. One option is to rearrange all the unique characters in the word into alphabetical order, and then compare it to the existing keys in the Map.

If the key exists, then at least one other word with those same letters was found, so you can add this word to the array associated with that key.

If the key isn't found, then this is the first word made up of those letters that was found. So add that key and word to the Map.

Using pseudocode, the algorithm may look like this:

`Input: an array of words named words` `instantiate a new Map named results` `for each word in the words array do:` `lowercase word` `find all unique letters in word` `create a Set with all the letters of the word to remove duplicates` `create an array of letters from the Set and sort alphabetically` `use join to create a string from the array` `if the sorted string of letters is a key in the results Map then` `add word to the array associated with that key` `else` `make a new entry in the results Map with key = sorted string of letters and the value an array with word as its only element`

`return the results Map`

### Do this

#### Implement the same-letters algorithm

Use the starter repository to implement the algorithm outlined above. The tests in the repository will help you determine if the algorithm is correct.

## Complete example

A completed example from this lesson can be in the Solution branch of this GitHub repository:

- [Data structures: Solving problems with Sets and Maps—Solution branch](https://github.com/Thinkful-Ed/starter-solving-problems-with-sets-and-maps/tree/Solution)