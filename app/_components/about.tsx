import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="mt-16">
      <div data-aos="flip-down" className="text-center max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          <span className="text-primary"> Our Story: </span>
          Pioneering Media Excellence
        </h1>
        <p className="text-gray-500">
          At GreenFlames, we pioneer the art of storytelling through
          cutting-edge media coverage and captivating animations. With a
          relentless passion for innovation, we craft narratives that resonate,
          combining the power of visuals and storytelling to elevate brands,
          ideas, and experiences. Our journey is fueled by a commitment to
          pushing boundaries, fostering creativity, and delivering unparalleled
          media solutions that leave a lasting impact
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7"
      >
        <div className="relative md:w-5/12">
          <Image
            className="rounded-2xl"
            src="/images/teacher.jpg"
            alt="students"
            width={904}
            height={537}
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                Meet Our Visionaries
              </h1>
              <Link href={"https://wa.me/2347010936181"} target="_blank">
                <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  Connect with Our Team
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative md:w-5/12">
          <Image
            className="rounded-2xl"
            src="/images/stage.jpg"
            alt="teacher"
            width={911}
            height={533}
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                Explore Our Work
              </h1>
              <Link
                href={"https://www.youtube.com/watch?v=K24hSj-SO0A"}
                target="_blank"
              >
                <button className="rounded-full text-white text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out bg-accent">
                  Discover Our Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
