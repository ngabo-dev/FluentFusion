import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';

const Whatwedo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);  // Trigger animation when in view
        } else {
          setIsVisible(false); // Reset when out of view
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white font-[sans-serif] py-12 px-4 md:px-12 overflow-x-hidden mt-[250px] sm:mt-[100px]"> {/* Adjust margin for small screens */}
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-8 overflow-hidden"
      >
        <div
          className={`p-4 ${
            isVisible ? 'animate__animated animate__fadeInRight' : ''
          }`}
        >
          <h2 className="text-pink-600 text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px] capitalize">
            What we do
          </h2>
          <h2 className='font-bold leading-relaxed text-xl mt-4'>Innovative Learning Experience</h2>
          <p className="text-black text-base font-light leading-relaxed">
          At FLUENTFUSION, we strive to provide an engaging and interactive learning environment. Our dashboard is designed to cater to various learning styles, ensuring that every user can find the method that works best for them.
          </p>

          <p>
          <h2 className='font-bold leading-relaxed text-xl mt-4'>Community and Support</h2>
          Learning a language can be challenging, but you don't have to do it alone. FLUENTFUSION fosters a supportive community where users can connect, share experiences, and access resources that enhance their learning journey.
          </p>
        </div>
        <div
          className={`md:text-right max-md:mt-12 ${
            isVisible ? 'animate__animated animate__fadeInRight' : ''
          }`}
        >
          <img
            src="/smart City2.jpeg"
            alt="what we do image"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
