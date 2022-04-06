const express = require("express");
const app = express();
const port = 8000;
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const register = require("./routes/register");
const Login = require("./routes/login");
const cors = require("cors");
app.use(cors());

dotenv.config();
connectDB();
app.use(express.json()); // to accept json data in body
app.use("/register", register);
app.use("/login", Login);

app.listen(port, () => {
  console.log("Server start serving at", port);
});
