import React, { useState } from "react";
import Navbar from "../../Navbar";
import ItOneImg from "../../assets/itone.png";
import { FaAngleDown } from "react-icons/fa6";
import ITSecondimg from "../../assets/itimgtwo.png";
import "../../App.css";
import SOftwareimg from "../../assets/software.png";
import websiteimg from "../../assets/itthirdimg.png";
import Appimg from "../../assets/app.png";
import Blockimg from "../../assets/block.png";
import UI from "../../assets/ui.png";
import Projectimg1 from "../../assets/project1.png";
import Projectimg2 from "../../assets/project2.png";
import Projectimg3 from "../../assets/project3.png";
import Projectimg4 from "../../assets/project4.png";
// import { AiOutlinePlus } from "react-icons/ai";
import Footer from "../../Footer";
// import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserService from "../../Service/UserService";
import Scroll from "../Scroll/RightScroll";

function Itservices() {

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    modeOfCommunication: "",
    category: "",
  });


  //navigating to top
  const handleScrollAndNavigate = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate(path);
  };

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
      await UserService.demo(formData);
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          popup: "swal2-z-index-fix", 
        },
      })
      setFormData({ name: "", email: "", phoneNumber: "", message: "", modeOfCommunication: '', category: '' });
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

  const images = [
    { src: Projectimg1, link: 'https://mblogistics.in/', title: "MBLogistics", description: "Logistics Project" },
    { src: Projectimg2, link: 'https://coloredpicklefilms.com/', title: "Coloredpicklefilms", description: "Production House" },
    { src: Projectimg3, link: 'https://cateyesentertainment.in/', title: "Cateyesentertainment", description: "Production Project" },
    { src: Projectimg4, link: 'https://sabzeemandi.com/', title: "Sabzeemandi.com", description: "Grocery"},
  ];
  

  //solution for faqs
  const faqContent = [
    "A wide range of professional services are available, including UI/UX design, web design, mobile app development, software solutions, CRM systems, e-commerce platforms, payment gateway integration, logo creation, branding, digital marketing, social media management, and email marketing. These services are tailored to deliver innovative, user-focused, and impactful results.",
    "Web development at Innowide Technologies involves designing, building, and maintaining websites. This includes front-end and back-end development, creating responsive layouts, integrating databases, and ensuring seamless user experiences and functionality.",
    "At Innowide Technologies, we use Agile and Scrum methodologies for software development. These approaches allow for flexible, iterative development, ensuring continuous feedback, rapid delivery, and adaptation to client needs throughout the project lifecycle.",
    "The cost of our software development services at Innowide Technologies varies depending on the project scope, complexity, and requirements. We provide customized quotations after understanding your needs, ensuring cost-effective solutions tailored to your budget.",
    "Yes, at Innowide Technologies, we offer website renovation and redesign services. Our team helps refresh outdated websites, improving user experience, modernizing design, and enhancing functionality to better meet business goals and customer expectations.",
    "Clients can reach Innowide Technologies through our Contact Page, give us a Call, or send a quick WhatsApp Message for instant assistance. You can also schedule a Demo Meeting to discuss your project requirements in detail."
  ];

  // List of FAQ questions
  const questions = [
    " What services are offered by Innowide Technologies?",
    "What exactly does web development involve?",
    "What software development methodologies do you use?",
    "How much do your software development services cost?",
    "Do we offer renovation and redesign of the website?",
    "How can clients approach Innowide Technologies for services?"
  ];

  // Toggle the dropdown for a specific FAQ
  const toggleFAQ = (index) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };



  return (
    <>
      <div
        className="w-full min-h-[400px] md:h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(47, 102, 144, 0.48), rgba(47, 102, 144, 0.48)), url(${ItOneImg})`,
        }}
      >
        <Navbar />
        <div className="relative max-w-7xl mx-auto text-left px-6 py-8 z-20 text-white flex justify-center items-center h-full">
          <h1
            className="text-2xl md:text-4xl font-medium mb-4 text-center"
            style={{ fontFamily: "Open Sans" }}
          >
           Innovative Tech Solutions
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-center mt-[-40px]">
        <img
          src={ITSecondimg}
          alt="IT Services"
          className="max-w-full h-auto opacity-90% z-30"
           loading="lazy"
        />
      </div>
      <div className="w-full space-y-12 mt-[40px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div>
            <h1
              className="text-center md:text-4xl italic"
              style={{ fontFamily: "Poppins" }}
            >
              "Innovate, Integrate, Elevate!"
            </h1>
          </div>
          <div className="space-y-12 mt-6 md:mt-[50px]">
            {/* Section 1: Software Development */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-14">
              <img
                src={websiteimg}
                alt="Software Image"
                className="w-full md:w-1/2 md:h-[300px] rounded-lg"
                 loading="lazy"
              />
              <div className="mt-4 md:mt-0 md:w-1/2">
                <h2
                  className="text-[#2F6690] font-semibold text-lg md:text-3xl py-4"
                  style={{ fontFamily: "Inter" }}
                >
                  <span className="md:mr-8">01</span> Software Development
                </h2>

                <div className="flex items-start space-x-6">
                  <span className="text-[#003061] text-3xl md:ml-24">
                    &#x21B3;
                  </span>
                  <p className="text-[#2F6690]">
                  At Innowide Technologies, recognized as the best software development company in Hyderabad, we adopt Agile methodologies to design, develop, test, and maintain robust software solutions. Our approach positions us as a leader among the top software companies in Hyderabad.
                  </p>
                </div>
                <div className="flex items-start space-x-6 mt-4">
                  <span className="text-[#003061] text-3xl md:ml-24">
                    &#x21B3;
                  </span>
                  <p className="text-[#2F6690]">
                  As the best software development company in Hyderabad, we use Agile techniques to deliver high-quality software solutions through continuous design, development, testing, and maintenance, solidifying our place among the top software companies in Hyderabad.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Website Development */}
            <div className="flex flex-col md:flex-row-reverse md:items-center md:space-x-14 md:space-x-reverse mt-12">
              <img
                src={SOftwareimg}
                alt="websiteimg"
                className="w-full md:w-1/2 md:h-[300px] rounded-lg"
                 loading="lazy"
              />
              <div className="mt-4 md:mt-0 md:w-1/2">
                <h2
                  className="text-[#2F6690] font-semibold text-lg md:text-3xl py-4"
                  style={{ fontFamily: "Inter" }}
                >
                  Website Development <span className="md:ml-8">02</span>
                </h2>
                <div className="flex items-start space-x-6">
                  <span className="text-[#003061] text-3xl md:ml-24">
                    &#x21B3;
                  </span>
                  <p className="text-[#2F6690]">
                  Innowide Technologies, the best web development company in Hyderabad, specializes in building web applications that are easily accessible via browsers without requiring downloads. As one of the top website development companies in Hyderabad, we deliver scalable, innovative, and efficient web solutions.
                  </p>
                </div>
                <div className="flex items-start space-x-6 mt-4">
                  <span className="text-[#003061] text-3xl md:ml-24">
                    &#x21B3;
                  </span>
                  <p className="text-[#2F6690]">
                  At Innowide Technologies, the best web development company in Hyderabad, we ensure seamless functionality by utilizing technologies like JavaScript, CSS, and HTML5. Our expertise places us among the top website development companies in Hyderabad, creating efficient, user-friendly web applications tailored to your business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 mt-[80px]">
            {" "}
            {/* Section 3: App Development */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-14">
              <img
                src={Appimg}
                alt="Appimg"
                 className="w-full md:w-1/2 md:h-[300px] rounded-lg"
                  loading="lazy"
              />
              <div className="mt-4 md:mt-0 md:w-1/2">
                <h2
                  className="text-[#2F6690] font-semibold text-lg md:text-3xl py-4"
                  style={{ fontFamily: "Inter" }}
                >
                  <span className="md:mr-8">03</span> App Development
                </h2>

                <div className="flex items-start space-x-6">
                  <span className="text-[#003061] text-3xl md:ml-24">
                    &#x21B3;
                  </span>
                  <p className="text-[#2F6690]">
                  App development involves designing software for mobile platforms through stages like planning, design, coding, testing, and deployment. As one of the best app development companies in Hyderabad, we offer expert, customized solutions to meet your specific needs.
                  </p>
                </div>
                <div className="flex items-start space-x-2 mt-4">
                  <span className="text-[#003061] text-3xl md:ml-24">
                    &#x21B3;
                  </span>
                  <p className="text-[#2F6690]">
                  During the development phase, we use languages like Swift, Kotlin, or JavaScript to write code. Our expertise in these technologies positions us among the best app development companies in Hyderabad, ensuring the delivery of top-tier mobile solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* Section 4: Blockchain Development */}
            <div className="flex flex-col md:flex-row-reverse md:items-center md:space-x-14 md:space-x-reverse mt-12">
              <img
                src={Blockimg}
                alt="Blockimg"
               className="w-full md:w-1/2 md:h-[300px] rounded-lg"
                loading="lazy"
              />
              <div className="mt-4 md:mt-0 md:w-1/2">
                <h2
                  className="text-[#2F6690] font-semibold text-lg md:text-3xl py-4"
                  style={{ fontFamily: "Inter" }}
                >
                  Block chain Development <span className="md:ml-8">04</span>
                </h2>
                <div className="flex items-start space-x-6">
                  <span className="text-[#003061] text-3xl md:ml-24">
                    &#x21B3;
                  </span>
                  <p className="text-[#2F6690]">
                  Blockchain has emerged as a transformative technology, offering a secure and transparent method for recording transactions. At Innowide Technologies, we provide the best blockchain development services and top blockchain development solutions that guarantee trust and efficiency.
                  </p>
                </div>
                <div className="flex items-start space-x-6 mt-4">
                  <span className="text-[#003061] text-3xl md:ml-24">
                    &#x21B3;
                  </span>
                  <p className="text-[#2F6690]">
                  Once data is recorded on the blockchain, it remains immutable, ensuring full transparency. Our deep expertise in blockchain technology places us among the best blockchain development services and top blockchain development solutions in the industry.
                  </p>
                </div>
              </div>
            </div>
            {/* Section 5: UI/UX Development */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-14 mt-12">
              <img
                src={UI}
                alt="Appimg"
                className="w-full md:w-1/2 md:h-[300px] rounded-lg"
                 loading="lazy"
              />
              <div className="mt-4 md:mt-0 md:w-1/2">
                <h2
                  className="text-[#2F6690] font-semibold text-lg md:text-3xl py-4"
                  style={{ fontFamily: "Inter" }}
                >
                  <span className="md:mr-8">05</span> UI / UX Development
                </h2>

                <div className="flex items-start space-x-6">
                  <span className="text-[#003061] text-3xl md:ml-24">
                    &#x21B3;
                  </span>
                  <p className="text-[#2F6690]">
                    Our UI/UX services focus on creating intuitive and visually
                    appealing interfaces that enhance user satisfaction. By
                    prioritizing user experience, we ensure that your audience
                    finds it easy to navigate your product, leading to increased
                    engagement and conversions.
                  </p>
                </div>
                <div className="flex items-start space-x-6 mt-4">
                  <span className="text-[#003061] text-3xl md:ml-24">
                    &#x21B3;
                  </span>
                  <p className="text-[#2F6690]">
                    Our data-driven approach ensures that every design decision
                    is aligned with your business goals, ultimately driving
                    growth and success in a competitive market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:my-10 mt-6 py-4">
        <button className="bg-[#003061] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#1f4a66]" onClick={() => handleScrollAndNavigate('/contact')}>
          Contact Us
        </button>
      </div>

      <div
        className="w-full space-y-12 mt-[40px] px-4 md:px-8 bg-[#2F6690] py-16"
        style={{ backgroundColor: "rgba(47, 102, 144, 0.48)" }}
      >
        <div className="relative max-w-7xl mx-auto text-left py-8 z-20 text-black">
          <div className="text-center mb-8">
            <div className="mb-4">
              <h1 className="font-thin bg-[#E2E2E2] rounded-full inline-block px-4 py-2 shadow-md">
                Projects we're proud of
              </h1>
            </div>

            <h2 className="text-3xl font-semibold md:my-6 ">
              The best proof of experience
            </h2>
            <p className="text-lg md:text-3xl italic text-gray-600">
              is the actual design
            </p>
          </div>
          <div className="grid gap-6 px-4 md:px-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg max-w-full mx-auto"
              >
                {/* Decorative Borders */}
                <div className="absolute top-0 left-0 h-14 w-14 border-t-4 border-l-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 h-14 w-14 border-b-4 border-r-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={image.src}
                  alt={`Project ${index + 1}`}
                  className="w-full lg:h-[600px] object-cover transition-all duration-300 group-hover:scale-105 "
                   loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-200 bg-opacity-0 flex items-center justify-center transition duration-300 group-hover:bg-opacity-80">
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden group-hover:block px-4 py-2 text-white bg-[#003061] rounded-lg shadow-lg"
                  >
                     <h3 className="text-xl font-bold ">{image.title}</h3>
                     <p className="text-lg mt-2">{image.description}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center justify-center p-8 md:max-w-7xl mx-auto gap-8">
        {/* FAQ Section */}
        <div className="md:ml-8 w-full space-y-4 md:max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center lg:text-left mb-4">FAQs</h2>
          <div className="space-y-2">
            {questions.map((question, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center p-4 bg-[#2F6690] rounded-lg cursor-pointer md:max-w-3xl hover:bg-blue-200"
                  style={{ backgroundColor: "rgba(47, 102, 144, 0.25)" }}
                  onClick={() => toggleFAQ(index)}
                >
                  <span
                    className="text-gray-800 font-medium"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    {question}
                  </span>
                  <FaAngleDown className="text-gray-600 text-xl" />
                </div>
                {selectedFAQ === index && (
                  <div className="p-4 mt-2 bg-gray-100 rounded-lg md:max-w-3xl">
                    <p className="text-gray-800">{faqContent[index]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Call Section */}
        <div className="lg:w-1/4 w-full flex flex-col items-center p-6 bg-white rounded-lg shadow-lg  md:mr-8">
          <div className="text-center">
            <div className="text-3xl mb-4">😊</div>
            <h3 className="text-xl font-medium mb-2">
              Turn Your Ideas Into Reality—Schedule Your Demo Session With Us Today!
            </h3>
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800" onClick={() => setIsModalOpen(true)}>
              Schedule now
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Footer />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-[90%] sm:w-[400px] relative">
            {/* Close Button - Cross Mark */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-center mb-4">
              Schedule Your Appointment
            </h2>
            <form onSubmit={handleSubmit}>
              <label style={{ fontFamily: "Poppins" }}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 mb-4 border rounded"
                required
              />

              <label style={{ fontFamily: "Poppins" }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 mb-4 border rounded"
                required
              />

              <label style={{ fontFamily: "Poppins" }}>Phone Number</label>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-2 mb-4 border rounded"
                required
              />

              <label style={{ fontFamily: "Poppins" }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-2 mb-4 border rounded"
                required
              ></textarea>

              <label style={{ fontFamily: "Poppins" }}>
                Mode Of Communication
              </label>
              <select
                name="modeOfCommunication"
                value={formData.modeOfCommunication}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                required
              >
                <option value="">Mode of Communication</option>
                <option value="Call">Call</option>
                <option value="Email">Email</option>
                <option value="Whatsapp">Whatsapp</option>
                <option value="Googlemeet">Google Meet</option>
                <option value="Zoom">Zoom</option>
              </select>

              <label style={{ fontFamily: "Poppins" }}>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                required
              >
                <option value="">Category</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="IT Services">IT Services</option>
              </select>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white hover:bg-[#2f5174] bg-[#003061] rounded-md px-4 py-2"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div><Scroll/></div>

    </>
  );
}

export default Itservices;
