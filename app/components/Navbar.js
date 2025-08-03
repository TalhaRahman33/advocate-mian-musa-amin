import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold tracking-wide cursor-pointer">
          Advocate Mian Musa Amin
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300 transition duration-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition duration-200">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300 transition duration-200">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition duration-200">
            Contact
          </Link>
        </div>

        {/* Call to Action Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-200"
        >
          Book Consultation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
