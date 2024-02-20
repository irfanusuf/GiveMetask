import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import axios from "axios";

const Home = () => {
 

  const [pics, setPics] = useState([]);

 

  const fetchPics = async () => {
    const apiKey = "EbvixQkEPE7kqKI2qHd0ackQCu5roaHHF5jiJvSykgsxxKTcf80F2vKY";
    const response = await axios.get(
      "https://api.pexels.com/v1/curated",

      {
        headers: {
          Authorization: apiKey,
        },
      }
    );

    console.log(response.data.photos);
    setPics(response.data.photos);
  };

  useEffect(() => {
   

    fetchPics();
  }, []);

  return (
    <>
      <h1>Pexels Gallery</h1>
      <div className="home">
        {pics.map((pic) => (
          <div className="card">
            <img src={pic.src.medium} alt="no" />

            <h3>Author:</h3>
            <p>{pic.photographer} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
