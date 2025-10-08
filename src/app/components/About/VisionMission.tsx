import React from "react";

const VisionMission = () => {
  return (
    <div className="flex justify-around bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-12 text-white flex-wrap">
      <div className="flex-1 min-w-[250px] p-6 md:p-8 text-center   hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-4xl md:text-5xl mb-4 font-bold text-teal-300 ramillas">
          VISION
        </h2>
        <p className="text-lg md:text-xl leading-7 text-gray-200 open-sans">
          FROM DESIGN TO REALITY: BE THE ART OF APPAREL SAMPLE MAKING
        </p>
      </div>
      <div className="flex-1 min-w-[250px] p-6 md:p-8 text-center   hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-4xl md:text-5xl mb-4 font-bold text-teal-300 ramillas">
          MISSION
        </h2>
        <p className="text-lg md:text-xl leading-7 text-gray-200 open-sans">
          {`"We empower individuals and businesses to reach their highest
          potential through expert training, strategic consultancy, and
          innovative design solutions, while delivering exceptional
          manufacturing powered by cutting-edge technology and uncompromising
          quality."`}
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
