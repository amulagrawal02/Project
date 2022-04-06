const express = require("express");
const router = express.Router();
const Login = require("../controller/login");

router.post("/as_user", Login.user);
router.get("/data", Login.data);

module.exports = router;
