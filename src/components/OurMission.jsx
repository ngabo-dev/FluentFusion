import React from "react";
import "animate.css";
import "slick-carousel/slick/slick.css";

const OurMission = () => {
  return (
    <section className=" py-24 px-2 md:px-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center py-10 mb-8 text-pink-600">
          Goals And Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="bg-emerald-800 p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeInUp">
            <div className="border-4 border-white rounded-full w-20 text-center h-20">
              <span className="text-5xl font-bold text-white p-3.5">1</span>
            </div>
            <h3 className="text-3xl text-white font-bold p-3.5 mb-4">
              Our Mission
            </h3>
            <p className="font-light text-base text-white p-3.5">
              Breaking language barriers through personalized, interactive
              learning, fostering cultural exchange for foreigners and locals.
            </p>
          </div>



          <div className="bg-emerald-800 p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeInUp">
            <div className="border-4 border-white rounded-full w-20 text-center h-20">
              <span className="text-5xl font-bold text-white py-12">2</span>
            </div>
            <h3 className="text-3xl text-white font-bold mb-4 p-3.5">
              Our Vision
            </h3>
            <p className="font-light text-base text-white p-3.5">
            To be Rwanda’s leading platform for language learning, bridging cultures and advancing education with accessible resources.
            </p>
          </div>
          <div className="bg-emerald-800 p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeInUp">
            <div className="border-4 border-white rounded-full w-20 text-center h-20">
              <span className="text-5xl font-bold text-white p-3.5">3</span>
            </div>
            <h3 className="text-3xl text-white font-bold p-3.5 mb-4">
            Our background
            </h3>
            <p className="font-light text-base text-white p-3.5">
            Founded to address language challenges, we combine expert knowledge with modern techniques to create an engaging learning space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
