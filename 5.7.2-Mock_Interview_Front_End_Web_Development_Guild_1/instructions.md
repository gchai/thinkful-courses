# Front End Web Development Interview

We have a site that displays user posts from our jsonplaceholder website.  
For this challenge, we're going to display comments from user posts using the [JSONPlaceholder API](https://jsonplaceholder.typicode.com). You should be familiar with this API from past exercises.

Great job on making it this far in the course. You got this!

## Success Criteria

- Functionality:
    - Posts load from `https://jsonplaceholder.typicode.com/posts?userId=1` and are displayed on the page. The page displays posts for just one user as specified by the `userId`.
    - The page displays the `title` and `body` properties from the post
    - When a post's body is clicked, the post's comments are fetched from `https://jsonplaceholder.typicode.com/posts/${postId}/comments`.
    - The page displays the `body` property of all the comments for a post on the page after the post is clicked

## Specific Instructions and helpful tips

- Posts have this structure:
    
    ```
    {
      "userId": 1,
      "id": 1,
      "title": "sundent occaecati excepturi optio reprehenderit",
      "body": "quia et recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    ```
    
- The post should display the title and body
- Each post has 5 comments
- A post's comments have the following structure:
    
    ```
    {
      "postId": 1,
      "id": 4,
      "name": "alias odio sit",
      "email": "Nav@fav.tv",
      "body": "non et leniti ut occaecati"
    }
    ```
    
- A post's comments should only show after the post body is clicked.
- All information can be displayed on the same page
- It's not necessary to use an `AbortController` to pass the tests.