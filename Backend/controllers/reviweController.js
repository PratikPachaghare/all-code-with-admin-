const express = require('express');
const Review = require('../model/model.review');

const reviewGet = async (req, res) => {
    try {
      const { productId } = req.query;
      const reviews = await Review.find({ productId });
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  }

const reviewPost = async (req, res) => {
    try {
      const { name, rating, description, productId } = req.body;
      const newReview = new Review({ name, rating, description, productId });
      await newReview.save();
      res.json(newReview);
    } catch (error) {
      res.status(500).json({ error: 'Failed to submit review' });
    }
  }


module.exports = {reviewPost,reviewGet} 