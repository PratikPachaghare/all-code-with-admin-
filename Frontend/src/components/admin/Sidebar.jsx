import React from "react";

const Sidebar = ({ theme, handleThemeToggle }) => {
  return (
    <aside className="w-1/5 bg-gray-800 p-4">
      <h2 className="text-xl text-white font-semibold mb-4">Admin Panel</h2>
      <button
        onClick={handleThemeToggle}
        className={`p-2 m-3 ${theme === "light" ? "bg-black text-white" : "bg-white text-black"} rounded`}
      >
        {theme === "light" ? "Dark Theme" : "Light Theme"}
      </button>
    </aside>
  );
};

export default Sidebar;
