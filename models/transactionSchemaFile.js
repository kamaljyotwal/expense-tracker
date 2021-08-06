const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    required: true,
    type: String,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("tsdb", TransactionSchema);
