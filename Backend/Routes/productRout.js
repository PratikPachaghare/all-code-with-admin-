const express = require("express");
const modelProduct = require("../model/model.product");
const multer = require("multer");

const router = express.Router();

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  },
});

const upload = multer({ storage });

// Upload multiple product images
router.post("/upload", upload.array('images', 10), async (req, res) => { // Limit to 10 images for example
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }

  
  const filePaths = req.files.map(file => `/uploads/${file.filename}`);

  
  const newProduct = new modelProduct({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    images: filePaths, 
    rating: req.body.rating,
    reviews: req.body.reviews,
    label: req.body.label,
  });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ error: "Server error while saving product" });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await modelProduct.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error while fetching products' });
  }
});

// Get product by ID
router.get("/:id", async (req, res) => {
    try {
      const product = await modelProduct.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while fetching product" });
    }
});

module.exports = router;
