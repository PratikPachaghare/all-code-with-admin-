const express = require('express');
const router = express.Router(); 
const { reviewPost, reviewGet } = require('../controllers/reviweController');

// Route to fetch reviews by product ID data
router.get('/get', reviewGet );

// Route to submit a new review from data
router.post('/submit', reviewPost);

module.exports = router;
