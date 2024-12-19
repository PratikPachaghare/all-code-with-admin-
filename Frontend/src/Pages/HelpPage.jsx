import React from "react";

// Sample help information data
const helpInformation = [
  {
    title: "How to Reset Your Password",
    content: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email to reset it.",
  },
  {
    title: "Shipping Information",
    content: "We offer standard and express shipping options. Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days.",
  },
  {
    title: "Return Policy",
    content: "You can return any item within 30 days of purchase as long as it is in its original condition. Please contact customer service for assistance.",
  },
  {
    title: "Contact Us",
    content: "If you have any questions, feel free to reach out to our customer service at +01-202-143-690 or email us at support@example.com.",
  },
];

const HelpPage = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      <p className="mb-4">
        Welcome to the Help Center! Here you can find information to assist you with our services.
      </p>

      <div className="space-y-4">
        {helpInformation.map((info, index) => (
          <div key={index} className="p-4 border rounded-md shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">{info.title}</h2>
            <p>{info.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;
