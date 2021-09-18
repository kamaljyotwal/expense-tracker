const transactions = require("../models/transactionSchemaFile");

// controller functions
exports.getTransactions = async (req, res, next) => {
  try {
    const tt = await transactions.find();
    return res.status(200).json({
      success: true,
      count: tt.length,
      data: tt,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};

exports.addTransactions = async (req, res, next) => {
  try {
    // const { text, amount } = req.body;
    const tt2 = await transactions.create(req.body);

    return res.status(201).json({
      success: true,
      data: tt2,
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      // this line will be useful for me in the future
      const msg = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: msg,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

exports.deleteTransactions = async (req, res, next) => {
  try {
    const ttdel = await transactions.findById(req.params.id);

    if (!ttdel) {
      return res.status(404).json({
        status: false,
        error: "No item with this id",
      });
    }
    await ttdel.remove();

    return res.status(200).json({
      success: true,
      message: "Entry deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
