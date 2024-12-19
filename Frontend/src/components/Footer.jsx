import React from "react";

const FooterWithoutLink = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[50px] px-4">
        {/* Logo and Contact Information */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Tuski</h2>
          <p className="mb-2">Customer Supports:</p>
          <p className="text-yellow-500 font-bold mb-2">(629) 555-0129</p>
          <p className="mb-2">4517 Washington Ave.</p>
          <p className="mb-2">Manchester, Kentucky 39495</p>
          <p>info@Tuski.com</p>
        </div>

        {/* Top Category */}
        <div>
          <h3 className="text-white font-semibold mb-4">TOP CATEGORY</h3>
          <ul className="space-y-2">
            <li>Computer & Laptop</li>
            <li>SmartPhone</li>
            <li>Headphone</li>
            <li>
              <span className="text-yellow-500">Accessories</span>
            </li>
            <li>Camera & Photo</li>
            <li>TV & Homes</li>
            <li>
              <span className="text-yellow-500">Browse All Product →</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>Shop Product</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Track Order</li>
            <li>Customer Help</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>Tuski - eCommerce. Developed by Fascave IT Solutions</p>
      </div>
    </footer>
  );
};

export default FooterWithoutLink;
