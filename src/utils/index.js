const { ValidationError } = require("express-validation");

const getHttpCode = (statusCode) => (statusCode < 400 ? 0 : 1);

const formatErrors = (error) =>
  error.map((err) => ({ message: err.message, path: err.path[0] }));

const validateBody = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).send({
      code: getHttpCode(error.statusCode),
      msg: error.message,
      details: error.details,
    });
  }
  return next();
};

module.exports = { getHttpCode, formatErrors, validateBody };
