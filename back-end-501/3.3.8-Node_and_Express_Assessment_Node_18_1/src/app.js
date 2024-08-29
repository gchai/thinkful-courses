const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();
const getZoos = require("./utils/getZoos")

// Middleware
const validateZip = require("./middleware/validateZip");

// Routes
app.get("/zoos/all", (req, res, next) => {
    if (req.query.admin !== "true"){
        return next("You do not have access to that route.")
    } else {
        const zoos = getZoos()
        const concat = zoos.join("; ")
        return res.send(`All zoos: ${concat}`)
    }
})

app.get("/zoos/:zip", validateZip, (req, res, next) => {
    const zip = req.params.zip
    const zoos = getZoos(zip)
    const concat = zoos.join("; ")
    if(zoos.length == 0) {
        return res.send(`${zip} has no zoos.`)
    } else {
        const info = zoos.join("; ")
        res.send(`${zip} zoos: ${concat}`)
    }
})

app.get("/check/:zip", validateZip, (req, res, next) => {
    const zip = req.params.zip
    const zoos = getZoos(zip)
    if (zoos) {
        res.send(`${zip} exists in our records.`)
    } else {
        res.send(`${zip} does not exist in our records.`)
    }
})

// Error handling
app.use((req, res, next) => {
    next("That route could not be found!");
  });
  
  app.use((err, req, res, next) => {
    err = err || "Internal server error!";
    res.send(err);
  });

module.exports = app;
