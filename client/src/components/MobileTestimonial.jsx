import React from 'react';
import { FaComputer } from 'react-icons/fa6';

function Testimonial1() {
  return (
    <>
      {/* First Card - SEO */}
      <div className='bg-white shadow-lg px-4 rounded-md w-[200px] translate-x-1/2 -translate-y-6 md:hidden'>
        <div className="flex items-center gap-3">
          <div className="text-[#2F6690]">
            <FaComputer size={20} />
          </div>
          <h1 className="text-xs text-[#16425B]" style={{ fontFamily: "Bricolage Grotesque" }}>
            Search Engine Optimization
          </h1>
        </div>
        <p className="text-xs font-light text-[#2F6690]" style={{ fontFamily: "Mulish" }}>
          "Innowide Technologies has greatly enhanced our website’s visibility. Their SEO strategies moved us up the search rankings, bringing more organic traffic and boosting our sales."
        </p>
        <p className="mt-2 text-xs font-semibold text-[#2F6690]">— Rajesh Kumar, CEO, Tech Solutions Inc.</p>
      </div>

      {/* Second Card - Social Media Marketing */}
      <div className='bg-white shadow-lg px-4 rounded-md w-[200px] -translate-y-8'>
        <div className="flex items-center gap-3">
          <div className="text-[#2F6690]">
            <FaComputer size={20} />
          </div>
          <h1 className="text-xs text-[#16425B]" style={{ fontFamily: "Bricolage Grotesque" }}>
            Social Media Marketing
          </h1>
        </div>
        <p className="text-xs font-light text-[#2F6690]" style={{ fontFamily: "Mulish" }}>
          "The team at Innowide Technologies completely transformed our social media presence. Their tailored content and targeted strategies have significantly increased engagement and expanded our reach. We’re seeing fantastic results across all platforms!"
        </p>
        <p className="mt-2 text-xs font-semibold text-[#2F6690]">— Priya Mehta, Marketing Director, Fashion Forward</p>
      </div>

      {/* Third Card - Email Marketing */}
      <div className='bg-white shadow-lg text-[#16425B] px-4 rounded-md w-[170px] translate-x-36 -translate-y-72'>
        <div className="flex items-center gap-3">
          <div className="text-[#2F6690]">
            <FaComputer size={20} />
          </div>
          <h1 className="text-xs" style={{ fontFamily: "Bricolage Grotesque" }}>
            Email Marketing
          </h1>
        </div>
        <p className="text-xs font-light text-[#2F6690]" style={{ fontFamily: "Mulish" }}>
          "We saw an impressive improvement in our email campaigns thanks to Innowide Technologies. Their expertise in crafting engaging, personalized emails has led to higher open and conversion rates. Their strategies really work!"
        </p>
        <p className="mt-2 text-xs font-semibold text-[#2F6690]">— Sandeep Rao, Sales Manager, Elite Gadgets</p>
      </div>

      {/* Fourth Card - Affiliate Marketing */}
      <div className='bg-white shadow-lg text-[#16425B] px-4 rounded-md w-[200px] -translate-y-80 translate-x-4'>
        <div className="flex items-center gap-3">
          <div className="text-[#2F6690]">
            <FaComputer size={20} />
          </div>
          <h1 className="text-xs" style={{ fontFamily: "Bricolage Grotesque" }}>
            Affiliate Marketing
          </h1>
        </div>
        <p className="text-xs font-light text-[#2F6690]" style={{ fontFamily: "Mulish" }}>
          "Innowide Technologies has helped us build a successful affiliate marketing program. Their approach boosted our affiliate network, driving more traffic and generating greater sales."
        </p>
        <p className="mt-2 text-xs font-semibold text-[#2F6690]">— Ananya Shah, Founder, EcoProducts</p>
      </div>

      {/* Fifth Card - Mobile Marketing */}
      <div className='bg-white text-[#16425B] shadow-lg px-4 rounded-md w-[170px] translate-x-36 -translate-y-96'>
        <div className="flex items-center gap-3">
          <div className="text-[#2F6690]">
            <FaComputer size={20} />
          </div>
          <h1 className="text-xs" style={{ fontFamily: "Bricolage Grotesque" }}>
            Mobile Marketing
          </h1>
        </div>
        <p className="text-xs font-light text-[#2F6690]" style={{ fontFamily: "Mulish" }}>
          "With the help of Innowide Technologies, we’ve optimized our mobile marketing efforts, leading to better user engagement and increased conversions."
        </p>
        <p className="mt-2 text-xs font-semibold text-[#2F6690]">— Rohit Singh, Head of Digital Marketing, FoodieHub</p>
      </div>
    </>
  );
}

export default Testimonial1;
