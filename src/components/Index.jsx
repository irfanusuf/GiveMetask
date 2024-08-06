import React, { useEffect } from "react";
import Home from "./sharedComponents/Home";
import "../styles/index.scss";

const Index = () => {

  useEffect(() => {
    document.title = "ALGO ACADEMY | HOME";
  }, []);
  return (
    <>
      <Home
        heading={"Transforming Ambitions"}
        subheading={"Into Achievements"}
        para = {"With Cutting-Edge IT Training"}
      />
      
      <div className="index">
        <h1> Index</h1>
      </div>
    </>
  );
};

export default Index;
