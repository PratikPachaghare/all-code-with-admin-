import React, { useState, useEffect } from "react";
import Sidebar from "./admin/Sidebar";
import ProductForm from "./admin/ProductForm";
import ProductList from "./admin/ProductList";

const AdminPanel = () => {
  const [theme, setTheme] = useState("light");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    images: [],
    rating: 0,
    reviews: 0,
    label: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSubmit = async (formData) => {
    const endpoint = isEditing
      ? `http://localhost:5000/api/admin/update/${products[editingIndex]._id}`
      : "http://localhost:5000/api/admin/add";
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch('http://localhost:5000/api/admin/add', {
        method,
        body: formData,
      });
      if (!response.ok) throw new Error("Failed to save product in admin");
      const data = await response.json();

      if (isEditing) {
        const updatedProducts = [...products];
        updatedProducts[editingIndex] = data;
        setProducts(updatedProducts);
      } else {
        setProducts([...products, data]);
      }

      // Reset form and editing state
      setIsEditing(false);
      setEditingIndex(null);
      setProduct({
        name: "",
        description: "",
        price: "",
        images: [],
        rating: 0,
        reviews: 0,
        label: "",
      });
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleEdit = (index) => {
    const prodToEdit = products[index];
    setProduct(prodToEdit);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    const productId = products[index]._id;
    try {
      await fetch(`http://localhost:5000/api/admin/delete/${productId}`, {
        method: "DELETE",
      });
      setProducts(products.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div
      className={`flex ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      } min-h-screen`}
    >
      <Sidebar theme={theme} handleThemeToggle={handleThemeToggle} />

      <div className="w-full overflow-y-scroll">
        <main className="flex-1 p-8">
          <ProductForm
            product={product}
            setProduct={setProduct}
            isEditing={isEditing}
            handleSubmit={handleSubmit}
          />
          
          <ProductList
            products={products}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
