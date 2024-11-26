import React from 'react';

const Gis = () => {
  return (
    <>
        <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <img src="/smart City.jpeg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

    <div class="min-h-[550px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h2 class="text-5xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">Innovative Urban Mapping</h2>
      <p class="sm:text-lg text-base text-center text-gray-200 z-20">Using GIS technology to visualize and plan urban landscapes</p>


    </div>
  </div>

    <div className="font-sans mt-32 mx-12">
      <div className="grid lg:grid-cols-2 items-center rounded-lg lg:gap-y-6 bg-emerald-800">
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
          <h2 className="text-white lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
            Comprehensive GIS Solutions for Urban Planning
          </h2>
          <p className="text-white mt-6 text-base leading-relaxed">
            Geo-spatial Technology (GIS) Services offers advanced solutions for urban planning and development.
          </p>
        </div>

        <div className="lg:h-[480px] flex items-center">
          <video
            src="/videos/urbanplan.mp4"
            className="w-full h-full object-cover"
            alt="Urban Planning"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-4 my-12">
        {/* GIS Mapping and Analysis */}
        <div className="shadow-lg p-6 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff69b4"
            className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
            viewBox="0 0 32 32"
          >
            <path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zM16 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14zm7-14H9v-2h14v2z" />
          </svg>
          <h3 className="text-lg font-bold mb-2 text-emerald-800">GIS Mapping and Analysis</h3>
          <p className="text-sm text-black">Provide advanced GIS services for mapping urban features and analyzing spatial data.</p>
        </div>

        {/* 3D City Models */}
        <div className="shadow-lg p-6 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff69b4"
            className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
            viewBox="0 0 512 512"
          >
            <path d="M256 0C114.618 0 0 114.618 0 256s114.618 256 256 256 256-114.618 256-256S397.382 0 256 0zm0 482C132.28 482 30 379.72 30 256S132.28 30 256 30s226 102.28 226 226-102.28 226-226 226zm75-241h-60v-60c0-8.284-6.716-15-15-15s-15 6.716-15 15v75c0 8.284 6.716 15 15 15h75c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
          </svg>
          <h3 className="text-lg font-bold mb-2 text-emerald-800">3D City Models</h3>
          <p className="text-sm text-black">Create realistic 3D models for urban areas to visualize development plans.</p>
        </div>

        {/* Urban Mobility Solutions */}
        <div className="shadow-lg p-6 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff69b4"
            className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
            viewBox="0 0 20 20"
          >
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18C5.58 18 2 14.42 2 10S5.58 2 10 2s8 3.58 8 8-3.58 8-8 8zm0-11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          <h3 className="text-lg font-bold mb-2 text-emerald-800">Urban Mobility Solutions</h3>
          <p className="text-sm text-black">Analyze traffic patterns and develop solutions to enhance urban mobility.</p>
        </div>

        {/* Environmental Impact Assessment */}
        <div className="shadow-lg p-6 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff69b4"
            className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
            viewBox="0 0 512 512"
          >
            <path d="M256 0C114.618 0 0 114.618 0 256s114.618 256 256 256 256-114.618 256-256S397.382 0 256 0zm0 482C132.28 482 30 379.72 30 256S132.28 30 256 30s226 102.28 226 226-102.28 226-226 226zm-90-301c0-8.284-6.716-15-15-15s-15 6.716-15 15v180c0 8.284 6.716 15 15 15s15-6.716 15-15V181zm90 0c0-8.284-6.716-15-15-15s-15 6.716-15 15v180c0 8.284 6.716 15 15 15s15-6.716 15-15V181zm90 0c0-8.284-6.716-15-15-15s-15 6.716-15 15v180c0 8.284 6.716 15 15 15s15-6.716 15-15V181z" />
          </svg>
          <h3 className="text-lg font-bold mb-2 text-emerald-800">Environmental Impact Assessment</h3>
          <p className="text-sm text-black">Evaluate the potential environmental impact of urban projects and propose mitigation strategies.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Gis;
