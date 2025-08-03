"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneButton = () => {
  return (
    <a
      href="tel:+923415732909"
      className="fixed bottom-23 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50"
    >
      <FaPhoneAlt size={22} />
    </a>
  );
};

export default PhoneButton;
