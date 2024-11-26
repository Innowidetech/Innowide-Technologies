import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import contactbg from './assets/contactbgus.png';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import UserService from '../src/Service/UserService';
import './App.css';
import Scroll from './components/Scroll/RightScroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await UserService.contactUs(formData);
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'There was an error sending your message. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>
        <div className="relative">
          <img
            src={contactbg}
            alt="Contact Us"
            className="w-full object-cover h-64 sm:h-80 md:h-96"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'Open Sans' }}>
            Contact Us
          </div>
        </div>

        {/* Main Container for the Contact Form and Info */}
        <div className="container rounded-lg flex flex-col items-center w-full max-w-6xl mt-8 z-20 relative md:top-[-100px]">
          <div className="flex flex-col mx-auto p-6 sm:p-8 md:flex-row w-full items-start space-y-8 md:space-y-0 md:space-x-6">
            {/* Left Column: Contact Info and Map */}
            <div className="w-full  md:w-3/4 md:h-[500px] p-4 flex flex-col space-y-4 rounded-md text-white bg-[#16425B] sm:space-y-6 order-first md:order-last shadow-[0_6px_10px_0_rgba(0,0,0,0.8)] translate-y-20 md:translate-x-20">
              <div className="flex items-center space-x-2 sm:space-x-3 ">
                <SlLocationPin size={30} />
                <span className="text-sm" style={{ fontFamily: 'Akatab' }}>
                  Office no-501, 5<sup className="text-xs">th</sup> Floor Elite Padmavati Corporate, Madhapur, Hyderabad, Telangana 500081
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <FiPhone size={20} />
                <a href="tel:+917075541674">
                  <span className="text-sm sm:text-base" style={{ fontFamily: 'Akatab' }}>+917075541674</span>
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CiMail size={20} />
                <a href="mailto:innowidetechnologieshr@gmail.com">
                  <span className="text-sm sm:text-base" style={{ fontFamily: 'Akatab' }}>innowidetechnologieshr@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4 text-black-500">
                <a href="https://www.linkedin.com/in/innowide-technologies-48246b324/" target="_blank" ><FaLinkedin size={20} /></a>
                <a href="https://www.facebook.com/people/Innowide-Technologies/61564968294800/" target="_blank" ><FaFacebook size={20} /></a>
                <a href="https://x.com/Innowidetech/" target="_blank" ><FaXTwitter size={20} /></a>
                <a href="https://www.instagram.com/innowidetechnologies/" target="_blank" ><FaInstagram size={20} /></a>
              </div>
              <div className="mt-4 sm:mt-6">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.090533566381!2d78.3895095!3d17.4466604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb914cf6142af9%3A0x1ff0a5aa37ce26e7!2sInnowide%20Technologies!5e0!3m2!1sen!2sin!4v1731477529500!5m2!1sen!2sin"
                  className="w-full h-40 sm:h-48 rounded-lg border-none"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full p-4 bg-white md:w-3/2 rounded-xl shadow-[0_10px_10px_0_rgba(0,0,0,0.8)] ">
              <h2 className="text-2xl sm:text-xl font-semibold text-[#4A99D3] text-center  underline decoration-[#4A99D3]" style={{ fontFamily: 'Open Sans' }}>
                Get in Touch
              </h2>
              <div className='md:translate-x-6 p-4'>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Leave Us a Message</h3>
                  <div>
                    <label className="block text-sm mb-2 text-[#B4BEC8]">Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full  px-4 py-2 border border-[#B4BEC8] rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
                      placeholder="First_Name Last_Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-[#B4BEC8]">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#B4BEC8] rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
                      placeholder="Enter_Your_Email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-[#B4BEC8]">Phone Number</label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#B4BEC8] rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-[#B4BEC8]">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#B4BEC8] rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4A99D3] text-white py-2 rounded-md font-semibold"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><Scroll/></div>
      <div className="text-center">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
