import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HomePage from '../../assets/homefront1.png';
import Homebg1 from '../../assets/homebg1.png';
import Homebgg from '../../assets/homebgg.png';
import Homebg2 from '../../assets/homebg2.png';
import HomeFront2 from '../../assets/homefront2.png';
import HomeFront3 from '../../assets/homefront3.png';
import Navbar from '../../Navbar';
import { useNavigate } from "react-router-dom";

const HomePageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const backgroundImages = [Homebgg, Homebg2, Homebg1];
  const rightSideImages = [HomePage, HomeFront2, HomeFront3];
  const navigate = useNavigate();

  const content = [
    {
      heading: "Software Development Services",
      text: "Custom software solutions designed to meet your specific business requirements. It encompasses the creation, design, and maintenance of software applications.",
      path: "/itservices",
    },
    {
      heading: "Digital Marketing Services",
      text: "Let us help you achieve success in the digital landscape with tailored solutions that fit your needs.",
      path: "/digitalservices",
    },
    {
      heading: "Website Development Services", 
      text: "Web development typically encompasses both front-end development, which focuses on the design and user interface, and back-end development.",
      path: "/itservices",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
  };

  // Navigate based on the current slide
  const handleExploreClick = () => {
    navigate(content[currentImage].path);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="relative ">
        {/* Conditionally set the background image */}
        <div
          className="w-full h-screen bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${backgroundImages[currentImage]})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#4A99D399] opacity-5"></div>

          {/* Content for the slides */}
          <div className="absolute top-20 left-0 w-full h-full flex items-center justify-center px-6">
            <div className="w-full max-w-7xl mx-auto md:flex md:items-center md:justify-between">
              <div className="text-center md:text-left md:w-1/2">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
                  {content[currentImage].heading}
                </h1>
                <p className="mt-4 text-white text-sm md:text-lg">
                  {content[currentImage].text}
                </p>
                <button
                  className="mt-6 px-5 py-3 bg-white text-[#16425B] font-medium rounded-full"
                  onClick={handleExploreClick}
                >
                  Explore
                </button>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/2 md:flex md:justify-end">
                <img
                  src={rightSideImages[currentImage]}
                  alt="Slider Right Image"
                  className="w-full md:w-4/5 h-40 md:h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Left and Right Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 border p-2 md:p-4 rounded-full shadow-lg hover:text-white transition-all duration-300 text-white font-thin"
        >
          <FaArrowLeft size={30} />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 border p-2 md:p-4 rounded-full shadow-lg hover:text-white transition-all duration-300 text-white font-thin"
        >
          <FaArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default HomePageSlider;
