import React, { useState, useEffect } from "react";
import ImageOne from "../assets/Ellipse 263.png";
import ImageTwo from "../assets/Ellipse 264.png";
import ImageThree from "../assets/Ellipse 265.png";
import ImageFour from "../assets/Ellipse 266.png";
import ImageFive from "../assets/Ellipse 267.png";
import ImageSeven from "../assets/Ellipse 269.png";
import ImageEight from "../assets/Ellipse 270.png";
// import './Testimonial.css';

const testimonials = [
  {
    text: `Elementum delivered the site within the timeline as requested. In the end, the client saw a 50% increase in traffic within days of its launch. They also had an impressive ability to use technologies the company hadn't used, which have proven to be easy to use and reliable.`,
    leftImages: [ImageOne, ImageTwo, ImageThree, ImageFour],
    rightImages: [ImageFive, ImageSeven, ImageSeven, ImageEight],
    author: "Rohith Raj",
  },
  {
    text: `The new website helped our business to grow significantly. We were able to reach more customers and convert leads into sales. The team worked closely with us to ensure everything was perfect!`,
    leftImages: [ImageFour, ImageThree, ImageTwo, ImageOne],
    rightImages: [ImageEight, ImageFive, ImageSeven, ImageSeven],
    author: "Somaraju",
  },
  {
    text: `Even with thorough research backing the claims, it's likely to be a wasted effort if the audience is not already inclined to trust the testimonials. Sometimes, beliefs are hard to change regardless of the evidence provided.`,
    leftImages: [ImageFour, ImageThree, ImageTwo, ImageOne],
    rightImages: [ImageEight, ImageFive, ImageSeven, ImageEight],
    author: "Ankith",
  },
];

const TestimonialSection = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [flipClass, setFlipClass] = useState("");
  const currentTestimonial = testimonials[testimonialIndex];

  // Function to go to the next testimonial
  const goToNextTestimonial = () => {
    setFlipClass("flipped");
    setTimeout(() => {
      setTestimonialIndex((prevIndex) =>
        prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
      );
      setFlipClass("");
    }, 600);
  };

  // Handle the click event to change the testimonial based on the clicked image
  const handleImageClick = (index) => {
    setFlipClass("flipped");
    setTimeout(() => {
      setTestimonialIndex(index);
      setFlipClass("");
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(goToNextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative opacity-100 mx-auto py-10">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-8 sm:space-y-0 sm:space-x-4">
        {/* Left Images */}
        <div className="flex flex-col items-center gap-4 lg:-translate-x-32 md:translate-x-36">
          {currentTestimonial.leftImages.map((image, index) => (
            <div
              key={index}
              className={`w-[100px] h-[100px] lg:h-[117px] bg-cover rounded-full cursor-pointer card ${flipClass}`}
              style={{
                backgroundImage: `url(${image})`,
                transform: `translateX(${index % 2 === 0 ? -120 : -60}px)`, 
              }}
              onClick={() => handleImageClick(testimonialIndex)} 
            >
              <div className="card-inner">
                <div className="card-front"></div>
                <div className="card-back"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Container with Text */}
        <div className="text-center flex flex-col justify-center bg-[#ffffffa0] rounded-3xl shadow-[black] shadow-2xl px-6 py-4 w-full sm:w-[600px]">
          <p className="text-lg text-gray-700">
            <span className="text-[46px] font-bold text-black">"</span>
            {currentTestimonial.text}
            <span className="text-[46px] font-bold text-black ml-28">"</span>
          </p>
          <p className="mt-4 text-xl font-semibold text-black flex justify-end">
            - {currentTestimonial.author}
          </p>
        </div>

        {/* Right Images */}
        <div className="flex flex-col items-center gap-4 lg:translate-x-32 md:-translate-x-36">
          {currentTestimonial.rightImages.map((image, index) => (
            <div
              key={index}
              className={`w-[99px] h-[100px] lg:h-[117px] bg-cover rounded-full cursor-pointer card ${flipClass} card-enter-from-top`}
              style={{
                backgroundImage: `url(${image})`,
                transform: `translateX(${index % 2 === 0 ? 100 : 40}px)`,
              }}
              onClick={() => handleImageClick(testimonialIndex)}
            >
              <div className="card-inner">
                <div className="card-front"></div>
                <div className="card-back"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
