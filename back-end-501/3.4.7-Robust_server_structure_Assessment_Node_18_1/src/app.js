const express = require("express");
const usesRouter = require("./uses/uses.router");
const urlsRouter = require("./urls/urls.router");
const pathNotFound = require("./errors/pathNotFound")

const app = express();

app.use(express.json());
app.use("/uses", usesRouter);
app.use("/urls", urlsRouter);

app.use((req, res, next) => {
  next({ status: 404, message: `Path not found: ${req.originalUrl}` });
});

app.use(pathNotFound);

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong!" } = err;
  res.status(status).json({ error: message });
});

module.exports = app;
