import React from "react";

const ProductForm = ({ product, setProduct, isEditing, handleSubmit }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct((prevProduct) => ({ ...prevProduct, images: files }));
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0]; 
    setProduct((prevProduct) => ({ ...prevProduct, mainImage: file }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("rating", product.rating);
    formData.append("reviews", product.reviews);
    formData.append("label", product.label);

    if (product.mainImage) {
      formData.append("images", product.mainImage);
    }

    if (product.images.length > 0) {
      product.images.forEach((img) => {
        formData.append("images", img);
      });
    }

    handleSubmit(formData);
  };

  return (
    <section id="add-product" className="mb-6 bg-gradient-to-br from-gray-300 to-indigo-400 p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold from-gray-300  mb-6">{isEditing ? "Edit Product" : "Add New Product"}</h2>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        
        <div>
          <label htmlFor="name" className="from-gray-300 text-2xl font-semibold">Product Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            placeholder="Enter product name"
            className="w-2/4 p-3 mt-2 rounded-lg bg-whight from-gray-300 text-2xl font-semibold  focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        
        <div>
          <label htmlFor="description" className="from-gray-300 text-2xl font-semibold ">Product Description</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            placeholder="Enter product description"
            className="w-full p-3 mt-2 rounded-lg bg-whight from-gray-300 text-2xl font-semibold  focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="mainImage" className="from-gray-300 text-2xl font-semibold ">Main Image</label>
          <input
            type="file"
            id="mainImage"
            onChange={handleMainImageChange}
            className="w-full p-3 mt-2 rounded-lg bg-whight from-gray-300 text-2xl font-semibold  focus:ring-2 focus:ring-blue-500"
            required={!isEditing}
          />

              {product.mainImage && (
                <div className="mt-4">
                  <img
                    src={URL.createObjectURL(product.mainImage)}
                    alt="Main Product"
                    className="w-40 h-40 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
        
        </div>
        <div>
          <label htmlFor="multipleImages" className="from-gray-300 text-2xl font-semibold ">More Images (Optional) </label>
          <input
            type="file"
            id="multipleImages"
            onChange={handleFileChange}
            className="w-full p-3 mt-2 rounded-lg bg-whight from-gray-300 text-2xl font-semibold  focus:ring-2 focus:ring-blue-500"
            multiple
          />
          {product.images.length > 0 && (
            <div className="mt-4 flex space-x-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt={`Additional Image ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="price" className="from-gray-300 text-2xl font-semibold ">Product Price : </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            placeholder="Enter product price"
            className="w-2/6  p-3 mt-2 rounded-lg bg-whight from-gray-300 text-2xl font-semibold  focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="">
          <label htmlFor="rating" className="from-gray-300 text-2xl font-semibold ">Product Rating : </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={handleInputChange}
            placeholder="Enter product rating"
            className="w-2/6 p-3 mt-2 rounded-lg bg-whight from-gray-300 text-2xl font-semibold  focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="reviews" className="from-gray-300 text-2xl font-semibold ">Number of Reviews : </label>
          <input
            type="number"
            id="reviews"
            name="reviews"
            value={product.reviews}
            onChange={handleInputChange}
            placeholder="Enter number of reviews"
            className="w-2/6 p-3 mt-2 rounded-lg bg-whight from-gray-300 text-2xl font-semibold  focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="label" className="from-gray-300 text-2xl font-semibold ">Product Label : </label>
          <input
            type="text"
            id="label"
            name="label"
            value={product.label}
            onChange={handleInputChange}
            placeholder="Enter product label"
            className="w-2/6 p-3 mt-2 rounded-lg bg-whight from-gray-300 text-2xl font-semibold  focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-6 bg-blue-600 from-gray-300 text-2xl font-semibold  rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </form>
    </section>
  );
};

export default ProductForm;
