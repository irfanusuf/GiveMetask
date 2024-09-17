import React, { useEffect, useState } from "react";
import "./Singleblog.scss";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import api from "../utils/AxiosInstance";

const SingleBlog = ({userid}) => {
  const { _id } = useParams();


  const [data, setData] = useState({
    title: "",
    imageUrl: "",
    author: "",
    content: "",
    likes : []
  });
  

  const fetchSingleBlog = async () => {
    try {
      const res = await api.get(`/post/get/${_id}`);
      setData(res.data.post);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleLike = async () => {
    try {
      
      await api.put(`/post/pushLike/${_id}`);
      fetchSingleBlog()
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSingleBlog();
  },[]);

  return (
    <>
      <ToastContainer />

      <div className="title">
        <h1>{data.title}</h1>
        <p>
          <b>Author :</b> <i>{data.author}</i>
        </p>
      </div>

      <div
        className="ck-content main-content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />

      <div className="interactivity">
        <div className="icons">
          <span onClick={handleLike}>
            {data &&
            data.likes.findIndex(
              (element) => element.user.toString() === userid
            ) > -1 ? (
              <FaHeart style={{ color: "red" }} />
            ) : (
              <FaHeart />
            )}
          </span>

          <span>
            <FaComments />
          </span>
          <span>
            <CiShare2 />
          </span>
        </div>

        <div className="icons-count">
          <span>{data.likes.length}</span>
          <span>{data.likes.length}</span>
          <span>{data.likes.length}</span>
        </div>
      </div>

      <div className="comment-section">

        <div className="comment-input">
          <input placeholder=" Comment..." />

          <button> Comment </button>
        </div>

        <h1> Comments </h1>

        <div className="comments">
          <h3> No Comments yet </h3>
        </div>

      </div>
    </>
  );
};

export default SingleBlog;
