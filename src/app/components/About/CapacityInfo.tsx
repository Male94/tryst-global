"use client";

import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";

const CapacityInfo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once triggered
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(section);
    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex items-center justify-end p-10 transition-opacity duration-500"
    >
      <div className="flex flex-col items-end space-y-4 text-right">
        <div className="w-px h-full bg-[#d4a373] mx-4"></div>
        <div>
          <span className="text-4xl md:text-7xl font-bold text-[#7c6537]">
            <CountUp
              end={300}
              duration={2.5}
              separator=","
              start={0}
              startOnMount={false}
              enableScrollSpy
            >
              {({ countUpRef }) => <span ref={countUpRef}>0</span>}
            </CountUp>
          </span>
          <p className="text-md md:text-xl text-[#7c6537]">
            Minimum bulk order quantity
          </p>
        </div>
        <div>
          <span className="text-4xl md:text-7xl font-bold text-[#7c6537]">
            <CountUp
              end={30}
              duration={2}
              start={0}
              startOnMount={false}
              enableScrollSpy
            >
              {({ countUpRef }) => <span ref={countUpRef}>0</span>}
            </CountUp>
          </span>
          <p className="text-md md:text-xl text-[#7c6537]">
            Max Sample capacity
          </p>
        </div>
        <div>
          <span className="text-4xl md:text-7xl font-bold text-[#7c6537]">
            <CountUp
              end={1000}
              duration={3}
              start={0}
              startOnMount={false}
              enableScrollSpy
            >
              {({ countUpRef }) => <span ref={countUpRef}>0</span>}
            </CountUp>
            sqft
          </span>
          <p className="text-md md:text-xl text-[#7c6537]">Total floor space</p>
        </div>
      </div>
      <div className="w-px h-32 bg-[#d4a373] mx-4"></div>
      <div className="text-start absolute left-[20%]">
        <h3 className="text-6xl font-light text-[#7c6537]">Capacity</h3>
      </div>
    </div>
  );
};

export default CapacityInfo;
