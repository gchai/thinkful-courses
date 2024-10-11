# Breadth-first search

**1.5 hours**Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to implement and analyze the complexity of a breadth-first search algorithm.

#### Overview

###### In the previous lesson, you learned about one algorithm that you can use to traverse a tree. In this lesson, you'll learn about another: breadth-first search.

## Key Terms

Breadth-first search

BFS, a tree-traversal algorithm that starts at the root node and proceeds level by level

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-04-tree-bfs/content.md#starter-code)Starter code

This lesson continues using the project that you created in the previous lesson. If you need to, you can download that code here:

- [GitHub: Trees starter](https://github.com/Thinkful-Ed/zid-dsa-trees-starter)
    

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-04-tree-bfs/content.md#breadth-first-search)Breadth-first search

The video below provides a brief introduction to tree breadth-first search. Start by watching the video, and then read through the rest of the lesson and complete the practice tasks. This will give you a thorough understanding of this topic.

Breadth-first search (BFS) works across the rows of a tree. In other words, the top row will be handled first, followed by the second row, and so on and so forth.

The tree is visited level by level. To implement a BFS algorithm, you need a first-in, first-out (FIFO) queue. When you visit a node, you add it to the queue. When all the nodes in the current level have been added to the queue, they are processed according to their order in the queue. The nodes are then removed from the queue. Then their children are visited, adding more values onto the queue.

This process continues until all the nodes in the tree have been visited.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-04-tree-bfs/content.md#do-this)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-04-tree-bfs/content.md#create-a-bfs-method)Create a bfs() method

In src/BinarySearchTree.js, import the Queue class at the top of the file, like this:

`const Queue = require("./Queue");`

Then, add a bfs() method to the BinarySearchTree class, as follows:

`...` `bfs(tree, values = []) {` `const queue = new Queue();` `queue.enqueue(tree); // Start the traversal at the tree and add the tree node to the queue to kick off the BFS` `let node = queue.dequeue(); // Remove from the queue` `while (node) {` `values.push(node.value); // Add that value from the queue to an array` `if (node.left) {` `queue.enqueue(node.left); // Add the left child to the queue` `}` `if (node.right) {` `queue.enqueue(node.right); // Add the right child to the queue` `}` `node = queue.dequeue();` `}` `return values;` `}`

`...`

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-04-tree-bfs/content.md#bfs-complexity-analysis)BFS complexity analysis

The runtime for BFS is O(n), where n represents the number of nodes in the tree. This is because each node needs to be visited once.

You will be using the same repository in the next lesson, so make sure to save the work that you complete in this lesson.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-04-tree-bfs/content.md#complete-example)Complete example

A completed example from this lesson can be found here:

- [GitHub: Trees—tree-bfs branch](https://github.com/Thinkful-Ed/zid-dsa-trees-starter/tree/tree-bfs-complete)