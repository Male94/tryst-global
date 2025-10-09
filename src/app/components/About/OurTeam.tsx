import React from "react";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div className="bg-cream-100 py-10" id="team">
      <h2 className="text-4xl md:text-5xl  text-brown-700 text-center mb-8 open-sans">
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {/* Team Member 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <Image
            src="/images/about/image (1).png" // Replace with actual image URL
            alt="Yunesh Yomal"
            className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
            width={150}
            height={150}
          />
          <h3 className="text-xl font-bold text-gray-800">Yunesh Yomal</h3>
          <p className="text-gray-600">CEO & Owner</p>
          <p className="text-gray-500">WhatsApp: +94 77 392 5888</p>
          <p className="text-gray-500">yunesh@trystglobal.com</p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <Image
            src="/images/about/image (2).png" // Replace with actual image URL
            alt="Thiranga Fernando"
            className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
            width={150}
            height={150}
          />
          <h3 className="text-xl font-bold text-gray-800">Thiranga Fernando</h3>
          <p className="text-gray-600">Chief Technical Officer & Founder</p>
          <p className="text-gray-500">WhatsApp/Zalo: +94 77 2512027</p>
          <p className="text-gray-500">thiranga@gmail.com</p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <Image
            src="/images/about/image.png" // Replace with actual image URL
            alt="Varuna Rajapaksha"
            className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
            width={150}
            height={150}
          />
          <h3 className="text-xl font-bold text-gray-800">Varuna Rajapaksha</h3>
          <p className="text-gray-600">Merchandising Director & Partner</p>
          <p className="text-gray-500">WhatsApp: +94 76 701 4033</p>
          <p className="text-gray-500">senaka@trystglobal.com</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
