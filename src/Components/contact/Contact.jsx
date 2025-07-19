import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-84px)] mt-[84px] bg-white dark:bg-black text-gray-900 dark:text-gray-100 py-10 px-6 md:px-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-6">Contact Us</h1>
        <p className="text-lg text-gray-300 text-center mb-8">
          Have questions, feedback, or just want to say hello? We'd love to hear from you! 
          Fill out the form below or reach out to us directly.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-8">
          <p className="text-gray-300">
            You can also reach us at:{" "}
            <a href="mailto:support@yourwebsite.com" className="text-teal-400 font-semibold">
              support@yourwebsite.com
            </a>
          </p>
          <p className="text-gray-300 mt-2">
            Follow us on social media:{" "}
            <a href="#" className="text-teal-400 font-semibold">
              Instagram
            </a>{" "}
            |{" "}
            <a href="#" className="text-teal-400 font-semibold">
              Facebook
            </a>{" "}
            |{" "}
            <a href="#" className="text-teal-400 font-semibold">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
