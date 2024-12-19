import React, { useState } from 'react';

// Sample product data to be shown on the frontend
const productData = {
  _id: '12345',
  mainImage: 'https://via.placeholder.com/600x600.png?text=Main+Product+Image',
  images: [
    'https://via.placeholder.com/100x100.png?text=Image+1',
    'https://via.placeholder.com/100x100.png?text=Image+2',
    'https://via.placeholder.com/100x100.png?text=Image+3',
    'https://via.placeholder.com/100x100.png?text=Image+4',
  ],
};

function ProductImages() {
  const [selectedImage, setSelectedImage] = useState(productData.mainImage);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div className="main-image w-1/3 mb-4">
        <img
          src={selectedImage}
          alt="Selected product"
          className="w-full h-auto rounded"
        />
      </div>

      <div className="thumbnails flex space-x-2">
        {productData.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product thumbnail ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
              selectedImage === image ? 'border-blue-500' : 'border-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
