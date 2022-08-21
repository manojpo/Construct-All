const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const connectDB = require("./config/connectDB");
const cors = require("cors");
const path = require("path");

// importing routes
const userRoutes = require("./routes/userRoute");
const contactRoutes = require("./routes/contactRoute");

// Initializing app
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const app = express();
connectDB(MONGO_URI);

app.use(express.json());
app.use(cors());

// Static folder visible
app.use(express.static(path.join(__dirname, "public/images")));

// Routes
app.use("/api/v1", userRoutes);
app.use("/api/v1/contact", contactRoutes);

// Server connection
app.listen(PORT, () => {
  try {
    console.log(`Server is running at http://localhost:${PORT}!`);
  } catch (error) {
    console.log(`Server encountered a problem!`);
  }
});
