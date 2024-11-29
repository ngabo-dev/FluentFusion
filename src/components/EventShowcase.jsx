import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const EventShowcase = () => {
  // List of events or images
  const events = [
    { 
      image: '/innovation.jpg',
      date: '24, Jan - 2024',
      title: 'Innovation for Sustainable Living',
      location: '135 W. 46th Street, New York',
    },
    {
      image: '/smart City2.jpeg',
      date: '15, Feb - 2024',
      title: 'Shaping the Cities of Tomorrow',
      location: '123 Ave, Havana, Cuba',
    },
    {
      image: '/futureproof.jpg',
      date: '10, Mar - 2024',
      title: 'Future-Proof Urban Planning',
      location: '101 S. Main St, Los Angeles',
    },
  ];

  // State to track the current event index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through events every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === events.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000 ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  // Handlers for the left and right arrows
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src={events[currentIndex].image}
        alt="Event image"
        className="h-full w-full rounded-2xl object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 p-8 text-white">
        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
          <FaCalendarAlt size={16} />
          <span className="text-sm font-medium">{events[currentIndex].date}</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-pink-600 font-bold mb-4">
          {events[currentIndex].title}
        </h2>

        {/* Location */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt size={20} className="text-blue-400" />
          <span className="text-gray-200">{events[currentIndex].location}</span>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex gap-4">
        <button
          onClick={handlePrevClick}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <FaChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={handleNextClick}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <FaChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default EventShowcase;