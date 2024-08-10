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
    subheading={"Into Achievements!"}
punch1 = {"Through Our Tailored IT Courses"}
punch2 = {"Guided by Industry Leaders"}
punch3 = {"Backed by Real-World Applications"}
para = {"At Algo Academy, we see potential in every learner. Our IT training programs are meticulously crafted to elevate your skills and bring your ambitions to life. Whether you're starting from scratch or honing advanced abilities, our expertly designed courses ensure you reach your highest potential. Join us in the journey of turning your aspirations into success."}

      />
      
      <div className="index">
        <h1> Index</h1>
      </div>
    </>
  );
};

export default Index;
