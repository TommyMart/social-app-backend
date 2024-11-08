// routes/userRoutes.js

const express = require('express');         // Import Express
const router = express.Router();            // Create a router for handling routes
const userController = require('../controllers/userController');  // Import the User controller

router.post('/signup', userController.signup);  // Route for user registration
router.post('/login', userController.login);    // Route for user login


// Export the router so it can be used in other files
module.exports = router;
