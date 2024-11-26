import React from 'react'
import EventShowcase from '../components/EventShowcase'

const Courses = () => {
  return (
    <>
      <EventShowcase />
      <div className="md:px-10 px-4 font-[sans-serif] py-48">
        <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
          {/* Events Section */}
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Available Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
            {/* Kinyarwanda For Beginners */}
            <div>
            <div className="group relative bg-white rounded overflow-hidden">
              <img
                src="/images/pexels-pixabay.jpg"
                alt="Global Urban Summit"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-lg font-bold mb-3">Kinyarwanda For Beginners</h3>
                <p className="text-sm mb-4">
                  Learn the basics of Kinyarwanda, Rwanda's native language, with simple and beginner-friendly lessons to build your communication skills.
                </p>
                <a
                  href="/LoginForm"
                  className="inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-700 text-white text-[13px]"
                >
                  Enrol
                </a>
              </div>
            </div>
              <h3>Kinyarwanda For Beginners</h3>
            </div>

            {/* English Basics */}
            <div>
            <div className="group relative bg-white rounded overflow-hidden">
              <img
                src="/images/vowels.jpg"
                alt="Technology for Smart Cities"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-lg font-bold mb-3">English Basics</h3>
                <p className="text-sm mb-4">
                  Master essential English skills with simple lessons designed for beginners to build a strong foundation in reading, writing, and speaking.
                </p>
                <a
                  href="/LoginForm"
                  className="inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-700 text-white text-[13px]"
                >
                  Enrol
                </a>
              </div>
            </div>
            <h3>English Basics</h3>
            </div>

            {/* Kinyarwanda for Travelers */}
            <div>
            <div className="group relative bg-white rounded overflow-hidden">
              <img
                src="/images/pexels-darina_travellers.jpg"
                alt="Sustainability in Urban Development"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-lg font-bold mb-3">Kinyarwanda for Travelers</h3>
                <p className="text-sm mb-4">
                  Learn essential phrases, greetings, and expressions to navigate Rwanda with confidence and ease.
                </p>
                <a
                  href="/LoginForm"
                  className="inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-700 text-white text-[13px]"
                >
                  Enrol
                </a>
              </div>
            </div>
            <h3>Kinyarwanda for Travelers</h3>
          </div>
          </div>

          {/* News Section */}
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 mt-12">
            Other Courses.....
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
            {/* Rwandan Culture and Etiquette */}
            <div>
            <div className="group relative bg-white rounded overflow-hidden">
              <img
                src="images/shutterstock_culture.webp"
                alt="Urban Development Trends"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-lg font-bold mb-3">Rwandan Culture and Etiquette</h3>
                <p className="text-sm mb-4">
                  Discover the traditions, customs, and social norms of Rwanda to connect deeply with its people.
                </p>
                <a
                  href="/LoginForm"
                  className="inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-700 text-white text-[13px]"
                >
                  Enrol
                </a>
              </div>
            </div>
            <h3>Rwandan Culture and Etiquette</h3>
            </div>

            {/* Kinyarwanda for Business */}
            <div>
            <div className="group relative bg-white rounded overflow-hidden">
              <img
                src="/images/business-in-Rwanda-1.png"
                alt="Green Architecture"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-lg font-bold mb-3">Kinyarwanda for Business</h3>
                <p className="text-sm mb-4">
                  Master professional vocabulary and communication skills for thriving in Rwanda’s business environment.
                </p>
                <a
                  href="/LoginForm"
                  className="inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-700 text-white text-[13px]"
                >
                  Enrol
                </a>
              </div>
            </div>
            <h3>Kinyarwanda for Business</h3>
            </div>

            {/* Advanced Kinyarwanda */}
            <div>
            <div className="group relative bg-white rounded overflow-hidden">
              <img
                src="/Urban resilient.jpeg"
                alt="Urban Mobility Innovations"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-lg font-bold mb-3">Advanced Kinyarwanda</h3>
                <p className="text-sm mb-4">
                  Dive into complex grammar, vocabulary, and conversational skills to achieve fluency in Kinyarwanda.
                </p>
                <a
                  href="/LoginForm"
                  className="inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-700 text-white text-[13px]"
                >
                  Enrol
                </a>
              </div>
              </div>
              <h3>Advanced Kinyarwanda</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-pink-600 to-green-900 py-16 px-6 font-[sans-serif] mb-64 mx-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white md:text-5xl text-4xl font-extrabold mb-6">Join Our Exclusive Newsletter</h2>
          <p className="text-xl text-gray-300">Be part of our elite community. Get VIP access to curated content, early product releases, and special promotions.</p>

          <div className="bg-white shadow-lg rounded-lg p-8 mt-12 flex flex-col md:flex-row items-center justify-center">
            <input type="email" placeholder="Enter your email" className="w-full md:w-96 bg-transparent border-b-2 border-pink-600 py-3 px-4 text-pink-600 text-base focus:outline-none placeholder-pink-600 placeholder-opacity-70" />
            <button className="max-md:mt-6 md:ml-4 bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded hover:shadow-md hover:transform hover:scale-105 focus:outline-none">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses;
