# Connecting it all: CORS

- You've been hired as a backend API developer at Smarty plants!
- Another developer created the API, and the frontend developer keeps getting CORS errors when they try to use it.
- You have been tasked with enabling CORS on specific URLs so that
- the frontend developers can keep working.

To succeed at this challenge, you'll need to demonstrate that you can do the following:

- Modify existing Express Router configuration to enable CORS.

You will not need to make any edits to HTML or CSS for this project.

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

Your goal for this lesson is to get the tests to pass.  
To do so, you will be modifying an existing API server with two resources, `users` and `plants`, in addition to error handling.  
Your server should follow the structure you've learned in the course.

### Existing files

|File path|Description|
|---|---|
|`src/app.js`|Contains the Express application. You will not need to make changes to this file.|
|`src/data/plants-data.js`|Contains the plants data. This is the shape of the plant data that the API will send and receive. You can add or remove plants if you like.|
|`src/data/users-data.js`|Contains the users data. This is the shape of the user data that the API will send and receive. You can add or remove users if you like.|
|`src/errors/errorHandler.js`|Exports the error handler function for use by the Express application.|
|`src/errors/methodNotAllowed.js`|Exports the 405 Method Not Allowed handler function for use by the Express application.|
|`src/errors/notFound.js`|Exports the 404 Not Found handler function for use by the Express application.|
|`src/plants/plants.controller.js`|Contains middleware and handlers for plants. You will not need to make changes to this file.|
|`src/plants/plants.router.js`|Contains the router configuration for plants. Add CORS middleware to this file as needed to pass the tests.|
|`src/server.js`|Contains the server code. You will not need to make changes to this file.|
|`src/users/users.controller.js`|Contains middleware and handlers for users. You will not need to make changes to this file.|
|`src/users/users.router.js`|Contains the router configuration for users. Add CORS middleware to this file as needed to pass the tests.||
|`src/utils/nextId.js`|Exports the `nextId` function. Use this function anytime you need to assign a new `id`. You will not need to make changes to this file.|
|`test/cors.test.js`|Tests for the necessary CORS configuration. You will not need to make changes to this file.|

### Tasks

Complete the following tasks to pass the tests and this assessment.

1. In the `src/plants/plants.router.js` file, make the necessary changes to enable CORS for the entire router.
2. In the `src/users/users.router.js` file, enable CORS for any GET to `/users`, and `/users/:userId`.

Once these tasks are complete, all tests should pass.