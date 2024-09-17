import React, { useEffect } from "react";
import "./Carriers.scss";
import Home from "../sharedComponents/Home";

const Carriers = () => {
  // frontend logic

  useEffect(() => {
    document.title = "ALGO ACADEMY | Carrers";
  }, []);

  return (
    <>
      <Home
        subheading={"Boost Your carrer with us! "}
        para={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ratione. Sunt error voluptatem, iure quo, at ipsam alias quisquam fuga ex pariatur commodi corporis eos dignissimos. Natus temporibus earum expedita."
        }
        punch1={""}
        punch2={""}
        punch3={""}
      />

      <div className="services">
        <h1> Join us </h1>
      </div>
    </>
  );
};

export default Carriers;
