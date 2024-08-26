import React, { useEffect, useState } from "react";
import Home from "./sharedComponents/Home";
import "./Singleblog.scss";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import api from "../utils/AxiosInstance";

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
  const [like, setLike] = useState(false);

  const fetchSingleBlog = async () => {
    try {
    
      const res = await api.get(`/post/get/${_id}`);
      setData(res.data.post);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleLike = async ()=>{

    try {
      setLike(!like)
      
      const res = await api.put(`/post/pushLike/${_id}`)
      console.log(res)


    } catch (error) {
      console.log(error)
    }
    
  }

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
        <p>
          <b>Author :</b> <i>{data.author}</i>
        </p>
      </div>

      <div
        className="ck-content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />

      <div className="interactivity">
       <span onClick={handleLike}>{like ? <FaHeart style={{ color: "red" }} /> : <FaHeart />}</span> 

        <span>{data.likes.length}</span>

        <span>
          <FaComments />
        </span>
        <span>
          <CiShare2 />
        </span>
      </div>
    </>
  );
};

export default SingleBlog;
