const express = require("express");

const books = require("../../books.json");

const router = express.Router(); 
// cторінка записноє книжки

router.get("/api/books", (req, res) => {
    res.json(books);
});

router.get("/api/books/:id", (req, res) => {
    res.json(books)
});

router.post("/api/books", (req, res) => {
    res.json(books)
});

router.put("/api/books/:id", (req, res) => {
    res.json(books)
});

router.delete("/api/books/:id", (req, res) => {
    res.json(books)
});

module.exports = router;