const express = require("express");
const app = express();
const port = 8000;
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const registerUser = require("./routes/register_user");

dotenv.config();

app.use(express.json()); // to accept json data in body
app.use("/register", registerUser);

connectDB();

app.listen(port, () => {
  console.log("Server start serving at", port);
});
