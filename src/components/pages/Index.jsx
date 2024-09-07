import React, { useEffect } from "react";
import Home from "../sharedComponents/Home";
import "./Index.scss";
// import HomeCards from "./sharedComponents/HomeCards";


import WhyAlgo from "../molecules/WhyAlgo";
import Roadway from "../molecules/Roadway";

const Index = () => {
  useEffect(() => {
    document.title = "ALGO ACADEMY | HOME";
  }, []);
  return (
    <>
      <Home
        heading={"Transforming Ambitions"}
        subheading={"Into Achievements!"}
        punch1={"Through Our Tailored IT Courses"}
        punch2={"Guided by Industry Leaders"}
        punch3={"Backed by Real-World Applications"}
        btnName={"view Demo"}
        btnName2={"Get Subscription"}
      />

     <WhyAlgo/>

     <Roadway/>


        
   
    </>
  );
};

export default Index;
