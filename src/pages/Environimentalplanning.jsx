import React from 'react'

const EnvironmentalPlanning = () => {
  
  return (
    <>
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <img src="/environment.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

    <div class="min-h-[550px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h2 class="text-5xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">Planning for Sustainability</h2>
      <p class="sm:text-lg text-base text-center text-gray-200 z-20">Balancing urban growth with environmental conservation.</p>


    </div>
  </div>
    <div class=" p-12 font-sans">
      <div class="container  mx-auto">
        <h2 class="text-4xl font-bold text-white mb-8">Environmental Planning and Modeling</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <div class="flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-3 w-16 h-16">
              <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div class="mt-4">
              <p class="text-lg font-semibold text-gray-800">Environmental Impact Assessments (EIAs)</p>
              <p class="text-sm text-gray-500 mt-2">Evaluate potential environmental effects of proposed projects.</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <div class="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-16 h-16">
              <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div class="mt-4">
              <p class="text-lg font-semibold text-gray-800">Sustainability Metrics</p>
              <p class="text-sm text-gray-500 mt-2">Establish key performance indicators (KPIs) for measuring sustainability outcomes.</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <div class="flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-3 w-16 h-16">
              <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div class="mt-4">
              <p class="text-lg font-semibold text-gray-800">Ecological Restoration Plans</p>
              <p class="text-sm text-gray-500 mt-2">Develop strategies for restoring and preserving natural habitats.</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <div class="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-16 h-16">
              <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div class="mt-4">
              <p class="text-lg font-semibold text-gray-800">Climate Adaptation Strategies</p>
              <p class="text-sm text-gray-500 mt-2">Create plans to address climate change impacts on urban areas.</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <div class="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-16 h-16">
              <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div class="mt-4">
              <p class="text-lg font-semibold text-gray-800">Green Infrastructure Solutions</p>
              <p class="text-sm text-gray-500 mt-2">Implement rain gardens, green roofs, and permeable pavements to manage stormwater.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default EnvironmentalPlanning
