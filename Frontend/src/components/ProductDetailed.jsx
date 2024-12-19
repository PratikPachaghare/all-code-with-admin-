import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NewArrived() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/new-arrivals");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyNow = (product) => {
    // Navigate to the checkout/product page and pass product data using state
    navigate(`/product/${product.id}`, { state: { product } });
  };

  if (loading) {
    return <p>Loading new arrivals...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-10 bg-customgray">
      <div className="text-center mb-8">
        <h2 className="text-[50px] underline font-bold">New Arrivals</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-4 transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            {product.label && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full absolute top-2 right-2">
                {product.label}
              </span>
            )}
            <img
              src={person.imagePath} // Adjusted to use person's image
              alt={person.name}
              className="w-full h-48 object-cover mb-4 rounded-lg" // Ensure proper aspect ratio
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center text-orange-400 mb-2">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <span className="text-gray-600 text-sm ml-1">
                ({product.reviews})
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-800">
              {product.price}
            </p>
            <Link to={`/payment/${product._id}`} className="w-full ml-1">
              <button className="bg-orange-600 text-white px-3 py-2 rounded-lg w-4/5 text-md">
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrived;
