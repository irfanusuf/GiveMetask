import React, { useEffect, useState } from "react";
import Home from "./sharedComponents/Home";
import "./PersonalBlogs.scss";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../utils/AxiosInstance";

const PersonalBlogs = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

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

  useEffect(() => {
    console.log(posts)
    fetchBlogs()
  }, []);

  return (
    <>
      <ToastContainer />
      <Home
        subheading={"Latest Tech Blogs"}
        para = {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ratione. Sunt error voluptatem, iure quo, at ipsam alias quisquam fuga ex pariatur commodi corporis eos dignissimos. Natus temporibus earum expedita."}
        punch1 = {""}
        punch2 = {""}
        punch3 = {""}
      />
        
      <div className="p-blogs"> 

        {posts &&
          posts.map((post) => (
            <div className="blog" onClick={()=>{navigate(`/blogs/${post._id}`)}}>
       
             
              <img src={post.imageUrl} alt="no-image" />
              <h1>{post.title}</h1>
              <p> Blog by : <i>{post.author}</i> </p>
      
            </div>
          ))}
      </div>
    </>
  );
};

export default PersonalBlogs;
