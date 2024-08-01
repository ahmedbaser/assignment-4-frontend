import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center ml-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src= 'https://media.istockphoto.com/id/1264808502/photo/baseball-match-team-or-tournament-name-badge-mock-up-scoreboard-and-gold-cup-trophy-for.jpg?s=2048x2048&w=is&k=20&c=A0z401eZwlOmCF1sF8eUUzunLxUDxLV6k4FpPjS7qgs=' alt="Logo" className="h-8 rounded-full" />
          
        </Link>
      </div>

      <div className="flex space-x-4 mr-24">
        {/* Navigation Links */}
        <Link to="/" className="hover:text-gray-400 transition-colors duration-200">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-400 transition-colors duration-200">
          All Products
        </Link>
       
        <Link to="/manage-products" className="hover:text-gray-400 transition-colors duration-200">
          Manage Products
        </Link>
        <Link to="/cart" className="hover:text-gray-400 transition-colors duration-200">
          Cart
        </Link>
        <Link to="/about" className="hover:text-gray-400 transition-colors duration-200">
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;




















