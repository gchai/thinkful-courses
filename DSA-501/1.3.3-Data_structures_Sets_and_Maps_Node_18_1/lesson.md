# Sets and Maps

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to define and use Sets and Maps and their associated methods.

#### Overview

###### A Set is a collection of unique values. A Map, on the other hand, is a collection of key-value pairs that remembers the insertion order of the keys. These two data structures provide many advantages when solving various algorithmic problems.

## Understanding Sets

The following video provides a brief introduction to Sets.

The most basic collection of values is the array. It is fast and efficient. However, sometimes, you are interested in ensuring that there are no duplicate values in a collection of data. This is essentially the main advantage that a Set brings.

Set

A collection of unique values

To create a new empty Set, invoke the Set constructor:

`const numbers = new Set(); // Empty Set []`

To add some values to the Set, use the add() method:

`numbers.add(3); // Set contains [3]` `numbers.add(7); // Set contains [3, 7]`

`numbers.add(5); // Set contains [3, 7, 5]`

If you try to add duplicate values to the Set, it remains unchanged:

`numbers.add(3); // Set still contains [3, 7, 5]`

To remove an item from the Set, use the delete() method:

`numbers.delete(5); // Set contains [3, 7]`

### Iterating the Set

Sometimes, you need to access each item of a Set. The Set provides the values() method to facilitate iterating the values of the Set.

`// Find the sum of all numbers in the Set` `let sum = 0;` `for (let num of numbers.values()) {` `sum = sum + num;` `}`

`console.log(sum); // 3 + 7 = 10`

Alternatively, you may use the built-in forEach() method to iterate a Set. This method is very similar to the forEach() method of Array objects. Take a look:

`// Find the sum of all numbers in the Set` `let sum = 0;` `numbers.forEach((e) => (sum = sum + e));`

`console.log(sum); // 3 + 7 = 10`

### Relationship to arrays

Sometimes, while working with a collection of values, you need the methods of an array. And at other times, you need the properties of the Set. It is easy to convert an array into a Set and a Set into an array.

`const studentGrades = ["B", "F", "A", "A", "D", "B", "A", "F"];` `const uniqueGrades = new Set(studentGrades); // Duplicates will be removed` `for (let grade of uniqueGrades.values()) {` `console.log(grade); // 'B', 'F', 'A', 'D'`

`}`

And if you want to create an array from the Set, you can use the spread operator.

`const distinctGrades = [...uniqueGrades]; // Array contains ['B', 'F', 'A', 'D']`

### Checking for membership

If you need to check if a value exists in the Set, you can use the has() method.

`numbers.has(3); //true` `numbers.has(8); //false`

`uniqueGrades.has("C"); // false`

### Common uses of Sets

One common use of Sets is to remove duplicates from a collection of values. For example, suppose that you have a string and want to return only the unique characters from that string.

`// How many unique characters are in the term 'Data Structures'?` `const word = "Data Structures";` `// Create a Set - lowercase the word` `const set = new Set(word.toLowerCase());` `// Size of the Set is the number of unique characters`

`console.log(set.size);`

## The efficiency of Sets

The JavaScript specification doesn't say how the implementation of the Set is to be done by the various JavaScript engines. But it does say that the operations on a Set must be at most O(n). There are several ways that the implementation may be carried out. These values are the expected runtime for one such implementation.

|Description|Notation|Explanation|
|---|---|---|
|add()|O(1)|The specific implementation may differ, but you can generally expect this to be O(1).|
|delete()|O(1)|Also depends on the implementation details.|
|forEach()|O(n)|It is clear that this requires a loop through all the values of the Set.|
|has()|O(1)|At best, it takes a single operation to determine if a value exists or not.|

## Understanding Maps

The following video provides a brief introduction to Maps.

Map

A collection of key-value pairs that remembers the insertion order of the keys

The keys in a Map are unique. Maps are used when you need a very fast lookup table.

For example, you may wish to create a table of users and their addresses. To create a new empty Map, invoke the constructor of Map:

`const addressBook = new Map(); // An empty Map`

To add an entry to the Map, use the set() method. The set() method takes two arguments: a key and a value.

`addressBook.set("sherlock", {` `email: "holmes@scotlandyard.com",` `address: "221B Baker Street, London",`

`});`

![](https://images.ctfassets.net/c7lxnbtvvcxm/79QTN79Z2Rn4tT7eozt9nm/b1ff7f7cd3b1317ef6e2d4ce77c98116/Eng-maps_001.png)

The key "sherlock" identifies the value.

Adding a second entry creates a new key-value pair in the Map.

`addressBook.set("hercule", {` `email: "poirot@scotlandyard.com",` `address: "Flat 203 at 56B Whitehaven Mansions",`

`});`

![](https://images.ctfassets.net/c7lxnbtvvcxm/3qFDBgvdFEBEDw2Z5xTxZd/37bc53f4a6ed12a9ac3cc0b0e3d13971/Eng-maps_002.png)

Attempting to add a second entry with the same key results in replacing the original value. The keys are never duplicated.

`addressBook.set("sherlock", {` `email: "jones@nypd.com",` `address: "13 5th Avenue, Queens",`

`});`

![](https://images.ctfassets.net/c7lxnbtvvcxm/7yXfJlVsnskhqDaT96QGaK/e4003afcbf10ff468a71e38130b85ad2/Eng-maps_003.png)

### Maps are similar to objects

You may think of a Map as similar to an object, but there are a few significant differences:

- With a Map, there are no keys unless you explicitly added to the Map yourself. An object may inherit keys and cause some surprising side effects.
    
- The keys of a Map may be of any type of value, including functions and objects. The keys in an object may only be strings and Symbol objects.
    
- A Map remembers the insertion order of the keys. When iterating the keys, they are always in order of insertion.
    
- You can get the number of entries in a Map by its size property:
    

- `console.log(addressBook.size); // 2`
    

An object, on the other hand, doesn't have a size property.

### Retrieving a value

To retrieve a value from the Map, use the get() method with the specific key.

`const poirot = addressBook.get("hercule"); // gets {email: "poirot@scotlandyard.com", address: "Flat 203 at 56B Whitehaven Mansions"}`

And to completely remove an entry from the Map, use the delete() method.

`addressBook.delete("sherlock");`

### Iterating the Map

There are several methods for iterating a Map. You may iterate by keys, values, or entries, using the built-in keys(), values(), or entries() methods, respectively.

To print the list of usernames in the Map created above, for example, you can use a for ... of loop over the keys.

`for (let key of addressBook.keys()) {` `console.log(key);`

`}`

Or, to simply print the values in the Map, you can run the following code:

`for (let value of addressBook.values()) {` `console.log(value);`

`}`

An entry is a single key-value pair in a Map. Consider the following Map and its entries:

`const months = new Map();` `months.set(0, "January");` `months.set(1, "February");` `months.set(2, "March");` `months.set(3, "April");` `months.set(4, "May");` `months.set(5, "June");` `months.set(6, "July");` `months.set(7, "August");` `months.set(8, "September");` `months.set(9, "October");` `months.set(10, "November");`

`months.set(11, "December");`

Using the entries() method, you can iterate over the 12 key-value pairs in that Map. Each entry is given as an array with two values. For example, the first entry is [0, "January"].

`for (let [key, value] of months.entries()) {` ``console.log(`${key + 1} : ${value}`); // print 1: January etc``

`}`

Additionally, Maps have a built-in forEach() method that facilitates a similar iteration.

``months.forEach((value, key) => console.log(`${key + 1} : ${value}`)); // print 1: January etc``

### Relationship to arrays

If you have data in the correct format, you may create a Map directly from that data. For example, an array of arrays in the form [[key1, value1], [key2, value2], ... ] may be used to create a Map.

`const days = [` `[0, "Sunday"],` `[1, "Monday"],` `[2, "Tuesday"],` `[3, "Wednesday"],` `[4, "Thursday"],` `[5, "Friday"],` `[6, "Saturday"],` `];`

`const dayMap = new Map(days);`

The resulting Map has keys 0, 1, and so on, corresponding to the values "Sunday", "Monday", and so on.

Conversely, you may use the spread operator to create an array of arrays from a Map.

`const dayArray = [...dayMap];` `// results in:` `// [` `// [0, "Sunday"],` `// [1, "Monday"],` `// [2, "Tuesday"],` `// [3, "Wednesday"],` `// [4, "Thursday"],` `// [5, "Friday"],` `// [6, "Saturday"],`

`// ]`

## The efficiency of Maps

Maps are very efficient at inserting and looking up values by keys.

|Description|Notation|
|---|---|
|set()|O(1)|
|delete()|O(1)|
|get()|O(1)|
|has()|O(1)|