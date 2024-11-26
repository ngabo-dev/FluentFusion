import React from 'react';

const Transportation = () => {
  return (
    <>
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src="/Transportation 2.jpg"
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[550px] relative h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="text-5xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">
            Moving Towards Efficiency
          </h2>
        </div>
      </div>

      <div className="font-[sans-serif] relative mx-12 overflow-hidden rounded-lg py-10">
        <div className="grid sm:grid-cols-2 items-center max-sm:gap-10 mt-28 py-16 rounded-lg border-t-8 border-green-900">
          <div className="px-6">
            <h3 className="font-extrabold text-4xl text-green-900 leading-tight">
              Transportation <span className="text-black">Planning</span>
            </h3>
            <h6 className="text-2xl text-black font-bold mt-2">Comprehensive Solutions</h6>
            <p className="text-black font-light text-base leading-relaxed mt-4">
              Traffic Impact Studies
              <br />
              Public Transit Integration
              <br />
              Bicycle and Pedestrian Infrastructure
              <br />
              Sustainable Transportation Solutions
              <br />
              Mobility as a Service
            </p>
          </div>

          <div className="bg-gradient-to-tr from-green-800 to-green-900 rounded-tl-full rounded-bl-full w-full h-max">
            <div className="p-2">
              <img
                src="https://readymadeui.com/team-image.webp"
                className="h-64 w-64 rounded-full object-cover border-4 border-white"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transportation;
