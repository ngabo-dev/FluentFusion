import React from 'react';

const Swot = () => {
  return (
    <>
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <img src="/Urban agriculture.jpeg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

    <div class="min-h-[350px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h2 class="text-5xl font-bold mb-4 flex flex-col items-center justify-center  text-pink-600 z-20 mt-20">Assessing Urban Potential</h2>
      <p class="sm:text-lg text-base text-center text-gray-200 z-20">Analyzing strengths, weaknesses, and opportunities in urban planning.</p>


    </div>
  </div>
    <div className=" font-[sans-serif] relative  px-12 py-48 shadow-lg shadow-green-900 mx-auto rounded overflow-hidden">
      <div className="grid sm:grid-cols-2 max-sm:gap-6">
        <div className="text-center p-6 flex flex-col justify-center items-center">
          <h3 className="font-extrabold text-5xl text-green-900 leading-tight"><span className="text-gray-800">Spatial</span> SWOT Analysis</h3>
          <h6 className="text-lg text-black mt-4">Assessing strengths, weaknesses, opportunities, and threats related to urban planning.</h6>

          <ul className="flex flex-wrap justify-center gap-6 mt-8">
            <li className="text-green-900 text-sm">Vision Workshops</li>
            <li className="text-green-900 text-sm">Goal Setting</li>
            <li className="text-green-900 text-sm">Scenario Planning</li>
            <li className="text-green-900 text-sm">Stakeholder Feedback</li>
          </ul>
        </div>

        <div className="flex justify-end items-center p-2 bg-gradient-to-b from-green-900 to-[#f30574] rounded-bl-[230px] w-full h-full">
          <div className="h-72 w-72 rounded-full bg-gradient-to-tr from-green-900 to-[#f30574] p-5">
            <img src="https://readymadeui.com/team-image.webp" className="w-full h-full rounded-full object-cover border-8 border-white" alt="img" />
          </div>
        </div>
      </div>

      <div className="absolute -top-[50px] -left-[50px] w-28 h-28 rounded-full bg-green-900 opacity-40 shadow-lg"></div>
      <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-green-900 opacity-40 shadow-lg"></div>
    </div>
    </>
  );
};

export default Swot;
