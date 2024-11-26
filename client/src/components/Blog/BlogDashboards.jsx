import React, { useState, useEffect } from "react";
import Blogbg from "../../assets/blogbg.png";
import Navbar from "../../Navbar";
import BlogDashboardbg from '../../assets/blogdashboard.png';
import UserService from "../../Service/UserService";
import Swal from "sweetalert2";
import DOMPurify from 'dompurify';
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom"; 
import { FaTrashAlt } from 'react-icons/fa'; 

function BlogDashboards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    description: "",
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); // <-- Initialize navigate

  // Fetch blog data when the component mounts
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleEditorChange = (content) => {
    setFormData((prevData) => ({
      ...prevData,
      description: content,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("tags", formData.tags);
    data.append("description", formData.description);
    if (formData.image) {
      data.append("image", formData.image);
    }

    setIsLoading(true);

    try {
      await UserService.postblog(data);
      setIsLoading(false);

      Swal.fire({
        icon: "success",
        title: "Blog Posted Successfully!",
        text: "Your blog has been successfully posted.",
      });

      setFormData({
        title: "",
        tags: "",
        description: "",
        image: null,
      });
      closeModal();
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error Posting Blog",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  // Handle blog click (scroll to top and navigate to blog detail)
  const handleBlogClick = (blog) => {
    window.scrollTo({
      top: 0, 
      behavior: "smooth", 
    });
    navigate("/blog-detail", { state: { blog } });
  };

  // Delete blog function
  const handleDeleteBlog = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        await UserService.deleteBlog(id); 
        setBlogs((prevBlogs) => prevBlogs.filter(blog => blog._id !== id)); 
        Swal.fire("Deleted!", "The blog has been deleted.", "success");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error Deleting Blog",
          text: "Something went wrong while deleting the blog.",
        });
      }
    }
  };

  return (
    <>
      {/* Header Section */}
      <div
        className="w-full md:h-[400px] bg-cover bg-center relative flex flex-col"
        style={{ backgroundImage: `url(${Blogbg})` }}
      >
        <Navbar />
        <div className="relative max-w-7xl mx-auto text-center px-6 py-8 z-20 text-white flex flex-col flex-grow">
          <h1
            className="text-2xl md:text-4xl font-medium mb-6"
            style={{ fontFamily: "Open Sans" }}
          >
            Admin Dashboard
          </h1>
        </div>
      </div>

      {/* Post Blog Button */}
      <div className="flex justify-end mr-6 py-6">
        <button
          onClick={openModal}
          className="bg-[#16425BB2] text-white py-2 px-6 rounded-xl hover:bg-[#16425BB2] transition duration-300 sm:w-auto w-[200px]"
        >
          Post Blog
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 mx-4 md:mx-0">
          <div className="relative w-full max-w-6xl bg-[#16425B] text-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div
                className="p-8 overflow-y-auto"
                style={{
                  background: "linear-gradient(to right, #2F6690, rgba(47, 102, 144, 0.3))",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <h2 className="text-2xl font-bold mb-6">Enter details to Post a Blog</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter title"
                      className="w-full px-4 py-2 bg-[#16425B] border border-gray-300 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Tags</label>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      placeholder="Enter tags"
                      className="w-full px-4 py-2 bg-[#16425B] border border-gray-300 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <Editor
                      apiKey="nlv6tun0n0k23i69u3eg24syspyluxae8f2b0v8g2l6h5zaw"
                      initialValue=""
                      init={{
                        height: 300,
                        menubar: false,
                        plugins: [
                          "link",
                          "textcolor",
                          "fontsize",
                        ],
                        toolbar:
                          "undo redo | formatselect fontselect fontsizeselect | bold italic underline | link unlink bullist numlist indent | link anchor",
                      }}
                      value={formData.description}
                      onEditorChange={handleEditorChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Upload Image</label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#ffffff33] file:text-white hover:file:bg-[#ffffff50]"/>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white text-[#16425B] font-bold py-2 rounded-md hover:bg-gray-200 transition"
                  >
                    {isLoading ? "Posting..." : "POST BLOG"}
                  </button>
                </form>
              </div>
              <div
                className="hidden lg:block"
                style={{
                  backgroundImage: `url(${BlogDashboardbg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Display Blogs as Cards */}
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="md:text-2xl font-medium text-center pb-4">Admin Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 md:mx-0">
          {blogs.map((blog) => {
            return (
              <div key={blog._id} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer relative" onClick={() => handleBlogClick(blog)}>
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-fill" loading="lazy" />
                <div className="absolute top-2 right-2 text-white p-2 bg-black bg-opacity-50 rounded-full cursor-pointer" onClick={() => handleDeleteBlog(blog._id)}>
                  <FaTrashAlt />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">Tags: {blog.tags}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlogDashboards;
