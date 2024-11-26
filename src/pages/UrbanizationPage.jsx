import React from "react";

const UrbanizationPage = () => {
  return (
    <div>
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <img src="/urban.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

    <div class="min-h-[550px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h2 class="text-4xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">Urbanization and Sustainable Development</h2>
      <p class="sm:text-lg text-base  text-gray-200 z-20">Exploring key aspects of modern urbanization and sustainable city solutions</p>


    </div>
  </div>



      {/* Content Sections with Images */}
      <div className="">
      <section className="p-8" id="green-urbanization">
        <div className="flex flex-col md:flex-row items-center">
          <img src='/Green.jpg' alt="Green Urbanization" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-green-600">Green Urbanization</h2>
            <p className="text-lg text-black mt-4">
            Integration of ecological considerations into urban planning, construction, and management, aiming to the carbon footprint of cities, improving environmental health, and making urban areas more resilient to the impacts of climate change while improving the quality of life for residents. Green urbanization is more about: 
            <span className="font-bold">Sustainable Building Practices,Green spaces,sustainable transportation,energy  efficiency,Water and Waste Management,Resilience to Climate Change and Urban Farming and Local Food Systems</span>
            </p>
          </div>
        </div>
      </section>
      </div>

      <section className="p-8 " id="smart-city-technologies">
        <div className="flex flex-col md:flex-row items-center">
          
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-pink-600">Smart City Technologies</h2>
            <p className="text-lg text-black mt-4">
            A range of advanced tools, systems, and innovations that enhance the efficiency, sustainability, and livability of urban areas by integrating digital technology into infrastructure, services, and management. Most technology are:
            <span className="font-bold">IoT Sensors,smart street lighting,digital payment systems,smart homes,home automation systems,city-wide Wi-Fi,5G Networks,Urban Dashboards,Predictive Analytics,surviellance systems,smart bins,smart water management,E-Government platforms,smart grids,smart meters,Traffic management systems,Autonomous Vehicles and Ride-Sharing and Mobility</span>
            </p>
          </div>
          <img src='/smart City.jpeg' alt="Smart City Technologies" className="w-96 h-96 md:w-1/2 rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="p-8 " id="urban-resilient">
        <div className="flex flex-col md:flex-row items-center">
          <img src='resi.jpg' alt="Urban Resilient" className="w-full h-96 md:w-full rounded-lg shadow-lg" />
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-green-600">Urban Resilient</h2>
            <p className="text-lg text-black mt-4">
            A city which is able to absorb, recover from, and adapt to various shocks and stresses whether environmental, social, or economic while maintaining its essential functions and ensuring the well-being of its inhabitants. Through effective:
            <span className="font-bold">Disaster Preparedness and Recovery,Climate Change Adaptation,Economic Resilience,Social Resilience,Infrastructure Resilience and Community Engagement</span>
            </p>
          </div>
        </div>
      </section>

      <section className="p-8" id="urban-agriculture">
        <div className="flex flex-col md:flex-row items-center">
          
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-pink-600">Urban Agriculture</h2>
            <p className="text-lg text-black mt-4">
            The practice of growing, processing, and distributing food within urban areas or cities through a wide variety of food production activities, such as growing fruits, vegetables, and herbs; raising livestock like chickens and fish; and producing non-food items like flowers and ornamental plants. Urban agriculture can take place in various forms including:
            <spn className='font-bold'>Community Gardens,Rooftop Farming,Vertical Farming,Backyard Gardens,Hydroponics and Aquaponics and Livestock and Poultry Farming</spn>
            </p>
          </div>
          <img src='/Urban agriculture1.jpeg' alt="Urban Agriculture" className="w-full h-96 md:w-1/2 rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="p-8 " id="urban-heritage">
        <div className="flex flex-col md:flex-row items-center">
          <img src='/Urban Heritage.jpeg' alt="Urban Heritage" className="w-full h-96 md:w-1/2 rounded-lg shadow-lg" />
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-green-600">Urban Heritage</h2>
            <p className="text-lg text-black mt-4">
            The cultural, architectural, historical, and social assets within urban environments that hold significance for a city's identity and legacy. These assets include structures that reflect significant historical periods, architectural styles, or cultural movements, such as ancient temples, colonial buildings, industrial-era factories, statues, memorials, and landmarks that commemorate historical events or figures and contribute to the city's cultural narrative. It is also including the events that reflect the city’s history, diversity, and community spirit, such as annual parades, religious festivals, or national holidays.  Urban heritage plays a crucial role in shaping the character of cities and maintaining their historical continuity while promoting cultural diversity.
            </p>
          </div>
        </div>
      </section>

      <section className="p-8 " id="transportation">
        <div className="flex flex-col md:flex-row items-center">
         
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-pink-600">Transportation</h2>
            <p className="text-lg text-black mt-4">
            The systems and infrastructure that facilitate the movement of people,<br></br>
            goods, and services within urban areas, such as cities and towns. It <br></br>
            includes a range of modes and networks designed to meet the transportation<br></br>
            needs of urban populations efficiently, safely, and sustainably such as public <br></br>
            transit (Buses, Trams & light rail, subways/metros, feries, etc), Private Vehicles<br></br>
            (Cars, motorcycles and scooters), Non-Motorized Transport (bicycles and walking), <br></br>
            Ride-Sharing and On-Demand Services (Taxis, Ride-Hailing 
            </p>
          </div>
          <img src='/train.jpg' alt="Transportation" className="w-full h-96 md:w-1/2 rounded-lg shadow-lg" />
        </div>
      </section>
    </div>
  );
};

export default UrbanizationPage;
