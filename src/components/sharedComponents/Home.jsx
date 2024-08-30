import React from "react";
import "./Home.scss";
import { ReactTyped as Typed } from "react-typed";

const Home = (props) => {
  const subheading = props.subheading;
  const punch1 = props.punch1;
  const punch2 = props.punch2;
  const punch3 = props.punch3;

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-left">
          <h1>{props.heading}</h1>

          <h2>
            <Typed
              strings={[subheading]}
              typeSpeed={30}
              backSpeed={30}
              backDelay={1000}
              loop={false}
              showCursor={false}
            />
          </h2>

          <h3>
            <Typed
              strings={[punch1, punch2, punch3]}
              typeSpeed={30}
              backSpeed={20}
              backDelay={1000}
              loop={true}
              showCursor={false}
            />
          </h3>

          <p>{props.para}</p>

          <div style={{display : `${props.none}`}}>
            <button className="btn1">{props.btnName}</button>
            <button className="btn2">{props.btnName2}</button>
          </div>
        </div>

        <div className="hero-right"></div>
      </div>
    </div>
  );
};

export default Home;
