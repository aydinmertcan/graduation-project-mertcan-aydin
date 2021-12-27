const mongoose = require("mongoose");

const { DB_URL } = process.env;

module.exports = () =>
  mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database Connected successfully");
    });
