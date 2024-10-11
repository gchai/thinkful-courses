# Depth-first search

**1.5 hours**Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to implement in-order, pre-order, and post-order tree traversals.

#### Overview

###### Searching through trees can be done in a few different ways. A depth-first search is one of the most common ways.

## Key Terms

Depth-first search

DFS, a tree-traversal algorithm that starts from the root node, explores as far as possible in a subtree, and then backtracks before moving to the next subtree

In-order traversal

Traversal in which the left branch of the node is visited, then the current node is handled, and then the right branch is visited

Pre-order traversal

Traversal in which the current node is handled first, then the left branch of the node is visited, and then the right branch is visited

Post-order traversal

Traversal in which the left branch of the node is visited, then the right branch is visited, and then the current node is handled last

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#starter-code)Starter code

This lesson continues using the project that you created in the previous lesson. If you need to, you can download that code here:

- [GitHub: Trees starter](https://github.com/Thinkful-Ed/zid-dsa-trees-starter)
    

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#what-is-depth-first-search)What is depth-first search?

Depth-first search (DFS) is an algorithm for traversing or searching a tree. It's typically implemented recursively. You can use DFS to search a tree using in-order, pre-order, or post-order traversals; each traversal will process the nodes in a different order. Next, you'll learn how to explore a tree with each of these traversals.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#in-order-traversal)In-order traversal

The video below provides an introduction to binary tree in-order traversal. Start by watching the video, and then read through the rest of the lesson and complete the practice tasks. This will give you a thorough understanding of these topics.

In-order traversal means that the left branch of the node is visited, then the current node is handled, and then the right branch is visited.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#do-this)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#create-a-dfsinorder-method)Create a dfsInOrder() method

In src/BinarySearchTree.js, add a dfsInOrder() method to the BinarySearchTree class, as follows:

`...` `dfsInOrder(values = []) {` `// First, process the left node recursively` `if (this.left) {` `values = this.left.dfsInOrder(values);` `}` `// Next, process the current node` `values.push(this.value);` `// Finally, process the right node recursively` `if (this.right) {` `values = this.right.dfsInOrder(values);` `}` `return values;` `}`

`...`

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#pre-order-traversal)Pre-order traversal

The video below provides an introduction to the topic.

Pre-order traversal means that the current node is handled first, then the left branch of the node is visited, and then the right branch is visited.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#do-this-1)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#create-a-dfspreorder-method)Create a dfsPreOrder() method

In src/BinarySearchTree.js, add a dfsPreOrder() method to the BinarySearchTree class, as follows:

`...` `dfsPreOrder(values=[]) {` `// First, process the current node` `values.push(this.value);` `// Next, process the left node recursively` `if (this.left) {` `values = this.left.dfsPreOrder(values);` `}` `// Finally, process the right node recursively` `if (this.right) {` `values = this.right.dfsPreOrder(values);` `}` `return values;` `}`

`...`

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#post-order-traversal)Post-order traversal

The video below provides an overview of the topic.

Post-order traversal means that the left branch of the node is visited, then the right branch is visited, and then the current node is handled last.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#do-this-2)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#create-a-dfspostorder-method)Create a dfsPostOrder() method

In src/BinarySearchTree.js, add a dfsPostOrder() method to the BinarySearchTree class, as follows:

`...` `dfsPostOrder(values = []) {` `// First, process the left node recursively` `if (this.left) {` `values = this.left.dfsPostOrder(values);` `}` `// Next, process the right node recursively` `if (this.right) {` `values = this.right.dfsPostOrder(values);` `}` `// Finally, process the current node` `values.push(this.value);` `return values;` `}`

`...`

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#dfs-complexity-analysis)DFS complexity analysis

Because each node in the BST is visited, the time complexity in the worst case is O(n), where n represents the number of nodes in the tree.

You will be using the same repository in the next lesson, so make sure to save the work that you complete in this lesson.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-03-tree-dfs/content.md#complete-example)Complete example

A completed example from this lesson can be found here:

- [GitHub: Trees—tree-dfs branch](https://github.com/Thinkful-Ed/zid-dsa-trees-starter/tree/tree-dfs-complete)