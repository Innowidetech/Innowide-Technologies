import React, { useState } from "react";
import Digitalbg from "../../assets/digitalbg.png";
import ITSecondimg from "../../assets/itimgtwo.png";
import "../../App.css";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineComputer, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBullhorn, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Testimonial1 from "../Testimonial1";
import MobileTestimonial from '../MobileTestimonial';
import Swal from "sweetalert2";
import UserService from "../../Service/UserService";
import Scroll from "../Scroll/RightScroll";
import { FaAngleDown } from "react-icons/fa6";


const services = [
  {
    icon: <FaComputer size={30} />,
    title: "Search Engine Optimization",
    description:
      "Innowide Technologies, a leading digital marketing agency in Hyderabad, specializes in SEO to improve website performance, secure top organic rankings, and enhance visibility—achieving optimal results without relying on paid advertising.",
  },
  {
    icon: <MdOutlineComputer size={30} />,
    title: "Social Media Marketing",
    description:
      "As the best social media marketing agency in Hyderabad, Innowide Technologies leverages diverse platforms to increase brand visibility, engage target audiences, and meet business objectives through the creation and sharing of relevant content across multiple channels.",
  },
  {
    icon: <MdKeyboardDoubleArrowRight size={30} />,
    title: "Social Media Management",
    description:
      "Innowide Technologies handles every aspect of your social media strategy—from crafting engaging content and scheduling posts to monitoring interactions and analyzing performance metrics—ensuring your social media presence drives engagement and supports your business goals effectively.",
  },
  {
    icon: <FaEnvelope size={30} />,
    title: "E-mail Marketing",
    description:
      "Ranked among the top email marketing companies in Hyderabad, Innowide Technologies offers the best email marketing services in Hyderabad. As the best email marketing agency in Hyderabad, we create targeted email campaigns that effectively engage and convert potential customers.",
  },
  {
    icon: <FaBullhorn size={30} />,
    title: "Affiliated Marketing",
    description:
      "As the best affiliate marketing company in Hyderabad, Innowide Technologies uses a results-driven strategy that rewards affiliates for driving traffic or sales. We harness the power of affiliate influence to enhance business performance across various digital channels.",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Mobile Marketing",
    description:
      "Innowide Technologies excels in mobile marketing in Hyderabad, focusing on connecting with consumers through smartphones and tablets. Our strategies are designed to enhance user experiences and effectively drive conversions on mobile platforms.",
  },
];

function Digitalservices() {
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

  const faqContent = [
    "Our comprehensive solutions include email marketing, social media marketing, search engine optimization (SEO), mobile marketing, and affiliate marketing, along with content creation and analytics-driven campaign optimization to maximize your business’s online reach.",
    "These services help enhance your brand’s visibility, engage your target audience effectively, drive high-quality traffic, and improve conversions, ultimately leading to sustained business growth.",
    "Yes, we create tailored marketing strategies to suit your unique business needs, target audience, and industry trends, ensuring the best possible outcomes for your campaigns.",
    "We provide regular performance reports with key metrics such as website traffic, engagement, conversions, and ROI. This transparency ensures you can monitor progress and see measurable results.",
    "You can connect with us through our Contact Us page to share your requirements, message us on WhatsApp for quick support, or schedule a free demo or consultation to discuss how we can help achieve your marketing goals.",
    "Yes, we serve a variety of industries, including e-commerce, real estate, healthcare, education, and more, offering customized solutions to meet the unique challenges of each sector. "
  ];

  // List of FAQ questions
  const questions = [
    "What services are included in your digital marketing solutions?",
    "How can these services benefit my business?",
    "Do you offer customized marketing strategies?",
    "How will I know if my campaigns are successful?",
    "How can I reach out to explore your services?",
    "Do you work with businesses across different industries?"
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
          backgroundImage: `linear-gradient(rgba(47, 102, 144, 0.48), rgba(47, 102, 144, 0.48)), url(${Digitalbg})`,
        }}
      >
        <Navbar />
        <div className="relative max-w-7xl mx-auto text-left px-6 py-8 z-20 text-white flex justify-center items-center h-full">
          <h1
            className="text-2xl md:text-4xl font-medium mb-4 text-center"
            style={{ fontFamily: "Open Sans" }}
          >
            Digital Marketing Services
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
              className="text-center text-2xl md:text-4xl italic"
              style={{ fontFamily: "Poppins" }}
            >
              Our Services
            </h1>
            <h1
              className="mt-4 text-sm md:text-2xl text-center"
              style={{ fontFamily: "Inter" }}
            >
              We provide tailored digital marketing services, including SEO and
              social media management, to boost your visibility. Our data-driven
              strategies effectively connect you with your target audience.
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 md:mt-6 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col h-auto justify-center items-start bg-white shadow-lg text-white rounded-md p-4"
              >
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="text-[#2F6690]">{service.icon}</div>
                  <h1
                    className="text-lg text-[#16425B]"
                    style={{ fontFamily: "Bricolage Grotesque" }}
                  >
                    {service.title}
                  </h1>
                </div>
                <label
                  className="text-sm my-4 font-thin text-[#2F6690] md:text-base text-start"
                  style={{ fontFamily: "Mulish" }}
                >
                  {service.description}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="p-6 mt-[40px] mb-[40px] w-full"
        style={{ backgroundColor: "rgba(47, 102, 144, 0.5)" }}
      >
        <h1
          className="text-xl md:text-3xl text-center text-[#003061]"
          style={{ fontFamily: "Namdhinggo" }}
        >
          "Unlock Your Brand's Potential with Our Unique Approach."
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center p-8 md:max-w-7xl mx-auto gap-8 min-h-screen">
        <div
          className="md:ml-8 w-full space-y-4 md:max-w-7xl mx-auto text-white rounded-lg md:min-h-[900px] flex flex-col justify-start"
          style={{ backgroundColor: "rgba(22, 66, 91, 0.7)" }}
        >
          <div className="text-center md:text-left mb-4">
            <h2
              className="md:text-4xl italic py-2"
              style={{ fontFamily: "Poppins" }}
            >
              Testimonials
            </h2>
            <h1
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "Open Sans" }}
            >
              "Discover how our clients have transformed their experiences with
              us."
            </h1>
          </div>
          <div className="w-full py-4 hidden md:block">
            <Testimonial1 />
          </div>
          <div className="w-full py-10 md:hidden px-2">
            <MobileTestimonial />
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

                {/* Show the dropdown if the current FAQ is selected */}
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
        <div className="lg:w-1/4 w-full flex flex-col items-center p-6 bg-white rounded-lg shadow-lg md:mr-8">
          <div className="text-center">
            <div className="text-3xl mb-4">😊</div>
            <h3 className="text-xl font-medium mb-2">
            Turn Your Ideas Into Reality—Schedule Your Demo Session With Us Today!
            </h3>
            <button
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              onClick={() => setIsModalOpen(true)}
            >
              Schedule now
            </button>
          </div>
        </div>
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
      <div className="text-center">
        <Footer />
      </div>
    </>
  );
}

export default Digitalservices;
