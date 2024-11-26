import React from 'react'

const Capacitybuilding = () => {
  return (
    <>
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <img src="/building.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

    <div class="min-h-[550px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h2 class="text-5xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">Strengthening Urban Expertise</h2>
      <p class="sm:text-lg text-base text-center text-gray-200 z-20">Providing training and resources for urban planners and communities</p>


    </div>
  </div>



    <div className="font-sans p-4">
      <div className="md:max-w-5xl max-w-lg mx-auto py-40">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="max-w-sm">
            <h2 className="text-green-900 text-3xl font-semibold mb-4 leading-10">
              Capacity Building and Training
            </h2>
          </div>
          <div className="text-left">
            <p className="mb-4 text-lg font-bold text-green-900">Empowering Urban Development</p>
            <p className="text-sm text-black">
              Capacity building and training initiatives aim to equip urban planners, local governments, and communities with the knowledge and skills needed for sustainable urban development. These efforts include workshops and training sessions on best practices, mentorship programs for young professionals, and knowledge exchange visits between cities to share successful urban strategies. Additionally, certification courses on urban planning and sustainability are being developed, along with practical guides and toolkits for practitioners to enhance their expertise in creating resilient urban environments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          <div>
            {/* Workshop Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" />
            </svg>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-green-900 mb-2">Workshops and Training Sessions</h3>
              <p className="text-black text-sm">Offer training for urban planners, local governments, and communities on best practices.</p>
            </div>
          </div>

          <div>
            {/* Mentorship Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7M9 21h6a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 002 2z" />
            </svg>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-green-900 mb-2">Mentorship Program</h3>
              <p className="text-black text-sm">Establish mentorship initiatives for young urban planners.</p>
            </div>
          </div>

          <div>
            {/* Knowledge Exchange Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h10m-6 4h6" />
            </svg>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-green-900 mb-2">Knowledge Exchange Visits</h3>
              <p className="text-black text-sm">Organize visits for cities to share urban planning strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Capacitybuilding;
