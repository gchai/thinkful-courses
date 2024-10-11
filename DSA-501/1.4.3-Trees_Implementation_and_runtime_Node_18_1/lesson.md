# Implementation and runtime

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to implement insertion, retrieval, and removal of nodes in a BST. You'll also be able to define the runtime of various operations on a BST.

## Key Terms

Balanced tree

A tree in which each row contains two times as many nodes as the row before

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#starter-code)Starter code

This lesson requires you to have the following repository running on your local machine.

- [GitHub: Trees starter](https://github.com/Thinkful-Ed/zid-dsa-trees-starter)
    

Fork and clone the following repository. Then, follow the instructions on how to get it to run.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#implementing-a-bst)Implementing a BST

The video below provides an introduction to binary search tree implementation.

Recall that a BST has the following characteristics: each node in a BST holds a key, a value, a left pointer, and a right pointer. The left and right pointers point to the left and right child nodes. Each node has a parent unless it's the root node.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#do-this)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#create-a-bst-class)Create a BST class

In BinarySearchTree.js, define a constructor for the BinarySearchTree class:

`class BinarySearchTree {` `constructor(key = null, value = null, parent = null) {` `this.key = key;` `this.value = value;` `this.parent = parent;` `this.left = null;` `this.right = null;`

`}`

Here's the breakdown of the syntax above:

- This constructor represents a single node in the tree. You can optionally pass in a key, a value, and a pointer to the parent node.
    
    - If the key property is null, then the object represents an empty tree.
        
    - If the parent pointer is null, then you are dealing with a root node.
        
    - The node starts with the left and right pointers to their child nodes being null.
        

BSTs support three fundamental operations: insert(), find(), and remove(). You will implement these operations next.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#insertion)Insertion

The video below provides an overview of the topic.

When you're inserting a new node into a tree, there are two base cases that you should consider:

- If there is no existing tree, then the first item that you insert will be inserted as the root of the tree.
    
- If you start with an existing tree, then you have to find the right place for the item that you want to insert and then insert it.
    

Suppose that you have an existing tree, as shown below, and you want to insert the key 10 into this existing tree.

![](https://images.ctfassets.net/c7lxnbtvvcxm/oHuhpfohwgnSwnLFLa12s/40e1c69c5157e82dd72042f7e9786f98/Eng-BST-insert1.png)

Here is an algorithm that you might follow:

- Starting at the root, which is 5, compare the root with 10 (the key to insert) to see if 10 should be the left or the right child of 5. 10 is greater than 5. So, as you may recall from the definition of BST, it will be a right child of 5.
    
- 5 already has a right child, which is 19. So now you have to check to see if 10 should be on the left or the right side of 19. Because 10 is less than 19, it should be a left child of 19, so you follow the left path of 19.
    
- 19 already has a left child, 15, so now you have to check to see if 10 should be on the left or the right side of 15. Because 10 is less than 15, and 15 doesn't have a left child, you can insert 10 as a left child of 15.
    

This creates a tree that looks like this:

![](https://images.ctfassets.net/c7lxnbtvvcxm/1LB05nWFbSP0NPpLEaiSYy/4a98cd00b54330c62630b32faed7da43/Eng-BST-insert2.png)

Binary search trees tend to be recursive in nature.

Think about it for a moment. You start at a root node, and you can only have a left and a right child. So if a node can have only two children, then each child node can also be a parent that has its own two child nodes, the left child and the right child. Each tree then can be composed of many subtrees. Each node in a tree is the root of a subtree beginning at that node.

As you may remember from the definition of recursion, recursion generally involves solving a problem in terms of similar subproblems and a base case. In tree recursion, you start with a root, perform an action, and then move to the left or right subtree (or both, successively). This process continues until you reach a null reference, which is the end of a tree (and a good base case).

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#do-this-1)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#create-the-insert-method)Create the insert() method

In BinarySearchTree.js, add an insert() method to the BinarySearchTree class that you defined earlier using recursion. This should look like this:

`insert(key, value) {` `// If the tree is empty, then this key being inserted is the root node of the tree.` `if (this.key == null) {` `this.key = key;` `this.value = value;` `}` `/* If the tree already exists, then start at the root,` `and compare it to the key that you want to insert.` `If the new key is less than the node's key,` `then the new node needs to live in the left-hand branch. */` `else if (key < this.key) {` `/* If the existing node does not have a left child,` ``meaning that the `left` pointer is empty,`` `then you can just instantiate and insert the new node` ``as the left child of that node, passing `this` as the parent. */`` `if (this.left == null) {` `this.left = new BinarySearchTree(key, value, this);` `}` `/* If the node has an existing left child,` ``then you recursively call the `insert()` method`` `so that the node is added further down the tree. */` `else {` `this.left.insert(key, value);` `}` `}` `/* Similarly, if the new key is greater than the node's key,` `then you do the same thing, but on the right-hand side. */` `else {` `if (this.right == null) {` `this.right = new BinarySearchTree(key, value, this);` `}` `else {` `this.right.insert(key, value);` `}` `}`

`}`

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#complexity-analysis-for-insert)Complexity analysis for insert()

How does insertion perform?

Essentially, with insertion, you have to iterate to the height of the tree.

In the best case, you would be inserting the root only, which would be O(1).

In the average case, nodes are inserted equally on the left and right branches. This produces what is known as a balanced tree. A balanced tree is a tree in which each row contains two times as many nodes as the row before; in other words, the width grows exponentially with the number of nodes. Conversely, the height must grow logarithmically with the number of nodes. So the average case for inserting a new key is O(log n).

In the worst case, a BST takes its worst possible shape: the tree skews either left or right. A skewed binary search tree is basically a linked list. Therefore, you will need to iterate through each of those nodes in order to get to the bottom of the tree to insert something. This makes the time complexity O(n).

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#retrieval)Retrieval

The video below provides an introduction to node retrieval.

Retrieval of nodes follows a similar pattern as insertion. You check the value of the key against the key stored in a node in the BST and recursively follow the left or right branch.

Suppose you want to know if the key 18 is in the following tree:

![](https://images.ctfassets.net/c7lxnbtvvcxm/4t2XJZHrPbrpuB4JSvA3XI/f073ea8dd77236ae22241258b08a1307/Eng-BST-find.png)

You would use this process:

1. Starting at the root, you have to decide which path to follow to find 18. You check and see that 18 isn't the root. You see that 18 is greater than the root, so you follow the right child of the root, which is 19.
    
2. You compare 18 with the right child. Because 18 is less than the right child (19), you follow the left child of 19 (15).
    
3. You compare 18 with the left child. Because 18 is greater than the left child, you follow the right path of 15 and find 18.
    

The find() operation described above is implemented next.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#do-this-2)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#create-the-find-method)Create the find() method

Again, as mentioned above, you can make use of recursion to find an item in a BST.

In BinarySearchTree.js, add a find() method to the BinarySearchTree class, as follows:

`find(key) {` `// If the item is found at the root, then return that value.` `if (this.key == key) {` `return this.value;` `}` `/* If the item that you are looking for is less than the root,` `then follow the left child.` `If there is an existing left child,` `then recursively check its left and/or right child` `until you find the item. */` `else if (key < this.key && this.left) {` `return this.left.find(key);` `}` `/* If the item that you are looking for is greater than the root,` `then follow the right child.` `If there is an existing right child,` `then recursively check its left and/or right child` `until you find the item. */` `else if (key > this.key && this.right) {` `return this.right.find(key);` `}` `// You have searched the tree, and the item isn't in the tree.` `else {` `throw new Error('Key Not Found');` `}`

`}`

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#complexity-analysis-for-find)Complexity analysis for find()

In the best case, the node that you are trying to find is the root node, which would be O(1).

In the average case, you would traverse the height of a balanced tree, which would be O(log n).

In the worst case, just like insert(), the tree is skewed left or right, and you are searching for the node at the bottom where everything is inserted to one side, so it would take O(n) time.

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#removal)Removal

The video below provides an introduction to removing items from binary search trees.

Removing items from a binary search tree is a little more tricky. First, use the find process described above to find the item that you want to remove. At this point, the removal process will differ depending on how many children that item has. The item that you want to remove will fit into one of the following three categories:

- No children (a leaf node)
    
- One child (left or right, doesn't matter)
    
- Two children (left and right)
    

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#node-with-no-children)Node with no children

If you find the item that you want to remove and it has no children, this will be the simplest case of removal. The idea is to detach this node from the parent. Suppose in the following example, you want to delete the item 18.

![](https://images.ctfassets.net/c7lxnbtvvcxm/6BFJFDOdJNcCeceUeUnU9Y/fb3c4afb2450613c7cf434fbcace9607/Eng-BST-remove1.png)

After you find 18, and see that 18 has no children, you remove it from the BST by breaking the link to the parent.

![](https://images.ctfassets.net/c7lxnbtvvcxm/5jbPZMbgXxMzgf18ysnNte/c2633ea8019be436985909e8dd8b0728/Eng-BST-remove2.png)

The resulting tree looks as follows:

![](https://images.ctfassets.net/c7lxnbtvvcxm/3P7RrtLSiM7yBf5JY5HEjI/e75baabdfecfb168830210e6eab883dc/Eng-BST-remove3.png)

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#node-with-one-child)Node with one child

Consider the following tree, and say that you want to remove the key 28 from it. The key 28 has one child, a left child: 21.

![](https://images.ctfassets.net/c7lxnbtvvcxm/6QhCtQxmAqkNz72MlzWCRt/0f42855f2e4e10269f665078ca4b93bd/Eng-BST-oneChild1.png)

If the item that you want to remove has one child, then you make the parent of the item that you are removing point to this one child. Then you detach the item that you want to remove from the parent. You will make 21 the right child of 19 and detach 28 from being the right child of 19.

This way, the child of the node that you removed (21) has a new parent (19), which was the parent of the node that you just removed.

![](https://images.ctfassets.net/c7lxnbtvvcxm/44IKkVJKoxMMAsXvFtaSZW/f0d7dcf39e37109b18e40c162e643789/Eng-BST-oneChild2.png)

The resulting tree looks as follows:

![](https://images.ctfassets.net/c7lxnbtvvcxm/7z7h04KXvIdAxyJcueTW3h/257535b891f457bfa2ace80dfa219b02/Eng-BST-oneChild3.png)

Similarly, if you were to remove 15, which has one child (10), you would make 10 the left child of 19 and detach 15 from the tree.

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#node-with-two-children)Node with two children

The trickiest part of removal from a BST occurs when an item that you want to remove has both a left and a right child.

Imagine that you want to delete the root node of a BST. You are faced with the decision of which should replace the root. Each left and right child can have subtrees. And more importantly, you must retain the properties of the BST after you remove the node.

To delete a node from a BST that has two children, you must find a successor that will replace the removed node. To do so, follow these steps:

1. Find the minimum value in the right subtree.
    
2. Replace the value of the node to be removed with the found minimum. Now, the right subtree contains a duplicate.
    
3. Apply remove() to the right subtree to remove the duplicate.
    

Suppose that you have the following BST. You will remove the node 19 from it. Notice that 19 has both a left and a right child.

![](https://images.ctfassets.net/c7lxnbtvvcxm/2bCBjVJWInceYT04VQc3oA/83de308edc1f970d168210b9b17c6b81/Eng-BST-twoChilden1.png)

Start by finding a successor to replace 19. Find the minimum element in the right subtree of 19, which is 20. (Remember, according to the definition of a BST, the minimum value on the right side of a BST is the node in its leftmost subtree.)

![](https://images.ctfassets.net/c7lxnbtvvcxm/2r57hOOsY3KG5NGMgcfqWi/94c7eec9cbe4406c23c2a515f3b2de3c/Eng-BST-twoChilden2.png)

Replace 19 with 20. In this case, only the values are replaced, not the nodes. You now have two nodes with the same value.

![](https://images.ctfassets.net/c7lxnbtvvcxm/1X9MEoU8eApD7GguwDovga/4928b5b2aa28bc991810f006e85f7f0b/Eng-BST-twoChilden3.png)

Remove 20 from the left subtree. The resulting BST looks as follows:

![](https://images.ctfassets.net/c7lxnbtvvcxm/2eRWmSoSH4TcBZvyfKzP6n/2cb5ae1fb3ffee9f67d0a07b381141b0/Eng-BST-twoChilden4.png)

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#do-this-3)Do this

#### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#create-the-remove-method)Create the remove() method

In BinarySearchTree.js, add a remove() method to the BinarySearchTree class, as follows:

`remove(key) {` `if (this.key == key) {` `if (this.left && this.right) {` `const successor = this.right._findMin();` `this.key = successor.key;` `this.value = successor.value;` `successor.remove(successor.key);` `}` `/* If the node only has a left child,` `then you replace the node with its left child. */` `else if (this.left) {` `this._replaceWith(this.left);` `}` `/* And similarly, if the node only has a right child,` `then you replace it with its right child. */` `else if (this.right) {` `this._replaceWith(this.right);` `}` `/* If the node has no children, then` `simply remove it and any references to it` ``by calling `this._replaceWith(null)`. */`` `else {` `this._replaceWith(null);` `}` `}` `else if (key < this.key && this.left) {` `this.left.remove(key);` `}` `else if (key > this.key && this.right) {` `this.right.remove(key);` `}` `else {` `throw new Error('Key Not Found');` `}`

`}`

As you may have noticed from the code above, you will need to add two helper methods that you will use to remove a node: _replaceWith() and _findMin():

- _replaceWith() is used to find the node you want to use to replace a node that has children. If the node that you are replacing has a parent, then you need to wire up the references from the parent to the replacement node, and the replacement node back to the parent. Otherwise, if the node is a root node, then you simply copy over the properties of the replacement node.
    
- _findMin() is used to find the minimum value from the right subtree. When you are removing a node from the tree that has two children, you want to replace the node with the smallest node from the right subtree.
    

In BinarySearchTree.js, add _replaceWith() and _findMin() to the BinarySearchTree class, as follows:

`_replaceWith(node) {` `if (this.parent) {` `if (this == this.parent.left) {` `this.parent.left = node;` `}` `else if (this == this.parent.right) {` `this.parent.right = node;` `}` `if (node) {` `node.parent = this.parent;` `}` `}` `else {` `if (node) {` `this.key = node.key;` `this.value = node.value;` `this.left = node.left;` `this.right = node.right;` `}` `else {` `this.key = null;` `this.value = null;` `this.left = null;` `this.right = null;` `}` `}` `}` `_findMin() {` `if (!this.left) {` `return this;` `}` `return this.left._findMin();`

`}`

### [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#complexity-analysis-for-remove)Complexity analysis for remove()

For removal of a node from a tree, you can use similar logic as insertion and retrieval to reason that the best case is O(1), the average case is O(log n), and the worst case is O(n).

## [](https://github.com/Thinkful-Ed/web-dev-programs/blob/master/library/zid-dsa-trees-02-implementation-and-runtime/content.md#complete-example)Complete example

A completed example from this lesson can be found here:

- [GitHub: Trees starter—implementation and runtime branch](https://github.com/Thinkful-Ed/zid-dsa-trees-starter/tree/implementation-runtime-complete)