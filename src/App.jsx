
import 'flowbite';
import 'flowbite-react';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Fellowships from "./pages/Fellowships";
import About from "./pages/About";
import Courses from './pages/Courses';
import UrbanizationPage from './pages/UrbanizationPage';
import Environment from './pages/Environment';
import Communities from './pages/Communities';
import Landuse from './pages/Landuse';
import Detailed from './pages/Detailed';
import Swot from './pages/Swot';
import Transportation from './pages/Transportation';
import EnvironmentalPlanning from './pages/Environimentalplanning';
import Disasters from './pages/Disasters';
import Capacitybuilding from './components/Capacitybuilding';
import Smartcity from './pages/Smartcity';
import Gis from './pages/Gis';
import EventPlanning from './pages/Eventplanning';
import Partners from './components/Partners';
import EventShowcase from './components/EventShowcase';
import EducationResearch from './pages/EducationResearch';
import Donate from './pages/Donate';
import Advisory from './pages/Advisory';
import Informalsettlement from './pages/Informalsettlement';
import Feasibilystudy from './pages/Feasibilystudy';
import Juliemodel from './components/Juliemodel';
import HyacintheModel from './components/HyacintheModel';
import FideliModel from './components/FideliModel';
import InnocentModel from './components/InnocentModel';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';


function App() {
  return (

      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fellowship" element={<Fellowships />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/urbanization" element={<UrbanizationPage />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/landuse" element={<Landuse />} />
          <Route path="/detailed" element={<Detailed />} />
          <Route path="/swot" element={<Swot />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/environmentalPlanning" element={<EnvironmentalPlanning />} />
          <Route path="/disasters" element={<Disasters/>} />
          <Route path="/capacitybuilding" element={<Capacitybuilding/>} />
          <Route path="/smartcity" element={<Smartcity/>} />
          <Route path="/gis" element={<Gis/>} />
          <Route path="/partners" element={<Partners/>} />
          <Route path="/eventPlanning" element={<EventPlanning/>} />
          <Route path="/eventshowcase" element={<EventShowcase/>} />
          <Route path="/education" element={<EducationResearch/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/advisory" element={<Advisory/>} />
          <Route path="/informalsettlement" element={<Informalsettlement/>} />
          <Route path="/feasibilystudy" element={<Feasibilystudy/>} />
          <Route path="/juliemodel" element={<Juliemodel/>} />
          <Route path="/hyacinthemodel" element={<HyacintheModel/>} />
          <Route path="/fidelimodel" element={<FideliModel/>} />


          <Route path="/innocentmodel" element={<InnocentModel/>} />
          <Route path="/eventshowcase" element={<EventShowcase/>} />
          <Route path="/education" element={<EducationResearch/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/advisory" element={<Advisory/>} />
          <Route path="/informalsettlement" element={<Informalsettlement/>} />
          <Route path="/feasibilystudy" element={<Feasibilystudy/>} />
          <Route path="/juliemodel" element={<Juliemodel/>} />
          <Route path="/hyacinthemodel" element={<HyacintheModel/>} />
          <Route path="/fidelimodel" element={<FideliModel/>} />

          <Route path="*" element={'404 - Page not found! 👹'} />
        </Routes>
        <Footer />
      </>
   
  );
}

export default App;
