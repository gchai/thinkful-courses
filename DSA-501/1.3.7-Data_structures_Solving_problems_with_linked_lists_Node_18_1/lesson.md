# Solving problems with linked lists

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to create algorithms to solve simple problems using linked lists.

#### Overview

###### It's important to understand the inner workings of the linked list data structure and common methods associated with a linked list. But it's just as important to know how to use the linked list data structure to solve problems. The best way to learn to solve problems with linked lists is to practice. So in this lesson, you will be guided through the solutions to several problems.

## Starter code

This lesson requires you to have the following repository running on your local machine.

- [GitHub: Solving problems with linked lists starter](https://github.com/Thinkful-Ed/starter-solving-problems-with-linked-lists)
    

Fork and clone the repository above. Then, follow the instructions on how to get it to run.

In this lesson, you will walk through the process of thinking about and solving several problems using the linked list data structure. You'll attempt to implement each of these problems in JavaScript. The starter code provided contains tests that will help indicate if the implementation is correct.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#problem-1-reverse-a-list)Problem 1: Reverse a list

Write an algorithm to reverse a linked list. That is, imagine that you're starting with the following linked list:

![](https://images.ctfassets.net/c7lxnbtvvcxm/4FitiDhrD756hCSbLNxP3s/d9a71c9d9045e6460e9fdea397c04470/Eng-reverse_001.png)

Given such a list, your algorithm should return the following linked list:

![](https://images.ctfassets.net/c7lxnbtvvcxm/1DCYtpyHrpERNKG2WlAovV/fb11471c856384d4ed0e3907c5d3ba2c/Eng-reverse_002.png)

The time complexity of your algorithm should be linear (O(n)).

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#an-iterative-solution)An iterative solution

The first step to solving such a problem is to consider the various use cases that may occur. For example, you would typically think of a list containing many elements. But would your algorithm work for lists that are empty or that contain just a single element?

To solve this problem iteratively, you can take advantage of the insertAtHead() method of the linked list. If you took each value in the list, starting from the head, and inserted it at the head of another list, then the values would be in the list in reverse order.

Sometimes, drawing a diagram and trying the algorithm by hand can help.

The algorithm begins by declaring a new empty linked list and a node pointer to keep track of the position in the original list.

![](https://images.ctfassets.net/c7lxnbtvvcxm/5SijzDsTUlwjALTj7sBLrI/b110646aaa668ec83eb5a23355f9ccff/Eng-reverse_003.png)

Then, for each node in the list, insert the current node value into the new list at the head. Move the node pointer to the next node.

![](https://images.ctfassets.net/c7lxnbtvvcxm/5TdG7mO2pAf22UrwnFz7tb/ec99f6dc214116368774947260abfc62/Eng-reverse_004.png)

This process is repeated for the next node.

![](https://images.ctfassets.net/c7lxnbtvvcxm/5DDCwB51mJtoD4XNRgOorY/45b1b3e5ef34a7e2ecbad2cfeb9c96e0/Eng-reverse_005.png)

This continues until the node pointer is null.

![](https://images.ctfassets.net/c7lxnbtvvcxm/4NNv96ABSmESE738WNPqkO/fb955db0cc580126cbda57ed2dae40fb/Eng-reverse_006.png)

After the last node is processed, return the new list.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#pseudocode)Pseudocode

Next, try writing this process in pseudocode.

`function reverseIterative(list)` `// accepts list - a linked list, potentially empty, to be reversed` `declare a variable named reversedList and initialize it to an empty LinkedList` `declare a variable node initialized to the head of the list` `while the node pointer is not null do` `insert the node value at the head of the reversedList` `move the node pointer along to the next node`

`return the reversedList`

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#javascript-implementation)JavaScript implementation

For this first problem, a possible solution implemented in JavaScript is provided here. In the other problems, you will attempt to write the JavaScript code yourself.

`function reverseIterative(list) {` `const reversedList = new LinkedList();` `let node = list.head;` `while (node) {` `reversedList.insertAtHead(node.value);` `node = node.next;` `}` `return reversedList;`

`}`

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#problem-2-third-from-the-end)Problem 2: Third from the end

Write an algorithm to find the third element from the end of a linked list, without using the length property.

![](https://images.ctfassets.net/c7lxnbtvvcxm/6fQ5kQQAwv2CybPaGmMG48/02014837ccc86d26c6f9f2f702953ee4/Eng-thirdfromend_001.png)

If the list is less than three elements long, return null. The time complexity of your solution should be linear (O(n)).

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#solution)Solution

Once again, you should consider the various cases that need to be covered. A list of arbitrary length greater than three has an obvious element that is the third from the end. But a list shorter than three elements long doesn't have an element that is third from last. In such a case, you have to return null.

The most straightforward idea is to find the length of the list, then do a second iteration through the list and count length-3 elements. This solution is technically O(n), but you can still improve the running time by traversing the list only once.

The general idea is to use two pointers instead of one to traverse the list. First, use a loop to take one pointer from the head of the list to the third element of the list. If the list is fewer than three elements long, this loop will discover that, and you can return null.

Next, start another pointer at the head. Then keep moving the pointers simultaneously until the first pointer reaches the last element of the list. The second pointer will be pointing to the third element from the end.

![](https://images.ctfassets.net/c7lxnbtvvcxm/1lSBl1LNzA263ebVIQxe4r/5002c7c4ec770d53de9de83e33abfc52/Eng-thirdfromend_002.png)

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#pseudocode-1)Pseudocode

`function thirdFromEnd(list) {` `if the list is empty then return null` `declare a variable named pointer1 and initialize it to the head of the list` `declare a variable named i and initialize it to 0` `while i is less than 2 and the next pointer of pointer1 is not null do` `set pointer1 to its next pointer` `increment i` `if i is less than 2 then return null` `declare a variable named pointer2 and initialize it to the head of the list` `while the next pointer of pointer1 is not null do` `set pointer1 to its next pointer` `set pointer2 to its next pointer`

`return pointer2`

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#problem-3-swap-nodes)Problem 3: Swap nodes

Write an algorithm to swap two nodes x and y (and not just their contents) in a singly linked list L, given references to only x and y.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#a-solution)A solution

In this problem, you are given a list and two pointers to specific nodes in the list. It doesn't matter how those nodes were found prior to starting this procedure.

![](https://images.ctfassets.net/c7lxnbtvvcxm/cwbCrvMbMf5QSAxfbvnDv/f750adeabf15b1977bdb3c2c683eb223/Eng-swap_001.png)

You can start by considering how such a swap can be done in a typical case. That is, there are two distinct nodes in a list, and you want to swap them. Before rearranging any of the pointers, you need to find the previous nodes for both x and y. Call those previous node pointers x_prev and y_prev.

For this, you would typically need to start from the head of the list. Then you would iterate through until you find the node that is just before the node that you are looking for. In the given implementation of the linked list that you are working with, the findWithPrevious() method already solves this problem. It would be useful to review how that method gets the job done.

![](https://images.ctfassets.net/c7lxnbtvvcxm/6CnswyRN6JviwUZNMGwZBO/1d2117c3b1ee0e1b310da473bf9cdecb/Eng-swap_002.png)

To perform the actual swap, you will need a temporary pointer to keep track of the next node of x. Call that pointer x_next.

![](https://images.ctfassets.net/c7lxnbtvvcxm/NBfnPh5mdczAzBIfQPi3K/4d71e6bb6de2c1a1bed7a6e7fa005e0e/Eng-swap_003.png)

Now that you have pointers to all the relevant nodes, you can start rearranging the pointers. Be careful that the order in which you rearrange the pointers does not cause you to lose references to any nodes.

1. Set x_next to y_next.
    
2. Set y_next to x_next.
    

![](https://images.ctfassets.net/c7lxnbtvvcxm/2rqZbXAHhXiGfDDu0NojQh/ec45868ff4d4d376d619a1906bf9677c/Eng-swap_004.png)

Finally, you need to set the previous nodes to point to the swapped ones.

1. Set x_prev.next to y.
    
2. Set y_prev.next to x.
    

![](https://images.ctfassets.net/c7lxnbtvvcxm/6ngDcQjehQTbl7aUtTvk6T/6b7bd252d5f96288d1574b564f36b057/Eng-swap_005.png)

Before you implement this, consider the edge cases. For example, what if one of the nodes was the head of the list or the last node of the list? What if both x and y pointed to the same node? What if the list was empty?

In the case of the empty list, both x and y would also be null. It would be reasonable to return the empty list.

In the case of one of the nodes being the last node of the list, the algorithm outlined above will work. Take a moment to verify this.

In the case where one of the nodes is the head of the list, you just need to ensure that the previous pointers are not null before attempting to reassign them. Whichever one is the head means that the other needs to become the head.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#pseudocode-2)Pseudocode

`function swap` `// accepts list - a linked list` `x - a node in the linked list` `y - a node in the linked list` `if the list is empty then` `return the list` `declare a variable x_next and initialize it to the next pointer of x` `declare a variable x_prev and initialize it to the previous node to x, null if x is the head` `declare a variable y_prev and initialize it to the previous node to y, null if y is the head` `set the next pointer of x to the next pointer of y` `set the next pointer of y to x_next` `if x is not the head of the list then` `set next pointer of x_prev to y` `else` `set head to y` `if y is not the head of the list then` `set next pointer of y_prev to x` `else` `set head to x`

`return the list`

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#problem-4-the-josephus-problem)Problem 4: The Josephus problem

To create a circular list, the last node in the list should point to the head of the list.

Use a circular list to solve the [Josephus Problem](https://en.wikipedia.org/wiki/Josephus_problem), which is defined like this: People are standing in a circle waiting to be executed. Counting begins at a specified point in the circle and proceeds around the circle in a specified direction. After a specified number of people are skipped, the next person is executed. The procedure is repeated with the remaining people, starting with the next person, going in the same direction and skipping the same number of people, until only one person remains, and is freed. The problem—given the number of people, starting point, direction, and number to be skipped—is to choose the position in the initial circle to avoid execution.

Write an algorithm that accepts a list of people, the number of persons n, and the number to be skipped m. The algorithm should return the name of the last person left alive.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#solution-1)Solution

The first step in this solution is to create a circular list. This involves finding the last node in the list and setting its next pointer to the head of the list.

![](https://images.ctfassets.net/c7lxnbtvvcxm/1ddHOqJjHjgXmKH2bFVLIy/e9bc8cb4313189a66ea8b1822fc5a7e2/Eng-josephus_001.png)

Starting at the head, count m nodes. For example, here, let m=7:

![](https://images.ctfassets.net/c7lxnbtvvcxm/4S5BJ82Ki45cam5gAYlmZq/35adab23e2c88508793b5187f97c976c/Eng-josephus_002.png)

The removal of a node in this case simply involves changing the next pointer of the current node. Then the count starts again at the next node.

![](https://images.ctfassets.net/c7lxnbtvvcxm/2ATQZM8XQ04yZUku3WTs0w/33702411ba1d61ede6f4b2e8a308e194/Eng-josephus_003.png)

Similarly, the next node is removed, leaving only three nodes in the list.

![](https://images.ctfassets.net/c7lxnbtvvcxm/4vye3c1G22ULznvEcfgbFb/599a14952fa3958009e1d872facb29b7/Eng-josephus_004.png)

And now that there are just two nodes in the list, just one more count and removal is necessary.

![](https://images.ctfassets.net/c7lxnbtvvcxm/y9PToYJUFAD1JkYfDGfqS/f21d0904d47fe639c75779c06550cad0/Eng-josephus_005.png)

Now that there is only a single node left, the name of the last remaining person is known and can be returned.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#pseudocode-3)Pseudocode

`function josephus` `// Accepts: list the LinkedList of names` `m the number to skip` `declare variable node and initialize it to the head` `declare variable tail and initialize it to the last node in the list` `assign the next pointer of the tail to the head of the list` `while there are more than one nodes left do:` `move node to node.next m times` `if the next pointer of the current node points to the head` `set the head to the next node after the head` `set node.next to node.next.next` `node = node.next;` `}` `return node.value;`

`}`

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/data-structures-05-solving-problems-with-linked-lists/content.md#complete-example)Complete example

A completed example from this lesson can be in the Solution branch of this GitHub repository:

- [Data structures: Solving problems with linked lists—Solution branch](https://github.com/Thinkful-Ed/starter-solving-problems-with-linked-lists/tree/Solution)