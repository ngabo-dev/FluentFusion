import React from 'react';
import 'animate.css';

const Feasibilystudy = () => {
  return (
    <>
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src="/feasibilityimage.jpg"
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[400px] md:min-h-[600px] relative h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-4 md:p-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-12 md:mt-20 animate__animated animate__fadeInDown">
            In-Depth Feasibility Studies <br /> for Sustainable Project Success
          </h2>
        </div>
      </div>

      <div className="font-[sans-serif] relative px-6 md:px-12 py-24 md:py-48  shadow-green-900 mx-auto rounded-lg overflow-hidden max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="text-center sm:text-left p-4 sm:p-6 flex flex-col justify-center items-center sm:items-start">
            <h3 className="font-extrabold text-2xl md:text-4xl text-green-900 leading-tight">
              <span className="text-gray-800">Assessing viability with comprehensive</span> economic and social insights.
            </h3>
            <p className="text-black text-sm md:text-base font-light leading-relaxed mt-4 md:mt-8">
              NGU Link Hub conducts feasibility studies to assess the viability of proposed urban development projects by analyzing key factors such as economic, social, environmental, and technical conditions. This involves evaluating site suitability, infrastructure needs, cost estimates, regulatory requirements, and potential risks to determine whether a project can be successfully implemented. The hub also assesses market demand, project impacts, and stakeholder engagement to ensure that developments align with long-term urban goals and community needs. By providing detailed insights and recommendations, the hub helps clients make informed decisions about the practicality and sustainability of proposed projects.
            </p>
          </div>

          <div className="flex justify-center  sm:justify-end items-center p-2 bg-gradient-to-b from-green-900 to-[#f30574] rounded-bl-[150px] sm:rounded-bl-[230px] w-full h-full">
            <div className="h-52 w-52 md:h-72 md:w-72 rounded-full bg-gradient-to-tr from-green-900 to-[#f30574] p-5">
              <img
                src="/feasibilityimage1.jpg"
                className="w-full h-full rounded-full object-cover border-4 md:border-8 border-white"
                alt="img"
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-green-900 opacity-40 shadow-lg"></div>
        <div className="absolute -top-5 -left-5 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-green-900 opacity-40 shadow-lg"></div>
      </div>
    </>
  );
};

export default Feasibilystudy;
