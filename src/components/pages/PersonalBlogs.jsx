import React, { useEffect, useState } from "react";
import Home from "../sharedComponents/Home";
import "./PersonalBlogs.scss";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../utils/AxiosInstance";

const PersonalBlogs = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const res = await api.get("/post/getAll");
      if (res.data.success === true) {
        setPosts(res.data.posts);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {

  //
  // }, []);

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition > 0) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.clear()
    } else {
      window.scrollTo(0, 0);
    }

    fetchBlogs();

    return () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };
  }, [location.pathname]);

  return (
    <>
      <ToastContainer />
      <Home
        subheading={"Latest Tech Blogs"}
        para={
          "At Algo Academy, our daily blogs dive deep into the latest trends, tools, and techniques in the tech world. Whether you're a coding enthusiast or a seasoned developer, you'll find fresh, relevant insights to keep your skills sharp and your knowledge up-to-date. Join us each day to explore topics that inspire innovation and growth in the ever-evolving world of technology."
        }
        punch1={""}
        punch2={""}
        punch3={""}
        none={"none"}
      />

      <div className="blogs-container">
        <h1> MAKE HABIT OF READING</h1>

        <div className="p-blogs">
          {posts &&
            posts.map((post) => (
              <div
                className="blog"
                onClick={() => {
                  navigate(`/blogs/${post._id}`);
                }}
              >
                <img src={post.imageUrl} alt="no-image" />
                <h1>{post.title}</h1>
                <p>
                  {" "}
                  Blog by : <i>{post.author}</i>{" "}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PersonalBlogs;
