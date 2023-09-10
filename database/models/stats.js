const { Schema } = require("mongoose");

const statsSchema = new Schema(
  {
    rps: {
      type: Number,
      required: true,
    },
    responseTime: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    capped: { size: 1000000, max: 100000 },
  }
);

module.exports = statsSchema;
