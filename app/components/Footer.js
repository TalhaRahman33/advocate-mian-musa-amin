import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Advocate Mian Musa Amin
          </h2>
          <p className="text-sm leading-6">
            Providing professional legal advice and representation in criminal, 
            family, corporate, and property law cases with over 10 years of 
            experience and a strong commitment to justice.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-500 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-500 transition">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-500 transition">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
          <p className="text-sm">📍 Office: Lahore, Pakistan</p>
          <p className="text-sm">📞 Phone: +92 300 1234567</p>
          <p className="text-sm">📧 Email: musaaminlaw@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 text-sm border-t border-gray-700 mt-6 pt-4">
        © {new Date().getFullYear()} Advocate Mian Musa Amin. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
