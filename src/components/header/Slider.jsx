import React from 'react';

function Slider() {
  return (
<div className="relative flex items-center h-[80vh] xl:min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 slider">

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-[90%] mx-auto px-8 lg:px-16 py-20">
        <div className="">
          <h1 className="text-3xl md:text-7xl font-bold text-white leading-tight mb-8">
            Burada {' '}
            <span className="relative inline-block  p-[10px] my-4">
              <span className="absolute inset-0 bg-[#fff] -rotate-[4deg] mb-2  rounded-lg transform"></span>
              <p className="relative -top-2 transform -rotate-[4deg]   text-[#1a1a3d] px-4 py-2  font-extrabold">
texnologiya
              </p>
            </span>
            <br />
          innovasiya ilə görüşür
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Softlink olaraq biz veb həllər, mobil tətbiqlər, texniki dəstək 
  və IT xidmətləri təqdim edirik, bizneslərinizi rəqəmsal dövrdə 
  gücləndiririk.
          </p>

          <button className="group bg-white text-black font-semibold px-8 py-4 rounded-lg flex items-center gap-3 hover:bg-yellow-400 transition-all duration-300 hover:gap-5">
            Xidmətlərimizə Bax 
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-40 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

  );
}

export default Slider;
