import React, { useState } from 'react';

const Richard = () => {
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
              Plan. Richard NDICUNGUYE is an Urban Development Professional specialized in Strategic Planning, Green and Climate-Resilience Urbanization. Holder of a Master's in Urban Management and Development, with certifications as a Senior Urban and Regional Planner (Rwanda Urban Planning Institute) and Development Project Manager (PM4DEV).
With over a decade working as a Consultant and a Senior Technical Advisor with the Global Green Growth Institute (GGGI), He spearheaded green urbanization initiatives across Rwanda's Secondary Cities, delivering measurable outcomes in Climate-Resilient Urban Development, Sustainable Transport and Mobility Solutions, Green Infrastructure and Building Design, Clean Energy Implementation, Water and Sanitation Systems, Circular Economy and Waste Management, Gender Equity and Social Inclusion, Climate Finance and Green Investment Mobilization. 
His portfolio includes leading multi-stakeholder projects in Urban and Regional Planning, Land Use and Housing Development, Geo-information Technology, Green Growth Strategy, Eco-Tourism Development, Climate Change Adaptation, and Sustainable Landscape Design. 
He has also contributed to academic excellence as a Visiting Lecturer at the University of Rwanda's College of Science and Technology, School of Architecture and Built Environment, teaching Spatial Planning and Land & Housing courses.
Driven by a vision of smart, inclusive, and sustainable urban and regional development that safeguards future generations' needs, He specialized in creating innovative, contextually appropriate solutions that best serve both present and future communities. With a strong belief in the power of collective action to achieve this, I am committed to mentoring and inspiring the next generation of urban practitioners to shape resilient communities and cities of tomorrow. </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Richard;
