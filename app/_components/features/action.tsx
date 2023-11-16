"use client";

import React, { useState } from "react";

import VideoBox from "../common/video-box";

const Action = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <VideoBox isOpen={isOpen} setOpen={setOpen} />
      <button
        onClick={() => setOpen(true)}
        className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50"
      >
        <svg
          className="w-5 h-5 ml-1"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
            fill="#23BDEE"
          />
        </svg>
      </button>
    </>
  );
};

export default Action;
