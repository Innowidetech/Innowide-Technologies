import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";

function Testimonial1() {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="space-y-6 flex flex-rows">
        {/* Service Card 1 - SEO */}
        <div className="flex flex-col items-center bg-white shadow-lg text-[#16425B] rounded-md p-6 min-w-[300px] w-full translate-x-full translate-y-3/4">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-[#2F6690]">
              <FaRegUserCircle size={30} />
            </div>
            <h1 className="text-xl font-semibold" style={{ fontFamily: "Bricolage Grotesque" }}>
              Search Engine Optimization
            </h1>
          </div>
          <p className="text-sm font-light text-[#2F6690] text-center" style={{ fontFamily: "Mulish" }}>
            "Innowide Technologies has greatly enhanced our website’s visibility. Their SEO strategies moved us up the search rankings, bringing more organic traffic and boosting our sales. We’re extremely satisfied with their results-driven approach!"
          </p>
          <p className="mt-4 text-sm font-semibold text-[#2F6690]">— Rajesh Kumar, CEO, Tech Solutions Inc.</p>
        </div>

        {/* Service Card 2 - Social Media Marketing */}
        <div className="flex flex-col items-center bg-white shadow-lg text-[#16425B] rounded-md p-6 min-w-[300px] w-full translate-x-44 -translate-y-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-[#2F6690]">
              <FaRegUserCircle size={30} />
            </div>
            <h1 className="text-xl font-semibold" style={{ fontFamily: "Bricolage Grotesque" }}>
              Social Media Marketing
            </h1>
          </div>
          <p className="text-sm font-light text-[#2F6690] text-center" style={{ fontFamily: "Mulish" }}>
            "The team at Innowide Technologies completely transformed our social media presence. Their tailored content and targeted strategies have significantly increased engagement and expanded our reach. We’re seeing fantastic results across all platforms!"
          </p>
          <p className="mt-4 text-sm font-semibold text-[#2F6690]">— Priya Mehta, Marketing Director, Fashion Forward</p>
        </div>

        {/* Service Card 3 - Email Marketing */}
        <div className="flex flex-col items-center bg-white shadow-lg text-[#16425B] rounded-md p-6 min-w-[300px] w-full transform translate-y-64 -translate-x-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-[#2F6690]">
              <FaRegUserCircle size={30} />
            </div>
            <h1 className="text-xl font-semibold" style={{ fontFamily: "Bricolage Grotesque" }}>
              Email Marketing
            </h1>
          </div>
          <p className="text-sm font-light text-[#2F6690] text-center" style={{ fontFamily: "Mulish" }}>
            "We saw an impressive improvement in our email campaigns thanks to Innowide Technologies. Their expertise in crafting engaging, personalized emails has led to higher open and conversion rates. Their strategies really work!"
          </p>
          <p className="mt-4 text-sm font-semibold text-[#2F6690]">— Sandeep Rao, Sales Manager, Elite Gadgets</p>
        </div>

        {/* Service Card 4 - Affiliate Marketing */}
        <div className="flex flex-col items-center bg-white shadow-lg text-[#16425B] rounded-md p-6 min-w-[300px] w-full transform -translate-x-1/2 -translate-y-1/4">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-[#2F6690]">
              <FaRegUserCircle size={30} />
            </div>
            <h1 className="text-xl font-semibold" style={{ fontFamily: "Bricolage Grotesque" }}>
              Affiliate Marketing
            </h1>
          </div>
          <p className="text-sm font-light text-[#2F6690] text-center" style={{ fontFamily: "Mulish" }}>
            "Innowide Technologies has helped us build a successful affiliate marketing program. Their approach boosted our affiliate network, driving more traffic and generating greater sales. The results have exceeded our expectations!"
          </p>
          <p className="mt-4 text-sm font-semibold text-[#2F6690]">— Ananya Shah, Founder, EcoProducts</p>
        </div>

        {/* Service Card 5 - Mobile Marketing */}
        <div className="flex flex-col items-center bg-white shadow-lg text-[#16425B] rounded-md p-6 min-w-[300px] w-full transform -translate-x-80 translate-y-44">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-[#2F6690]">
              <FaRegUserCircle size={30} />
            </div>
            <h1 className="text-xl font-semibold" style={{ fontFamily: "Bricolage Grotesque" }}>
              Mobile Marketing
            </h1>
          </div>
          <p className="text-sm font-light text-[#2F6690] text-center" style={{ fontFamily: "Mulish" }}>
            "With the help of Innowide Technologies, we’ve optimized our mobile marketing efforts, leading to better user engagement and increased conversions"
          </p>
          <p className="mt-4 text-sm font-semibold text-[#2F6690]">— Rohit Singh, Head of Digital Marketing, FoodieHub</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial1;
