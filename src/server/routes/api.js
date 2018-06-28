const express = require('express');
const router = express.Router();

const Book = require('../models/book');

const path = '/books';

router.get(path, (req, res) => {
    res.send({type:'GET'})
});

router.post(path, (req, res) => {
    Book.create(req.body).then(book => {
        res.send(book)
    });
});

router.put(`${path}/:id`, (req, res) => {
    res.send({type:'PUT'})
});

router.delete(`${path}/:id`, (req, res) => {
    res.send({type:'DELETE'})
});

module.exports = router;