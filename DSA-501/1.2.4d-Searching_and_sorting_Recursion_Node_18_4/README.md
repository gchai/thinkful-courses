# Searching and sorting: Recursion drills—Maze

In this challenge, you will solve a problem using recursion. The objective is to practice using recursion to think about and solve problems. You do not have to worry about the efficiency of your solutions.

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Existing files

|**File**|**Description**|
|---|---|
|`__tests__/maze.test.js`|Contains tests for the maze problem. You are welcome to look at this file, but do not modify it.|
|`src/maze.js`|Write your solutions to the maze problem in this file.|

## Find a way out of the maze

You have entered a maze and need to find your way out of it. There is more than one possible path through the maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.

You can use the following mazes to test your program.

```
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
```

The maze is represented as an N x M matrix (in the above case, a 3x3 or a 5x7 array). The starting point is the top-left corner, and the exit is indicated by `e`. You can't go outside the boundaries of the maze. The maze has passages that are blocked, and you can't go through them. These blocked passages are indicated by `*`. Passing through a blocked cell as well as passing through a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be `RRDDLLDDRRRRRR`.

Write a function that accepts a two-dimensional array for the maze and an array with two values for the current position in the maze. For example, you may call the function like this: `mazeSolver(maze, [0, 0])` to indicate that the starting position is at the top-left corner.

### Hints and Tips

- Understand the Problem: You need to find a path from the top-left corner to the exit ('e') in a maze represented as a 2D array. The function should return a string with the directions ('R', 'L', 'U', 'D') to get to the exit.
    
- Set Up Base Cases: In recursion, the base case is the condition under which the recursion ends. For this problem:
    

1. If the current position is out of bounds, return false.
2. If the current position is a wall ('*'), return false.
3. If the current position is the exit ('e'), return true.

- Mark the Path: To avoid cycles, mark the current position as visited. This can be done by replacing the current cell with a special character (e.g., 'v').
    
- Recursive Exploration: Try moving in each direction (right, down, left, up). If moving in one of these directions leads to the exit, return the direction and concatenate it to the path.
    
- Unmark the Path: If moving in all directions does not lead to the exit, unmark the current position (backtracking) and return false.
    

### Remember

1. Start Simple: Begin by handling simple base cases. Make sure your function can identify walls, out-of-bound positions, and the exit.
    
2. Recursion Flow: Focus on moving one step in each direction and using recursion to solve the sub-problem.
    
3. Backtracking: Remember to unmark positions when backtracking. This allows the algorithm to explore alternative paths.
    
4. Debugging: Use console logs to trace your path and understand how the recursion progresses.
    
5. Edge Cases: Test your function with edge cases, such as the smallest mazes or mazes with no possible path.