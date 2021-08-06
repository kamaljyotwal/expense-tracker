const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MONGODB connected : ${conn.connection.host} connected`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
  }
};

module.exports = connectDB;
