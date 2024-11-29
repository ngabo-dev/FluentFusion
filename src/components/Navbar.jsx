import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isConsultancyDropdownVisible, setIsConsultancyDropdownVisible] = useState(false);

  const changePage = useCallback((nav) => {
    setActive(nav);
    hideMobileNav();
  }, []);

  const hideMobileNav = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsNavVisible(false);
    }
  }, []);

  const toggleNav = useCallback(() => {
    setIsNavVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between bg-white shadow-md fixed w-full px-4 py-3 md:px-12 z-50">
      <div className="flex items-center">
        <img src="/Screenshot from 2024-11-22 17-35-34.png" alt="logo" className="w-12 rounded-full" />
      </div>

      <div className={`absolute left-0 top-16 w-full bg-white md:static md:flex md:w-auto ${isNavVisible ? "block" : "hidden"} md:block`}>
        <div className="flex flex-col md:flex-row md:items-center">
          <Link to="/" className={`link text-black font-semibold text-lg mx-3 ${active === "home" ? "text-green-600" : ""}`} onClick={() => changePage("home")}>
            Home
          </Link>
          <Link to="/About" className={`link text-black font-semibold text-lg mx-3 ${active === "/About" ? "text-green-600" : ""}`} onClick={() => changePage("About")}>
            About Us
          </Link>

          <Link to="/Courses" className={`link font-semibold text-lg mx-3 ${active === "event" ? "text-green-600 underline" : ""}`} onClick={() => changePage("eveCoursesnt")}>
            Courses
          </Link>
          <Link to="/Resourses" className={`link font-semibold text-lg mx-3 ${active === "Resourses" ? "text-green-600" : ""}`} onClick={() => changePage("Resourses")}>
            Resourses
          </Link>
          <Link to="/contact" className={`link font-semibold text-lg mx-3 ${active === "contact" ? "text-green-600" : ""}`} onClick={() => changePage("contact")}>
          Contact Us
          </Link>


          {/* Add Contact Link Here for Mobile */}
          <Link to="/LoginPage" className={`link font-semibold text-lg  px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition ${active === "LoginForm" ? "text-green-600" : ""}`} onClick={() => changePage("LoginForm")}>
            Sign Up/Login
          </Link>
        </div>
      </div>



      <button className="md:hidden text-3xl text-pink-600" onClick={toggleNav}>
        {isNavVisible ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
    </nav>
  );
};

export default Navbar;
