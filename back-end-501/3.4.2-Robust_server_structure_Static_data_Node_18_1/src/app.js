const express = require("express");
const app = express();

const users = require("./data/users-data");
const states = require("./data/states-data");

// TODO: Return a single user by id from /users/:userId in form of { data: Object }
app.use("/users/:userId", (req, res, next) => {
  const { userId } = req.params;
  const found = users.find((user) => user.id === Number(userId));

  if (found) {
    res.json({ data: found });
  } else {
    next(`User ID not found: ${userId}`);
  }
});

// TODO: Return an array of users from /users in form of { data: Array }
app.use("/users", (req, res) => {
  res.json({ data: users });
});

// TODO: Return a single state from /states/:stateCode in the form of { data: { stateCode: String, name: String } }
app.use("/states/:stateCode", (req, res, next) => {
    const {stateCode} = req.params;

    if (states[stateCode]) {
        res.json({data: {stateCode: stateCode, name: states[stateCode]}})
    } else {
        next(`State code not found: ${stateCode}`);
    }
})

// TODO: Return all states from /states in the form of { data: Array }
app.use("/states", (req, res) => {
  res.json({ data: states });
});

// TODO: Add not-found handler.
app.use((req, res, next) => {
  next(`Not found: ${req.originalUrl}`);
});

// TODO: Add error handler.
app.use((error, request, response, next) => {
  console.error(error);
  response.send(error);
});

module.exports = app;
