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
        type: Number,
        required: [true, 'ISBN field is required']
    },
    pages: {
        type: Number
    },
    rating: {
        type: Number,
        default: 0
    }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;