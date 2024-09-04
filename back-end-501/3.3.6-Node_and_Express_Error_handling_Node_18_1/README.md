# Node and Express: Error handling

This lesson should take you about 10-15 minutes. If you spend longer than that on this lesson, reach out for help!

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

Your goal for this lesson is to get the tests to pass. To do so, you will be building two functions to handle errors:

1. (AI-Assisted) A catch-all middleware function that is called whenever a nonexisting route is called. The response should be as follows:
    
    ```
    An error occurred: Could not find route.
    ```
    
2. (Independent) An error-handler middleware function that is called during an error (e.g., when the `next()` function is called with an argument). The error should be as follows, where `<error>` is whatever is the first argument of the error handler:
    
    ```
    An error occurred: <error>
    ```
    

## Tips

- You may complete this challenge on your own machine before uploading it to Qualified.
- Reference the related lesson for help on completing this practice problem.