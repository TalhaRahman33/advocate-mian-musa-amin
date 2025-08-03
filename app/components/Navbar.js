"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? "bg-blue-900 shadow-md" : "bg-blue-900"
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold tracking-wide cursor-pointer">
          Advocate Mian Musa Amin
        </h1>

        {/* Desktop Navigation Links */}
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

        {/* Call to Action Button (Desktop Only) */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-200"
        >
          Book Consultation
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 text-white px-6 py-4 space-y-4 animate-slide-down rounded-b-lg">
          <Link
            href="/"
            onClick={toggleMenu}
            className="block hover:text-yellow-400 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="block hover:text-yellow-400 transition"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={toggleMenu}
            className="block hover:text-yellow-400 transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="block hover:text-yellow-400 transition"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={toggleMenu}
            className="block bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
