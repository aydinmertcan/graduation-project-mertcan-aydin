const getHttpCode = (statusCode) => (statusCode < 400 ? 0 : 1);

module.exports = { getHttpCode };
