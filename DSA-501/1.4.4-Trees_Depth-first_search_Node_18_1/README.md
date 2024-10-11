# Trees: Depth-first search

To succeed at this challenge, you'll need to demonstrate that you can do the following:

- Implement depth-first search traversal of a BST.

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

Your goal for this assessment is to get the tests to pass.

To do so, you will be modifying the existing `BinarySearchTree` class to add methods that traverse the BST using in-order, pre-order, and post-order traversals.

### Existing files

|File path|Description|
|---|---|
|`src/BinarySearchTree.js`|Contains the definition of the `BinarySearchTree` class. The `constructor()` method and methods from the previous lesson assessments have already been completed for you.|

### Tasks

Complete the following tasks to pass the tests and this assessment.

In the `src/BinarySeachTree.js` file, complete the `dfsInOrder()`, `dfsPreOrder()`, and `dfsPostOrder()` methods to visit the BST using in-order, pre-order, and post-order traversals, respectively.

Once these tasks are complete, all tests should pass.