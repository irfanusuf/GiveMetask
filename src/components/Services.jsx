import React, { useEffect, useState, useTransition } from "react";
import "../styles/Services.scss";
import Card from "./sharedComponents/Card";
import Authorized from "../authorization/Authorized";
import Home from "./sharedComponents/Home";

const Services = () => {
  // frontend logic

  const checkAuth = Authorized()

  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [istransit, setTransition] = useTransition();

  const fetchData = async (query) => {
    try {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=80`,
        {
          method: "GET",
          headers: {
            Authorization:
              "A18L6UPAOtZeFZ4vLDzj2fO4wTeto2iIb2aqtyo2EA3agRXRdEN6YFRV",
          },
        }
      );
      const data = await res.json();
      setPhotos(data.photos);
      console.log(data.photos);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    (async () => {
      const isAuth = await checkAuth();
      console.log(isAuth)
      setIsAuthorised(isAuth)
      
    })();
    document.title = "ALGO ACADEMY | SERVICES";
  }, []);

  useEffect(() => {
    if (isAuthorised) {
      fetchData("nature");
    }
  }, [isAuthorised]);

  useEffect(() => {
    if (loading) {
      fetchData(query).then(() => {
        setLoading(false);
      });
    }
  }, [loading, query]);

  return (
    <>
      <Home
        subheading={"Our services"}
        para = {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ratione. Sunt error voluptatem, iure quo, at ipsam alias quisquam fuga ex pariatur commodi corporis eos dignissimos. Natus temporibus earum expedita."}
        punch1 = {""}
        punch2 = {""}
        punch3 = {""}
      />

      <div className="services">
        <h1> My Gallery</h1>

        <div className="input">
          <input
            placeholder="Search"
            value={query}
            onChange={(e) => {
              setTransition(() => {
                setQuery(e.target.value);
              });
            }}
          />

          <button
            onClick={() => {
              setLoading(true);
            }}
          >
            {loading ? "loading......" : "search"}
          </button>
        </div>

        <div className="cards">
          {photos &&
            photos.map((element) => (
              <Card
                id={element.id}
                auth={element.photographer}
                src={element.src.medium}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Services;
