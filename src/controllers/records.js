const RecordService = require("../services/records");
const { getHttpCode } = require("../utils");

const fetchRecords = async (req, res) => {
  const { minCount, maxCount, startDate, endDate } = req.body;

  try {
    const records = await RecordService.getRecords(
      minCount,
      maxCount,
      startDate,
      endDate
    );

    return res.status(200).json({
      code: getHttpCode(200),
      msg: "Success",
      records,
    });
  } catch (err) {
    return res.status(500).json({
      code: getHttpCode(500),
      msg: err?.message ?? "Unable to fetch records",
      records,
    });
  }
};

module.exports = {
  fetchRecords,
};
