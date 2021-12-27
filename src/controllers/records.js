const RecordService = require("../services/records");
const { getHttpCode } = require("../utils");
const { HTTP_STATUS_CODES } = require("../constants/httpStatusCodes");

const fetchRecords = async (req, res) => {
  const { minCount, maxCount, startDate, endDate } = req.body;

  try {
    const records = await RecordService.getRecords(
      minCount,
      maxCount,
      startDate,
      endDate
    );

    return res.status(HTTP_STATUS_CODES.OK).json({
      code: getHttpCode(HTTP_STATUS_CODES.OK),
      msg: "Success",
      records,
    });
  } catch (err) {
    return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      code: getHttpCode(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR),
      msg: err?.message ?? "Unable to fetch records",
      records,
    });
  }
};

module.exports = {
  fetchRecords,
};
