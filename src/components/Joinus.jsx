import React, { useEffect, useRef, useState } from 'react';
import 'animate.css'; // Import animate.css for animations

const Joinus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
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
    <div
      ref={sectionRef}
      className="bg-emerald-800 font-[sans-serif] mx-4 sm:mx-20 px-6"
    >
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
        {/* Image section */}
        <div className={`md:h-[400px] ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}>
          <img src="/Green.jpg" className="w-full h-full rounded-lg p-4 object-cover" />
        </div>

        {/* Content section */}
        <div className={`max-md:text-center ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}>
          <h3 className="text-white font-semibold md:text-3xl text-2xl md:leading-10 capitalize">
           
          </h3>
          <p className="mt-4 font-light text-base text-white p-3.5 leading-relaxed">
          Tailored Language Courses
          We understand that each learner has unique needs. Our platform offers personalized course recommendations, allowing users to focus on specific language skills and topics that align with their goals.
          </p>
          <div className="font-[sans-serif] space-x-12 space-y-4">
            <a href="/LoginPage">
            <button type="button" className="px-5 py-2.5 rounded-lg tracking-wider font-light text-base text-white p-3.5 outline-none bg-pink-600 hover:bg-pink-500 active:bg-pink-600 capitalize">
              Enroll in our Courses
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;