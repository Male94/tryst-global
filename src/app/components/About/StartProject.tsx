"use client";

import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StartProject = () => {
  const [hasCounted, setHasCounted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the count-up runs only once when in view
    threshold: 0.5, // Triggers when 50% of the component is in view
  });

  return (
    <div
      ref={ref}
      className="bg-[#fffbf5] py-10 flex flex-col md:flex-row justify-between items-center max-w-full px-10 md:px-30"
      id="contact"
    >
      <div className="w-full flex flex-col justify-center md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-serif text-brown-700 mb-6 ramillas">
          Start Your Project
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border-1 border-[#65460a] rounded-sm focus:outline-none"
          />
          <div className="flex gap-1">
            <input
              type="text"
              placeholder="Email Address"
              className="w-1/2 p-2 border-1 border-[#65460a] rounded-sm focus:outline-none"
            />
            <div className="w-1/2 flex items-center border-1 border-[#65460a] rounded-sm  text-white">
              <span className="h-full p-3 mr-2 text-xs md:text-md bg-[#65460a]">
                +62
              </span>
              <input
                type="text"
                placeholder="Input Number Here"
                className="w-full h-full text-xs md:text-md text-black rounded-sm focus:outline-none  "
              />
            </div>
          </div>
          <select className="w-full p-2 border-1 border-[#65460a] rounded-sm focus:outline-none">
            <option>Select Project</option>
          </select>
          <textarea
            placeholder="Input Message Here"
            className="w-full p-2 border-1 border-[#65460a] rounded-sm h-24 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#65460a] text-white px-6 py-2 rounded-md hover:bg-brown-500 transition-colors duration-200 open-sans"
          >
            GET STARTED
          </button>
        </form>
      </div>
      <div className="bg-cream-100 h-full w-full py-10 flex justify-center items-center">
        <div className="relative h-[300px] w-[250px] md:h-[500px] md:w-[450px] rounded-md">
          <div className="absolute h-[300px] w-[250px] md:h-[500px] md:w-[450px] border-3 border-brown-300 -top-5 -right-5 rounded-xl"></div>
          <Image
            src="/images/about/image (3).png" // Replace with actual image URL
            alt="Project Team"
            className="w-full h-full rounded-xl border-4 border-brown-300"
            fill
          />
          {/* <div className="absolute -top-6 -right-6 bg-[#65460a] text-white px-4 py-2 rounded-xl text-md text-center font-medium"> */}
          {/* {inView && !hasCounted && (
              <CountUp
                end={50}
                duration={2.5}
                onEnd={() => setHasCounted(true)}
                className="text-3xl md:text-5xl ramillas"
              />
            )}
            {hasCounted && (
              <span className="text-3xl md:text-5xl ramillas">
                50<sup>+</sup>
              </span>
            )} */}
          {/* <br /> */}
          {/* Completed Projects */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default StartProject;
