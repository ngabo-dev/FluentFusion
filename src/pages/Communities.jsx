import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Communities = () => {
  return (
    <>
    <Navbar />
      <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img src="/community.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />
        <div class="min-h-[550px] relative h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 class="text-4xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">Your Voice, Our Plans</h2>
          <p class="sm:text-lg text-base text-gray-200 z-20">Engaging communities to shape their neighborhoods and city spaces</p>
        </div>
      </div>
      
      <div class="font-sans mx-12 mt-24">
        <div class="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-green-900">
          <div class="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
            <h2 class="text-white lg:text-4xl text-3xl font-bold lg:!leading-[56px]">Empowering Communities Through Effective Consultation Strategies</h2>
            <p class="text-white mt-6 text-base leading-relaxed"> Engaging with communities is key to fostering collaboration and understanding. Through effective consultations, we ensure that the voices of individuals and communities are heard. We prioritize transparent discussions to align on solutions that address the real challenges faced by communities.</p>
          </div>
          <div class="lg:h-[480px] flex items-center">
            <img src="https://readymadeui.com/team-image.webp" class="w-full h-full object-cover" alt="Community Engagement" />
          </div>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-12 my-12">
          <div class="bg-gray-100 p-6 rounded-md">
            {/* New Icon for Engagements & Consultations */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ff69b4" class="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-5h2v5h-2zm0-7V7h2v2.5h-2z"/>
            </svg>
            <h3 class="text-lg font-bold mb-2 text-gray-800">Engagements & Consultations</h3>
            <p class="text-sm text-gray-600">Tailor our product to suit your needs.</p>
            <a href="javascript:void(0);" class="text-pink-600 font-bold inline-block text-sm mt-4 hover:underline">Learn more</a>
          </div>

          <div class="bg-gray-100 p-6 rounded-md">
            {/* New Icon for Community’s Injustice */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ff69b4" class="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 0 0-6.988 16.99 10.001 10.001 0 0 0 13.976 0A9.963 9.963 0 0 0 22 12c0-5.523-4.477-10-10-10zm-.003 18C6.477 20 2 15.523 2 12S6.477 4 12 4s10 4.477 10 10-4.477 10-10.003 10z"/>
            </svg>
            <h3 class="text-lg font-bold mb-2 text-gray-800">Community’s Injustice</h3>
            <p class="text-sm text-gray-600">Together, we stand against inequality and unfairness in our society</p>
            <a href="javascript:void(0);" class="text-pink-600 font-bold inline-block text-sm mt-4 hover:underline">Learn more</a>
          </div>

          <div class="bg-gray-100 p-6 rounded-md">
            {/* New Icon for Local Empowerment */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ff69b4" class="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm5 12h-4v4h-2v-4H7v-2h4V8h2v4h4z"/>
            </svg>
            <h3 class="text-lg font-bold mb-2 text-gray-800">Local Empowerment</h3>
            <p class="text-sm text-gray-600">Empowering local communities for sustainable development.</p>
            <a href="javascript:void(0);" class="text-pink-600 font-bold inline-block text-sm mt-4 hover:underline">Learn more</a>
          </div>
        </div>
      </div>
      import Footer from "../components/Footer";
    </>
  );
};

export default Communities;
