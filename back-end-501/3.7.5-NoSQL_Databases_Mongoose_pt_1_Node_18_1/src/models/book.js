const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    description: String,
    cost: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;