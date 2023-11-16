"use client";

import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

const Aos = ({ children }: { children?: React.ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return children;
};

export default Aos;
