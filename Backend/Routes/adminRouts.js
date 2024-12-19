const express = require("express");
const router = express.Router();
const Product = require("../model/model.product"); // Adjust path as needed
const {upload }= require('../middleware/multer.middlewares');
const { addProduct, updateProduct, deleteProduct } = require("../controllers/adminControllers");


router.post("/add",
  upload.fields([
    { name: "images", maxCount: 6 } 
  ]),
  
  addProduct);

router.put("/update/:id", updateProduct);


router.delete("/delete/:id", deleteProduct);



router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Server error while fetching products" });
  }
});

module.exports = router;
