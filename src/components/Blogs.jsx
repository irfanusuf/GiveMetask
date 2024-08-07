import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/blogs.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the backend
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="main">
      <div className="blogs">
        <h1>All Blogs</h1>
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="ck-content">
              <h3>{blog.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Blogs;
