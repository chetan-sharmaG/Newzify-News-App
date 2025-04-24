import React, { useState } from 'react';

const Subscribe = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-10 mb-20 px-4">
      <div className="w-full bg-[#EEEAEA] rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
        
        {/* Left Text Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-sm md:text-lg font-mono font-medium text-slate-700">
            GET FIRST UPDATE
          </h2>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900">
            Get the news in front line by
          </h1>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 flex justify-center lg:justify-start items-center gap-2 mt-1">
            <span className="text-red-600">Subscribe</span>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/48/hand-with-pen.png"
              alt="hand-with-pen"
            />
            <span>our latest updates</span>
          </h1>
        </div>

        {/* Input Group */}
        <div className="w-full max-w-md">
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="example@mail.com"
              className="w-full sm:w-[70%] px-4 py-3 rounded-full text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
              autoComplete="off"
              required
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
