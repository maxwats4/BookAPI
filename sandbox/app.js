// this starts up a server that will host the API

const express = require("express");
const app = express();
const booksRouter = require("./routes/books");
const port = 3000;

app.use(express.json());
app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
