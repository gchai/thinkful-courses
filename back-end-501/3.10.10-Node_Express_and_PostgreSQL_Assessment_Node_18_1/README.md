# Node, Express, and PostgreSQL: Assessment

This lesson should take you between 60 and 90 minutes. If you spend longer than that on this lesson, reach out for help.

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

You are a backend developer at a blogging platform called Blogful, and you've been tasked to create an API that returns data about the users, comments, and posts stored in their database. Their backend technology stack is currently Node.js/Express, PostgreSQL, and Knex. You are given the following ERD:

![blogful_erd.jpg](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/6d900c44d458252c0ea16139d28b4e34-blogful_erd.png)

To complete this assessment, you will need to complete the tasks described below to get the tests to pass.

### Existing files

In this lesson, all the required server routes have already been set up for you, so you won't have to edit any of the `*.router.js` files. Take some time to understand the content of the existing files.

_**Note:** Do not directly change any of the seed files, as the tests rely on the specific test dataset to work properly._

You will then have to write Knex queries to complete the functions defined inside the `*.service.js` and `*.controller.js` files.

### Tasks

1. In `src/comments/comments.service.js`, complete the `list()` function to create a Knex query that retrieves all comments from the _comments_ table, selecting all columns.
    
    - Then, in `src/comments/comments.controller.js`, modify the `list()` function to call the service method and return a JSON of all comments in the response.
2. In `src/posts/posts.service.js`, complete the `create()` function to create a Knex query that creates a new post in the _posts_ table.
    
    - Then, in `src/posts/posts.controller.js`, modify the `create()` route handler to call the service method to return a `201` status code along with the newly created post.
3. In `src/posts/posts.service.js`, complete the `update()` function to create a Knex query that updates a post given a body with the updated post and the `postId` from the URL.
    
    - Then, in `src/posts/posts.controller.js`, modify the `update()` route handler to call the service method and return the updated post upon success.
4. In `src/posts/posts.service.js`, complete the `destroy()` function to create a Knex query that deletes a post given a post ID.
    
    - Then, in `src/posts/posts.controller.js`, modify the `delete()` route handler to call the service method and return a `204` status code on successful post deletion.
5. For the `/comments/commenter-count` path, the API should return a count of comments from each commenter, grouped by _user_email_, aliased to _commenter_email_, ordered by _commenter_email_ in your result. In `src/comments/comments.service.js`, complete `listCommenterCount()` to perform a join between _comments_ and _users_ tables here to get the needed columns.
    
    - Then, in `src/comments/comments.controller.js`, modify the `listCommenterCount()` function to call the service method accordingly and return the data.
6. In `src/comments/comments.service.js`, complete the `read()` function to retrieve a comment by ID, including the following columns in your result: _comment_id_, _comment_, _user_email_ aliased as _commenter_email_, and _post_body_ aliased as _commented_post_. You will need to perform a join between the _comments_, _users_, and _posts_ tables here. The `read()` method in the controller is already completed for you.