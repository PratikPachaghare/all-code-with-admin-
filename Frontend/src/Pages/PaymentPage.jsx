import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PaymentPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col md:flex-row m-10">
      {/* Left Side: Product Information */}
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-6">Payment Page</h1>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <img
            src={product.imagePath}
            alt={product.name}
            className="w-full h-auto max-h-96 object-contain mb-4 rounded-lg" // Adjusted to maintain aspect ratio
          />
          <p className="text-lg font-semibold text-gray-800">${product.price.toFixed(2)}</p>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p> {/* Added description */}
          
        </div>
      </div>

      {/* Right Side: Payment Options */}
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>
        <div className="bg-white shadow-md p-6 rounded-lg space-y-4">
          <h3 className="text-xl font-semibold mb-2">Choose a Payment Method</h3>
          <ul className="space-y-4">
            <li className="flex items-center p-4 border rounded-md hover:bg-gray-100 transition">
              <input type="radio" id="cash" name="payment" className="mr-2" />
              <label htmlFor="cash" className="flex items-center">
                <img src="https://via.placeholder.com/30?text=COD" alt="Cash on Delivery" className="mr-2" />
                <span className="text-lg">Cash on Delivery</span>
              </label>
            </li>
            <li className="flex items-center p-4 border rounded-md hover:bg-gray-100 transition">
              <input type="radio" id="phonePay" name="payment" className="mr-2" />
              <label htmlFor="phonePay" className="flex items-center">
                <img src="https://via.placeholder.com/30?text=PP" alt="Phone Pay" className="mr-2" />
                <span className="text-lg">Phone Pay</span>
              </label>
            </li>
            <li className="flex items-center p-4 border rounded-md hover:bg-gray-100 transition">
              <input type="radio" id="card" name="payment" className="mr-2" />
              <label htmlFor="card" className="flex items-center">
                <img src="https://via.placeholder.com/30?text=Card" alt="Credit/Debit Card" className="mr-2" />
                <span className="text-lg">Credit/Debit Card</span>
              </label>
            </li>
            <li className="flex items-center p-4 border rounded-md hover:bg-gray-100 transition">
              <input type="radio" id="netBanking" name="payment" className="mr-2" />
              <label htmlFor="netBanking" className="flex items-center">
                <img src="https://via.placeholder.com/30?text=NB" alt="Net Banking" className="mr-2" />
                <span className="text-lg">Net Banking</span>
              </label>
            </li>
          </ul>
          <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
