const express = require("express");

const books = require("../../books.json");

const router = express.Router(); 
// cторінка записноє книжки

router.get("/", (req, res) => {
    res.json(books);
});

router.get("/:id", (req, res) => {
    res.json(books)
});

router.post("/", (req, res) => {
    res.json(books)
});

router.put("/:id", (req, res) => {
    res.json(books)
});

router.delete("/:id", (req, res) => {
    res.json(books)
});

module.exports = router;