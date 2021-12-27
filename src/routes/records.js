const express = require("express");
const router = express.Router();

const { fetchRecords } = require("../controllers/records");
router.post("/", fetchRecords);

module.exports = router;
