import React, { useEffect, useState } from "react";
import Home from "./sharedComponents/Home";
import "../styles/p-blogs.scss";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { _id } = useParams();
  const [data, setData] = useState({
    title: "",
    imageUrl: "",
    author: "",
    content: "",
    comments: [],
    likes: [],
    dislike: [],
    share: [],
  });

  const fetchSingleBlog = async () => {
    try {
      //  const baseUrl = "http://localhost:4000";
      const baseUrl = "https://algoacademy.onrender.com";
      const res = await axios.get(`${baseUrl}/post/get/${_id}`);

      setData(res.data.post);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleBlog();
  }, []);

  return (
    <>
      <ToastContainer />
      <Home
        subheading={"Personal Blogs"}
        para={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ratione. Sunt error voluptatem, iure quo, at ipsam alias quisquam fuga ex pariatur commodi corporis eos dignissimos. Natus temporibus earum expedita."
        }
        punch1={""}
        punch2={""}
        punch3={""}
      />

      <div className="title">
        <h1>{data.title}</h1>
        <p>{data.author}</p>
      </div>

      <div
        className="ck-content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </>
  );
};

export default SingleBlog;
