import React from 'react'

const EventPlanning = () => {
  return (
    <>
        <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <img src="/event.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

    <div class="min-h-[550px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h2 class="text-5xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">Bringing Stakeholders Together</h2>
      <p class="sm:text-lg text-base text-center text-gray-200 z-20">Fostering collaboration through urban planning conferences and events.</p>


    </div>
  </div>
    <div class="font-[sans-serif] relative mx-12 overflow-hidden rounded-lg py-10">
      <div class="grid sm:grid-cols-2 items-center max-sm:gap-10 mt-28 py-16 rounded-lg border-t-8 border-emerald-800">
        <div class="px-6">
          <h3 class="font-extrabold text-4xl text-emerald-800 leading-tight">
            Organizing and Hosting <span class="text-black">Urban Planning Events</span>
          </h3>
          <p class="text-black font-light text-base leading-relaxed mt-4">
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              Conferences and Seminars
            </span>
            <br />
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              Hackathons
            </span>
            <br />
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              Webinars and Online Workshops
            </span>
            <br />
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              Community Forums
            </span>
            <br />
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              Networking Events
            </span>
          </p>
        </div>

        <div class="bg-gradient-to-tr from-emerald-700 to-emerald-800 rounded-tl-full rounded-bl-full w-full h-max">
          <div class="p-2">
            <img src="https://readymadeui.com/team-image.webp" class="h-64 w-64 rounded-full object-cover border-4 border-white" alt="img" />
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default EventPlanning
