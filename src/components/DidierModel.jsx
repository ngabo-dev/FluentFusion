import React, { useState } from 'react';

const DidierModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Button to open the modal */}
      <span
        onClick={openModal}
        className="block text-emerald-800 hover:text-bold font-bold leading-8 cursor-pointer rounded-lg text-sm px-2 py-2.5"
      >
        Know more
      </span>

      {/* Modal structure */}
      {isModalOpen && (
        <div
          id="static-modal"
          className="fixed inset-0 mt-10 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50 px-4 sm:px-6 lg:px-8"
        >
          <div className="p-4 w-full max-w-lg sm:max-w-xl lg:max-w-2xl bg-white rounded-lg shadow-lg border-t-8 border-t-emerald-800 overflow-y-auto max-h-[80vh]">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <button
                onClick={closeModal}
                type="button"
                className="text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
              <p>
              Plan. Didier Rungano is certified urban planner in Rwanda holding a Bachelor’s degree in Geography, specialized in Urban and Regional Planning from the University of Rwanda/ College of Science and Technology. He is skilled in WebGIS and ArcGIS App for field data collection from Esri Rwanda in 2020. He holds a certificate in Geospatial Technology in Land Productivity Monitoring covering the following Modules: Introduction to land productivity concepts and Methodology, Estimation of soil productivity, Overview of GIS, and QGIS, Data preparation and analysis, and Introduction to land productivity prototype model by GMES and Africa and Regional Centre for Mapping Resources for Development (RCMRD) based in Kenya. Didier also received a Certificate of Going Places with Spatial Analysis in ArcGIS Pro from the Esri MOOC Program; holds a Certificate of Spatial Data Science in the New Frontier in Analysis in ArcGIS Pro from the Esri MOOC Program, and also holds a Certificate of Cartography in ArcGIS Pro. During his studies, Didier held the leadership position as the President of the Geography Student Association of Rwanda (GEOSAR) for two years. Currently Didier is Urban Physical planner at National Land Authority. His ambition is to plan for sustainable development and plan for poor people, as a community activist. “So Let all of us feed the people while promoting well-being in the world”
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DidierModel;
