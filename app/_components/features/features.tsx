import React from "react";
import Image from "next/image";
import Link from "next/link";

import Action from "./action";

const Features = () => {
  return (
    <>
      <div className="sm:flex items-center sm:space-x-8 mt-36">
        <div data-aos="fade-right" className="sm:w-1/2 relative">
          <div className="bg-primary rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
          <h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
            GreenFlames:{" "}
            <span className="text-primary">Our Work in Action</span>
          </h1>
          <p className="py-5 lg:pr-32">
            Watch what we’ve been up to! Our video highlights our exciting media
            coverage and vibrant animations. It&apos;s a glimpse into the
            stories we’ve crafted with creativity. If you’re inspired and want
            to collaborate, get in touch!
          </p>
          <Link
            href={"https://wa.me/2347010936181"}
            target="_blank"
            className="underline"
          >
            Get in Touch
          </Link>
        </div>
        <div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
          <div className="floating bg-accent w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"></div>
          <Image
            className="rounded-xl z-40 relative"
            src="/images/thumbnail.webp"
            alt="teacher explaining"
            width={705}
            height={472}
          />
          <Action />
          <div className="bg-primary w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
        </div>
      </div>
    </>
  );
};

export default Features;
