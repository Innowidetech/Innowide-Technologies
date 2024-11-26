import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import UserService from "./Service/UserService";
import { Link } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        title: "Invalid email",
        text: "Please enter a valid email address.",
        icon: "error",
        confirmButtonText: "OK",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await UserService.emailSent({ email });
      Swal.fire({
        title: "Success!",
        text: "Your email has been sent successfully.",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          popup: "swal2-z-index-fix",
        },
      });
      setEmail("");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an error sending your message. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-gray-200 mt-10 md:mt-0">
      <div className="bg-[#16425B] clip-path-footer-header"></div>
      <div className="container mx-auto px-8 md:-mt-20 mb-8 md:max-w-4xl relative">
        <div className="bg-white p-8 -mt-20 md:-mt-0 rounded-lg shadow-xl flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Title and Arrow */}
          <div className="flex items-center gap-3 mb-4 md:mb-0 ">
            <h3 className="text-2xl md:text-3xl font-medium text-[#0A142F]" style={{ fontFamily: 'Akatab' }}>Reach Out To Us</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          {/* Right Side: Email Input Field and Button */}
          <div className="flex flex-col sm:flex-row gap-4 border border-gray-300 p-1 rounded-lg">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className="px-3 py-2 text-lg rounded-lg focus:outline-none transition duration-300 w-full sm:w-64 text-black"
            />
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`${isSubmitting ? "bg-gray-400" : "bg-[#16425BB2]"
                } text-white py-2 px-6 rounded-xl hover:bg-[#16425BB2] transition duration-300 w-full sm:w-auto`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links and Social Media */}
      <div className="container mx-auto md:px-8 md:max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-black md:font-semibold">
          <div className="flex flex-wrap gap-6 md:text-lg mb-8 sm:mb-0 sm:mr-12 justify-center sm:justify-start">
            <label onClick={() => { window.scrollTo(0, 0); navigate('/'); }} className='cursor-pointer'>Home</label>
            <label onClick={() => { window.scrollTo(0, 0); navigate('/about'); }} className='cursor-pointer'>About</label>
            <label onClick={() => { window.scrollTo(0, 0); navigate('/contact'); }} className='cursor-pointer'>Contact</label>
            <label onClick={() => { window.scrollTo(0, 0); navigate('/itservices'); }} className='cursor-pointer'>Innovative Tech Solutions</label>
            <label onClick={() => { window.scrollTo(0, 0); navigate('/digitalservices'); }} className='cursor-pointer'>Digital Marketing Services</label>
            <label onClick={() => { window.scrollTo(0, 0); navigate('/blog'); }} className='cursor-pointer'>Blog</label>
          </div>

          <div className="flex gap-6 text-2xl mb-8 justify-center sm:justify-start">
            <a href="https://www.facebook.com/people/Innowide-Technologies/61564968294800/" target="_blank" className="hover:text-blue-500 transition duration-300">
              <FaFacebook />
            </a>
            <a href="https://x.com/Innowidetech/" target="_blank" className="hover:text-blue-400 transition duration-300">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/innowide-technologies-48246b324/" target="_blank" className="hover:text-blue-500 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/innowidetechnologies/" target="_blank" className="hover:text-pink-500 transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 md:max-w-7xl mx-auto my-4" />

      {/* Copyright Section */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-black md:max-w-6xl">
        <p className="text-sm pt-10 text-center sm:text-left">© Innowide Technologies 2024 All Rights Reserved</p>
        <div className="flex gap-6 text-sm text-black mt-4 md:mt-0 justify-center sm:justify-start">
          <Link to='/TermsandCondition' onClick={scrollToTop} className="hover:text-blue-400 transition duration-300">Terms of Service</Link>
          <Link to="/privacyandPolicy" onClick={scrollToTop} className="hover:text-blue-400 transition duration-300">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
