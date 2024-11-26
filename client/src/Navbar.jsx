import React, { useState, useRef } from "react";
import Logo from "./assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const navigate = useNavigate();
  const serviceMenuRef = useRef(null);
  const modalRef = useRef(null);

  // for open in mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    scrollToTop();
    navigate(path);
    setIsOpen(false);
  };

  // To prevent the dropdown from closing when clicking inside
  const handleServiceClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="left-0 top-4 py-2 w-full flex justify-between items-center px-4 md:px-16 z-50 text-md text-white">
        <div className="flex items-center lg:ml-14">
          <img
            src={Logo}
            alt="Logo1"
            className="h-10 w-10 cursor-pointer mt-2 mb-2 flex items-center"
            onClick={() => {
              handleLinkClick("/");
            }}
          />
        </div>
        <div className="flex items-center lg:mr-14">
          <div className="hidden md:flex md:text-xl gap-8">
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={`cursor-pointer md:mt-1 `}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => handleLinkClick("/about")}
              className={`cursor-pointer md:mt-1`}
            >
              About
            </Link>
            <div
              className="relative group"
              ref={serviceMenuRef}
              onClick={handleServiceClick}
            >
              <label className="cursor-pointer flex items-center md:mt-1">
                Services
              </label>
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md text-gray-700 text-sm gap-2 p-2 w-48 py-2 group-hover:block hidden z-40">
                <div className="mt-2 font-bold py-2">
                  <Link
                    to="/itservices"
                    onClick={() => handleLinkClick("/itservices")}
                    className={`cursor-pointer `}
                  >
                    Innovative Tech Solutions
                  </Link>
                </div>
                <div className="mt-2 font-bold py-2">
                  <Link
                    to="/digitalservices"
                    onClick={() => handleLinkClick("/digitalservices")}
                    className={`cursor-pointer `}
                  >
                    Digital Marketing Services
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className={`cursor-pointer md:mt-1`}
            >
              Contact Us
            </Link>
          </div>

          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-16 z-40 right-2 bg-white text-gray-700 text-lg font-serif font-medium flex flex-col gap-4 p-4 w-48 rounded-sm md:hidden">
            <Link
              to="/"
              onClick={() => {
                handleLinkClick("/");
                setIsOpen(false);
              }}
              className={`cursor-pointer`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => {
                handleLinkClick("/about");
                setIsOpen(false);
              }}
              className={`cursor-pointer`}
            >
              About
            </Link>
            <div
              className="relative group"
              onClick={handleServiceClick} // Prevent closing on clicking services in mobile
            >
              <label className="cursor-pointer flex items-center">
                Services
              </label>
              <div className="absolute top-full z-40 left-0 bg-white shadow-md text-gray-700 text-sm lg:flex flex-col gap-2 p-2 w-40 rounded-sm group-hover:block hidden">
                <div className="font-bold py-2 mt-2">
                  <Link
                    to="/itservices"
                    onClick={() => {
                      handleLinkClick("/itservices");
                      setIsOpen(false);
                    }}
                    className={`cursor-pointer`}
                  >
                    Innovative Tech Solutions
                  </Link>
                </div>
                <div className="font-bold mt-2 py-2">
                  <Link
                    to="/digitalservices"
                    onClick={() => {
                      handleLinkClick("/digitalservices");
                      setIsOpen(false);
                    }}
                    className={`cursor-pointer`}
                  >
                    Digital Marketing Services
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              onClick={() => {
                handleLinkClick("/contact");
                setIsOpen(false);
              }}
              className={`cursor-pointer`}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
      <div className="pt-16"></div>
    </>
  );
}

export default Navbar;
