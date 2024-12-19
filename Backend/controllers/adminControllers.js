const Product = require("../model/model.product");
const { uploadOnCloudinary } = require("../utils/cloudinery");

const addProduct = async (req, res) => {
  const { name, description, price, rating, reviews, label } = req.body;

  // Check for required fields
  if (!name || !description || !price) {
    return res.status(400).json({ error: "Name, description, and price are required." });
  }

  try {
    let imagePaths = []; 

    if (req.files?.images) {
      for(let i = 0; i < req.files.images.length; i++) {
        const imageLocalPath = req.files.images[i].path;
        const uploadResponse = await uploadOnCloudinary(imageLocalPath);
        
        if (uploadResponse) {
          imagePaths.push(uploadResponse.url);
        } else {
          return res.status(500).json({ error: "Image upload failed." });
        }
      }
    }

    const newProduct = new Product({
      name,
      description,
      price,
      imagePaths,
      rating,
      reviews,
      label
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Server error while adding product" });
  }
};



const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);



    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Server error while deleting product" });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Server error while updating product" });
  }
};

module.exports = { addProduct, deleteProduct, updateProduct };
