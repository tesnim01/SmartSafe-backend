const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./model/Login"); // Import the Auth model
const users = require("./data/staff.json"); // Sample user data

// Load the .env file
dotenv.config();

// Connect to MongoDB Atlas database
mongoose.connect(process.env.MONGO_DB_URL);

// Function to import authentication data
const importAuthData = async () => {
  try {
    // Clear existing authentication data
    await User.deleteMany();

    // Insert sample user data into the staff collection
    await Auth.insertMany(users);
    console.log("Authentication data imported successfully.");
  } catch (error) {
    console.error("Error importing authentication data:", error);
    process.exit(1);
  }
};

// Function to clear authentication data
const clearAuthData = async () => {
  try {
    // Clear existing authentication data
    await User.deleteMany();
    console.log("Authentication data cleared successfully.");
  } catch (error) {
    console.error("Error clearing authentication data:", error);
    process.exit(1);
  }
};

// Check command-line arguments to determine action
if (process.argv[2] === "-d") {
  // If "-d" flag is provided, clear authentication data
  clearAuthData();
} else {
  // Otherwise, import sample authentication data
  importAuthData();
}


