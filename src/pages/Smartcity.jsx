import React from 'react'

const Smartcity = () => {
  return (
    <>
  <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <img src="/sustainable.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

    <div class="min-h-[550px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h2 class="text-5xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">Building Tomorrow’s Cities</h2>
      <p class="sm:text-lg text-base text-center text-gray-200 z-20">Leveraging smart technologies for sustainable, efficient urban living</p>


    </div>
  </div>


    <div class="font-sans bg-white p-4">
      <div class="md:max-w-5xl max-w-xl py-32 mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <div class="text-left">
            <h2 class="text-gray-800 text-2xl font-bold mb-4 leading-relaxed">Green & Smart City Solutions</h2>
            <p class="mb-4 text-sm text-black leading-relaxed">
              <strong>Smart Technologies Implementation:</strong> Harness the power of IoT, big data, and AI to revolutionize urban planning and management, making cities more responsive and efficient.
            </p>
            <p class="mb-4 text-sm text-black leading-relaxed">
              <strong>Energy-Efficient Solutions:</strong> Drive sustainable development by integrating renewable energy sources, reducing reliance on traditional power and lowering environmental impact.
            </p>
            <p class="mb-4 text-sm text-black leading-relaxed">
              <strong>Smart Waste Management Systems:</strong> Leverage cutting-edge technology to streamline waste collection and recycling processes, contributing to cleaner, greener urban spaces.
            </p>
          </div>
          <div class="max-h-72">
            <img src="/sustainable.jpg" alt="Smart City Technologies" class="rounded-lg object-cover w-full h-full" />
          </div>
        </div>
        <hr class="border-gray-300 my-12" />
        <div class="grid md:grid-cols-2 gap-12">
          <div class="max-h-72 max-md:order-1">
            <img src="/greencity.jpg" alt="Sustainable Solutions" class="rounded-lg object-cover w-full h-full" />
          </div>
          <div class="text-left">
            <h2 class=" text-2xl font-bold mb-4  text-emerald-800 leading-relaxed">Sustainable Urban Strategies</h2>
            <p class="mb-4 text-sm  text-black leading-relaxed">
              <strong>Sustainable Water Management:</strong> Implement advanced strategies for efficient water usage, ensuring sustainable and secure water resources for urban populations.
            </p>
            <p class="mb-4 text-sm  text-black leading-relaxed">
              <strong>Public Engagement Platforms:</strong> Use modern digital tools to engage citizens in decision-making, fostering a more inclusive and participatory approach to urban development.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Smartcity
