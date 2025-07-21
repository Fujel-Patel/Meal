import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-[0_8px_32px_0_rgba(234,179,8,0.25)] h-24 flex items-center px-2 sm:px-4 md:px-8 font-sans md:font-semibold text-base md:text-lg">
      {/* Logo Left */}
      <div className="flex items-center flex-shrink-0">
        <NavLink to="/">
          <img
            src="https://t4.ftcdn.net/jpg/02/74/91/33/360_F_274913349_r9tG4fw95BxhJEVbKPoO3NGtvHgEExmw.jpg"
            alt="Logo"
            className="h-14 w-14 md:h-16 md:w-16 rounded-xl border-4 border-yellow-400/70 bg-black object-cover shadow-xl transition-all duration-300 hover:scale-105"
          />
        </NavLink>
      </div>

      {/* Center Nav (hidden on mobile) */}
      <nav className="flex-1 flex justify-center">
        <ul className="hidden md:flex flex-wrap items-center space-x-4 sm:space-x-6 md:space-x-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition-colors ${isActive ? 'text-yellow-400 bg-yellow-500/10' : 'text-gray-200 hover:text-yellow-400'}`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition-colors ${isActive ? 'text-yellow-400 bg-yellow-500/10' : 'text-gray-200 hover:text-yellow-400'}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition-colors ${isActive ? 'text-yellow-400 bg-yellow-500/10' : 'text-gray-200 hover:text-yellow-400'}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-semibold tracking-wide transition-colors ${isActive ? 'text-yellow-400 bg-yellow-500/10' : 'text-gray-200 hover:text-yellow-400'}`
              }
            >
              Cart
              {cartItems.length > 0 && (
                <span className="ml-1 bg-yellow-500 text-black text-xs font-bold rounded-full px-2 py-0.5">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Right Side Auth (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-2 sm:space-x-3">
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            `px-3 sm:px-4 py-1.5 rounded-lg font-semibold tracking-wide transition-colors border border-yellow-500/20 text-yellow-400 hover:text-black hover:bg-yellow-400/80 ${isActive ? 'bg-yellow-500/10' : ''}`
          }
        >
          Sign In
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `px-3 sm:px-4 py-1.5 rounded-lg font-semibold tracking-wide transition-colors bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow hover:from-yellow-500 hover:to-yellow-700 ${isActive ? 'ring-2 ring-yellow-400' : ''}`
          }
        >
          Sign Up
        </NavLink>
      </div>

      {/* Mobile menu button (three dots) */}
      <div className="md:hidden ml-2 flex items-center">
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 rounded-full text-yellow-400 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Open menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      </div>

      {/* Mobile pop-menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-all duration-300">
          <div ref={menuRef} className="w-full max-w-xs mx-auto bg-gradient-to-b from-black via-gray-900 to-black rounded-2xl shadow-2xl p-8 flex flex-col items-center space-y-6 relative">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-500 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-center px-4 py-3 rounded-lg font-semibold text-lg transition-colors ${isActive ? 'text-yellow-400 bg-yellow-500/10' : 'text-gray-200 hover:text-yellow-400'}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-center px-4 py-3 rounded-lg font-semibold text-lg transition-colors ${isActive ? 'text-yellow-400 bg-yellow-500/10' : 'text-gray-200 hover:text-yellow-400'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-center px-4 py-3 rounded-lg font-semibold text-lg transition-colors ${isActive ? 'text-yellow-400 bg-yellow-500/10' : 'text-gray-200 hover:text-yellow-400'}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-center px-4 py-3 rounded-lg font-semibold text-lg transition-colors ${isActive ? 'text-yellow-400 bg-yellow-500/10' : 'text-gray-200 hover:text-yellow-400'}`
              }
            >
              Cart
              {cartItems.length > 0 && (
                <span className="ml-2 bg-yellow-500 text-black text-xs font-bold rounded-full px-2 py-0.5">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
            <NavLink
              to="/signin"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-center px-4 py-3 rounded-lg font-semibold text-lg border border-yellow-500/20 text-yellow-400 hover:text-black hover:bg-yellow-400/80 transition-colors ${isActive ? 'bg-yellow-500/10' : ''}`
              }
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-center px-4 py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow hover:from-yellow-500 hover:to-yellow-700 transition-colors ${isActive ? 'ring-2 ring-yellow-400' : ''}`
              }
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
