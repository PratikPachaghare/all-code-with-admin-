import React, { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import Category from "./Category";
import ProfileSlider from "./ProfileSlider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // user is login or not yes the remove the ressiter and login button
  const [isLogin,setisLogin] = useState(false);

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );


  return (
    <>
      <nav className="bg-customblue p-4">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          {/* Logo */}
          <div className="flex items-center">
            <div className="rounded-full h-10 w-10 md:h-12 md:w-12 overflow-hidden">
              <img
                src="/Images/logo.png"
                alt="logoImage"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="ml-2 text-white text-lg md:text-2xl font-semibold">
              TUSKI
            </span>
          </div>
          
          {/* Search Bar */}
        <div className="w-full lg:w-auto max-w-full mx-2 mt-2 lg:max-w-lg">
          <input
            type="text"
            placeholder="Search for anything..."
            className="p-2 border rounded w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          />
        </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6 text-white mt-4 lg:mt-0">
            {/* Cart Icon with Badge */}
           
            {/* login and regiter buttonts */}
            {!isLogin?<>
            <Link to="/Register" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200"> Ressiter</Link>
            <Link to="/Login" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200" >Login</Link>
            </>
            :<></>}

            <div className="relative cursor-pointer">
              <CgShoppingCart className="text-xl md:text-2xl bg-transparent" />
              <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-white text-black text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                2
              </span>
            </div>

            {/* Heart Icon */}
            <FaRegHeart className="text-xl md:text-2xl cursor-pointer" />

            {/* User Icon */}
            <LuUser2
              className="text-xl md:text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>

        

        {/* Conditionally render ProfileSlider */}
        {menuOpen && (
          <ProfileSlider menuOpen={menuOpen} toggleMenu={toggleMenu} />
        )}
      </nav>

      {/* Category Section */}
      <div className="mt-4 lg:mt-0">
        <Category />
      </div>
    </>
  );
};

export default Navbar;
