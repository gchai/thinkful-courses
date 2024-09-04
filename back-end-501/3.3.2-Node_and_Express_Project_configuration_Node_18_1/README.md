# Node and Express: Project configuration

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions (Independent)

This practice problem should be solved independently, without the use of AI assistance. To complete this practice problem, you will do the following:

- Create an `app.js` file.
- Create a `server.js` file.
- In the `app.js` file, create an Express application and export it.
- In the `server.js` file, import the Express application and use it to start the server.

## Tips

- You may complete this challenge on your own machine before uploading it to Qualified.
- Reference the related lesson for help on completing this practice problem.

**Note:** If you are a macOS Monterey user and are getting an `Error: listen EADDRINUSE: address already in use :::5000` error, you may want to disable Airplay Receiver since this is an application that uses port `5000`. To disable Airplay Receiver, go to _System Preferences_ and disable Airplay Receiver in the _Sharing_ system preference. Alternatively, you can change the port by specifying another port number in `server.js` (e.g., `const { PORT = 8080 } = process.env;`) or when starting the server (e.g., `PORT=8080 npm start`).