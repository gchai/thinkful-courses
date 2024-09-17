# React Router: Assessment

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

To complete this assessment, you will need to update existing code to make use of React Router. The existing code has no routes and shows every view on the same page.

![project-unfinished.png](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/e70b82f8b85f92fa0468bde49f1a0089-oject-unfinished.png)

Below and in the code are various `TODO` items that should help you build the project as expected. With that said, feel free to make the changes you feel are necessary to accomplish the tasks.

## Overview

You'll be fixing the routing for a community blog that shows multiple users and their multiple posts. All the views are already there—you just need to add the routing.

### API

This project makes use of the [JSONPlaceholder API](https://jsonplaceholder.typicode.com). It's a free API that can be used to test out services you're building. It's important to note that this API will _not_ update any data. In this project, when you click the **Delete** button, no data will actually be deleted. This should not affect your completion of the project.

### Home

The home view ( `/`) should only show a list of users.

![project-home.png](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/ea5adc8db57115e822550473f7d5a356-project-home.png)

If you click on the user's name, it will bring you to the user's profile view. If you click on the link underneath the user's name, it will bring you to the user's posts view.

### Profile

The profile view (`/users/:userId`) shows a link to return to the home view and information about the user.

![project-user.png](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/23ea178b5f6abf72d1fbc5d80f31dc7c-project-user.png)

If you click on the **Posts** tab, it will go to that user's posts view.

### Posts

The posts view (`/users/:userId/posts`) shows all the posts by the user. By default, it will show a message that says no post is selected.

![project-posts-unselected.png](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/21958c47ddb60a12ae2429603cf711f7-posts-unselected.png)

If you click on one of the posts, it will show up with the content and a **Delete** button.

![project-posts-selected.png](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/ac4676c2fbfb3c831192e76334187a25-t-posts-selected.png)

When the **Delete** button is clicked, the user should be brought back to the home view.

The following diagram provides a visual hierarchy of the React component files that render the components that comprise the app:

![Lesson 25.7 React Component File Diagram.png](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/8f447d080ed0bc3d0f7801136761f7d4-ent_File_Diagram.png)

Note that the `PostLink` and `Card` components are rendered as many times as there are link or card items to render.

## To dos

- Navigating to an unknown URL shows "Page not found!"
- Navigating to `/` does not show "Go Home", user info, or blog posts.
    - They should **not** see a "Go Home" button or link.
    - They should **not** find any user information displayed.
    - They should **not** see any blog posts.
- `Card` Component
    - Displayed name links to `users/:userId`.
    - (Number of) Posts » links to `users/:userId/posts`.
- `NotFound` component
    - Contains a link to `/`.
- `Post`
    - Delete post redirects to home page.
- `PostLink`
    - (Number of) Posts » links to links to `users/:userId/posts`.
- `PostList`
    - Links to posts use `users/:userId/posts`.
    - When no post is selected, displays "No post selected"
- `PostNav`
    - Go home links to `/`.
- `User`
    - Navigating to an unknown user shows an error message and link to `/`.
    - `PostList` shows on `/users/:userId/posts` route.
    - `UserProfile` shows on `/users/:userId` route.
- `RootRoutes`
    - Follow the instructions inside this component, which is used by `App.js`

## Tips

- You may complete this challenge on your own machine before uploading it to Qualified.
- Reference the related lesson for help on completing this practice problem.