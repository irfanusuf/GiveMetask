import React, { useEffect, useState } from "react";
import "../styles/secure.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Authorized from "../authorization/Authorized";


const SecureIndex =  () => {



  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
 
  const _id = localStorage.getItem("id");

  const getUserData = async (_id) => {

    try {
      const baseUrl = "http://localhost:4000";
      const res = await axios.get(`${baseUrl}/user/userDetails/${_id}`);
      setUser(res.data.getUser.username);
      setEmail(res.data.getUser.email);
     
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getUserData();
  // }, [ ]);

  return (
    <>
      <ToastContainer />
      <div className="secure-index">
        <h1> Welcome  to the secure page of this Website </h1>
        <p>u can login by using this email </p>
        <h2>this page is only accesible after a succesful login</h2>
      </div>
    </>
  );
};

export default SecureIndex;
