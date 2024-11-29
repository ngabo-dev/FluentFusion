import { useEffect, useState } from 'react';
import 'animate.css';
import Testimonial from '../components/Testimonial';
import Joinus from '../components/Joinus';
import Whatwedo from '../components/Whatwedo';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Partners from '../components/Partners';

const Home = () => {
  const [activeVideo, setActiveVideo] = useState(0); // State to track the active video
  const videos = [
    { src: '/videos/vid11.mp4' },
    { src: '/videos/vid6.mp4' },
    { src: '/videos/vid8.mp4' },
    { src: 'videos/vid10.mp4' },
    { src: '/videos/vid3.mp4' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prevVideo) => (prevVideo + 1) % videos.length); // Switch between videos every 6 seconds
    }, 6000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [videos.length]);

  return (
    <>
    <Navbar />
      <div className="relative h-screen bg-no-repeat bg-cover">
        {/* Videos */}
        {videos.map((video, index) => (
          <video
            key={index}
            src={video.src}
            type="video/mp4"
            autoPlay
            muted
            loop
            className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ${activeVideo === index ? 'opacity-100 animate__slideInLeft' : 'opacity-0'}`}
          />
        ))}

        {/* Conditional Transparent Cover - only when video is playing */}
        {activeVideo !== null && (
          <>
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

            {/* Linear Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-20"></div>
          </>
        )}

        {/* Main Section */}
        <div className="relative z-30 flex flex-col justify-center h-full">
          <div className="px-4 sm:px-8 py-24 mt-20 font-[sans-serif]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12">
              
              {/* Text Section */}
              <div className="text-center sm:text-center md:text-left mt-60 sm:mt-20">
                <h2 className="text-1xl sm:text-3xl lg:text-3xl text-pink-600 font-extrabold mb-6 leading-relaxed">
                  Unlock the world of languages with FLUENTFUSION. Your personalized dashboard is designed to guide you through your learning experience, making it engaging and effective.


                </h2>

                {/* Join Us Button */}
                <a
                  href="LoginPage"
                  className="mt-8 sm:mt-12 bg-pink-600 hover:bg-opacity-80 text-white py-3 px-6 rounded-lg text-lg lg:text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block"
                >
                  Get Started
                </a>
              </div>

              {/* Video Section */}
              <div className="text-center">
                <video autoPlay muted loop className="animate__animated animate__fadeInRight rounded-full h-full w-full sm:mt-10 max-w-md lg:max-w-lg">
                  <source src="/videos/vid11.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining components */}
      <Whatwedo className="sm:mt-44" />
      <Joinus />
      <Testimonial />
      {/* <Partners /> */}
      <Footer />
    </>
  );
};

export default Home;
