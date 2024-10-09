# Linked lists

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to define and implement a linked list and give the runtime of basic operations.

#### Overview

###### Linked lists are a common type of data structure in web development. As you'll learn in this lesson, a linked list is a type of linear data structure which connects elements through a chain of references.

## Key Terms

Linked list

An ordered, linear data structure in which each item contains a reference to the next item

Head

A reference to the first node in a linked list

Tail

The last node in a linked list

Singly linked list

A linked list in which each node contains exactly one reference to the next node

Doubly linked list

A linked list in which each node contains two references: a reference to the next node and a reference to the previous node

Circular linked list

A linked list in which the last node points to the first node or another node before it, thereby forming a loop

## Understanding linked lists

The video below provides a brief introduction to linked lists.

A linked list is an ordered, linear data structure that's similar to an array. However, unlike in an array, elements aren't stored at a particular index; instead, they are connected through a chain of references. In a linked list, each item contains a reference to the next item. Each element (or node) is stored as a separate object that contains two properties: the data stored and a link to the next node.

Linked lists and arrays each have their own benefits and drawbacks. For example, linked lists use slightly more memory than arrays because of the storage needed for the reference to the next node. But unlike arrays, which store data contiguously in memory, linked lists can easily insert or remove nodes from the list without reorganizing all of the data. Additionally, linked lists and arrays perform tasks related to accessing, adding, and removing data at different speeds. Search operations on a linked list are slow because data can't be accessed randomly; nodes in a linked list are accessed sequentially, starting from the first node.

The entry point into a linked list is a reference to the first node in the list. This reference is called the head. The last node in a linked list points to null. So if a linked list is empty, the head is a null reference.

The diagram below shows a common linked list.

![](https://images.ctfassets.net/c7lxnbtvvcxm/7JXxzpQCwKBD9fACkioyG5/cfe34015944db530e506ae985ee9832c/Eng-linked-list.png)

The linked list depicted above can be written in JSON as follows:

`{` `head: {` `value: 50` `next: {` `value: 9` `next: {` `value: 23` `next: null` `}` `}` `}`

`};`

As you can see, a linked list contains objects nested deeply inside of one another. The next property of each node in the list is a reference to the next node.

There are three types of linked lists:

- Singly linked lists: Each node contains exactly one reference to the next node. This is what you will learn about in this lesson.
    
- Doubly linked lists: Each node contains two references: a reference to the next node and a reference to the previous node.
    
- Circular linked lists: The last node points to the first node or another node before it, thereby forming a loop.
    

## Linked lists in JavaScript

A singly linked list works by storing a series of nodes. Each node consists of a value and a reference to the next node in the sequence.

### Do this

#### Implement a linked list

Now you will implement a singly linked list.

First, create a file named linkedList.js. In linkedList.js, add the following code:

`/**` ``* `Node` is used to store values in a linked list`` `*/` `class Node {` `constructor(value, next = null) {` `this.value = value;` `this.next = next;` `}` `}` `/**` ``* The `LinkedList` class holds a reference to the `head` node and has functions that update the list.`` `*/` `class LinkedList {` `constructor() {` `this.head = null;` `}` `/**` `* The number of nodes in the linked list` `*` `* @returns {number}` `* The number of nodes in the linked list` `*/` `get length() {` `let result = 0;` `let node = this.head;` `while (node) {` `result++;` `node = node.next;` `}` `return result;` `}` `/**` `* Insert a new value at the head of the list` `* @param value` `* The new value to insert` `*` `* @returns {LinkedList}` `* this linked list so methods can be chained` `*/` `insertAtHead(value) {` `this.head = new Node(value, this.head);` `return this;` `}` `}`

`module.exports = LinkedList;`

The above is a very simple linked list: you can only insert values in the list and then get the length of the list. You will add new functionality to this linked list later in this lesson.

The linked list has a head property to indicate the beginning of the list. The head always contains the first node. In the code above, you start with an empty list, represented by the head having a null value.

The above linked list allows you to insert new values only at the beginning of the list. Each new value becomes the head and is linked to the previous head. Note that any time that a value is added to the linked list, it creates an instance of the Node class. The Node class's constructor accepts a value variable that holds the data and a next variable that is a reference to the next node.

Next, create a new file named useLinkedList.js. In useLinkedList.js, add the following code:

`const LinkedList = require("./linkedList");` `const linkedList = new LinkedList();` `linkedList.insertAtHead("One");` `linkedList.insertAtHead(2);`

`console.log(linkedList);`

Then run the code, using the command node useLinkedList.js. You will see the following:

`LinkedList {` `head: Node { value: 2, next: Node { value: 'One', next: null } }`

`}`

As you can see from the output above, 2 was added last, but it's the first item in the list. In other words, 2 is the head of the list.

Next, you will add a method to insert a value at the end of the list. The end of the list is often called the tail.

## Insert at the end

Inserting at the end of the list is a bit more complex than inserting at the beginning of the list. Inserting at the end involves the following steps:

1. Create a new node with the value that you want to insert.
    
2. If the list is empty, set head to the new node.
    
3. If the list isn't empty, iterate through the list until you reach the end of the list. Then set the end node's next property to the new node.
    

### Do this

#### Implement insert()

In linkedList.js, add the following code:

`...` `insert(value) {` `const newNode = new Node(value)` `if (this.head) {` `let tail = this.head;` `while(tail.next){` `tail = tail.next;` `}` `tail.next = newNode;` `} else {` `this.insertAtHead(value)` `}` `return this;` `}`

`...`

Next, update useLinkedList.js to use the new method, as follows:

`const LinkedList = require("./linkedList");` `const linkedList = new LinkedList();` `linkedList.insert("One");` `linkedList.insert(2);`

`console.log(linkedList);`

Now when you run this code, the values are in the order of insertion. Take a look:

`LinkedList {` `head: Node { value: 'One', next: Node { value: 2, next: null } }`

`}`

Now, you can insert new values at the start or end of the linked list. Next, you will implement a find() function that will allow you to retrieve a node from the list.

## The find() method

Finding values in the linked list is straightforward. You iterate through the list until a matching node is found. When the matching node is found, return the node.

### Do this

#### Implement find()

In linkedList.js, add the following implementation of the find() function:

`...` `/**` `* Find a node in the linked list.` `*` `* @param isMatch` ``* Function that returns `true` if the current node matches the search criteria`` `*` `* @returns {Node|null}` ``* The first node where `isMatch(node, index) === true`,`` ``* or `null` if no match is found`` `*/` `find(isMatch) {` `let index = 0;` `let node = this.head;` `while (node) {` `if (isMatch(node, index)) {` `return node;` `}` `index++;` `node = node.next;` `}` `return null;` `}`

`...`

Next, call the find() function in useLinkedList.js, as follows:

`const LinkedList = require("./linkedList");` `const linkedList = new LinkedList();` `linkedList.insert("One");` `linkedList.insert(2);` ``// You can use `find()` to update the value of a node in the list.`` `linkedList.find((node) => node.value === "One").value = 1;` `console.log(linkedList);` `console.log(` `"find 2",` `linkedList.find((node) => node.value === 2)` `);` `console.log(` `"find 3",` `linkedList.find((node) => node.value === 3)`

`);`

When you run the above code, you will see the following:

`LinkedList {` `head: Node { value: 1, next: Node { value: 2, next: null } }` `}` `find 2 Node { value: 2, next: null }`

`find 3 null`

Sometimes you will only have an index available to find a node. You can find a node by index as follows:

`console.log(linkedList.find((node, index) => index === 1));`

You may notice a pattern at this point. Both the insert() and find() functions iterate through the list starting at the head. The insert() function is finding the last node in the list. Next, you will update the insert() function to use the find() function.

In linkedList.js, replace the insert() function with the following code:

`...` `insert(value, isMatch = (node, index) => index === this.length - 1) {` `if (this.head) {` `const previousNode = this.find(isMatch);` `if (!previousNode) {` `throw new Error("No match found.");` `}` `previousNode.next = new Node(value, previousNode.next);` `} else {` `this.insertAtHead(value)` `}` `return this;` `}`

`...`

This updated insert() function uses find() to locate the last item in the list, by default. However, it also has the added benefit of allowing the caller to insert() a value after any node in the list. You can do this by passing in an isMatch() function that matches any node in the list, and the new value gets inserted after the matched node.

Next, update useLinkedList.js to insert a new value between "One" and 2, as follows:

`const linkedList = new LinkedList();` `linkedList.insert("One");` `linkedList.insert(2);` `linkedList.insert(1.5, (node) => node.value === "One");`

`console.log(linkedList);`

When you run the above code, you will see the following:

`LinkedList {` `head: Node { value: 'One', next: Node { value: 1.5, next: [Node] } }`

`}`

As you can see, the value 1.5 was inserted after "One" rather than at the end of the list.

Now, you can insert a value anywhere into the linked list, and you can update an existing value. Next, you'll learn how to remove a value from the list.

Removing an item from the list requires finding the node before the node that you are removing, and updating its next reference to skip over the removed node.

## Remove

When deleting an item, there are three cases that you need to consider. You can do the following:

- Remove from the beginning of the list
    
- Remove from the end of the list
    
- Remove a node between two other nodes
    

The first item in a list is indicated by head. If you delete the first item in the list, you need to change the head to indicate the new first item on the list.

In the remaining two cases, you find the node before the node that you are removing and update its next reference to skip over the removed node. For example, if you want to delete Dragon fruit from the following list, you have to find the node that contains Dragon fruit.

![](https://images.ctfassets.net/c7lxnbtvvcxm/51D2VKlm7dLTkCJKtFDWWT/6723c37c4efdfc51894e82300216c3da/Eng-linked-list-fruit.png)

After you find the previous node (orange), set its next property to the node that is after Dragon fruit (apple).

![](https://images.ctfassets.net/c7lxnbtvvcxm/1WjrFC73Xhy1fWIVJy8DD1/24f71455cf776f76b24f30510d8e805c/Eng-linked-list-fruit-remove.png)

Now you have a linked list with the item removed.

![](https://images.ctfassets.net/c7lxnbtvvcxm/7grzcDPJ8GyN8gzlTXsBlA/c18cd905eef5f8431350d25efad66008/Eng-linked-list-fruit-removed.png)

You already have a find() function that will locate any node in the list. So now, you will write a very similar function that will find any node and the previous node.

### Do this

#### Implement findWithPrevious()

Add the following code to linkedList.js:

`...` `/**` `* Find a node, and its previous node, in the linked list.` `* @param isMatch` ``* Function that returns `true` if the current node matches the search criteria`` `*` `* @returns {[Node|null, Node|null]}` ``* The first element is the node where `isMatch(node, index) === true`, or `null` if no match is found.`` ``* The second element is the previous Node, or `null` if no match is found.`` ``* This second element is also `null` if `this.head` is the matched node.`` `*/` `findWithPrevious(isMatch) {` `let index = 0;` `let previous = null;` `let node = this.head;` `while (node) {` `if (isMatch(node, index)) {` `return [node, previous];` `}` `index++;` `previous = node;` `node = node.next;` `}` `return [null, null];` `}`

`...`

Because the above findWithPrevious() function is nearly identical to find(), you will also update find() to just call findWithPrevious().

Replace the find() function in linkedList.js with the following code:

`find(isMatch) {` `return this.findWithPrevious(isMatch)[0];`

`}`

Next, add the remove() function to linkedList.js.

### Do this

#### Implement the remove() function

Add the following to linkedList.js:

`/**` ``* Remove the first node where `isMatch(node, index, this) === true`.`` `*` `* @param isMatch` ``* Function that returns `true` if the current node matches the node to be removed`` `*` `* @returns {*}` ``* The value of the removed node where `isMatch(node, index) === true`, or `null` if no match is found`` `*/` `remove(isMatch) {` `const [matchedNode, previousNode] = this.findWithPrevious(isMatch);` `if (!matchedNode) {` `return null;` `}` `if (this.head === matchedNode) {` `this.head = this.head.next;` `} else {` `previousNode.next = matchedNode.next;` `}` `return this;`

`}`

The following is the complete linked list implementation:

`/**` `* Node is used to store values in a LinkedList` `*/` `class Node {` `constructor(value, next = null) {` `this.value = value;` `this.next = next;` `}` `}` `/**` ``* LinkedList class holds a reference to the `head` node and has functions that update the list.`` `*/` `class LinkedList {` `constructor() {` `this.head = null;` `}` `/**` `* The number of nodes in the linked list` `*` `* @returns {number}` `* The number of nodes in the linked list` `*/` `get length() {` `let result = 0;` `let node = this.head;` `while (node) {` `result++;` `node = node.next;` `}` `return result;` `}` `/**` `* Find a node in the linked list.` `*` `* @param isMatch` ``* Function that returns `true` if the current node matches the search criteria`` `*` `* @returns {*|null}` ``* The first node where `isMatch(node, index) === true`, or `null` if no match is found`` `*/` `find(isMatch) {` `return this.findWithPrevious(isMatch)[0];` `}` `/**` `* Insert the value after a matched node in the list.` `* By default, the value is inserted at the end of the list.` `*` `* @param value` `* The value to add` `*` `* @param isMatch` ``* Optional function that returns `true` if the current node matches the search criteria`` `*` `* @returns {LinkedList}` `* this linked list so methods can be chained` `*` `* @throws 'No match found.'` `* If list isn't empty and no matching element is found` `*/` `insert(value, isMatch = (node, index) => index === this.length - 1) {` `if (this.head) {` `const previousNode = this.find(isMatch);` `if (!previousNode) {` `throw new Error("No match found.");` `}` `previousNode.next = new Node(value, previousNode.next);` `} else {` `this.insertAtHead(value);` `}` `return this;` `}` `/**` `* Insert a new value at the head of the list.` `* @param value` `* The new value to insert` `*` `* @returns {LinkedList}` `* this linked list so methods can be chained` `*/` `insertAtHead(value) {` `this.head = new Node(value, this.head);` `return this;` `}` `/**` `* Find a node, and its previous node, in the linked list.` `* @param isMatch` ``* Function that returns `true` if the current node matches the search criteria.`` `*` `* @returns {[Node|null, Node|null]}` ``* The first element is the node where `isMatch(node, index) === true` or `null` if no match is found.`` ``* The second element is the previous node, or `null` if no match is found.`` ``* This second element is also `null` if `this.head` is the matched node.`` `*/` `findWithPrevious(isMatch) {` `let index = 0;` `let previous = null;` `let node = this.head;` `while (node) {` `if (isMatch(node, index, this)) {` `return [node, previous];` `}` `index++;` `previous = node;` `node = node.next;` `}` `return [null, null];` `}` `/**` ``* Remove the first node where `isMatch(node, index, this) === true`.`` `*` `* @param isMatch` ``* Function that returns `true` if the current node matches the node to be removed`` `*` `* @returns {*}` ``* The value of the removed node, where `isMatch(node, index) === true`, or `null` if no match is found`` `*/` `remove(isMatch) {` `const [matchedNode, previousNode] = this.findWithPrevious(isMatch);` `if (!matchedNode) {` `return null;` `}` `if (this.head === matchedNode) {` `this.head = this.head.next;` `} else {` `previousNode.next = matchedNode.next;` `}` `return matchedNode.value;` `}` `}`

`module.exports = LinkedList;`

## The efficiency of linked lists

Linked lists are most efficient when inserting and removing data at the beginning of the list.

|Description|Notation|Explanation|
|---|---|---|
|insertAtHead()|O(1)|Inserting only in the first position, regardless of the length of the list|
|insert()|O(n)|Requires iterating over all of the nodes until you reach the end of the list|
|find()|O(n)|Requires iterating over all of the nodes until you find the node|
|remove()|O(n)|Requires iterating over all of the nodes until you find the node to remove|