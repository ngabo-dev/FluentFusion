import React from 'react';
import OurMission from '../components/OurMission';
import Team from '../components/Team';
import Partners from '../components/Partners';
import CustomSlider from '../components/CustomSlider';

const About = () => {
  return (
    <>
      
      
      <div className=" w-full h-screen">
        {/* Welcome Text Positioned Absolutely */}
        <div className="absolute inset-0 flex flex-col items-center justify-center  text-white z-20">
          

        </div>

        {/* CustomSlider with images in the background */}
        <CustomSlider>
          <img src="/Green.jpg" alt="Green" className="object-cover w-full h-screen" loading="lazy" />
          <img src="/Urban resilient.jpeg" alt="Urban Resilient" className="object-cover w-full h-screen" loading="lazy" />
          <img src="/Nature based solution.jpeg" alt="Nature-Based Solution" className="object-cover w-full h-screen" loading="lazy" />
          <img src="/Urban agriculture1.jpeg" alt="Urban Agriculture" className="object-cover w-full h-screen" loading="lazy" />
          <img src="/smart City.jpeg" alt="Smart City" className="object-cover w-full h-screen" loading="lazy" />
        </CustomSlider>
      </div>

      <div className="font-[sans-serif] relative mx-12 overflow-hidden rounded-lg py-10">
        <div className="grid sm:grid-cols-2 items-center max-sm:gap-10 mt-28 py-16 rounded-lg border-t-8 border-green-900 animate__animated animate__slideInUp">
          <div className="px-6">
            <h3 className="font-extrabold text-6xl text-green-900 leading-tight animate__animated animate__fadeInLeft">
            Jean Pierre  <span className="text-black">NIYONGABO</span>
            </h3>
            <p className="text-black font-light text-base leading-relaxed mt-4 animate__animated animate__fadeInLeft animate__delay-1s">
            I'm skilled software developer with hands-on experience on various projects using HTML, CSS, JavaScript, React js,next js,python,django and tailwind css.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-green-800 to-green-900 rounded-tl-full rounded-bl-full w-full h-max animate__animated animate__zoomIn">
            <div className="p-2">
              <img
                src="/WhatsApp Image 2024-11-21 at 23.57.16.jpeg"
                className="h-64 w-64 rounded-full object-cover border-4 border-white animate__animated animate__zoomIn animate__delay-1s"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <OurMission />


  
      {/* <Team />
      <Partners /> */}
    </>
  );
};

export default About;
