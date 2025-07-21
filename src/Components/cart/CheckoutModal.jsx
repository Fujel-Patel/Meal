import React from "react";

const CheckoutModal = ({
  defaultAddress,
  show,
  chooseNew,
  address,
  setShow,
  setChooseNew,
  setAddress,
  showError,
}) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full border border-yellow-500/40 shadow-xl relative">
        <button
          className="absolute top-2 right-3 text-gray-400 hover:text-yellow-400 text-xl"
          onClick={() => {
            setShow(false);
            setChooseNew(false);
            setAddress("");
          }}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-yellow-400 mb-5">
          Select Delivery Address
        </h2>
        {!chooseNew ? (
          <>
            <div className="mb-6">
              <label className="block font-medium text-gray-200 mb-2">
                Default Address:
              </label>
              <div className="p-3 border border-yellow-300/20 bg-black/30 rounded">
                {defaultAddress}
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="py-2 px-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-opacity-80 hover:from-yellow-500 hover:to-yellow-700 rounded text-black font-bold"
                onClick={() => {
                  setShow(false);
                  setChooseNew(false);
                  setAddress("");
                  showError(`Order will be delivered to: ${defaultAddress}`);
                }}
              >
                Deliver Here
              </button>
              <button
                className="py-2 px-4 bg-gray-800 rounded text-yellow-400 border border-yellow-400/40 hover:bg-yellow-600/20"
                onClick={() => setChooseNew(true)}
              >
                Add New Address
              </button>
            </div>
          </>
        ) : (
          <>
            <label className="block font-medium text-gray-200 mb-2">
              Enter New Address:
            </label>
            <textarea
              className="w-full p-2 rounded border border-yellow-500/20 bg-black/30 text-yellow-200 mb-4"
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Type your address here"
              autoFocus
            />
            <div className="flex gap-3 mt-2">
              <button
                className="py-2 px-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-opacity-90 rounded text-black font-bold"
                onClick={() => {
                  if (address.trim() === "") {
                    showError("Please enter an address.");
                  } else {
                    setShow(false);
                    setChooseNew(false);
                    showError(`Order will be delivered to: ${address}`);
                    setAddress("");
                  }
                }}
              >
                Save & Deliver Here
              </button>
              <button
                className="py-2 px-4 bg-gray-700 rounded text-yellow-400 border border-yellow-400/40 hover:bg-yellow-600/20"
                onClick={() => setChooseNew(false)}
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
