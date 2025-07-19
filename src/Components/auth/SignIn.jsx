import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Placeholder for sign-in logic
    console.log('Sign In:', { email, password });
  };

  return (
    <div className="min-h-[calc(100vh-84px)] mt-[84px] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-md w-full space-y-8 p-8 md:p-10 bg-black/40 backdrop-blur-md rounded-2xl border border-yellow-500/20 shadow-[0_8px_32px_0_rgba(234,179,8,0.2)]">
        <div className="text-center">
          <FaUserCircle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent pb-2">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-yellow-500 hover:text-yellow-400 transition-colors duration-300">
              Sign Up
            </Link>
          </p>
        </div>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-500 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-yellow-500 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-yellow-500/20 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent text-gray-100 placeholder-gray-500 transition-all duration-300"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-yellow-500 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-yellow-500/20 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent text-gray-100 placeholder-gray-500 transition-all duration-300"
                placeholder="••••••••"
                required
              />
              <div className="flex items-center justify-end mt-2">
                <a href="#" className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors duration-300">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold shadow-lg shadow-yellow-600/20 transform hover:scale-[1.02] transition-all duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
