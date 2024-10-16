// app.js

const express = require('express');               // Import Express
const mongoose = require('mongoose');             // Import Mongoose for MongoDB connection
const cors = require('cors');                     // Import CORS middleware for handling cross-origin requests
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();  // Create the Express app

app.use(express.json());  // Middleware to parse JSON bodies
app.use(cors());          // Enable CORS for all routes

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/musicAppDB', { 
    useNewUrlParser: true,   // Options (deprecated in new MongoDB versions, but harmless)
    useUnifiedTopology: true 
})
    .then(() => console.log('Connected to MongoDB'))  // Log if connected successfully
    .catch(err => console.error('Mongo connection error:', err));  // Log errors if connection fails

// Use the user routes for any requests starting with /api/users
app.use('/api/users', userRoutes);  

// Start the server on port 3000 (or any port set in environment variables)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);  // Log the port the server is running on
});
