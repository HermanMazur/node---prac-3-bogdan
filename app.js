const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/api/books")


const app = express();

app.use(cors());

app.use("/routes/api/books.js", booksRouter);
// /routes/api/books.js - для любой функции с апі/букс

app.listen(3000);
