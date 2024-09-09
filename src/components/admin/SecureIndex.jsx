import React from "react";
import "./SecureIndex.scss";
// import Authorized from "../authorization/Authorized";

const SecureIndex = ({ user }) => {
  // const checkAuth = Authorized();

  const admin = "irfanusuf33@gmail.com";

  if (user !== admin)
    return (
      <div className="secure-index">
        <h1>No Acesss!</h1>
        <p>Access Denied !</p>
        <p> Kindly login With Admin email</p>
      </div>
    );

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
