import React, { useEffect } from "react";
import Home from "./sharedComponents/Home";
import "./Index.scss";
// import HomeCards from "./sharedComponents/HomeCards";

import lock from "../assets/lock.svg"

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

        // para = {"At Algo Academy, we see potential in every learner. Our IT training programs are meticulously crafted to elevate your skills and bring your ambitions to life. Whether you're starting from scratch or honing advanced abilities, our expertly designed courses ensure you reach your highest potential. Join us in the journey of turning your aspirations into success."}
      />

     
        <div className="index">
       
          <h1>Why Algo Academy</h1>

          <p>
            we see potential in every learner. Our IT training programs are
            meticulously crafted to elevate your skills and bring your ambitions
            to life. Whether you're starting from scratch or honing advanced
            abilities, our expertly designed courses ensure you reach your
            highest potential. Join us in the journey of turning your
            aspirations into success.
          </p>

          <div className="card-wrapper">
            <div className="why-card">
              <div className="card-img"> <img  src= {lock} alt="pen-image"/></div>
             
              <h3>Unlock Your Potential with Expert IT Training</h3>
              <p>Receive top-notch training from industry experts designed to help you unlock your full potential in the IT field.</p>
            </div>

            <div className="why-card">
            <div className="card-img"> <img  src= {lock} alt="pen-image"/></div>
              <h3>Tailored Programs for Every Stage of Learning</h3>
              <p>Our courses are crafted to cater to learners at every level, ensuring you receive the right training for your current skillset.</p>
            </div>

            <div className="why-card">
            <div className="card-img"> <img  src= {lock} alt="pen-image"/></div>
              <h3>From Basics to Mastery: Your Success is Our Goal</h3>
              <p>Progress from foundational concepts to advanced skills with our comprehensive learning paths, all aimed at your success.</p>
            </div>

            <div className="why-card">
            <div className="card-img"> <img  src= {lock} alt="pen-image"/></div>
              <h3>Expert-Led Courses to Elevate Your Skills</h3>
              <p>Learn from industry leaders who bring real-world experience into the classroom to elevate your IT capabilities.</p>
            </div>

            <div className="why-card">
            <div className="card-img"> <img  src= {lock} alt="pen-image"/></div>
              <h3>Transform Ambitions into Achievements</h3>
              <p>Our programs are designed to help you turn your career goals into reality with practical, hands-on training.</p>
            </div>

            <div className="why-card">
            <div className="card-img"> <img  src= {lock} alt="pen-image"/></div>
              <h3>Join the Journey to IT Excellence</h3>
              <p>Become part of a community focused on achieving IT excellence, with support and guidance at every step.</p>
            </div>
          </div>
        </div>
   
    </>
  );
};

export default Index;
