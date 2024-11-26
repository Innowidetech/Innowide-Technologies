import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Policy from "./assets/policy.png";

function Privacy() {
  const [selectedSection, setSelectedSection] = useState(null);
  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  return (
    <>
      <div className="relative w-full min-h-[400px] md:h-[600px] bg-[#2F6690]/80">
        <Navbar />

        <div className="relative max-w-2xl mx-auto text-left px-6 z-20 text-white">
          <img src={Policy} alt="Policy" style={{ opacity: 0.7 }}/>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-center font-semibold p-4 md:text-3xl text-lg"
          style={{ fontFamily: "Open Sans" }}
        >
          INNOWIDE TECHNOLOGIES
        </h1>
        <div className="px-4 md:px-8">
          <label className="text-left md:text-xl block mx-auto ">
            At Innowide Technologies, your privacy is our priority. This Privacy
            Policy outlines how we collect, use, and protect your information
            when you engage with our services, including SEO, SMM, software
            development, blockchain development, app development, and website
            development. You agree to the terms outlined in this Privacy Policy
            by accessing our website or utilizing our services.
          </label>
        </div>

        {/* Flexbox container for tablet and desktop views */}
        <div className="flex flex-col md:flex-row">
          <div
            className="mt-8 font-semibold p-4 space-y-5 md:text-xl md:block hidden "
            style={{ fontFamily: "Inter" }}
          >
            {/* Left Side - Sections List */}
            {[
              "Information We Collect",
              "How We Use Your Information",
              "Sharing of Information",
              "Data Security",
              "Cookies and Tracking Technologies",
              "Third-Party Links",
              "Changes to This Privacy Policy",
              "Contact Us",
            ].map((title, index) => (
              <h1
                key={index}
                className={`cursor-pointer ${selectedSection === title
                    ? "bg-[#003061] text-white"
                    : "bg-transparent text-black"
                  } p-2 rounded-md`}
                onClick={() => handleSectionClick(title)}
              >
                {title}
              </h1>
            ))}
          </div>

          {/* Right side with content sections */}
          <div
            className="grid grid-cols-1 gap-4 md:w-full pb-4 mx-4 py-4 md:py-0 md:mx-0"
            style={{ fontFamily: "Inter" }}
          >
            {[
              {
                sectionId: "Information We Collect",
                title: "Information We Collect",
                content: (
                  <>
                    <label>
                      We may gather various types of information, including:
                    </label>
                    <label>
                      1. Personal Information: Your name, email address, phone
                      number, and any other details you share when contacting us
                      or using our services.
                    </label>
                    <label>
                      2. Usage Data: Information about how you interact with our
                      website, such as IP address, browser type, pages visited,
                      and session duration.
                    </label>
                    <label>
                      3. Service-Specific Data: Any information provided by you
                      related to project requirements or service customization.
                    </label>
                  </>
                ),
              },
              {
                sectionId: "How We Use Your Information",
                title: "How We Use Your Information",
                content: (
                  <>
                    <label>
                      We use the information collected to deliver tailored
                      solutions and exceptional service experiences. Here’s how
                      your information supports each of our offerings:
                    </label>
                    <h2>1. Search Engine Optimization (SEO):</h2>
                    <label>
                      We collect data to enhance your website's search engine
                      ranking through targeted keyword optimization and content
                      analysis.
                    </label>
                    <h2>2. Social Media Marketing (SMM):</h2>
                    <label>
                      Your data helps us create tailored social media campaigns
                      to boost brand visibility and audience engagement across
                      platforms.
                    </label>
                    <h2>3. Software Development:</h2>
                    <label>
                      We gather your requirements to develop custom, scalable
                      software solutions designed to meet your business needs.
                    </label>
                    <h2>4. Blockchain Solutions:</h2>
                    <label>
                      Your information helps us design secure and transparent
                      blockchain solutions, including smart contracts and
                      decentralized applications.
                    </label>
                    <h2>5. App Development:</h2>
                    <label>
                      We use your project details to create intuitive,
                      functional, and optimized mobile apps for iOS and Android.
                    </label>
                    <h2>6. Website Development:</h2>
                    <label>
                      We collect insights to design responsive, SEO-friendly
                      websites that ensure a seamless user experience and
                      enhanced functionality.
                    </label>
                    <h2>7. Learning Management Systems (LMS):</h2>
                    <label>
                      We use your data to build scalable LMS platforms that
                      support e-learning, content management, and performance
                      tracking.
                    </label>
                    <h2>8. eCommerce Solutions:</h2>
                    <label>
                      We develop customized, secure eCommerce platforms that
                      offer a smooth shopping experience and help increase
                      conversion rates.
                    </label>
                    <h2>Other Services:</h2>
                    <label>
                      Your information is used to deliver cloud computing, data
                      analytics, and IT consulting services to optimize business
                      operations.
                    </label>
                  </>
                ),
              },
              {
                sectionId: "Sharing of Information",
                title: "Sharing of Information",
                content: (
                  <>
                    <label>
                      We do not share, sell, or lease your information to third
                      parties for marketing purposes. However, there are certain
                      situations where we may share your information, including:
                      With reliable partners or subcontractors who assist us in
                      providing our services. To meet legal requirements, uphold
                      our agreements, or safeguard our rights and security.
                    </label>
                  </>
                ),
              },
              {
                sectionId: "Data Security",
                title: "Data Security",
                content: (
                  <>
                    <label>
                      Innowide Technologies takes reasonable measures to
                      safeguard your information against unauthorized access,
                      alteration, or destruction. This includes the use of
                      secure servers, encryption technologies, and strict access
                      controls.
                    </label>
                  </>
                ),
              },
              {
                sectionId: "Cookies and Tracking Technologies",
                title: "Cookies and Tracking Technologies",
                content: (
                  <>
                    <label>
                      Our website uses cookies to enhance user experience, track
                      website performance, and analyze traffic. You can modify
                      your cookie settings at any time through your browser
                      preferences.
                    </label>
                  </>
                ),
              },
              {
                sectionId: "Third-Party Links",
                title: "Third-Party Links",
                content: (
                  <>
                    <label>
                      Our website may contain links to third-party sites. We are
                      not responsible for the privacy practices or content found
                      on external websites linked to our site.
                    </label>
                  </>
                ),
              },
              {
                sectionId: "Changes to This Privacy Policy",
                title: "Changes to This Privacy Policy",
                content: (
                  <>
                    <label>
                      Innowide Technologies retains the right to modify this
                      policy, particularly concerning trademarks, rights, and
                      copyrights, whenever deemed necessary. We recommend
                      checking this policy from time to time for any revisions
                      or updates.
                    </label>
                  </>
                ),
              },
              {
                sectionId: "Contact Us",
                title: "Contact Us",
                content: (
                  <>
                    <div>
                      <label>
                        If you have any questions or concerns regarding this
                        Privacy Policy, feel free to reach out to us at:
                      </label>
                      <div>
                        <a href="tel:+917075541674">Phone: +91 7075541674</a>
                      </div>
                      <div>
                        <a href="mailto:innowidetechnologieshr@gmail.com">
                          Email: innowidetechnologieshr@gmail.com
                        </a>

                      </div>
                    </div>
                  </>
                ),
              },
            ].map((section, index) => (
              <div
                key={index}
                className={`border-2 shadow-md p-4 md:mt-8 space-y-2 ${selectedSection === section.sectionId ? "bg-[#D9D9D9]" : ""
                  }`}
              >
                <h1 className="md:text-xl font-semibold">{section.title}</h1>
                {section.content}
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

export default Privacy;
