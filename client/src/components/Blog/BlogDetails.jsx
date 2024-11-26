import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Navbar";
import Blogbg from "../../assets/blogbg.png";
import DOMPurify from 'dompurify';

function BlogDetail() {
  const location = useLocation();
  const { blog } = location.state;

  // Sanitize blog description to ensure safety when displaying HTML content
  const sanitizedDescription = DOMPurify.sanitize(blog.description);

  // Function to add target="_blank" to anchor tags and apply styles to header tags
  const addTargetBlankToLinksAndStyleHeaders = (description) => {
    const div = document.createElement('div');
    div.innerHTML = description;

    // Modify anchor tags to open in a new tab and set color to sky blue
    const links = div.querySelectorAll('a');
    links.forEach(link => {
      link.setAttribute('target', '_blank');
      link.style.color = '#0000EE'; 
    });

    // Style header tags (h1, h2, h3, h4, h5, h6)
    const headers = div.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headers.forEach(header => {
      if (header.tagName === 'H1') {
        header.classList.add('text-4xl', 'font-bold', 'text-gray-800');
      } else if (header.tagName === 'H2') {
        header.classList.add('text-3xl', 'font-semibold', 'text-gray-700');
      } else if (header.tagName === 'H3') {
        header.classList.add('text-2xl', 'font-medium', 'text-gray-600');
      } else {
        header.classList.add('text-xl', 'font-normal', 'text-gray-500');
      }
    });

    return div.innerHTML;
  };

  const updatedDescription = addTargetBlankToLinksAndStyleHeaders(sanitizedDescription);

  return (
    <>
      {/* Header Section */}
      <div
        className="w-full h-[200px] bg-cover bg-center relative flex flex-col"
        style={{ backgroundImage: `url(${Blogbg})` }}
      >
        <Navbar />
      </div>

      {/* Blog Image */}
      <div className="container mx-auto p-4 flex justify-center items-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full md:w-[600px] md:h-[360px] object-fill rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Blog Title and Description */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-center font-bold text-2xl md:text-3xl mb-4">{blog.title}</h1>
        <div className="text-md text-gray-700 space-y-4">
          <p
            className="py-4"
            dangerouslySetInnerHTML={{ __html: updatedDescription }}
          ></p>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
