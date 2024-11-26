import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../Service/UserService";
import Swal from "sweetalert2";
import Blogbg from "../../assets/blogbg.png";
import Blogimg1 from "../../assets/blogimg1.png";
import Navbar from "../../Navbar";
import { CiCircleCheck } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Footer from "../../Footer";
import Loginbg from '../../assets/login.jpg';
import Scroll from "../Scroll/RightScroll";

function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Login functionality
  const handleLogin = async () => {
    try {
      const response = await UserService.login(userName, password);
      if (response.token) {
        const { token } = response;
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in!",
        }).then(() => {
          localStorage.setItem('authToken', token);
          navigate("/blogdashboard");
        });
      } else {
        throw new Error("Token not found in response");
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Please check your username and password.",
      });
    }
  };

  // Fetch the blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await UserService.postblogget();
        setBlogs(data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error Fetching Blogs",
          text: "Something went wrong while fetching blogs.",
        });
      }
    };

    fetchBlogs();
  }, []);

  const recentBlog = blogs[0];
  const remainingBlogs = blogs.slice(1, 5);

  // Search functionality: Filter blogs based on title or tags
  const filteredBlogs = blogs.filter(blog => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const titleMatches = blog.title.toLowerCase().includes(lowercasedSearchTerm);
    const tagsMatch = blog.tags?.some(tag => tag.toLowerCase().includes(lowercasedSearchTerm));
    return titleMatches || tagsMatch;
  });

  // Handle blog click (scroll to top and navigate to blog detail)
  const handleBlogClick = (blog) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/blog-detail", { state: { blog } });
  };

  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center relative flex flex-col"
        style={{ backgroundImage: `url(${Blogbg})` }}
      >
        <Navbar />
        <div className="relative max-w-7xl mx-auto text-center px-6 py-8 z-40 text-white flex flex-col justify-center items-center flex-grow">
          <h1
            className="text-2xl md:text-4xl font-medium mb-6"
            style={{ fontFamily: "Open Sans" }}
          >
            Our Blog
          </h1>
          <div className="flex items-center justify-center mb-6 w-full max-w-xl relative md:w-[600px]">
            <FaSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              className="w-full pl-12 pr-16 py-2 md:py-3 text-black rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search blog..."
              value={searchTerm} // Bind input value to searchTerm state
              onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
            />
            <button
              className="absolute right-3 px-4 py-1 md:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={() => console.log("Search clicked")}
            >
              Search
            </button>
          </div>
        </div>

        {/* Image Cards */}
        <div className="grid md:flex justify-center gap-6 md:mt-32 lg:mt-40 mb-6 md:translate-y-8">
          <div className="bg-white rounded-l-md overflow-hidden mx-4 md:w-96">
            <img
              src={Blogimg1}
              alt="Blogimg1"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-white rounded-l-md shadow-md mx-4 p-4 md:w-96">
            <div className="mb-4">
              <h1
                className="text-sm bg-[#9aceb8] text-[#1565D8] font-bold px-4 py-1 rounded-full inline-block"
                style={{ fontFamily: "Open Sans" }}
              >
                FEATURED
              </h1>
            </div>

            <label className="block text-lg text-gray-500 mb-4">
              "Transform your ideas into reality with our professional services
              that inspire and deliver."
            </label>

            <div className="flex items-center space-x-4">
              <img
                src="your-image-source.jpg"
                alt="Small Image"
                className="w-8 h-8 rounded-md object-cover"
              />
              <div className="flex-1">
                <h2
                  className="font-medium text-sm"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Title
                </h2>
                <div className="flex items-center text-sm text-gray-600">
                  <CiCircleCheck className="mr-1 text-green-500" />
                  <span className="text-gray-500 text-xs">Verified Writer</span>
                </div>
              </div>
              <div className="text-right text-sm text-gray-500 z-30">
                <label
                  onClick={() => setIsModalOpen(true)}
                  className="cursor-pointer"
                >
                  2 May
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* New Content Section */}
        <div className="px-6 py-4 md:mt-10">
          <div className="flex max-w-7xl mx-auto flex-col md:flex-row justify-between items-center md:items-start">
            <div className="flex flex-col md:w-2/3">
              <h1 className="text-[#183B56] font-semibold text-xl md:text-2xl" style={{ fontFamily: 'Open Sans' }}>
                Popular Articles
              </h1>
              <label className="text-[#5A7184] md:ml-2 py-2" style={{ fontFamily: 'Inter' }}>
                We share common trends, strategies ideas, opinions, short & long stories from the team behind company.
              </label>
            </div>
          </div>
        </div>

        {/* Filtered Blogs */}
        <div className="px-6 py-4">
          <div className="flex max-w-7xl mx-auto flex-col md:flex-row justify-between items-stretch">

            {/* Left Content (Recent Blog) */}
            {recentBlog && (
              <div
                className="bg-white rounded-md shadow-md p-4 flex-1 min-w-[200px] max-w-[500px] md:w-2/3 flex flex-col cursor-pointer min-h-[400px] md:min-h-[400px] relative mb-4 md:mb-0"
                style={{
                  backgroundImage: `url(${recentBlog.image})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                onClick={() => handleBlogClick(recentBlog)}
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="mb-4">
                    <h1 className="text-sm bg-[#9aceb8] text-[#1565D8] font-bold px-4 py-1 rounded-full inline-block" style={{ fontFamily: 'Open Sans' }}>
                      FEATURED
                    </h1>
                  </div>

                  <div className="flex-grow"></div>

                  <div className="bg-white text-black">
                    <p className="text-lg text-center font-medium">{recentBlog.title}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Right Content (First 4 Blogs) */}
            <div className="bg-white p-4 flex-1 min-w-[300px] max-w-[500px] md:w-1/3 mt-4 md:mt-0 -ml-5 md:-ml-0 flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 h-full w-[250px] md:w-auto">
                {remainingBlogs.length > 0 ? (
                  remainingBlogs.map((blog) => (
                    <div
                      key={blog._id}
                      className="p-4 border rounded-md flex-1 relative cursor-pointer"
                      style={{
                        backgroundImage: `url(${blog.image})`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        height: '240px',
                      }}
                      onClick={() => handleBlogClick(blog)}
                    >
                      <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <h2 className="text-sm font-semibold text-black">{blog.title}</h2>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No more blogs available.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* New Container for More Blogs */}
        <div className="px-6 py-4">
          <div className="flex max-w-7xl mx-auto flex-col md:flex-row justify-between items-stretch">
            <div className="bg-white p-4 flex-1 min-w-[300px] max-w-[500px] md:w-1/3 mt-4 md:mt-0 flex flex-col">
              {/* Use Tailwind grid classes for responsive columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 h-full w-[250px] md:w-full">
                {filteredBlogs.length > 4 && filteredBlogs.slice(4).map((blog) => (
                  <div
                    key={blog._id}
                    className="p-4 border rounded-md flex-1 relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${blog.image})`,
                      backgroundSize: '100% 100%',
                      backgroundPosition: 'center',
                      height: '220px',
                    }}
                    onClick={() => handleBlogClick(blog)}
                  >
                    <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h2 className="text-sm font-semibold text-black">{blog.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
            <div
              className="relative bg-cover bg-center p-6 rounded-lg w-96"
              style={{ backgroundImage: `url(${Loginbg})`, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-white text-2xl"
              >
                ×
              </button>

              <h2 className="text-xl font-semibold mb-4 text-white text-center">Login To Post</h2>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Email"
                className="w-full px-6 py-2 mb-4 border border-gray-300 rounded-md bg-white bg-opacity-70"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-6 py-2 mb-4 border border-gray-300 rounded-md bg-white bg-opacity-70"
              />
              <div className="flex justify-between items-center">
                <button
                  onClick={handleLogin}
                  className="bg-white text-[#2F6690] px-6 py-2 rounded-md w-full"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
        <div><Scroll /></div>
        <div className="text-center">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Blog;
