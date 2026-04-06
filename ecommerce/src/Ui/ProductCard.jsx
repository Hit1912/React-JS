import React from "react";
import { ArrowUpRight, Heart } from "lucide-react";

const ProductCard = ({ product }) => {
    return (
        <div className="group relative w-full max-w-[18rem] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition duration-300">

            {/* Image */}
            <div className="bg-gray-100 flex items-center justify-center">
                <img
                    src={product?.images?.[0]}
                    alt=""
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* Floating Category */}
            <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-xs px-3 py-1 rounded-full font-medium">
                {product?.category}
            </div>

            {/* Small Interest Button */}
            <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-md rounded-full hover:scale-110 transition  hover:text-red-500">
                <Heart size={16} className="text-gray-700 hover:text-red-500 h-full w-full hover:bg-red-200 rounded-full p-2" />
            </button>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-1">
                    {product?.name}
                </h2>

                <p className="text-xs text-gray-500 line-clamp-2">
                    {product?.description}
                </p>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-bold text-[#7f5539]">
                        ₹{product?.price}
                    </span>

                    {/* Minimal Action Button */}
                    <button className="flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-black transition">
                        View <ArrowUpRight size={14} />
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductCard;