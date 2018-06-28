const express = require('express');
const router = express.Router();

const Book = require('../models/book');

const path = '/books';

router.get(path, (req, res, next) => {
    res.send({type:'GET'})
});

router.post(path, (req, res, next) => {
    Book.create(req.body)
    .then(book => res.send(book))
    .catch(next)
});

router.put(`${path}/:id`, (req, res, next) => {
    res.send({type:'PUT'})
});

router.delete(`${path}/:id`, (req, res, next) => {
    res.send({type:'DELETE'})
});

module.exports = router;