import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItemQuantity, clearCart } from '../../features/cartSlice.js';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, quantity) => {
    const qty = parseInt(quantity, 10);
    if (qty > 0) {
      dispatch(updateItemQuantity({ id, quantity: qty }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  // Define a padding-top class that accounts for your header's height.
  // Assuming your header is roughly h-16 (64px) or h-20 (80px),
  // a 'pt-24' (96px) or 'pt-28' (112px) would provide enough spacing.
  // You might need to adjust this value based on your actual header height.
  const headerOffsetClass = 'pt-28'; // Adjust this value (e.g., pt-24, pt-32)

  if (items.length === 0) {
    return (
      // Added headerOffsetClass and min-h-screen
      <div className={`flex flex-col items-center justify-center px-4 py-8 ${headerOffsetClass} min-h-screen bg-gradient-to-b from-black via-gray-900 to-black`}>
        <div className="w-full max-w-4xl p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-yellow-500/20 shadow-[0_8px_32px_0_rgba(234,179,8,0.2)]">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="relative flex items-center justify-center w-full h-full">
                <FaShoppingCart className="h-16 w-16 text-yellow-500" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-400 mb-8">Looking for something delicious? Check out our menu!</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold shadow-lg shadow-yellow-600/20 transform hover:scale-[1.02] transition-all duration-300"
            >
              <span>Browse Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    // Added headerOffsetClass and min-h-screen
    <div className={`flex flex-col items-center px-4 py-8 ${headerOffsetClass} min-h-screen bg-gradient-to-b from-black via-gray-900 to-black`}>
      <div className="w-full max-w-5xl">
        {/* Cart Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
              Your Cart
            </h2>
            <p className="text-gray-400">{itemCount} {itemCount === 1 ? 'item' : 'items'} in cart</p>
          </div>
          <button
            onClick={handleClearCart}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition duration-300"
          >
            <FaTrash />
            Clear Cart
          </button>
        </div>

        <div className="grid md:grid-cols-[2fr,1fr] gap-6">
          {/* Cart Items */}
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-yellow-500/20 hover:border-yellow-500/30 transition duration-300"
              >
                {/* Item Image */}
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg border border-yellow-500/20"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-yellow-400 mb-1">{item.name}</h3>
                      <p className="text-gray-400 text-sm mb-2">{item.cuisine}</p>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="p-1.5 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition duration-300"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg border border-yellow-500/20 p-1">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-1.5 text-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/10 rounded-md transition duration-300"
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-yellow-100 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-1.5 text-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/10 rounded-md transition duration-300"
                      >
                        <FaPlus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-lg font-bold text-yellow-400">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          {/* Changed 'top-[100px]' to 'top-[var(--header-height, 100px)]' to allow for dynamic height from CSS variable, or a fixed value matching the header.
              If your header is fixed/sticky, 'top-[Ypx]' where Y is slightly more than header height is correct.
              Let's keep it simple and just adjust the fixed value, e.g., 'top-[112px]' (for pt-28 headerOffsetClass)
           */}
          <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-yellow-500/20 shadow-[0_8px_32px_0_rgba(234,179,8,0.2)] p-6 h-fit sticky top-[112px]"> {/* Adjusted sticky top value */}
            <h3 className="text-xl font-bold text-yellow-400 mb-6">Order Summary</h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-2xl text-gray-400">
                <span>Delivery Fee</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax</span>
                <span>${(totalAmount * 0.1).toFixed(2)}</span>
              </div>
              <div className="h-px bg-yellow-500/20"></div>
              <div className="flex justify-between text-lg font-bold text-yellow-400">
                <span>Total</span>
                <span>${(totalAmount * 1.1).toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold shadow-lg shadow-yellow-600/20 transform hover:scale-[1.02] transition-all duration-300">
              Proceed to Checkout
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              Free delivery for orders over $50
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;