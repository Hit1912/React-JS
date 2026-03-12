import React from "react";

export default function productshos() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      
      <div className="bg-white max-w-sm w-full rounded-3xl shadow-xl p-4">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Nike Airforce"
            className="w-full h-64 object-cover"
          />

          <span className="absolute top-3 left-3 text-sm bg-white/70 backdrop-blur px-3 py-1 rounded-full">
            Best Seller
          </span>

          <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              className="w-6 h-6"
            />
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            <span className="w-2 h-2 bg-white rounded-full opacity-100"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold">Nike Airforce1 Premium</h2>

          <p className="text-gray-500 mt-1 font-medium">
            Own the Airforce
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Step back into classic hoops style with a durable leather.
          </p>

          <div className="flex items-center justify-between mt-5">

            <span className="bg-gray-100 px-4 py-2 rounded-full font-semibold text-lg">
              $111
            </span>

            <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-900 transition">
              Buy Now
              <span>↗</span>
            </button>

          </div>
        </div>
      </div>

    </div>
  );
}