const express = require('express');
const router = express.Router();

const Book = require('../models/book');

const path = '/books';

router.get(path, (req, res, next) => {
    Book.find({})
    .then(books => res.send(books))
    .catch(next)
});

router.post(path, (req, res, next) => {
    Book.create(req.body)
    .then(book => res.send(book))
    .catch(next)
});

router.put(`${path}/:id`, (req, res, next) => {
    Book.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Book.findOne({_id: req.params.id})
        .then(book => res.send(book))
        .catch(next)
    })
    .catch(next)
});

router.delete(`${path}/:id`, (req, res, next) => {
    Book.findByIdAndRemove({_id: req.params.id})
    .then(book => res.send(book))
    .catch(next)
});

module.exports = router;