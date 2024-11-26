import React from 'react';

const EducationResearch = () => {
  return (
    <>
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img src="/education.jpg" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
        <div className="min-h-[550px] relative h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="text-4xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">Empowering Urban Development</h2>
          <p className="sm:text-lg text-base text-gray-200 z-20">A hub for sharing knowledge and fostering innovation in urban planning and sustainable development.</p>
        </div>
      </div>

      <div className="font-sans mx-12 mt-24">
        <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-green-900">
          <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
            <h2 className="text-white lg:text-4xl text-3xl font-bold lg:!leading-[56px]">Education & Research</h2>
            <p className="text-white mt-6 text-base leading-relaxed">
              Providing a platform for urban researchers, practitioners, and policymakers to publish and engage in discussions on urban planning, sustainable development, and related fields.
            </p>
          </div>
          <div className="lg:h-[480px] flex items-center">
            <img src="/research.jpg" className="w-full h-full object-cover" alt="Urban Research" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-12 my-12">
          {/* Publications & Reports */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Publications & Reports</h3>
            <p className="text-sm text-gray-600">NGU Link Hub offers a centralized platform for publishing articles, project reports, and more in fields like urban planning and sustainable development.</p>
            <a href="javascript:void(0);" className="text-pink-600 font-bold inline-block text-sm mt-4 hover:underline">Learn more</a>
          </div>

          {/* Tutoring and Training */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Tutoring and Training</h3>
            <p className="text-sm text-gray-600">Offering workshops, courses, and mentorship opportunities to build skills in urban planning, community engagement, and climate change solutions.</p>
            <a href="javascript:void(0);" className="text-pink-600 font-bold inline-block text-sm mt-4 hover:underline">Learn more</a>
          </div>

          {/* Urban Stories */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Urban Stories</h3>
            <p className="text-sm text-gray-600">A community space celebrating diverse urban experiences through storytelling, art, and multimedia projects that reflect city life’s challenges and heritage.</p>
            <a href="javascript:void(0);" className="text-pink-600 font-bold inline-block text-sm mt-4 hover:underline">Learn more</a>
          </div>

          {/* Urban Case Studies */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Urban Case Studies</h3>
            <p className="text-sm text-gray-600">Documenting urban case studies that highlight successful initiatives and innovative practices in urban planning, fostering knowledge-sharing for better solutions.</p>
            <a href="javascript:void(0);" className="text-pink-600 font-bold inline-block text-sm mt-4 hover:underline">Learn more</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationResearch;
