// Import library
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Initialize Express application
const app = express();

// Use dotenv to load environment variables from .env file
dotenv.config();

// Configure CORS (allow requests from other domains)
app.use(cors());

// Middleware to process data from request (body)
app.use(express.json()); // Parse JSON body
app.use(express.urlencoded({ extended: true })); // Parse x-www-form-urlencoded body

// Connect to MongoDB database
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB database");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
    process.exit(1); //Stop the application if it cannot connect to MongoDB
  });

// Setting up API routes
const userRoutes = require("./routes/userRoutes"); // Import routes người dùng
app.use("/api", userRoutes); // Use user routes with prefix "/api"

// Configure port for server
const port = process.env.PORT || 3000;

// Listen to port and print log
app.listen(port, () => {
  console.log(`Server running on:  http://localhost:${port}/`);
});

module.exports = app;
