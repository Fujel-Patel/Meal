import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../features/cartSlice.js';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import restaurant from './resData.js';

function Card(props) {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const { resData = restaurant } = props;
  const { imgSrc, name, cuisine, price, avgRating, avgDeliveryTime } = resData;

  const handleAddToCart = () => {
    dispatch(addItem({ 
      id: resData.id,
      name,
      price,
      imgSrc,
      quantity: 1
    }));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // Reset after 1.5 seconds
  };

  return (
    <div className="relative font-bold m-3 p-3 w-full max-w-xs bg-black/40 backdrop-blur-md border border-yellow-500/20 hover:border-yellow-500/40 shadow-[0_8px_32px_0_rgba(234,179,8,0.15)] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_15px_45px_0_rgba(234,179,8,0.25)] group hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative overflow-hidden rounded-xl">
        <img 
          className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-700" 
          src={imgSrc} 
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>
      +
      <div className="p-4 relative z-10">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text group-hover:animate-gradient">{name}</h3>
          <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium border border-yellow-500/20 shadow-inner">
            {avgRating} ★
          </span>
        </div>
        
        <p className="text-gray-400 text-sm mb-3 font-medium">{cuisine}</p>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text">₹{price}</span>
          <span className="text-yellow-500/80 text-sm font-medium bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
            {avgDeliveryTime}
          </span>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full mt-2 py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold transform transition-all duration-500 ${
            added
              ? 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-500 border border-green-500/20'
              : 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black hover:scale-[1.02] shadow-lg shadow-yellow-600/20 relative overflow-hidden group/btn'
          }`}
        >
          {added ? (
            <>
              <FaCheck className="text-base animate-bounce" />
              <span className="animate-pulse">Added to Cart</span>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/50 to-yellow-400/0 opacity-0 group-hover/btn:opacity-100 animate-[shine_1.5s_ease_infinite] -translate-x-full group-hover/btn:translate-x-full transition-all duration-1000"></div>
              <FaShoppingCart className="text-base" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Card;