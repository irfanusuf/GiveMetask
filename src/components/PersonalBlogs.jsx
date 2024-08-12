import React, { useEffect, useState } from "react";
import Home from "./sharedComponents/Home";
import "../styles/blogs.scss";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Loading from "./sharedComponents/Loading";

const PersonalBlogs = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
    // const baseUrl = "http://localhost:4000";
      const baseUrl = "https://algoacademy.onrender.com";
     
      const url = `${baseUrl}/post/getAll`;
      
      const res = await axios.get(url);
    

      if (res.data.success === true) {
        setPosts(res.data.posts);
        toast.success(res.data.message);
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

  useEffect(() => {
    console.log(posts)
    fetchBlogs()
  }, []);

  return (
    <>
      <ToastContainer />
      <Home
        subheading={"Personal Blogs"}
        para = {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ratione. Sunt error voluptatem, iure quo, at ipsam alias quisquam fuga ex pariatur commodi corporis eos dignissimos. Natus temporibus earum expedita."}
        punch1 = {""}
        punch2 = {""}
        punch3 = {""}
      />
        
      <div className="blogs">
      <h1> Personal Blogs</h1>

        {posts &&
          posts.map((post) => (
            <div className="blog">
              <h1>{post.title}</h1>
              <img src={post.imageUrl} alt="no-image" />
              <p>{post.author}</p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          ))}
      </div>
    </>
  );
};

export default PersonalBlogs;
