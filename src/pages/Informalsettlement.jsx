import React from 'react'
import 'animate.css'

const Informalsettlement = () => {
  return (
    
    <>
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="/formalcity.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />
  
      <div class="min-h-[550px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 class="text-4xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mr-auto mt-20 animate__animated animate__fadeInDown">Transforming Informal Settlements <br />for Inclusive Urban Growth</h2>
        
  
  
      </div>
    </div>
  
  
      <div class="font-sans bg-white p-4">
        <div class="md:max-w-5xl max-w-xl py-32 mx-auto">
          <div class="grid md:grid-cols-2 gap-12">
            <div class="max-h-72 max-md:order-1">
              <img src="/settlement.jpg" alt="Sustainable Solutions" class="rounded-lg object-cover w-full h-full" />
            </div>
            <div class="text-left">
              <h2 class=" text-2xl font-bold mb-4  text-emerald-800 leading-relaxed">Creating community-driven, resilient, and affordable living solutions.</h2>
              <p class="mb-4 text-sm  text-black leading-relaxed">
                NGU-Link Hub plays a critical role in<strong>upgrading informal settlements</strong>  by offering sustainable, inclusive strategies that enhance living conditions while integrating these areas into the urban environment. Key actions include optimizing land use through spatial planning, upgrading essential infrastructure like water, sanitation, and waste management, and involving communities in the planning process to ensure tailored solutions. The hub also provides affordable housing options, advocates for policies supporting land tenure and legal recognition, and incorporates sustainable development practices to improve resilience against environmental challenges.
              </p>

            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Informalsettlement