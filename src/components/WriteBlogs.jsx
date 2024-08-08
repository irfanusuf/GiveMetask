import React, { useState } from "react";
import "../styles/WriteBlogs.scss";
import axios from "axios";

const WriteBlogs = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

//   const formData = { title, image, description };

const formData = new FormData()

formData.append("title" , title)
formData.append("image" , image)
formData.append("description" , description)



  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const baseUrl = "http://localhost:4000";
      const token = localStorage.getItem("token");
      const url = `${baseUrl}/post/createPost/${token}`;
      const res = await axios.post(url, formData);
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="create-blog">
        <form>
          <h1>WriteBlogs </h1>
          <input
            placeholder="Enter Your title "
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="file"
            placeholder="Choose Your image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <textarea
            placeholder="Enter Your Description "
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          >
            {" "}
          </textarea>

          <button onClick={handleClick}>Post</button>
        </form>
      </div>
    </div>
  );
};

export default WriteBlogs;
