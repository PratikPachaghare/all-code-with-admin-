const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // Import path for serving static files
const multer = require("multer"); // Import multer for handling file uploads
require("dotenv").config();

const productRoutes = require("./Routes/productRout");
const userRoutes = require("./Routes/userRouts");
const adminRoutes = require("./Routes/adminRouts");
const review = require("./Routes/revieveRoute");

const app = express();

app.use(express.json());
app.use(cors());


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/review", review);


mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 20000, 
  socketTimeoutMS: 45000 
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
