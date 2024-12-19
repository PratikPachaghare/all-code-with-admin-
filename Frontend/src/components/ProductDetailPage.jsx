import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import ProductReview from './ProductReview';
import AllProductCards from "./All_product";


const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const topRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProduct(data);
        setMainImage(data.imagePaths[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

 

  // Handle image change on thumbnail click
  const handleImageClick = (image) => {
    setMainImage(image);
  };

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div ref={topRef} className="p-10 bg-customgray">
      {product && (
        <div className="flex flex-col md:flex-row border border-gray-200 rounded-lg p-6 shadow-lg">
          {/* Images Section */}
          <div className="md:w-1/2 flex flex-col items-center">
            {/* Main Image */}
            <img
              src={mainImage}
              alt={product.name || "Product Image"}
              className="w-full h-64 object-contain mb-4 rounded-lg"
              style={{ maxHeight: "400px", maxWidth: "100%" }}
            />

            {/* other imagess show below the main main */}
            <div className="flex space-x-2 justify-items-start mt-2">
              {product.imagePaths.length > 0 ? (
                product.imagePaths
                  
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Product image ${index + 1}`}
                      className={`w-56 h-28 p-1 object-cover cursor-pointer rounded-lg ${
                        image === mainImage ? "border-4 border-orange-500" : ""
                      }`}
                      style={{ width: "40%", maxWidth: "80px" }}
                      onClick={() => handleImageClick(image)}
                    />
                  ))
              ) : (
                <img
                  src={product.imagePaths[0]}
                  alt="No other images"
                  className={`w-20 h-20 object-cover cursor-pointer rounded-lg ${
                    product.imagePaths[0] === mainImage
                      ? "border-4 border-orange-500"
                      : ""
                  }`}
                  style={{ width: "20%", maxWidth: "80px" }}
                  onClick={() => handleImageClick(product.imagePaths[0])}
                />
              )}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="flex items-center text-orange-400 mb-2">
              {"★".repeat(Math.max(0, Math.floor(product.rating)))}
              {"☆".repeat(Math.max(0, 5 - Math.floor(product.rating)))}
              <span className="text-gray-600 text-sm ml-1">
                ({product.reviews || 0} reviews)
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Price: ${product.price?.toFixed(2)}
            </p>
            <Link to={`/payment/${product._id}`}>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      )}


      {/* Product Display */}
      <ProductReview/>
      
      <div >
        <AllProductCards/>
      </div>
      
    </div>
  );
};

export default ProductPage;
