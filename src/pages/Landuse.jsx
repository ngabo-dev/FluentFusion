import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import CustomSlider from '../components/CustomSlider';

const Landuse = () => {
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
    <>
    <div className="relative w-full h-screen">
    {/* Welcome Text Positioned Absolutely */}
    <div className="absolute inset-0 flex flex-col items-center justify-center  text-white z-20">
      <h1 className="text-5xl font-bold mb-4"><span className='text-pink-600 leading-relaxed'>Zoning plan</span> <br></br>Welcome to Our  Future Land Use!</h1>

    </div>

    {/* CustomSlider with images in the background */}
    <CustomSlider>
      <img src="/landuse1.jpg" alt="Green" className="object-cover w-full h-screen" loading="lazy" />
      <img src="/landuse2.jpg" alt="Urban Resilient" className="object-cover w-full h-screen" loading="lazy" />
      <img src="/landuse3.jpg" alt="Nature-Based Solution" className="object-cover w-full h-screen" loading="lazy" />
      <img src="/landuse4.jpg" alt="Urban Agriculture" className="object-cover w-full h-screen" loading="lazy" />
      <img src="landuse5.jpg" alt="Smart City" className="object-cover w-full h-screen" loading="lazy" />
    </CustomSlider>
  </div>
    <div className="bg-white font-[sans-serif] py-40 px-4 md:px-12 overflow-x-hidden">
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-8 overflow-hidden"
      >
        <div
          className={`p-4 ${
            isVisible ? 'animate__animated animate__fadeInLeft' : ''
          }`}
        >
          <h2 className="text-pink-600 text-4xl md:text-4xl font-extrabold mb-6 md:!leading-[55px] capitalize">
            Land Use Planning/Zoning Plans
          </h2>
          <p className="text-black text-base font-light leading-relaxed">
          NGU Link Hub composed of sharp young planners with innovative urban technologies and urban experts across the world specializing in land use planning and zoning offers a comprehensive range of services including assessments of land use patterns and environmental impacts, developing long-term master plans that align with community goals and sustainability principles, and assisting in the creation and revision of zoning codes to define permissible land uses. A hub helps clients navigate regulatory compliance and develop implementation strategies that prioritize land use initiatives, ensuring that developments adhere to zoning laws and contribute positively to the community.
          </p>
        </div>
        <div
          className={`md:text-right max-md:mt-12 ${
            isVisible ? 'animate__animated animate__fadeInRight' : ''
          }`}
        >
          <img
            src="/landuse4.jpg"
            alt="Land Use Planning"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Landuse;
