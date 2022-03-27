const express = require("express");
const app = express();
const port = 8000;

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server start serving at", port);
});
