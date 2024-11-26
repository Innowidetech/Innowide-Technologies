import React, { useState } from "react";
import CompanyImage from "./assets/homefirstimage.png";
import Computer from "./assets/computer.png";
import { PiCertificate } from "react-icons/pi";
import { RiPieChart2Fill } from "react-icons/ri";
import { SiReacthookform } from "react-icons/si";
import Swal from "sweetalert2";
import { IoIosArrowRoundForward } from "react-icons/io";
import Man1 from "./assets/man-lap.png";
import Man2 from "./assets/man-cal.png";
import ProjectBg from "./assets/project.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import HomePageSlider from "./components/services/Slider";
import UserService from "./Service/UserService";
import TestimonialSlider from "./components/Testimonials";
import ContactUs from './assets/contactUs.png';
import Scroll from './components/Scroll/RightScroll';

function Home() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleScrollAndNavigate = (path) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(path);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await UserService.getInTouch(formData);
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          popup: "swal2-z-index-fix",
        },
      })
      setFormData({ firstName: "", lastName: '', email: "", phoneNumber: "", message: "" });
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
    <>
      <div>
        <HomePageSlider />
      </div>
      {/* Main Content Section */}
      <div className="w-full py-12 flex flex-col md:flex-row justify-center items-center md:justify-between md:max-w-7xl mx-auto px-6 space-y-12 md:space-y-0">
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0 md:-mr-20 z-40 md:my-40">
          <h1 className="text-xl md:text-5xl font-semibold mb-2 text-center" style={{ fontFamily: "Lexend Deca" }}>
            <span>INNOWIDE</span>
            <span className="block">TECHNOLOGIES</span>
          </h1>

          <div className="flex-1 md:hidden">
            <img
              src={CompanyImage}
              alt="Innowide Technologies team"
              className="rounded-lg w-full h-auto object-cover "
              loading="lazy"
            />
          </div>
          <div className="bg-[#2F6690] rounded-xl inline-block md:mt-10 p-4 -mt-10">
            <p
              className="text-xs text-left md:text-lg text-white"
              style={{ fontFamily: "Lato" }}
            >
              Innowide Technologies stands out as one of the top software
              companies in Hyderabad, delivering innovative IT solutions that
              fuel business success. Recognized for excellence among the best in
              the industry, we offer a comprehensive range of services,
              including software development, web design, and digital
              transformation.As one of the most trusted names among the top
              software companies in Hyderabad, we are committed to providing
              cutting-edge, tailored solutions that meet your unique business
              requirements and help you achieve your goals.
            </p>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          <img
            src={CompanyImage}
            alt="Innowide Technologies team"
            className="rounded-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="w-full space-y-12 md:mt-[40px] -my-4">
        <div
          className="md:flex px-6 py-8 bg-[#2F6690] rounded-3xl space-y-8 md:space-y-0 md:max-w-7xl mx-auto relative"
          style={{ fontFamily: "Poppins" }}
        >
          {/* Triangle - Left Side (Extra Triangle) */}
          <div className="absolute right-10 -bottom-3 transform translate-y-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px] border-t-[#2F6690]"></div>
          <div className="flex-1 md:mx-4 md:p-4">
            <h1 className="text-white font-medium text-start md:text-3xl">
              Top Software Company in Hyderabad
            </h1>
            <p className="text-white font-semibold text-start text-2xl md:text-4xl">
              Innowide Technologies
            </p>
            <img
              src={Computer}
              alt="Computer"
              className="w-full h-auto object-cover rounded-lg pt-6 pb-10"
              loading="lazy"
            />
          </div>

          <div className="flex-1 flex flex-col space-y-6">
            {/* Box 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-start space-x-6 min-h-[160px]">
              <div className="w-12 h-12 -ml-4 md:-ml-0 rounded-full flex items-center justify-center text-black">
                <RiPieChart2Fill className="text-black h-6 w-6" />
              </div>
              <div className="flex flex-col justify-between">
                <h5 className="text-base font-medium text-black">
                  Empowering Business through Innovative Solutions:
                </h5>
                <p className="text-black text-xs mt-2">
                  Empowering Businesses with Top Software Solutions in Hyderabad
                  At Innowide Technologies, one of the top software companies in
                  Hyderabad, we empower businesses with innovative technology
                  solutions that drive growth. Our expertise includes tailored
                  software, web, and mobile application development designed to
                  meet your unique needs.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-start space-x-6 min-h-[160px]">
              <div className="w-12 h-12 -ml-4 md:-ml-0  rounded-full flex items-center justify-center text-white">
                <SiReacthookform className="text-black h-6 w-6" />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-base font-medium text-black">
                  Expertise in Web and Mobile Development:
                </h3>
                <p className="text-black text-xs mt-2">
                  Expertise in Web and Mobile Development by a Top Software
                  Company in Hyderabad As one of the top software companies in
                  Hyderabad, Innowide Technologies excels in web and mobile
                  application development. We deliver user-friendly, responsive
                  solutions for businesses of all sizes.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-start space-x-6 min-h-[160px]">
              <div className="w-12 h-12 -ml-4 md:-ml-0  rounded-full flex items-center justify-center text-white">
                <PiCertificate className="text-black h-6 w-6" />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-base font-medium text-black">
                  Transform Your Business with Custom Web and Mobile Solutions:
                </h3>
                <p className="text-black text-xs mt-2">
                  Transform Your Business with Top Web and Mobile Solutions in
                  Hyderabad Ready to elevate your digital presence? As one of
                  the top software companies in Hyderabad, we specialize in
                  creating tailored web and mobile applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="my-20"></div>
      <div className="w-full bg-[#2F669080] space-y-6 md:py-8 pb-4 md:pb-0">
        <h4 className="text-center text-white text-2xl py-2 md:py-0">WHAT WE DO</h4>
        <h2
          className="md:text-3xl font-medium text-center text-white"
          style={{ fontFamily: "Acme" }}
        >
          What We Specialize In
        </h2>

        <div className="flex flex-wrap justify-between md:max-w-7xl mx-auto gap-4">
          <div className="flex-1 bg-[#335F82] rounded-xl shadow-lg p-2 text-center mx-4 md:mx-auto">
            <h3 className="text-center md:text-lg font-medium text-white mb-4 md:text-left">
             Innovative Tech Solutions
            </h3>
            <p
              className="text-white text-left text-xs md:text-sm"
              style={{ fontFamily: "Inter" }}
            >
              IT Services by One of the Top Software Companies in Hyderabad At
              Innowide Technologies, one of the top software companies in
              Hyderabad, we provide tailored IT solutions to meet diverse
              business needs and enhance operational efficiency. Our services
              include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
              <ul className="list-disc pl-5 space-y-2 text-white text-start text-xs md:text-sm">
                <li>App Development</li>
                <li>Software Development</li>
                <li>Website Development</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2 text-white text-start text-xs md:text-sm">
                <li>Blockchain Development</li>
                <li>Shopify Development</li>
                <li>E-commerce Development</li>
              </ul>
            </div>
            <div className="md:flex justify-between items-center mt-4">
              <div className="flex flex-col space-y-4 items-start">
                <button
                  className="text-white font-medium py-2 px-5 border  rounded-3xl flex items-center space-x-2 transition"
                  onClick={() => handleScrollAndNavigate("/itservices")}
                >
                  <span>Explore</span>
                  <IoIosArrowRoundForward className="h-5 w-5" />
                </button>
                <button
                  className="text-white font-medium py-2 px-5 rounded-3xl border flex items-center space-x-2 transition"
                  onClick={() => handleScrollAndNavigate("/contact")}
                >
                  <span>Contact Us</span>
                  <IoIosArrowRoundForward className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center">
                <img
                  src={Man1}
                  alt="Arrow Icon"
                  className="md:w-[150px] md:h-[150px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl shadow-lg p-2 text-center mx-4 md:mx-auto ">
            <h3 className="text-center md:text-lg font-medium text-black mb-4 md:text-left">
              <span className="text-blue-700">Digital Marketing</span> Services
            </h3>
            <p
              className="text-black text-left text-xs md:text-sm"
              style={{ fontFamily: "Inter" }}
            >
             As the best digital marketing agency in Hyderabad, Innowide Technologies delivers tailored digital marketing solutions designed to enhance brand visibility, increase engagement, and drive growth. Our wide range of services includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
              <ul className="list-disc pl-5 space-y-2 text-black text-start text-xs md:text-sm">
                <li>Search Engine Optimization</li>
                <li>Social Media Marketing</li>
                <li>Social Media Management</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2 text-black text-start text-xs md:text-sm">
                <li>Email Marketing</li>
                <li>Affiliated Marketing</li>
                <li>Mobile Marketing</li>
              </ul>
            </div>
            <div className="md:flex justify-between items-center mt-4">
              <div className="flex flex-col space-y-4 items-start">
                <button
                  className="text-black font-medium py-2 px-5 border  rounded-3xl flex items-center space-x-2 transition"
                  onClick={() => handleScrollAndNavigate("/digitalservices")}
                >
                  <span>Explore</span>
                  <IoIosArrowRoundForward className="h-5 w-5" />
                </button>
                <button
                  className="text-black font-medium py-2 px-5 rounded-3xl border flex items-center space-x-2 transition"
                  onClick={() => handleScrollAndNavigate("/contact")}
                >
                  <span>Contact Us</span>
                  <IoIosArrowRoundForward className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center">
                <img
                  src={Man2}
                  alt="Arrow Icon"
                  className="md:w-[150px] md:h-[150px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-14 md:py-20 bg-white">
        <h4
          className="text-center font-medium text-[#1A3E72] pb-9 md:text-3xl"
          style={{ fontFamily: "Montserrat" }}
        >
          How we work
        </h4>

        <div className="lg:flex md:grid md:grid-cols-2 items-stretch md:max-w-7xl mx-auto gap-4 ">
          {[
            "Understanding Requirements",
            "Design & Development",
            "Testing & Quality Assurance",
            "Deployment & Support",
          ].map((title, index) => (
            <div key={index} className="flex-1 flex justify-center my-4">
              <div className="bg-rgba(47, 102, 144, 0.35) rounded-lg shadow-lg flex flex-col justify-between items-center h-[300px] w-[300px] p-6 bg-[#2F669059]">
                <p
                  className="text-xl font-bold text-[#16425B] mb-2"
                  style={{ fontFamily: "Acme" }}
                >
                  {title}
                </p>
                <p
                  className="text-sm text-left text-[#6B7C8D] mb-0  "
                  style={{ fontFamily: "Inter" }}
                >
                  {title === "Understanding Requirements" && (
                    <>
                      At Innowide Technologies, we prioritize understanding your unique business needs. Through in-depth discussions and analysis, we gather key insights to define project objectives clearly. This step ensures that our solutions align with your vision and deliver value, forming the foundation for a successful.
                    </>
                  )}
                  {title === "Design & Development" && (
                    <>
                      Our design and development process focuses on innovation and functionality. We craft visually striking designs that resonate with your brand while ensuring seamless user interactions. Using the latest technologies, our developers create scalable and efficient solutions tailored to meet your business requirements, setting you apart in the digital landscape.
                    </>
                  )}
                  {title === "Testing & Quality Assurance" && (
                    <>
                      Quality is at the core of our work. We conduct thorough testing to identify and resolve any issues, ensuring our solutions are secure, bug-free, and reliable. By focusing on performance and usability, we deliver flawless digital products that meet the highest standards and exceed client expectations.
                    </>
                  )}
                  {title === "Deployment & Support" && (
                    <>
                      We ensure a smooth and hassle-free deployment of your solution, making it live with precision and care. Post-launch, our team provides consistent support and maintenance, keeping your systems updated and performing optimally. We’re committed to long-term success, ensuring your digital assets remain efficient and relevant over time.
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div
          className="bg-[#16425B80] py-10 px-6 md:px-20 rounded-2xl md:max-w-7xl mx-6 md:mx-auto bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${ProjectBg})` }}
        >
          <h2
            className="text-3xl md:text-4xl font-medium text-white text-center mb-4"
            style={{ fontFamily: "Inter" }}
          >
            "Have a Project in Mind?
          </h2>
          <h2 className="text-3xl md:text-4xl font-medium text-white text-center mb-4">
            Let's Connect!"
          </h2>
          <p
            className="md:text-xl text-white mb-6 text-center md:max-w-2xl mx-auto"
            style={{ fontFamily: "Inter" }}
          >
            "Reach out to us today to discuss your project ideas and discover
            how our innovative solutions can bring your vision to life!"
          </p>

          <div className="text-center md:py-4">
            <button
              className="bg-[linear-gradient(223.76deg,_#FFFFFF_36.89%,_#555555_162.78%)] text-[#16425B] font-semibold py-3 px-6 rounded-lg  transition duration-300"
              onClick={() => handleScrollAndNavigate("/contact")}
              style={{ fontFamily: "Inter" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-20 opacity-100 mx-auto bg-[#2F669080] py-10 rounded-lg">
        {/* Section Heading */}
        <h1
          className="text-center text-white font-medium text-3xl md:text-4xl"
          style={{ fontFamily: "Acme" }}
        >
          What Customer Says 
          <span className="block">About Innowide Technologies</span>
        </h1>

        {/* Testimonial Section */}
        <div className="w-full max-w-7xl mx-auto mt-8 px-4">
          <div className="flex justify-center items-center">
            <TestimonialSlider />
          </div>
        </div>
      </div>
      <div className="container mx-auto md:py-16 mt-[30px]">
        <div className="flex flex-col md:flex-row gap-8 md:max-w-7xl mx-auto">
          <div className="flex-1 bg-white rounded-lg p-8 shadow-lg">
            <h2
              className="md:text-2xl font-medium text-start mb-6 text-[#1C384E]"
              style={{ fontFamily: "Inter" }}
            >
              Get a Quotation Now
            </h2>
            <h2
              className=" text-sm md:text-md text-start md:mb-6 text-[#2F6690]"
              style={{ fontFamily: "Inter" }}
            >
              Please fill out the request for quote form below and our expert
              team will get back to you shortly.
            </h2>
            <form className="bg-[#2F6690] p-4 mt-6 md:mt-0 rounded-md" onSubmit={handleSubmit}>
              <div className="flex flex-wrap gap-6 mb-6">
                <div
                  className="flex-1 min-w-[150px]"
                  style={{ fontFamily: "Inter" }}
                >
                  <label className="md:text-md text-white">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1 min-w-[200px]">
                  <label className="md:text-md text-white">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="md:text-md text-white">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="md:text-md text-white">Phone Number</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="md:text-md text-white">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="text-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white hover:bg-blue-400 bg-[#16425BB2] rounded-md px-4 py-2"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          <div
            className="flex-1 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${ContactUs})` }}
          />
        </div>
      </div>
      <div>
        <Scroll/>
      </div>

      <div className="text-center">
        <Footer />
      </div>
    </>
  );
}

export default Home;
