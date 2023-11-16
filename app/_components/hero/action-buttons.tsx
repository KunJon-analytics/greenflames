"use client";

import Link from "next/link";
import React, { useState } from "react";

import VideoBox from "../common/video-box";

const ActionButtons = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="700"
      className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
    >
      <Link href={"https://wa.me/2347010936181"} target="_blank">
        <button className="lg:mx-0 bg-primary text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
          Get in Touch
        </button>
      </Link>

      <div
        onClick={() => setOpen(true)}
        className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
      >
        <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 ml-2"
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
        <span className="cursor-pointer">Explore Our Portfolio</span>
      </div>
      <VideoBox isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default ActionButtons;
