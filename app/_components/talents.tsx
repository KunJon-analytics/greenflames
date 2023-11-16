import Image from "next/image";
import React from "react";

const Talents = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center mb-3 text-gray-400 font-medium">
        From Our Stage to Your Success
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        <Image
          className="h-7"
          height={56}
          width={169}
          src="/images/company/google.svg"
          alt="google"
        />
        <Image
          className="h-7"
          height={41}
          width={152}
          src="/images/company/netflix.svg"
          alt="netflix"
        />
        <Image
          className="h-7"
          height={51}
          width={162}
          src="/images/company/airbnb.svg"
          alt="airbnb"
        />
        <Image
          className="h-7 transform translate-y-2"
          src="/images/company/amazon.svg"
          alt="amazon"
          height={47}
          width={154}
        />
        <Image
          className="h-7"
          height={40}
          width={194}
          src="/images/company/facebook.svg"
          alt="facebok"
        />
        <Image
          className="h-7"
          height={52}
          width={132}
          src="/images/company/grab.svg"
          alt="grab"
        />
      </div>
    </div>
  );
};

export default Talents;
