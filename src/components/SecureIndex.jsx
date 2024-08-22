import React from "react";
import "../styles/secure.scss";
import Authorized from "../authorization/Authorized";

const SecureIndex = () => {
  Authorized();


  return (
    <>
    
        <div className="secure-index">
          <h1> Welcome to the secure page of this Website </h1>
          <p>only admin can view this page </p>
          <h2>This page is only accesible after a succesful admin login</h2>
        </div>
   
    </>
  );
};

export default SecureIndex;
