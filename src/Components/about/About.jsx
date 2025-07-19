import React from 'react';
import { FaUtensils, FaHeart, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-84px)] mt-[84px] flex items-center justify-center px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black animate-fadeIn">
      <div className="relative max-w-4xl w-full mx-auto">
        {/* Background */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-2xl border border-yellow-500/20 shadow-[0_8px_32px_0_rgba(234,179,8,0.2)] overflow-hidden -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/5"></div>
        </div>
        <div className="relative p-6 md:p-12">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent pb-2 font-display animate-gradient-slow">
              About Us
            </h1>
            <div className="grid md:grid-cols-3 gap-6 my-10">
              <div className="p-6 rounded-xl bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:scale-105 group transition-all duration-300">
                <FaUtensils className="w-8 h-8 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-yellow-400 font-semibold text-lg mb-2">Culinary Excellence</h3>
                <p className="text-gray-400 text-sm">Finest recipes & cooking techniques</p>
              </div>
              <div className="p-6 rounded-xl bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:scale-105 group transition-all duration-300">
                <FaHeart className="w-8 h-8 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-yellow-400 font-semibold text-lg mb-2">Passion for Food</h3>
                <p className="text-gray-400 text-sm">Created by food lovers, for food lovers</p>
              </div>
              <div className="p-6 rounded-xl bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:scale-105 group transition-all duration-300">
                <FaGlobe className="w-8 h-8 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-yellow-400 font-semibold text-lg mb-2">Global Cuisine</h3>
                <p className="text-gray-400 text-sm">Exploring flavors from around the world</p>
              </div>
            </div>
            <div className="space-y-6 text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to <span className="font-bold text-yellow-400 hover:text-yellow-300 transition-colors">Foodie's Paradise</span>, where passion for food meets creativity! Our mission is to bring you the most delightful recipes, cooking tips, and foodie stories to inspire your culinary journey.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                At <span className="font-bold text-yellow-400 hover:text-yellow-300 transition-colors">Foodie's Paradise</span>, we believe that food is more than just nourishment – it's an art, a culture, and a way to connect with loved ones. From quick and easy meals to gourmet delicacies, our curated recipes and articles are designed to make cooking fun and accessible for everyone.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We're passionate about supporting sustainable practices, showcasing local ingredients, and celebrating food from around the world. Join our community and let's make every meal an experience worth remembering.
              </p>
              <div className="pt-8 border-t border-yellow-500/20 mt-12">
                <p className="text-xl text-yellow-400 font-medium hover:text-yellow-300 transition-colors">
                  Thank you for being part of our journey!
                </p>
                <p className="text-lg text-gray-400 italic mt-2 hover:text-gray-300 transition-colors">
                  - Foodie's Paradise Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
