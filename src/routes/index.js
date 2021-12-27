const express = require("express");
const recordsRoute = require("./records");
require("dotenv").config();
const router = express.Router();

router.use("/records", recordsRoute);

module.exports = router;
