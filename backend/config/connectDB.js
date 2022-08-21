const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async (MONGO_URI) => {
  try {
    const DB_OPTIONS = {
      dbName: "Manoj",
    };
    mongoose.connect(MONGO_URI, DB_OPTIONS);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Failed to connect to the database!");
  }
};

module.exports = connectDB;
