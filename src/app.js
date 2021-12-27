const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { validateBody } = require("./utils");
const routes = require("./routes/index");
const { HTTP_STATUS_CODES } = require("./constants/httpStatusCodes");
require("dotenv").config();

const app = express();
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
    app.listen(process.env.PORT, () => {});
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1", routes);
app.use(validateBody);

app.all("*", (req, res) => {
  res.status(HTTP_STATUS_CODES.NOT_FOUND).send("not found");
});

module.exports = {
  app,
};
