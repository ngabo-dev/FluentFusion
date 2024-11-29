
import 'flowbite';
import 'flowbite-react';
import { Route, Routes } from "react-router-dom";


import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Courses from './pages/Courses';
import Resourses from './pages/Resourses';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import CoursesDashboard from './pages/CoursesDashboard';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CourseList from './components/CourseList';
import SingleCoursePage from './pages/SingleCoursePage';
import KinyarwandaCourse from './pages/KinyarwandaCourse';
import EnglishBasics from './pages/EnglishBasics';
// import SubscribeForm from './components/SubscribeForm';



function App() {
  return (

      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Resourses" element={<Resourses/>} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/CoursesDashboard" element={<CoursesDashboard />} />
          <Route path="/single-course/:id" element={<SingleCoursePage />} />
          <Route path="/KinyarwandaCourse" element={<KinyarwandaCourse />} />
          <Route path="/EnglishBasics" element={<EnglishBasics />} />
          <Route path="/" element={<CourseList />} />
          {/* <Route path="/donate" element={<Donate/>} /> */}

          <Route path="*" element={'404 - Page not found! 👹'} />
        </Routes>
      </>
   
  );
}

export default App;
