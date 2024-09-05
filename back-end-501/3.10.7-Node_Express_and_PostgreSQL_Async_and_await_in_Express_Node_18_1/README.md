# Node, Express, and PostgreSQL: Async and await in Express

## Instructions

To complete this assessment, you will need to convert two functions to use `async/await`. In doing so, you'll have to make sure the code continues to work as intended.

When running the tests, most of them will pass! There are two tests at the end of the test suite that you will need to pass which check for the conversion.

If you need help, speak with your peers in Slack.

## Slogan generator functions

You'll be using the following functions provided in the `./utils/slogan-generator.js` file. This library is just a way for you to practice working with promises. While you can see the source code in the file, you don't need to understand it fully or make any changes to it.

### `generateMessage()`

The `generateMessage()` function returns a promise that, when resolved, will return a short message string.

```
generateMessage().then(response => {
  console.log(response);
  // "Ask me for a random slogan..."
});
```

### `goodbye()`

The `goodbye()` function returns a promise that, when resolved, will return a short goodbye string.

```
goodbye().then(response => {
  console.log(response);
  // "Best of luck on your startup..."
});
```

### `generateSlogan()`

The `generateSlogan()` function takes a string and returns a promise that, when resolved, will return a random slogan.

```
generateSlogan("Will you give me a slogan?").then(response => {
  console.log(response.slogan);
  // "facilitate bricks-and-clicks communities"
});
```

## Functions to complete

Update the `getSlogan()` and `fullSession()` functions to use `async` and `await` as well as `try` and `catch`. Note that these functions require you to log statements with `console.log()` and should continue to do so.