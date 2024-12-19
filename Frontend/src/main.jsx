import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";

// import AllProductPage from "./components/productDetails.jsx
import AdminPanel from "./components/AdminPanel.jsx";

import Profile from "./components/Profile.jsx";
import Login from "./AuthPages/Login.jsx";
import Register from "./AuthPages/Register.jsx";

import ProductDetailPage from "./components/ProductDetailPage.jsx"; // Ensure this is the correct import for your detailed product page
import Home from "./Pages/Home/Home.jsx";
import ProductDetails from "./components/ProductDetailPage.jsx";
import AllProductPage from "./components/AllProductPage.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "./Pages/Home/ContactUs.jsx";
import HelpPage from "./Pages/HelpPage.jsx";
import PaymentPage from "./Pages/PaymentPage.jsx";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/HelpPage",
        element: <HelpPage />,
      },
      {
        path: "/payment/:productId",
        element: <PaymentPage />,
      },
      {
        path: "/allproduct",
        element: <AllProductPage />,
      },
      {
        path: "/admin",
        element: <AdminPanel />,
      },
      { path: "/profile", element: <Profile /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/product/:id",
        element: <ProductDetailPage />, // Dynamic product detail route cliking by button show details page
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
     <RouterProvider router={router} />

    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition:Bounce
    />
  </StrictMode>
);
