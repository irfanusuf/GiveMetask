import React, { useEffect, useState } from "react";
import "./Carriers.scss";
import Authorized from "../authorization/Authorized";
import Home from "./sharedComponents/Home";

const Carriers = () => {
  // frontend logic

  const checkAuth = Authorized()

  const [isAuthorised, setIsAuthorised] = useState(false);
 

 
  useEffect(() => {
    (async () => {
      const isAuth = await checkAuth();
      console.log("isAuth:" + isAuth)
      setIsAuthorised(isAuth)
      
    })();
    document.title = "ALGO ACADEMY | SERVICES";
  }, []);

  

  return (
    <>
      <Home
        subheading={"Boost Your carrer with us! "}
        para = {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ratione. Sunt error voluptatem, iure quo, at ipsam alias quisquam fuga ex pariatur commodi corporis eos dignissimos. Natus temporibus earum expedita."}
        punch1 = {""}
        punch2 = {""}
        punch3 = {""}
      />

      <div className="services">
        <h1> Join us </h1>

      </div>

     
    </>
  );
};

export default Carriers;
