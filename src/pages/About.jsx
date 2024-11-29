import React from 'react';
import OurMission from '../components/OurMission';
import CustomSlider from '../components/CustomSlider';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      
      <Navbar />


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
      <Footer />
    </>
  );
};

export default About;
