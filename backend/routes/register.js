const express = require("express");
const router = express.Router();
const register = require("../controller/register.js");

router.post("/as_user", register.user);

module.exports = router;
