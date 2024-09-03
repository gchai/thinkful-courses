const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
 // TODO: Write your code here.

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;