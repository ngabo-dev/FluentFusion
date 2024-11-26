import React, { useEffect, useState } from 'react';
import 'animate.css'; // For animations

const Partners = () => {
  const partners = [
    { id: 1, name: "part1", logo: "/part1.jpeg" },
    { id: 2, name: "part2", logo: "/part2.jpeg" },
    { id: 3, name: "part3", logo: "/part3.jpeg" },
    { id: 4, name: "part4", logo: "/part4.jpeg" },
    { id: 5, name: "part5", logo: "/part5.jpeg" },
    { id: 6, name: "part6", logo: "/part6.jpeg" },
    { id: 7, name: "part7", logo: "/part7.jpeg" },
    { id: 8, name: "part8", logo: "/part8.jpeg" },
    { id: 9, name: "part9", logo: "/part9.jpeg" }
  ];

  const [visiblePartners, setVisiblePartners] = useState(partners.slice(0, 4)); // Display first 4 partners
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next set of partners
      const nextIndex = (currentIndex + 1) % partners.length;
      const newVisiblePartners = [
        partners[nextIndex],
        partners[(nextIndex + 1) % partners.length],
        partners[(nextIndex + 2) % partners.length],
        partners[(nextIndex + 3) % partners.length],
      ];
      setVisiblePartners(newVisiblePartners);
      setCurrentIndex(nextIndex);
    }, 2000); // Change every 2 seconds (faster)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, partners]);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Title with underline */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-pink-600 relative inline-block">
          OUR PARTNERS
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-600"></div>
        </h2>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 overflow-hidden">
        {visiblePartners.map((partner) => (
          <div
            key={partner.id}
            className="w-full h-40 flex items-center justify-center p-4 transition-transform duration-1200 ease-in-out animate__animated animate__fadeInRight" // Faster animation
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
