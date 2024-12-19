import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <>
      <nav className="w-full text-black bg-customwhite h-20 border-gray-500 border-[1px] p-6">
        <div className="navItems flex items-center justify-around">
          <div className="listItems flex items-center gap-8">
            <button className="bg-customgray flex items-center gap-2 p-3 cursor-pointer hover:bg-gray-200 rounded-lg">
              All Category <IoChevronDown className="h-6" />
            </button>

            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 justify-center font-bold text-blue-500"
                    : "flex items-center gap-1 justify-center"
                }
              >
                <MdOutlineHome className="drop-shadow-md" />
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/allproduct"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 justify-center font-bold text-blue-500"
                    : "flex items-center gap-1 justify-center"
                }
              >
                <MdProductionQuantityLimits className="drop-shadow-md" />
                All Product
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/ContactUs"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 justify-center font-bold text-blue-500"
                    : "flex items-center gap-1 justify-center"
                }
              >
                <AiOutlineCustomerService className="drop-shadow-md" />
                Customer Support
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/HelpPage"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 justify-center font-bold text-blue-500"
                    : "flex items-center gap-1 justify-center"
                }
              >
                <RiErrorWarningLine className="drop-shadow-md" />
                Need Help
              </NavLink>
            </div>
          </div>
          <div className="number flex items-center">
            <LuPhoneCall className="drop-shadow-md" /> <p>+01-202-143-690</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Category;
