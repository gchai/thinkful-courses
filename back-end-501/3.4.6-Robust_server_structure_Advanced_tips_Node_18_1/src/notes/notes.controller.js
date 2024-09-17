const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

function isValid(req, res, next) {
  const { data: { text } = {} } = req.body;

  if (text) {
    return next();
  }
  next({ status: 400, message: "A 'text' property is required." });
}

function noteExists(req, res, next) {
  const { noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));
  if (foundNote) {
    res.locals.note = foundNote;
    return next();
  } else {
    next({
      status: 404,
      message: `Note id not found: ${req.params.noteId}`,
    });
  }
}

function create(req, res) {
  const { data: { text } = {} } = req.body;
  const newNote = {
    id: notes.length + 1,
    text,
  };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
}

function read(req, res) {
  res.json({ data: res.locals.note });
}

function update(req, res) {
  const note = res.locals.note;
  const { data: { text } = {} } = req.body;
  note.text = text;
  res.json({ data: foundNote });
}

function remove(req, res) {
  const { noteId } = req.params;
  const index = notes.findIndex((note) => note.id === Number(noteId));
  if (index > -1) {
    notes.splice(index, 1);
  } else {
    res.sendStatus(204);
  }
}

function list(req, res) {
  res.json({ data: res.locals.note });
}

module.exports = {
  create: [isValid, create],
  list,
  read: [noteExists, read],
  update: [noteExists, isValid, update],
  delete: remove,
  noteExists,
};
