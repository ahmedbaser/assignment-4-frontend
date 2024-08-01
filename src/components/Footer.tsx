import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2 text-center md:text-left">Follow Us</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Page Links */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-center md:text-left">Quick Links</h3>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-400 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-white hover:text-gray-400 transition-colors duration-200"
              >
                 Products
              </Link>
            </li>
            <li>
              <Link
                to="/manage-products"
                className="text-white hover:text-gray-400 transition-colors duration-200"
              >
                ManageProducts
                
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-white hover:text-gray-400 transition-colors duration-200"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-400 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright Information */}
      <div className="mt-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;



