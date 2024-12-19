// routes/authRoutes.js
const express = require('express');
const User = require('../model/modle.user'); // Ensure this path is correct
const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create new user
    const newUser = new User({
      username,
      email,
      password, // Store plain password, it will be hashed in the model
      isAdmin: false, // Default value
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Registration Error:", error); // Log the error
    res.status(500).json({ error: 'Server error in router post', details: error.message });
  }
});

// User Login (if you haven't done so already)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a token (you can adjust the payload and expiration as needed)
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, 'your_jwt_secret', {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
