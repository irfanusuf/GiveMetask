import React, { useEffect} from "react";
import Home from "../sharedComponents/Home";
import "./PersonalBlogs.scss";
import { ToastContainer } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "../../context/Store";

const PersonalBlogs = () => {
 
  const navigate = useNavigate();
  const location = useLocation();
  const {state , dispatch} = useDispatch()

 

  useEffect(() => {

    document.title = "ALGO ACADEMY | Blogs";
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition > 0) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.clear()
    } else {
      window.scrollTo(0, 0);
    }


    return () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };
  }, [location.pathname , dispatch]);

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
          {state.posts &&
            state.posts.map((post) => (
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
