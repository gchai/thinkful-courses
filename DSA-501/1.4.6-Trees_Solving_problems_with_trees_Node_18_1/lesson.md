# Solving problems with trees

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to solve common BST coding challenges.

#### Overview

###### Binary search trees are a common topic in technical interviews. Now that you know how to implement and traverse a BST, you can apply your knowledge to solve a variety of interesting coding challenges related to BSTs. In this lesson, you will learn how to find the height of a BST, check whether or not an arbitrary binary tree is a BST, and find the kth largest node in a BST.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-05-solving-problems-with-trees/content.md#starter-code)Starter code

This lesson continues using the project you created in the previous lesson. If you need to, you can download that code here:

- [GitHub: Trees starter](https://github.com/Thinkful-Ed/zid-dsa-trees-starter)
    

You will use the BST that you implemented to understand how you can use this data structure to solve problems in various scenarios.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-05-solving-problems-with-trees/content.md#challenge-1-height-of-a-bst)Challenge 1: Height of a BST

The video below provides an introduction to finding the height of a BST. Start by watching the video, and then read through the rest of the lesson and complete the practice tasks. This will give you a thorough understanding of this topic.

Challenge: Write an algorithm to find the height of a BST.

The height of a binary tree is equal to the number of edges between the root and the deepest node in the tree that has no children (the leaf node). For example, take a look at the binary tree below:

![](https://images.ctfassets.net/c7lxnbtvvcxm/7Bn5C9qvQ8JyUW4vtG9tuF/c93417edb8c44263d8a963921235922c/Eng-binary-tree.png)

The height of the binary tree is 3, because there is a total of three edges between 5 (the root node) and 18 (the leaf node).

Before reading on, take a moment to consider how you would solve the problem on your own.

You can follow a recursive approach to solve this problem. You can calculate the height for the current node, and then pass the height down as a variable to the left and right child nodes so they can evaluate their heights. After traversing the entire tree, the variable will contain the result.

In src/BinarySearchTree.js, add a getHeight() method to the BinarySearchTree class, as follows:

`...` `getHeight(currentHeight = 0) {` `// BASE CASE:` `// If the current node doesn't have a left or right child,` `// then the base case is reached, and the function can return the height.` `if (!this.left && !this.right) return currentHeight;` `// RECURSIVE CASE:` `// Otherwise, compute the new height.` `const newHeight = currentHeight + 1;` `// If there's no left child, recurse down the right subtree only,` `// passing down the height of the current node.` `if (!this.left) return this.right.getHeight(newHeight);` `// If there's no right child, recurse down the left subtree only,` `// passing down the height of the current node.` `if (!this.right) return this.left.getHeight(newHeight);` `// If both children exist, recurse down both subtrees,` `// passing down the height of the current node.` `const leftHeight = this.left.getHeight(newHeight);` `const rightHeight = this.right.getHeight(newHeight);` `// Return the greater of the left or right subtree heights.` `return Math.max(leftHeight, rightHeight);` `}`

`...`

The time complexity of the algorithm above is O(n), where n is the number of nodes in the BST. The space complexity is O(h), where h is the height of the tree. Space is allocated for the recursion stack.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-05-solving-problems-with-trees/content.md#challenge-2-is-it-a-bst)Challenge 2: Is it a BST?

The video below provides an introduction to determining whether an arbitrary binary tree is a BST. Start by watching the video, and then read through the rest of the lesson and complete the practice tasks. This will give you a thorough understanding of this topic.

Challenge: Write an algorithm to check whether an arbitrary binary tree is a BST, assuming that the tree doesn't contain duplicates.

Before reading on, take a moment to consider how you would solve the problem on your own.

Recall that earlier in this module, you learned that an in-order traversal of a BST generates a sorted array as an output. Therefore, to check if a given binary tree is a BST, you can traverse the binary tree in order, while comparing the current node's value to the previously visited node's value. If the previous value is always less than the current value, then the binary tree is a BST.

In src/BinarySearchTree.js, add an isBST() method to the BinarySearchTree class, as follows:

`...` `isBST() {` ``// Use the existing `dfsInOrder()` method to traverse the tree.`` `const values = this.dfsInOrder();` `// Check if the array returned by the in-order DFS is a sorted array.` `for(let i = 1; i < values.length; i++) {` `// Compare the current and previous values.` `if(values[i] < values[i-1]) {` `return false;` `}` `}` `return true;` `}`

`...`

The time complexity of the algorithm above is O(n), where n is the number of nodes in the BST. The space complexity is also O(n), since space is allocated for the auxiliary array created to store the nodes.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-05-solving-problems-with-trees/content.md#optimizing-the-space-complexity)Optimizing the space complexity

Can you think of a way to optimize the space used in the algorithm above?

Instead of creating the auxiliary array, you can simply keep track of the previously visited node and compare it to the currently visited node while doing the in-order traversal. The space complexity becomes O(h), where h is the height of the tree, because the algorithm still needs to allocate space for the recursion stack.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-05-solving-problems-with-trees/content.md#challenge-3-third-largest-node)Challenge 3: Third-largest node

The video below provides an introduction to finding the third largest node in a BST. Start by watching the video, and then read through the rest of the lesson and complete the practice tasks. This will give you a thorough understanding of this topic.

Challenge: Write an algorithm to find the third-largest node in a BST.

Before reading on, take a moment to consider how you would solve the problem on your own. As in the previous challenge, how can you leverage tree traversal to solve this problem?

Again, you know that an in-order traversal of a BST would generate a sorted array as an output. For example, if the output is [1, 2, 3, 4, 5, 6], then the third-largest node would be found in the third index position from the end of the array. In fact, as a general rule, you can find the index position of the kth largest node by subtracting k from the length of the array.

In src/BinarySearchTree.js, add a findKthLargestValue() method to the BinarySearchTree class, as follows:

`...` `findKthLargestValue(k) {` ``// Use the existing `dfsInOrder()` method to traverse the tree.`` `const values = this.dfsInOrder();` `const kthIndex = values.length - k;` `// Ensure that the index is within the bounds of the array.` `if (kthIndex >= 0) {` `return values[kthIndex];` `} else {` `console.error("k value exceeds the size of the BST.");` `}` `}`

`...`

The time complexity of the algorithm above is O(n), where n is the number of nodes in the BST. The space complexity is also O(n), because space is allocated for the new array created to store the nodes. How would you optimize the space complexity for this algorithm?

Hopefully, with these examples, you're starting to see how you can use the traversal techniques that you learned in previous lessons to solve different kinds of algorithmic problems for trees.

Note: The solutions presented above are by no means the only ways to solve these problems. It's always recommended to think of alternative approaches or research online to see how other developers approach the same problems differently. However, do pay attention to the time and space complexity trade-offs of different approaches.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-05-solving-problems-with-trees/content.md#complete-example)Complete example

A completed example from this lesson can be found here:

- [GitHub: Trees starter—solving-problems-with-trees branch](https://github.com/Thinkful-Ed/zid-dsa-trees-starter/tree/solving-problems-with-trees-complete)