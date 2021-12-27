const Records = require("../models/records");

const getRecords = async (minCount, maxCount, startDate, endDate) =>
  Records.aggregate([
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
          $gte: new Date(startDate),
          $lt: new Date(endDate),
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

module.exports = { getRecords };
