const notes = require("../data/notes-data");

function noteExists(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote) {
    return next();
  } else {
    return next({
      status: 404,
      message: `Note id not found: ${req.params.noteId}`,
    });
  }
}

function hasText(req, res, next) {
  const { data: { text } = {} } = req.body;
  if (text) {
    return next();
  }
  return next({ status: 400, message: "A 'text' property is required." });
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
  const { noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));
  res.status(200).json({ data: foundNote });
}

function update(req, res) {
  const { noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));
  const { data: { text } = {} } = req.body;

  foundNote.text = text;

  res.json({ data: foundNote });
}

function destroy(req, res) {
  const { noteId } = req.params;
  const index = notes.findIndex((note) => note.id === Number(noteId));
  const deletedNotes = notes.splice(index, 1);
  res.sendStatus(204);
}

function list(req, res) {
  res.json({ data: notes });
}

module.exports = {
  create: [hasText, create],
  read: [noteExists, read],
  update: [noteExists, hasText, update],
  delete: [noteExists, destroy],
  list,
};
