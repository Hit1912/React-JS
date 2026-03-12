import React from "react";

export default function AiCards() {
  return (
    <div className="min-h-screen bg-[#e9e9e9] flex flex-col items-center justify-center p-6 gap-10">

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8">

        {/* Card 1 */}
        <div className="w-[320px] rounded-[34px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl p-4">

          <div className="relative rounded-[26px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              className="w-full h-105 object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Badge */}
            <div className="absolute top-4 left-4 bg-white/90 text-xs px-3 py-1 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
              New-Instagram Reels Creator
            </div>

            {/* Text on Image */}
            <div className="absolute bottom-24 left-5 right-5 text-white">

              <h2 className="text-3xl font-bold leading-tight">
                Craft Your
              </h2>

              <h3 className="text-3xl italic font-serif">
                Imaginary Escape
              </h3>

              <p className="text-sm mt-2 text-white/90">
                The leading AI art generation and image editing tool with
                3.5B+ creations.
              </p>

            </div>

            {/* Glowing Button */}
            <div className="absolute bottom-5 left-5 right-5">
              <button className="
                w-full py-3 rounded-2xl text-lg font-medium
                bg-linear-to-r from-lime-300 to-lime-400
                shadow-[0_10px_30px_rgba(132,204,22,0.8)]
                hover:scale-105 transition
              ">
                Generate Image
              </button>
            </div>

          </div>
        </div>


        {/* Card 2 */}
        <div className="w-[320px] rounded-[34px] bg-lime-500 border border-white/60 shadow-xl p-4 text-white">

          <div className="relative rounded-[26px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              className="w-full h-55 object-cover"
            />

            <div className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
              New-Instagram Reels Creator
            </div>
          </div>

          <div className="mt-5 px-2">
            <h2 className="text-3xl font-bold">Craft Your</h2>

            <h3 className="text-3xl italic font-serif">
              Imaginary Escape
            </h3>

            <p className="text-sm mt-2 opacity-90">
              The leading AI art generation and image editing tool with
              3.5B+ creations.
            </p>

            <button className="
              mt-6 w-full py-3 rounded-2xl text-lg font-medium
              bg-linear-to-r from-lime-200 to-lime-300
              text-black shadow-lg hover:scale-105 transition
            ">
              Generate Image
            </button>
          </div>
        </div>

      </div>


      {/* UI UX Profile */}
      <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg px-5 py-3 rounded-2xl">

        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="UI UX Designer"
          className="w-12 h-12 rounded-xl object-cover"
        />

        <div>
          <p className="font-semibold text-lg">@uix.vikram</p>
          <p className="text-gray-600 text-sm">UI/UX Designer</p>
        </div>

      </div>

    </div>
  );
}