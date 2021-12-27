const express = require("express");
const { validate } = require("express-validation");
const { fetchRecords } = require("../controllers/records");
const { recordsValidator } = require("../validations");

const router = express.Router();

router.post("/", validate(recordsValidator), fetchRecords);

module.exports = router;
