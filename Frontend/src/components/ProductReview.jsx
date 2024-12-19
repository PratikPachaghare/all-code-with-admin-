import React, { useState, useEffect } from 'react';

function ProductReview({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    description: ''
  });

  useEffect(() => {
    // Fetch existing reviews from the database when the component mounts
    fetch(`http://localhost:5000/api/review/get?productId=${productId}`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/review/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, productId })
    })
      .then((response) => response.json())
      .then((newReview) => {
        setReviews((prevReviews) => [...prevReviews, newReview]);
        setFormData({ name: '', rating: 0, description: '' }); 
        setShowForm(false); 
      })
      .catch((error) => console.error('Error submitting review:', error));
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded mb-4"
      >
        Write a Review
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 w-1/3 mx-auto border p-4 rounded shadow">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="block mb-2 p-2 border rounded w-full"
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={formData.rating}
            onChange={handleInputChange}
            min="1"
            max="5"
            required
            className="block mb-2 p-2 border rounded w-full"
          />
          <textarea
            name="description"
            placeholder="Your thoughts about the product"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="block mb-4 p-2 border rounded w-full"
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit Review
          </button>
        </form>
      )}

      <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review._id} className="border p-4 rounded mb-4">
            <h4 className="text-lg font-semibold">{review.name}</h4>
            <p className="text-orange-400">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </p>
            <p className="text-gray-800">{review.description}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first to write one!</p>
      )}
    </div>
  );
}

export default ProductReview;
