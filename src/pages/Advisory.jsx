import 'animate.css';
import React from 'react';

const Advisory = () => {
  return (
    <>
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src="/advisory.jpg"
          alt="advisory Image"
          className="absolute inset-0 w-full h-full object-cover animate__animated animate__fadeIn"
        />
        <div className="min-h-[630px] relative h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="text-5xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mr-auto mt-20 animate__animated animate__fadeInDown">
            Expert Advisory and Support<br />for Urban Planning Excellence
          </h2>
        </div>
      </div>

      <div className="font-[sans-serif] relative mx-12 overflow-hidden rounded-lg py-10">
        <div className="grid sm:grid-cols-2 items-center max-sm:gap-10 mt-28 py-16 rounded-lg border-t-8 border-green-900 animate__animated animate__slideInUp">
          <div className="px-6">
            <h3 className="font-extrabold text-4xl text-green-900 leading-tight animate__animated animate__fadeInLeft">
              Helping local authorities craft <span className="text-black">sustainable development strategies.</span>
            </h3>
            <p className="text-black font-light text-base leading-relaxed mt-4 animate__animated animate__fadeInLeft animate__delay-1s">
              NGU-Link Hub provides valuable advisory and technical support to local governments by offering expertise in urban policy development, strategic land-use planning, and sustainable infrastructure design. This includes helping local authorities formulate long-term urban development strategies, optimize zoning regulations, and enhance public service delivery through better infrastructure planning. The hub also offers technical support in areas like Geographic Information Systems (GIS) for data-driven decision-making, and advises on climate resilience, smart city technologies, and community engagement approaches.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-green-800 to-green-900 rounded-tl-full rounded-bl-full w-full h-max animate__animated animate__zoomIn">
            <div className="p-2">
              <img
                src="/techsupport.jpg"
                className="h-64 w-64 rounded-full object-cover border-4 border-white animate__animated animate__zoomIn animate__delay-1s"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advisory;
