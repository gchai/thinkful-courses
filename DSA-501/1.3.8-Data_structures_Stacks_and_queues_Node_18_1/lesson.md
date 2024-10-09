# Stacks and queues

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to define and implement a stack and a queue.

#### Overview

###### Two of the most commonly used data structures in web development are stacks and queues. The history of pages visited in a web browser and the undo operation in a text editor are examples of operations made possible using stacks. And the handling of events in web browsers often uses queues.

## Key Terms

Event loop

A design pattern that a program may use to prioritize certain lines of code for execution

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#starter-code)Starter code

This lesson requires you to have the following repository running on your local machine.

- [GitHub: Stacks and queues starter](https://github.com/Thinkful-Ed/starter-stacks-queues)
    

Fork and clone the above repository. Then, follow the instructions on how to get it to run.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#stack)Stacks

A stack is one of the most common data structures. It's similar to a list, with access restricted to only one end. It stores elements in a last in, first out (LIFO) order.

Stack

A vertical data structure that stores elements in a last in, first out order

Stacks are usually thought of as vertical data structures, unlike lists and arrays, which are horizontal. Hence, the first item—the only directly accessible item on the stack—is referred to as top of the stack.

Imagine a stack of plates in your kitchen. The last plate that you put on the stack stays on the top of the stack, and it is the first plate that you get to take out and use.

![](https://images.ctfassets.net/c7lxnbtvvcxm/2oR0FI06vp5sMUQ8L8uxVW/f34ad29f943dd6375d40daa4ba631b15/Eng-stack1.png)

A standard way to implement a stack is using a singly linked list with constraints on its operations, where items can be inserted and deleted at only one place: the end of the list.

A stack has two primary functions:

- push(): Places data onto the top of a stack (insertion)
    
- pop(): Removes data from the top of the stack (deletion)
    

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#do-this)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#create-a-stack-class)Create a Stack class

In Stack.js, define a constructor for the Stack class, as follows:

`// Creates a node containing the data and a reference to the next item` `class Node {` `constructor(value, next) {` `this.value = value;` `this.next = next;` `}` `}` `class Stack {` `constructor() {` `this.top = null;` `}`

`}`

The constructor is nice and straightforward. You start with an empty first node, represented by null. This indicates the top of the stack.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#stack-insertion)Stack insertion

The insertion operation in a stack is limited to inserting only onto the top of the stack. This operation is called push(). The following illustration shows how a node with the key C is pushed (inserted) onto the stack and what the stack looks like after the item is pushed.

![](https://images.ctfassets.net/c7lxnbtvvcxm/6bSQq0Y5M7KjJeXinonTCK/62aff1324ac3955f3dfeeaaa46b08665/Eng-stack-push.png)

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#do-this-1)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#create-a-push-method)Create a push() method

In Stack.js, add a push() method to the Stack class that you defined earlier, as follows:

`...` `push(value) {` `// Create a new node,` `// add data to the new node, and` `// have the pointer point to the top` `this.top = new Node(value, this.top);` `return this;`

`}`

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#complexity-analysis-for-push)Complexity analysis for push()

Since you are only adding to the top of the stack, the time complexity of inserting on a stack is constant, O(1).

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#stack-removal)Stack removal

Removal from a stack is also limited to the top of the stack. This operation is called pop(). The following illustration shows how a node with the key C is popped (removed) from the stack and what the stack looks like after the item is popped.

![](https://images.ctfassets.net/c7lxnbtvvcxm/2wIj5nmoihXq0Efyu7TJcU/0bfcc4e51fcd7b5b02a67c3726950a2b/Eng-stack-pop.png)

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#do-this-2)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#create-the-pop-method)Create the pop() method

In Stack.js, add a pop() method to the Stack class:

`...` `pop() {` `/* In order to remove the top of the stack, you have to point` `the pointer to the next item. That next item becomes the` `top of the stack. */` `const popped = this.top;` `this.top = popped.next;` `return popped.value;`

`}`

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#complexity-analysis-for-pop)Complexity analysis for pop()

Because you are removing only from the top of the stack, the time complexity of removing an item from a stack is constant, O(1).

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#queue)Queues

A stack can remove only the most recently added data. It's in LIFO order. So what if you want an operation that is first come, first served? You can use a queue, which is a data structure that models a first in, first out (FIFO) operation. A queue is a type of list where data is inserted at the end and is removed from the front. Queues are used to store data in the order in which they occur—as opposed to a stack, in which the last piece of data entered is the first element used for processing.

Queue

A horizontal data structure that stores data in a first in, first out order

An example of a queue is the fast-food service at McDonald's. You line up, and service is provided in the order that you (and everyone else) lined up. If you are first to line up, you get served first.

A more practical example of a queue is the [event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ) of a web browser. As different events are being triggered (for example, the click of a button), they are added to an event loop's queue and handled in the order they entered the queue. Another example would be a print spooler.

The following is an example of a queue. Rachael is the first item in the queue, and Pris is the last item in the queue.

![](https://images.ctfassets.net/c7lxnbtvvcxm/2Id8UVbdI7JSUe4Fe0omcl/f18d0acfc0da69064deb854bcf363f74/Eng-queue.png)

Just like stacks, queues can be implemented using a singly linked list or a doubly linked list. An item can be inserted only at the end of the list, and items can be deleted only at the beginning of the list.

The main functions of a queue include the following:

- enqueue(data): Adds data to a queue (insertion)
    
- dequeue(): Removes the oldest data added to a queue (deletion)
    

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#do-this-3)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#create-a-queue-class)Create a Queue class

In Queue.js, define a constructor for the Queue class:

`// Creates a node containing the data and a reference to the next item` `class Node {` `constructor(value) {` `this.value = value;` `this.next = null;` `}` `}` `class Queue {` `constructor() {` `this.first = null;` `this.last = null;` `}`

`}`

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#queue-insertion)Queue insertion

The insertion operation in a queue is limited to only one place: the end of the queue. This operation is called enqueue(). For example, in the following illustration, suppose that you have an existing queue, and you want to add an item Pris in the queue. The only place where Pris will be added is the end of the queue.

![](https://images.ctfassets.net/c7lxnbtvvcxm/6Lt1oB67uuxMdi6eVy6CsK/c8d691bc127ef9047b457ee7a36b3dac/Eng-enqueue.png)

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#do-this-4)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#create-the-enqueue-method)Create the enqueue() method

In Queue.js, add a enqueue() method to the Queue class that you defined earlier, as follows:

`...` `enqueue(value) {` `const newNode = new Node(value);` `if (this.first) {` `this.last.next = newNode;` `} else {` `// Set the node of the queue's next pointer to be the new node` `this.first = newNode;` `}` `// Make the new node the last item on the queue` `this.last = newNode;`

`}`

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#queue-enqueue-complexity-analysis)Queue enqueue() complexity analysis

Since you are adding items only at one place (the end of the queue), the time complexity of inserting in a queue is constant, O(1).

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#queue-removal)Queue removal

The removal operation in a queue is limited to only one place as well: the beginning of the queue. This operation is called dequeue(). For example, in the following illustration, suppose that you have an existing queue. You can remove an item from the beginning of the queue only. So, if you want to remove something from this queue, Rachael will be removed.

![](https://images.ctfassets.net/c7lxnbtvvcxm/4EMWxtVTM6mpebVx8hzW0m/1d47b77834084ee7cffcc39abbac5728/Eng-dequeue.png)

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#do-this-5)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#create-the-dequeue-method)Create the dequeue() method

In Queue.js, add a dequeue() method to the Queue class, as follows:

`...` `dequeue() {` `if (this.first) {` `const dequeued = this.first;` `// Update first pointer to point to the next node of the dequeued node` `this.first = dequeued.next;` `// If the dequeued node is the last node in the queue,` `` // update the last pointer to point to `null` `` `if (dequeued === this.last) {` `this.last = null;` `}` `return dequeued.value;` `}`

`}`

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#queue-dequeue-complexity-analysis)Queue dequeue() complexity analysis

Because you are removing items from only one place (the beginning of the queue), the time complexity of removing an item from a queue is constant, O(1).

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-06-stacks-and-queues/content.md#complete-example)Complete example

A completed example from this lesson can be found here:

- [GitHub: Stacks and queues—stacks-and-queues-complete branch](https://github.com/Thinkful-Ed/starter-stacks-queues/tree/starter-stacks-and-queues-complete)