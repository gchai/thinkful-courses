const express = require("express");
const app = express();

const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

app.use(express.json());

function foundNote(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote) {
    next();
  } else {
    next({
      status: 404,
      message: `Note not found: ${req.params.noteId}`,
    });
  }
}

app.get("/notes/:noteId", foundNote, (req, res) => {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  res.json({ data: foundNote });
});

app.get("/notes", (req, res) => {
  res.json({ data: notes });
});

let lastNoteId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);

function bodyValidate(req, res, next) {
  const { data: { text } = {} } = req.body;
  if (text) {
    return next();
  } else {
    next({
      status: 400,
      message: "A 'text' property is required.",
    });
  }
}

app.post("/notes", bodyValidate, (req, res) => {
  const { data: { text } = {} } = req.body;
  const newNote = {
    id: ++lastNoteId, // Increment last id then assign as the current ID
    text,
  };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
});

// Not found handler
app.use((req, res, next) => {
  next({
    status: 404,
    message: `Not found: ${req.originalUrl}`,
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = `error: ${error.message}` } = error;
  res.status(status).send({ error: message });
});

module.exports = app;
