import React from "react";
import Image from "next/image";

import ActionButtons from "./action-buttons";

const Hero = () => {
  return (
    <div>
      <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
        <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="my-4 text-5xl font-bold leading-tight text-darken"
          >
            <span className="text-primary">Elevate Your Story</span> with
            Captivating Media & Dynamic Animation
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="leading-normal text-2xl mb-8"
          >
            Crafting Engaging Narratives through Innovative Media Solutions
          </p>
          <ActionButtons />
        </div>
        <div className="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
          <Image
            data-aos="fade-up"
            data-aos-once="true"
            className="w-10/12 mx-auto 2xl:-mb-20"
            src="/images/main.png"
            height={744}
            width={990}
            alt="hero image"
          />
          {/* calendar  */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
          >
            <Image
              className="bg-white bg-opacity-80 rounded-lg h-12"
              src="/images/calendar.svg"
              height={48}
              width={150}
              alt="calendar"
            />
          </div>
          {/* <!-- red --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            className="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
          >
            <svg
              className="h-16 sm:h-24"
              viewBox="0 0 149 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <rect
                  x="40"
                  y="32"
                  width="69"
                  height="69"
                  rx="14"
                  fill="#F3627C"
                />
              </g>
              <rect
                x="51.35"
                y="44.075"
                width="47.3"
                height="44.85"
                rx="8"
                fill="white"
              />
              <path
                d="M74.5 54.425V78.575"
                stroke="#F25471"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M65.875 58.7375L65.875 78.575"
                stroke="#F25471"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M83.125 63.9125V78.575"
                stroke="#F25471"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="149"
                  height="149"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="20" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          {/* <!-- ux className --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
          >
            <Image
              className="bg-white bg-opacity-80 rounded-lg h-20"
              src="/images/ux-class.svg"
              height={80}
              width={170}
              alt="ux"
            />
          </div>
          {/* <!-- congrats --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
          >
            <Image
              className="bg-white bg-opacity-80 rounded-lg h-12"
              src="/images/congrat.svg"
              height={48}
              width={150}
              alt="congrats"
            />
          </div>
        </div>
      </div>
      <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
        <svg
          className="xl:h-40 xl:w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="bg-white w-full h-20 -mt-px"></div>
      </div>
    </div>
  );
};

export default Hero;
