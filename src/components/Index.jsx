import React, { useEffect } from "react";
import Home from "./sharedComponents/Home";
import "./Index.scss";

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

        // para = {"At Algo Academy, we see potential in every learner. Our IT training programs are meticulously crafted to elevate your skills and bring your ambitions to life. Whether you're starting from scratch or honing advanced abilities, our expertly designed courses ensure you reach your highest potential. Join us in the journey of turning your aspirations into success."}
      />

      <div className="index">
        <h1>At Algo Academy</h1>

        <p>
          we see potential in every learner. Our IT training programs are
          meticulously crafted to elevate your skills and bring your ambitions
          to life. Whether you're starting from scratch or honing advanced
          abilities, our expertly designed courses ensure you reach your highest
          potential. Join us in the journey of turning your aspirations into
          success.
        </p>
      </div>

      <div className="index-cards">
        <h3>What We do</h3>

        <p>Punch lines</p>
        <div className="h-cards">
          
          <div className="card">
            <img src="" alt="card-image" />
            <span>Title</span>
            <span>Description</span>
          </div>

          <div className="card">
            <img src="" alt="card-image" />
            <span>Title</span>
            <span>Description</span>
          </div>

          <div className="card">
            <img src="" alt="card-image" />
            <span>Title</span>
            <span>Description</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
