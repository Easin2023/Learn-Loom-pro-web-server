const mongoose = require("mongoose");
require("dotenv").config();

const getConnectUri = () => {
  let connectUri = process.env.DB_URI;
  connectUri = connectUri.replace("<username>", process.env.DB_USER);
  connectUri = connectUri.replace("<password>", process.env.DB_PASS);
  return connectUri;
};

const connectDB = async () => {
  console.log("Connecting to the database......");
  const uri = getConnectUri();

  try {
    await mongoose.connect(uri, { dbName: process.env.DB_NAME }, {});
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = connectDB;
