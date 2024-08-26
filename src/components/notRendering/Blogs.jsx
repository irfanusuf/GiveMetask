import React, { useEffect, useState } from "react";
import "./blogs.scss";
import Authorized from "../authorization/Authorized";
import Loading from "./sharedComponents/Loading";
import Home from "./sharedComponents/Home";

const Blogs = () => {
  const checkAuth = Authorized(); // when u call Authorized it returns checkAuth function
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuthorised, setIsAuthorised] = useState(false);

  const url =
    "https://newsapi.org/v2/everything?q=reactjs&from=2024-07-15&sortBy=publishedAt&apiKey=d75ec0f277194bb6aa1b75d1ebeaf603";

  const fetchData = async () => {
    try {
      setLoading(false);
      const res = await fetch(url, {
        method: "GET",
      });
      const data = await res.json();
      setArr(data.articles);

      console.log(data.articles);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    (async () => {
      const isAuth = await checkAuth();
      console.log(isAuth);
      setIsAuthorised(isAuth)
    })();
    if(isAuthorised){
      fetchData();
    }
    document.title = "ALGO ACADEMY | BLOGS";
  }, [isAuthorised]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Home
        subheading={"Our Latest Tech Blogs"}
        para = {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ratione. Sunt error voluptatem, iure quo, at ipsam alias quisquam fuga ex pariatur commodi corporis eos dignissimos. Natus temporibus earum expedita."}
        punch1 = {""}
        punch2 = {""}
        punch3 = {""}
      />
      <div className="blogs">
        <h1> Latest Blogs</h1>

        {loading && arr ? (
          arr.slice(0, 50).map((article) => (
            <div className="blog">
              <h1> {article.title}</h1>
              <img src={article.urlToImage} alt="preview" />
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noreferrer">
                See more{" "}
              </a>
              <p> Published At : {article.publishedAt} </p>
              <p> Source: {article.source.name} </p>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Blogs;
