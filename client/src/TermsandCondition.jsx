import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TermsCondition from './assets/terms&condition.png';
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { PiCirclesFourBold } from "react-icons/pi";
import { FaHandshakeSimple } from "react-icons/fa6";

function TermsandCondition() {
  const [selectedSection, setSelectedSection] = useState(null);
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  // Icon map for each section
  const iconMap = {
    acceptance: <AiTwotoneSafetyCertificate className='h-6 w-10' />,
    permitted: <FaHandshake className='h-6 w-10' />,
    ownership: <PiCirclesFourBold className='h-6 w-10' />,
    service: <FaHandshakeSimple className='h-6 w-10' />,
    privacy: <AiTwotoneSafetyCertificate className='h-6 w-10' />,
    thirdParty: <FaHandshake className='h-6 w-10' />,
    disclaimer: <PiCirclesFourBold className='h-6 w-10' />,
    termination: <FaHandshakeSimple className='h-6 w-10' />,
    policy: <AiTwotoneSafetyCertificate className='h-6 w-10' />,
    jurisdiction: <FaHandshake className='h-6 w-10' />,
  };

  // Content sections with title and content
  const sections = [
    { sectionId: 'acceptance', title: '1. Acceptance of Terms:', content: 'By using this website, you acknowledge and agree to abide by these terms and all applicable legal regulations.' },
    { sectionId: 'permitted', title: '2. Permitted Use:', content: 'This website may only be used for lawful purposes. Any unauthorized activities, such as data mining or hacking, are strictly prohibited.' },
    { sectionId: 'ownership', title: '3. Ownership of Content:', content: 'All content, including text, graphics, and trademarks, is the intellectual property of Innowide Technologies and is protected by law.' },
    { sectionId: 'service', title: '4. Service Information:', content: 'Information about our services, including SEO, app development, blockchain, and website solutions, is subject to change without prior notice.' },
    { sectionId: 'privacy', title: '5. Privacy Compliance:', content: 'By using our site, you consent to our Privacy Policy, which explains how we collect, use, and protect your data.' },
    { sectionId: 'thirdParty', title: '6. Third-Party Links:', content: 'Links to external websites may be included for convenience, but we are not responsible for their content or practices.' },
    { sectionId: 'disclaimer', title: '7. Disclaimer of Liability:', content: 'Innowide Technologies shall not be held liable for any damages or losses resulting from the use of our website or services.' },
    { sectionId: 'termination', title: '8. Termination of Access:', content: 'We reserve the right to restrict or terminate access to our website or services at our sole discretion without prior notice.' },
    { sectionId: 'policy', title: '9. Policy Updates:', content: 'Innowide Technologies may revise these terms at any time. Please review this page periodically to stay informed of changes.' },
    { sectionId: 'jurisdiction', title: '10. Jurisdiction:', content: 'These terms are governed by the laws of [India/Telangana], and any disputes will be resolved under applicable legal frameworks.' },
  ];

  return (
    <>
      <div className="relative w-full min-h-[400px] md:h-[600px] bg-gradient-to-r from-[#2F6690] to-[#2F6690]/60">
        <Navbar />
        <div className="relative max-w-5xl mx-auto text-left px-6 py-8 z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-medium mb-4" style={{ fontFamily: 'Yanone Kaffeesatz' }}>
            Terms & Conditions
          </h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,192 C480,32 960,80 1440,20 L1440,320 L0,320 Z"></path>
        </svg>
        <div className="absolute right-0 bottom-0 p-8 z-20 hidden md:block">
          <img src={TermsCondition} alt="Terms & Conditions" className="max-w-xs md:max-w-md" />
        </div>
      </div>

      <div className='flex justify-around max-w-7xl mx-auto md:pb-10'>
        <div className='grid gap-y-4'>
          <h1 className='text-[#003061] text-3xl pb-4 hidden md:block' style={{ fontFamily: 'Sofia Sans Cond' }}>Legal Information</h1>
          {/* Left side - Legal Information sections */}
          {sections.map((item, index) => (
            <div
              key={index}
              className={`bg-[#D9D9D9] rounded-full p-2 items-center hidden md:flex cursor-pointer ${selectedSection === item.sectionId ? 'bg-[#003061] text-white' : ''}`}
              onClick={() => handleSectionClick(item.sectionId)}
            >
              {iconMap[item.sectionId]}
              <h1 className='text-xs' style={{ fontFamily: 'Inter' }}>{item.title}</h1>
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className='flex justify-around max-w-7xl mx-auto md:pb-20'>
          <div className='md:translate-y-20 md:translate-x-2 lg:translate-x-16 space-y-4'>
            {sections.map((section, index) => (
              <div
                key={index}
                className={`space-y-4 max-w-7xl ${selectedSection === section.sectionId ? 'bg-[#D9D9D9] p-4 rounded-md' : ''}`}
              >
                <h1 className='font-semibold'>{section.title}</h1>
                <label>{section.content}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Footer />
      </div>
    </>
  );
}

export default TermsandCondition;
