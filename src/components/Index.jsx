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
        para = {"With Our IT Trainings"}
        smallpara = {"At Algo Academy, we believe that every ambition holds the potential to become a remarkable achievement. Our IT training programs are designed to bridge the gap between where you are and where you aspire to be. Whether you're looking to master the fundamentals or advance your expertise, our comprehensive courses empower you to turn your goals into reality. Join us, and let's transform your ambitions into achievements together."}
      />
      
      <div className="index">
        <h1> Index</h1>
      </div>
    </>
  );
};

export default Index;
