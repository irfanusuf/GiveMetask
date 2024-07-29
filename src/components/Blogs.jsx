import React, { useEffect, useState } from "react";
import "../styles/blogs.scss";
import Authorized from "../authorization/Authorized";

const Blogs = () => {


   Authorized()


  const [arr, setArr] = useState([]);
  const url =
    "https://newsapi.org/v2/everything?q=india&apiKey=d75ec0f277194bb6aa1b75d1ebeaf603";

  const fetchData = async () => {
    try {
      const res = await fetch(url, {
        method: "GET",
      });
      const data = await res.json();
      setArr(data.articles);
      console.log(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div className="blogs">
            <h1> Latest News</h1>

      {arr.slice(0,50).map((article) => (
        <div className="blog">
          <h1> {article.title}</h1>
          <img src={article.urlToImage} alt="preview" />
          <p>{article.description}</p>
          <a href= {article.url} target="_blank">See more </a>
          <p> Published At : {article.publishedAt} </p>
          <p> Source: {article.source.name} </p>
          
        </div>
      ))}
    </div>
  );
};

export default Blogs;
