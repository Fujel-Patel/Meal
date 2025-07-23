import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import Shimmer from './Shimmer.jsx';
import useFetch from '../../../Hooks/fetch.js';

function Body() {
  const [search, setSearch] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  const url = import.meta.env.VITE_API_URL || 'https://dummyjson.com/c/e2ec-532e-4743-bfd1';
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data) setRestaurant(data);
  }, [data]);

  const handleClick = () => {
    setRestaurant((prev) => prev.filter((res) => res.avgRating > 4));
  };

  const filteredRestaurants = restaurant.filter((res) =>
    search === "" ? true : res.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Shimmer />;
  if (error) return <p className="text-red-500 text-center text-xl">Error loading restaurants: {error.message}</p>;

  return (
    <div className="flex flex-col items-center px-2 md:px-10 py-8 space-y-8 bg-gradient-to-b from-black via-gray-900 to-black min-h-[calc(100vh-84px)] mt-[84px] font-sans">
      {/* Search Bar */}
      <div className="w-9/10 max-w-2xl sm:max-w-xl md:max-w-2xl relative mb-4 px-0 sm:px-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/40 via-yellow-400/30 to-yellow-600/40 rounded-2xl blur-lg opacity-30"></div>
        <div className="relative flex items-center gap-1 sm:gap-2 bg-black/60 backdrop-blur-md rounded-2xl p-1 sm:p-2 border border-yellow-500/20 shadow-[0_8px_32px_0_rgba(234,179,8,0.15)]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for your favorite restaurant..."
            className="flex-1 py-2 px-3 sm:py-3 sm:px-4 rounded-xl bg-black/40 text-yellow-200 placeholder-yellow-500/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 transition-all duration-300 font-semibold tracking-wide text-sm sm:text-base md:text-lg min-w-0"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          />
          <button
            className="px-3 py-2 sm:px-5 sm:py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold shadow-lg hover:shadow-yellow-600/25 hover:from-yellow-500 hover:to-yellow-700 transition duration-300 text-sm sm:text-base"
            onClick={handleClick}
          >
            <span className="relative">Top Rated</span>
          </button>
        </div>
      </div>

      {/* Card Container */}
      <div className="w-full flex flex-wrap justify-center gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((res) => (
            <Card key={res.id} resData={res} />
          ))
        ) : (
          <p className="text-gray-400 text-2xl font-semibold py-12">No restaurants found.</p>
        )}
      </div>
    </div>
  );
}

export default Body;