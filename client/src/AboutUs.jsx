import React from "react";
import bg from "./assets/bgabout.png";
import Laptop from "./assets/laptop.png";
import logo1 from "./assets/Frame 85.png";
import logo2 from "./assets/Frame 86.png";
import logo3 from "./assets/Frame 87.png";
import logo4 from "./assets/Frame 88.png";
import logo5 from "./assets/Frame 89.png";
import secondbg from "./assets/secondbg.png";
import { LuTarget } from "react-icons/lu";
import FirstAbout from './assets/aboutfirst.png';
import SecondAbout from './assets/secondabout.png';
import ThirdAbout from './assets/thirdabout.png';

import { CiUser } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { LiaCertificateSolid } from "react-icons/lia";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Scroll from "./components/Scroll/RightScroll";

function AboutUs() {
  const navigate = useNavigate();

  const handleScrollAndNavigate = (path) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(path);
  };

  return (
    <>
      <div
        className="w-full min-h-[400px] md:h-[600px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
        <div className="relative max-w-5xl mx-auto text-left px-6 py-8 z-20 text-white">
          <h1
            className="text-2xl md:text-4xl font-medium mb-4"
            style={{ fontFamily: "Open Sans" }}
          >
            ABOUT US
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Welcome to Innowide Technologies, your trusted partner in driving
            digital transformation and innovation. Based in Hyderabad, we
            specialize in crafting tailored technology solutions that empower
            businesses to succeed in a competitive digital landscape.
          </p>

          <button
            className="mt-6 px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
            onClick={() => handleScrollAndNavigate("/contact")}
          >
            Contact us
          </button>
        </div>
      </div>

      <div className="my-10"></div>
      <div className="w-full bg-white py-8">
        <h1 className="text-center text-[#2F6690] text-md md:text-2xl" style={{ fontFamily: 'Inter' }}>INNOWIDE TECHNOLOGIES</h1>
        <h2 className=" text-center text-xl mx-4 md:text-3xl font-bold text-gray-800 " style={{ fontFamily: "Acme" }}>
          The Essence of Our Work: A Deep
        </h2>
        <h2 className=" text-center text-xl mx-4 md:text-3xl font-bold text-gray-800" style={{ fontFamily: "Acme" }}>
          Dive into Our Services and
        </h2>
        <h2 className="text-center text-xl mx-4 md:text-3xl mb-4 font-bold text-gray-800 " style={{ fontFamily: "Acme" }}>
          Delivery Methods
        </h2>


        <div className="flex max-w-7xl mx-auto">
          <div className="relative flex items-start space-x-4 md:space-x-8 translate-x-7 md:py-14 ">
            {/* Left Section (Dots + Vertical Line) */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 md:w-12 md:h-12 bg-[#2F6690] rounded-full flex justify-center items-center">
              </div>
              <div className="w-1 h-96 md:h-72 bg-[#2F6690]"></div> {/* Vertical line */}
              <div className="w-6 h-6 md:w-12 md:h-12 bg-[#2F6690] rounded-full flex justify-center items-center">
              </div>
              <div className="w-1 h-48 md:h-44 bg-[#2F6690]"></div>
              <div className="w-6 h-6 md:w-12 md:h-12 bg-[#2F6690] rounded-full flex justify-center items-center">
              </div>
            </div>

            {/* Right Section (Heading + Paragraphs) */}
            <div className="flex flex-col items-start space-y-8">
              <div className="flex flex-col items-start space-y-4 w-[220px] md:w-auto">
                <h3 className="text-xl font-semibold text-left">What we do?</h3>
                <p className="md:w-64 text-left text-gray-700">
                  Innowide Technologies provides web and mobile application development services for businesses of all sizes. We create custom software solutions, including dynamic websites and e-commerce platforms, tailored to meet client needs. Our expert team leverages the latest technologies to deliver user-friendly and high-performance applications.
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4 w-[220px] md:w-auto">
                <h3 className="text-xl font-semibold text-left">Whom do we serve?</h3>
                <p className="md:w-64 text-left text-gray-700">
                  Innowide Technologies serves small-scale and large-scale businesses across diverse industries, providing tailored web and mobile application development solutions to meet their specific needs.
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4 w-[220px] md:w-auto">
                <h3 className="text-xl font-semibold text-left">How do we serve them?</h3>
                <p className="md:w-64 text-left text-gray-700">
                  We deliver customized software services by leveraging the latest technologies and best practices, ensuring user-friendly and high-performance applications that help our clients achieve their business objectives, whether for short-term projects or long-term goals.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:flex space-y-4 hidden md:block translate-x-24">
              <div className="flex justify-center p-4">
                <img src={ThirdAbout} alt="FirstAbout" className="w-auto h-auto  object-cover" loading="lazy" />
              </div>
              <div className="flex justify-center p-4 translate-y-20">
                <img src={SecondAbout} alt="SecondAbout" className="w-auto h-auto  object-cover" loading="lazy" />
              </div>
              <div className="flex justify-center p-4">
                <img src={FirstAbout} alt="ThirdAbout" className="w-auto h-auto object-cover" loading="lazy" />
              </div>
            </div>
          </div>

        </div>
      </div>



      <div className="w-full space-y-12 mt-[40px] px-4 md:px-8">
        <div className="bg-[#2F669080] py-12 md:h-[600px] w-full rounded-3xl md:mt-10 md:mb-4 flex items-center justify-center shadow-[inset_0_0_20px_5px_rgba(0,0,0,0.6)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-gray-800 text-sm md:text-lg font-medium mb-2">
                  What We Offer
                </h2>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                  Our Mission!
                </h3>
                <p className="text-gray-700 max-w-lg mb-8 text-left">
                  At Innowide Technologies, we provide customized technology
                  solutions designed to help businesses grow and succeed. We
                  focus on client satisfaction, building long-term partnerships,
                  and delivering innovative solutions that enhance digital
                  presence and foster business excellence.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
                {/* Card 1: Empowering Businesses with Innovative Solutions */}
                <div className="bg-[#16425B] text-white p-6 rounded-lg shadow-md w-full sm:w-[300px] md:w-[250px] lg:w-[300px]">
                  <div className="flex items-center mb-4">
                    <span className="bg-white text-[#1e3a5f] p-2 rounded-full mr-4">
                      <CiUser />
                    </span>
                    <h4 className="text-xl font-medium">
                      Innovative Solutions for Businesses
                    </h4>
                  </div>
                  <p className="text-sm md:text-lg font-light leading-relaxed">
                    We specialize in creating cutting-edge solutions for
                    businesses, offering custom software, web, and mobile
                    applications tailored to meet the unique challenges and
                    goals of each client.
                  </p>
                </div>

                {/* Card 2: Client-Centric Collaboration */}
                <div className="bg-[#16425B] text-white p-6 rounded-lg shadow-lg w-full sm:w-[300px] md:w-[250px] lg:w-[300px]">
                  <div className="flex items-center mb-4">
                    <span className="bg-white text-[#1e3a5f] p-2 rounded-full mr-4">
                      <HiOutlineMenuAlt1 />
                    </span>
                    <h4 className="text-xl font-medium">
                      Collaboration Focused on Clients
                    </h4>
                  </div>
                  <p className="text-sm md:text-lg font-light leading-relaxed">
                    Our approach is centered around our clients. We prioritize
                    understanding your needs and goals, collaborating closely to
                    deliver the best solutions.
                  </p>
                </div>

                {/* Card 3: Trusted Partner for Digital Excellence */}
                <div className="bg-[#16425B] text-white p-6 rounded-lg shadow-lg w-full sm:w-[300px] md:w-[250px] lg:w-[300px]">
                  <div className="flex items-center mb-4">
                    <span className="bg-white text-[#1e3a5f] p-2 rounded-full mr-4">
                      <LiaCertificateSolid />
                    </span>
                    <h4 className="text-xl font-medium">
                      Your Trusted Digital Partner
                    </h4>
                  </div>
                  <p className="text-sm md:text-lg font-light leading-relaxed">
                    Innowide Technologies aims to be your trusted partner in
                    navigating the digital world. We focus on delivering
                    impactful, scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full min-h-screen bg-cover bg-center relative mt-[40px] space-y-12 "
        style={{ backgroundImage: `url(${secondbg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto text-left px-6 py-8 z-20 text-white">
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between py-16  lg:py-32 text-white">
            {/* Left Section: Text Content */}
            <div
              className="w-full lg:w-1/2 mb-8 lg:mb-0"
              style={{ fontFamily: "Open Sans" }}
            >
              <h2
                className="text-2xl lg:text-3xl font-semibold mb-4 -ml-2 md:-ml-0"
                style={{ fontFamily: "Alatsi" }}
              >
                Value For Founders
              </h2>
              <p
                className="text-md lg:text-lg mb-6"
                style={{ fontFamily: "Poppins" }}
              >
                We specialize in establishing effective KPIs, maximizing revenue
                contributors, enhancing global positioning, and leveraging key
                networks to drive business success.
              </p>
            </div>

            {/* Right Section: Services Boxes */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:w-8/12"
              style={{ fontFamily: "Open Sans" }}
            >
              <div className="bg-[#F0F0F0] p-6 rounded-lg  shadow-[0_-14px_15px_0_rgba(0,0,0,0.8)]">
                <h3 className="text-xl font-bold mb-2 text-[#2F6690]">
                  KPI's Setup
                </h3>
                <p className="text-black">
                  Setting up Key Performance Indicators (KPIs) is crucial for
                  measuring and driving your business success.
                </p>
              </div>
              <div className="bg-[#F0F0F0] p-6 rounded-lg shadow-[0_-14px_15px_0_rgba(0,0,0,0.8)]">
                <h3 className="text-xl font-bold mb-2 text-[#2F6690]">
                  Revenue Contributors
                </h3>
                <p className="text-black">
                  We focus on identifying and maximizing your revenue
                  contributors—key factors and activities that drive your
                  business's financial success.
                </p>
              </div>
              <div className="bg-[#F0F0F0] p-6 rounded-lg shadow-[0_-14px_15px_0_rgba(0,0,0,0.8)]">
                <h3 className="text-xl font-bold mb-2 text-[#2F6690]">
                  Global Positioning
                </h3>
                <p className="text-black">
                  We excel in enhancing your global positioning to ensure your
                  brand stands out in the international market.
                </p>
              </div>
              <div className="bg-[#F0F0F0] p-6 rounded-lg shadow-[0_-14px_15px_0_rgba(0,0,0,0.8)]">
                <h3 className="text-xl font-bold mb-2 text-[#2F6690]">
                  Key Networks
                </h3>
                <p className="text-black">
                  We recognize the importance of building and leveraging key
                  networks to drive business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full space-y-12 mt-[40px] px-4 md:px-8">
        <div className="relative max-w-7xl mx-auto text-left py-8 z-20 text-black">
          <div className="p-6  rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-6">
              <div className="w-[280px] -ml-6 md:-ml-0 md:w-1/3 mb-4 md:mb-0">
                <img
                  src={Laptop}
                  alt="Laptop"
                  className="w-full rounded-lg object-cover h-48 md:h-full"
                  loading="lazy"
                />
              </div>

              <div
                className="w-full md:w-2/4 space-y-2  text-center md:text-left md:pl-12"
                style={{ fontFamily: "Poppins" }}
              >
                <h2 className="text-2xl md:text-3xl font-medium text-[#2A2A2A]">
                  Why To Choose Innowide Technologies
                </h2>
                <p className="text-[#4A4A4A]">
                  Pioneering Excellence For Your Success
                </p>
                <button
                  className="mt-4 px-4 py-2 text-black border-2 rounded-lg"
                  onClick={() => handleScrollAndNavigate("/contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 text-center md:ml-8">
              <div className="flex flex-col items-center w-full md:w-36 ">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <img src={logo1} alt="logo1" loading="lazy" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 w-full">
                  Customization
                </h3>
                <p className="text-gray-500 text-sm w-full">
                  Customized Software Aligned with Your Unique Business Goals
                </p>
              </div>

              <div className="flex flex-col items-center w-full md:w-36">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <img src={logo2} alt="logo2" loading="lazy" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 w-full">
                  Innovation
                </h3>
                <p className="text-gray-500 text-sm w-full">
                  Advanced Tools and Approaches Customized for Your Specific
                  Needs
                </p>
              </div>

              <div className="flex flex-col items-center w-full md:w-36">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <img src={logo3} alt="logo3" loading="lazy" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 w-full">
                  Expertise
                </h3>
                <p className="text-gray-500 text-sm w-full">
                  Expert Professionals Delivering Dependable Solutions and
                  Complete Client Support
                </p>
              </div>

              <div className="flex flex-col items-center w-full md:w-36">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <img src={logo4} alt="logo4" loading="lazy" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 w-full">
                  Personalization
                </h3>
                <p className="text-gray-500 text-sm w-full">
                  ersonalized Software Designed to Fit Your Specific Business
                  Objectives.
                </p>
              </div>

              <div className="lg:flex flex-col items-center w-full md:w-36 hidden md:block">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <img src={logo5} alt="logo5" loading="lazy" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 w-full">
                  Strategy
                </h3>
                <p className="text-gray-500 text-sm w-full">
                  Innovative Tools and Strategies Tailored for Your Business
                  Needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Scroll />
      </div>
      <div className="text-center">
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
