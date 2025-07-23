import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    try {
      // Placeholder for sending password reset email logic
      // For example, call an API endpoint to send the reset email
      console.log('Send password reset email to:', email);
      setMessage('If this email is registered, a password reset link has been sent.');
    } catch (err) {
      setError('Failed to send password reset email. Please try again later.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-84px)] mt-[84px] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-md w-full space-y-8 p-8 md:p-10 bg-black/40 backdrop-blur-md rounded-2xl border border-yellow-500/20 shadow-[0_8px_32px_0_rgba(234,179,8,0.2)]">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent pb-2">
            Forgot Password
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your email address below and we'll send you a link to reset your password.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-500 text-sm">
            {error}
          </div>
        )}

        {message && (
          <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3 text-green-500 text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold shadow-lg shadow-yellow-600/20 transform hover:scale-[1.02] transition-all duration-300"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
