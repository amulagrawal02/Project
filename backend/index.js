const express = require("express");
const app = express();
const port = 8000;
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

app.use(express.json()); // to accept json data in body

connectDB();

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server start serving at", port);
});
