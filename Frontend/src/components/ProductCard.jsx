import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  // console.log(product);
  const [mainImage, setMainImage] = useState("");
  useEffect(()=>{
    setMainImage(product.imagePaths[0]);
  })
  
  const handleAddToCart = (product) => {
    // Your add to cart logic here
    console.log(`${product.name} added to cart.`);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 transition-transform transform hover:scale-105 shadow-md">
      <Link to={`/product/${product._id}`}>
      <img
          src={mainImage}
          alt={product.name}
          className="w-full h-48 object-contain mb-2 rounded-lg" // Use object-contain to maintain aspect ratio
          style={{ maxHeight: '200px', maxWidth: '100%' }} // Set max height to limit size
        />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-lg font-semibold text-gray-800">
          ${product.price.toFixed(2)}
        </p>
      </Link>
      <div className="flex justify-between mt-2">
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-blue-500 text-white px-3 py-2 rounded-lg w-4/5 mr-1 text-md"
        >
          Add to Cart
        </button>
        <Link to={`/payment/${product._id}`} className="w-full ml-1">
          <button className="bg-orange-600 text-white px-3 py-2 rounded-lg w-4/5 text-md">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
