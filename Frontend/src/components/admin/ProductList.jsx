import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, handleEdit, handleDelete }) => {
  const [imagePaths, setMainImage] = useState("");
  
  return (
    <div className="product-list mt-8">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="overflow-auto max-h-96">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td className="border px-4 py-2">
                  <img
                    src={product.imagePaths[0]}
                    alt={product.name}
                    className="w-24 h-24 p-1 object-cover rounded"
                  />
                </td>
                <td className="border px-4 py-2">
                <Link to={`/product/${product._id}`} className="text-blue-500 hover:underline">
                {product.name}
                </Link>
                </td>
                <td className="border px-4 py-2">{product.description}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="mr-2 p-1 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="p-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table></div>
      )}
    </div>
  );
};

export default ProductList;
