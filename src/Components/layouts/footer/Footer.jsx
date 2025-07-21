import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-100 py-10 px-4 shadow-xl border-t border-yellow-700 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        
        {/* Logo and Description */}
        <div className="text-center sm:text-left lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-3 drop-shadow-lg font-sans">Foodie's Paradise</h2>
          <p className="text-yellow-200 text-sm md:text-base font-medium">
            Your go-to destination for discovering delicious food, exploring amazing restaurants, and sharing culinary experiences with fellow food lovers!</p>
        </div>
        
        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-yellow-200">Quick Links</h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center justify-center sm:justify-start gap-2 group">
              <AiOutlineHome className="text-lg text-yellow-400" />
              <Link to="/about" className="text-yellow-100 group-hover:text-yellow-400 transition duration-300 text-sm md:text-base font-medium">
                About
              </Link>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2 group">
              <AiOutlineMail className="text-lg text-yellow-400" />
              <Link to="/contact" className="text-yellow-100 group-hover:text-yellow-400 transition duration-300 text-sm md:text-base font-medium">
                Contact
              </Link>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2 group">
              <AiOutlinePhone className="text-lg text-yellow-400" />
              <Link to="/cart" className="text-yellow-100 group-hover:text-yellow-400 transition duration-300 text-sm md:text-base font-medium">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-yellow-200">Connect With Us</h3>
          <div className="flex flex-row sm:flex-col justify-center sm:justify-start gap-6 sm:gap-2">
            <a href="https://facebook.com" className="group flex items-center gap-2 text-yellow-100 hover:text-yellow-400 transition duration-300">
              <FaFacebookF className="text-xl text-yellow-400 group-hover:text-yellow-400" />
              <span className="hidden sm:inline text-sm md:text-base font-medium">Facebook</span>
            </a>
            <a href="https://instagram.com" className="group flex items-center gap-2 text-yellow-100 hover:text-yellow-400 transition duration-300">
              <FaInstagram className="text-xl text-yellow-400 group-hover:text-yellow-400" />
              <span className="hidden sm:inline text-sm md:text-base font-medium">Instagram</span>
            </a>
            <a href="https://twitter.com" className="group flex items-center gap-2 text-yellow-100 hover:text-yellow-400 transition duration-300">
              <FaTwitter className="text-xl text-yellow-400 group-hover:text-yellow-400" />
              <span className="hidden sm:inline text-sm md:text-base font-medium">Twitter</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mt-8 pt-6 border-t border-yellow-700/30">
          <p className="text-yellow-300 text-xs md:text-sm font-medium">&copy; {new Date().getFullYear()} Foodie's Paradise. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;