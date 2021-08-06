const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const transactions = require("./routes/transactions");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json());
app.use(morgan("tiny"));
app.use("/api/transactions", transactions);

app.listen(process.env.PORT);
