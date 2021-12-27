const Records = require("../models/records");

const fetchRecords = async (requestBody) => {
  const { minCount, maxCount } = requestBody;
  const startDate = new Date(requestBody.startDate);
  const endDate = new Date(requestBody.endDate);

  const records = await Records.aggregate([
    {
      $project: {
        key: 1,
        createdAt: 1,
        totalCount: {
          $reduce: {
            input: "$counts",
            initialValue: 0,
            in: {
              $sum: ["$$value", "$$this"],
            },
          },
        },
      },
    },
    {
      $match: {
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
        totalCount: {
          $gte: minCount,
          $lte: maxCount,
        },
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ]);

  return records;
};

module.exports = {
  fetchRecords,
};
