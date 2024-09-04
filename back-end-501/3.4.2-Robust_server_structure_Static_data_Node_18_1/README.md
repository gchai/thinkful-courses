# Robust server structure: Static data practice

Your task is to build an API server for users and states. It should handle the following routes:

- `/users` returns an array of users in the form `{ data: Array }` (AI-Assisted)
- `/users/:userId` returns a single user by `id` in form `{ data: {} }` or `User ID not found: ${userId}` if the user doesn't exist (AI-Assisted)
- `/states` returns the states data in the form `{ data: {} }`. For example, `{ data: { AL: 'Alabama', CT: 'Connecticut', DC: 'District of Columbia'} }` (Independent)
- `/states/:stateCode` returns the states data in the form `{ data: { stateCode: String, name: String } }` or `State code not found: ${stateCode}` if the state code doesn't exist (Independent)
- Any other path returns: `Not found: ${req.originalUrl}` (Independent)

Use the existing data files located in `src/data` for the responses. Feel free to add or remove data from the files as necessary, but keep the same shape of the data.

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._