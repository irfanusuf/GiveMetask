import React, { useEffect, useState } from "react";
import "../styles/blogs.scss";
import Authorized from "../authorization/Authorized";
import Loading from "./Loading";
import Home from "./sharedComponents/Home";

const Blogs = () => {


   Authorized()


  const [arr, setArr] = useState([]);
  const [loading , setLoading] =useState(false)
  const url =
    "https://newsapi.org/v2/everything?q=reactjs&from=2024-06-30&sortBy=publishedAt&apiKey=d75ec0f277194bb6aa1b75d1ebeaf603";

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch(url, {
        method: "GET",
      });
      const data = await res.json();
      setArr(data.articles);

      
      console.log(data.articles);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }finally{
      setLoading(false)
    }
  };

    useEffect(() => {
      fetchData();
    }, []);

  return (

    <>
   <Home/>
    <div className="blogs">

            <h1> Latest Blogs</h1>

      {!loading&&arr ? arr.slice(0,50).map((article) => (
        <div className="blog">
          <h1> {article.title}</h1>
          <img src={article.urlToImage} alt="preview" />
          <p>{article.description}</p>
          <a href= {article.url} target="_blank">See more </a>
          <p> Published At : {article.publishedAt} </p>
          <p> Source: {article.source.name} </p>
          
        </div>
      )) : <Loading/>}
    </div>
    </>
  );
};

export default Blogs;
