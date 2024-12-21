const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Adm = require('../models/adm'); // Import the Adm model

// Secret for JWT (store securely, e.g., in .env file)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Route to fetch all users from the 'adm' collection
router.get('/fetchAll', async (req, res) => {
    try {
        // Fetch all users from the adm collection
        const users = await Adm.find({});
        res.status(200).json({ users }); // Return all users in response
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

router.post('/login', async (req, res) => {
    console.log("Login route reached");

    // Extract username and password from the request body
    const { username, password } = req.body;

    console.log( "username:", username, "password:", password)

    // Validate the input
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        console.log(`looking for user ${username}`)

        // Find the user in the database
        const user = await Adm.findOne({ username: username.toLowerCase() });

        if (!user) {
            console.log("user not found in database")
            return res.status(404).json({ error: 'User not found' });
        }

        console.log(`user ${username} found `)

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

        // Send the token as a response
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
