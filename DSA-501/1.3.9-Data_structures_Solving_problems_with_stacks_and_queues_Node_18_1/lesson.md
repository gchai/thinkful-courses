# Solving problems with stacks and queues

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to create algorithms to solve simple problems using stacks and queues.

#### Overview

###### Now that you have fully implemented stack and queue data structures, it is time to apply these structures to problems. Stacks and queues are used in many areas of computing, and they can be quite useful in solving some fairly common problems.

The following problems can all be solved with stacks or queues. For each problem, a brief description of the approach is given, along with a pseudocode algorithm. Your task is to implement the algorithms and observe their behaviors.

## Starter code

Starter code for this lesson may be found in this repository:

- [GitHub: Solving problems with stacks and queues starter](https://github.com/Thinkful-Ed/starter-solving-problems-with-stacks-and-queues)
    

Fork and clone the above repository. Then, follow the instructions on how to get it to run.

## Problem 1: Check for a palindrome

A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, "dad" is a palindrome; "A man, a plan, a canal: Panama" is a palindrome if you take out the spaces and ignore the punctuation; and "1,001" is a numeric palindrome. You can use a stack to determine whether a given string is a palindrome.

Write an algorithm that uses a stack to determine whether a given input is a palindrome. Use the following template as a starting point.

`const isPalindrome(sentence) => {` `sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");` `// Your code goes here`

`}`

### Discussion

There are several ways to check if a given sentence is a palindrome. They all boil down to comparing the first half of the string to the second half.

The first step is to remove all non-letter and non-digit characters.

![](https://images.ctfassets.net/c7lxnbtvvcxm/5NC9WQhqY0i4lma8a3zD5h/acd4fc69fcbd208f6d22530f47a9ae26/Eng-palindromes_001.png)

Then split the string into two by dividing its length by two.

![](https://images.ctfassets.net/c7lxnbtvvcxm/5CXEvhIY7Q6RsbdwL06Low/32ceda09f5b5b8224b3729d36708aee1/Eng-palindromes_002.png)

Lastly, compare the first half with the second half in reverse.

![](https://images.ctfassets.net/c7lxnbtvvcxm/11dMl9YKdn2RgBXHNZqmQo/9b67cfbcd9a25e41897063759707f8c0/Eng-palindromes_003.png)

Using a stack makes this comparison fairly straightforward. You can just push all the characters from the first half of the string onto a stack. Then continue iterating the second half of the string and comparing each character with a character popped off the stack. This way, the reversal is automatic.

![](https://images.ctfassets.net/c7lxnbtvvcxm/2XZ0NdwPplGbwK4Y9zgtfr/9fa5cf253a3935ba1a10921048908130/Eng-palindromes_004.png)

When iterating through the second half of the string, pop a single character off of the stack and compare it to the current character from the second half of the string. If they don't match, the string isn't a palindrome.

Note: If a string has an odd number of characters, you will essentially ignore the middle character. This is because the middle character doesn't determine whether the string is a palindrome. It's the characters on either side of the middle value that determine whether the sentence is a palindrome.

If you get to the end of the string and the stack is empty, then the string is a palindrome.

![](https://images.ctfassets.net/c7lxnbtvvcxm/5EANccs86cds3Ojf1aaCGV/a9aac9afdcd2af8e0a362cafb9b82a8a/Eng-palindromes_005.png)

### Pseudocode

In pseudocode, the above algorithm may be written as follows:

1. Remove all spaces and punctuation from the sentence and make all characters lowercase.
    
2. Declare a variable middle and initialize it to half the length of the sentence, rounding down to an integer value for odd-length strings. For example, if the sentence is of length 7, then middle is 3.
    
3. Initialize a new stack.
    
4. Iterate through the sentence, from the first character up to middle. Push each character onto the stack.
    
5. Iterate from middle to the end of the sentence. If the sentence is an odd length, then iterate from middle+1 to skip the middle character of the sentence. On each iteration, pop a character from the stack and compare it to the current character. If they don't match, return false.
    
6. When the loop is done, return true.
    

### Do this

#### Implement the palindrome algorithm

Use the starter repository to implement the algorithm outlined above. The tests in the repository will help you determine if the algorithm is correct.

## Problem 2: Matching parentheses in an expression

Another problem that can be solved using a stack is making sure that equations have matching parentheses.

Arithmetic expressions may contain parentheses for clarification. For example, the following expression is valid:

`(a + b) * c`

But the following expression is not:

`((a + b) * c`

Write an algorithm that accepts an expression as a string and returns true if the parentheses in the expression match and false otherwise.

### Discussion

A naive approach to solving this problem is to count the number of opening parentheses and the number of closing parentheses and compare them. If they match, then the expression must be correct, right? Not necessarily! For example, what about a+)b-c(+d? There is exactly one opening parenthesis ( and one closing parenthesis ), but the expression isn't correct.

Each closing parenthesis must be matched to an opening parenthesis for this to work. This is where using a stack is useful.

The basic concept is to iterate through each character in the expression. If the character is (, then push it onto the stack.

Note: Because parentheses are the only characters of import in this problem, you will only put ( onto the stack. When you encounter ) in the string, you will compare the ) to the stack of (.

In the example below, by the time that you iterate to index=2, you have placed two ( characters onto the stack.

![](https://images.ctfassets.net/c7lxnbtvvcxm/mWsAD8ZIN06bBLlkEwv5E/fc4fb3279db240ac5b1a7fdf0789ec76/Eng-parentheses_001.png)

When iterating through a string, when you reach a ) character, you will pop one ( character off of the stack. This is how you match opening and closing parentheses. As illustrated below, index=5 is a closing parenthesis, so you pop one opening parenthesis off of the stack.

![](https://images.ctfassets.net/c7lxnbtvvcxm/3pUQ8D2KElyvyil8CjqUWs/4b89082e0e2d1a899ebdad951eed0d49/Eng-parentheses_002.png)

If the stack is empty and you come across a ) in your string, then you know that the expression is invalid, so return false.

At the end of the expression, an empty stack means that the expression was valid, so return true.

![](https://images.ctfassets.net/c7lxnbtvvcxm/HRIJ5OKP3ITz3yDu83DcT/b576f095cdfb2a2871a9b66eac8a01f1/Eng-parentheses_003.png)

If the stack isn't empty at the end of the expression, it means that there is at least one extra ( in the expression.

### Pseudocode

In pseudocode, this algorithm goes as follows:

1. Initialize a new empty stack.
    
2. Start a loop to iterate through each character in the expression.
    
    1. If the current character is (:
        
        1. Push it onto the stack.
            
    2. Else:
        
        1. If the current character is ):
            
            1. If the stack isn't empty:
                
                1. Pop one item off the stack.
                    
            2. Else:
                
                1. Return false.
                    
3. If the stack is empty:
    
    1. Return true.
        
4. Else:
    
    1. Return false.
        

### Do this

#### Implement the parentheses-matching algorithm

Use the starter repository to implement the algorithm outlined above. The tests in the repository will help you determine if the algorithm is correct.

## Problem 3: Infix to postfix

Stacks can also be used to convert notations from infix to postfix for disambiguating mathematical operations, as explained below.

An arithmetic expression is said to be in infix notation when it takes the following form:

`left-operand operator right-operand`

For example, the expressions 1 + 2 and 3 * 5 are infix expressions.

Sometimes, to avoid ambiguities with the order of operations (also called the precedence of operators), parentheses are used. The following are all valid infix expressions:

`(2 + 3) * 4` `(2 + (4 - 5) * 3)`

`8 / (6 + 2)`

Parsing and evaluating expressions in this form is particularly slow. So typically, your compiler converts arithmetic expressions from infix notation to postfix notation.

An arithmetic expression is said to be in postfix notation when it takes the following form:

`left-operand right-operand operator`

For example, the infix expression 2 + 3 may be written as 2 3 + in postfix notation.

The following are all valid postfix forms of the infix expressions above:

`2 3 + 4 *` `2 4 5 - 3 * +`

`8 6 2 + /`

Write an algorithm that will take an arithmetic expression in infix form as a string and return the expression in postfix form.

Assume the following:

- The four operators +, -, /, and * are the only ones used.
    
- * and / have the highest precedence, followed by + and -.
    
- The operands provided are all single characters.
    
- All expressions provided are valid arithmetic expressions, so there's no need to validate them.
    

### Discussion

This algorithm is a little more involved than the previous two. You need to consider the precedence of operators as well as the meaning of parentheses in the expression.

There are several paths to consider. A simple example may help. Suppose that you wanted to convert the infix expression (a + b) * c into postfix notation. Start by initializing a stack and an empty result string.

Then iterate through each character in the expression.

If you come across a (, push it onto the stack. If you come across an operand, add it to the result.

![](https://images.ctfassets.net/c7lxnbtvvcxm/3q7t1aIMmU73JAkFBgu18H/09f8ad51a2153c8654092b35f0ce35c2/Eng-postfix_001.png)

When you come across an operator, there are a few options to consider. If there is already another operator at the top of the stack, then compare the precedence of the operators. Push the current operator onto the stack if one of the following criteria is met:

- It has higher precedence than the one on the stack
    
- The stack is empty
    
- The top of the stack is (
    

![](https://images.ctfassets.net/c7lxnbtvvcxm/39IRm1sgRbUg9GTebCnK2e/7c1495946a3aae84022c01405a461175/Eng-postfix_002.png)

If the current operator has lower precedence than the one on the stack, then simply pop each character off of the stack and append it to the result until you either find an operator that has lower precedence than the current operator, or you find ). Only then, push the current operator onto the stack.

When you find a ), then pop from the stack and append to the result until you find (.

![](https://images.ctfassets.net/c7lxnbtvvcxm/7LCy3ZeMYaUxfBxRFAneaM/f0667dfc1a9ad4991488f56220bab1ff/Eng-postfix_003.png)

When you have processed every character in the expression, simply pop any remaining items from the stack and append them to result. At this point, the result contains the postfix form of the expression.

### Pseudocode

1. Declare a variable named stack and initialize it to a new stack.
    
2. Declare a variable named result and initialize it to an empty array.
    
3. Iterate through each character in the expression, ignoring spaces.
    
    1. If the current character is (, push it onto the stack.
        
    2. If the current character is ), start popping characters off the stack and add each character to the result until you find a (. Do not add the parentheses to the result.
        
    3. If the current character is an operator:
        
        1. Look at the operator at the top of the stack.
            
        2. If the stack is empty, or if the top of the stack is (, or if the current operator has higher precedence than the operator on the top of the stack, then push the current operator onto the stack.
            
        3. Otherwise, start popping operators off the stack if the stack is not empty and the popped operator has higher or equal precedence to the current operator. Each popped operator is added to the result.
            
        4. Push the current operator onto the stack.
            
    4. If the current character is an operand, add it to the result.
        
4. Pop any remaining operators from the stack and add them to the result.
    
5. Return the result as a string.
    

### Do this

#### Implement the infix-to-postfix algorithm

Use the starter repository to implement the algorithm outlined above. The tests in the repository will help you determine if the algorithm is correct.

## Problem 4: Are two people connected?

Suppose you work for a massive social network with many millions of users. You need to determine if two given users of the network are connected to each other.

Users of the social network may "follow" each other, but the relationship isn't necessarily mutual. That is, Alice may follow Bob, but Bob may not necessarily follow Alice.

Consider the following diagrammatic representation of a part of the network:

![](https://images.ctfassets.net/c7lxnbtvvcxm/1A4PLxx2S4QZtVyaG8rkYd/afdf20db72f9c12178a490a47bb8733e/Eng-friends-graph.png)

In this diagram, an arrow indicates who a user follows.

- Alice follows Bob and Carl
    
- Bob follows Dave, and Dave follows Bob
    
- Both Bob and Eve follow Dave and Fred
    
- Fred doesn't follow anyone
    
- Alice has no followers
    

The objective is to search for a path from any given user to any other user. For example, there is a path from Bob to Eve. That path is Bob -> Dave -> Carl -> Eve. But there is no path from Eve to Alice.

Internally, this network of users and their connections may be represented as an object where the keys are the user's identity and the values are an array of the users they follow. The above network may be represented like this:

`const graph = {` `Alice: ["Bob", "Carl"],` `Bob: ["Dave", "Fred"],` `Carl: ["Eve"],` `Dave: ["Carl", "Bob"],` `Eve: ["Dave", "Fred"],` `Fred: [],`

`};`

Write a function that accepts the above network object and two users. The network object will be named graph, the first user will be named startUser, and the second user will be named endUser. The function will return true if there is a path from startUser to endUser, and false otherwise.

### Discussion

A naive approach would require a nested loop that starts at startUser and considers every possible path from startUser until endUser is found. On a large graph, this will simply take too long. Also, keeping track of which paths have already been considered may occupy too much space.

Instead, you can use a breadth-first search (BFS) strategy to search the network of friends, such that you consider each friend in the network only once. The algorithm uses a queue to track which friends have been discovered, and it uses an enqueued array to track which users have been added to the queue.

To understand how the algorithm proceeds, take a look at the following diagrams.

Initially, each user node in the following diagram is white, indicating that the node hasn't been discovered yet. Once discovered, the user is enqueued, and the node is filled with gray lines. After everyone the user is following has been discovered, the user node is colored solid gray. These colors are simply indicators of the state of the user; they're there to make it easier to see how the algorithm proceeds.

In the following example, you are trying to determine if there is a path from Alice to Fred. To implement this algorithm, you will take the following steps:

![](https://images.ctfassets.net/c7lxnbtvvcxm/6OXbIxBhuPW4kgBgRqpsRt/cacdce08de946833db56e54e16b029fd/Eng-friends_001.png)

The algorithm proceeds by dequeuing a value—Alice, in this case—from the queue. Everyone who is followed by the dequeued user is added to the queue, and they are now considered discovered.

![](https://images.ctfassets.net/c7lxnbtvvcxm/7i8zsqXaksiDUIEYyEVQqL/d14f8e68f35c9e70558cfa91a582c411/Eng-friends_002.png)

The iteration continues by dequeuing the next value from the queue and repeating the process. The enqueued array helps ensure that any user is added to the queue only once.

![](https://images.ctfassets.net/c7lxnbtvvcxm/1HHSuMYFel7COMbUP9fyYU/5c5c0eb6fee42ee4732a566add60528e/Eng-friends_003.png)

Once the endUser is found in the list of followers, the algorithm can stop because there is a path from startUser to endUser.

If all the nodes are fully explored and endUser isn't found, then there is no path from startUser to endUser.

### Pseudocode

The pseudocode algorithm is as follows:

1. If graph is empty (has no keys), return false.
    
2. If startUser is equal to endUser, return true.
    
3. Initialize a new array, enqueued, that contains startUser.
    
4. Initialize a new empty queue named discovered.
    
5. Enqueue startUser.
    
6. While discovered isn't empty, do the following:
    
    1. Dequeue a value from discovered and name it user.
        
    2. For each friend followedUser in graph[user], do the following:
        
        1. If followedUser is equal to endUser, return true.
            
        2. If enqueued doesn't include followedUser, do the following:
            
            1. Add followedUser to enqueued.
                
            2. Enqueue friend to discovered.
                
7. Return false.
    

In this algorithm, the enqueued array is used to make the algorithm more efficient by making sure that any given user is explored only once. If a similar problem comes up, you can adapt this algorithm to track information other than enqueued. For example, you might track the number of nodes between two users, or track which user is following the most people.

### Do this

#### Implement the connected-friends algorithm

Use the starter repository to implement the algorithm outlined above. The tests in the repository will help you determine if the algorithm is correct.

## Complete example

A completed example from this lesson can be found in the Solution branch of this repository:

- [GitHub: Solving problems with stacks and queues starter—Solution branch](https://github.com/Thinkful-Ed/starter-solving-problems-with-stacks-and-queues/tree/solution)