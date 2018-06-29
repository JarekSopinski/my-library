const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required']
    },
    author: {
        type: String,
        required: [true, 'Author field is required']
    },
    isbn: {
        type: String,
        required: [true, 'ISBN field is required']
    },
    pages: {
        type: String
    },
    rating: {
        type: String
    }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;