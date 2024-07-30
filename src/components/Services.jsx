import React, { useEffect, useState, useTransition } from "react";
import "../styles/Services.scss";
import Card from "./sharedComponents/Card";
import Authorized from "../authorization/Authorized";
import Home from "./sharedComponents/Home";

const Services = () => {
  // frontend logic

  Authorized();

  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(true);
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
    if (auth) {
      fetchData("nature").then(() => {
        setAuth(false);
      });
    }
  }, [auth]);

  useEffect(() => {
    if (loading) {
      fetchData(query).then(() => {
        setLoading(false);
      });
    }
  }, [loading, query]);

  return (
    <>
    <Home/>
    <div className="services">
      <h1> My Gallery</h1>

      <div className="input">
        {" "}
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
          search
        </button>
      </div>

      <div className="cards">
        {photos.map((element) => (
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
