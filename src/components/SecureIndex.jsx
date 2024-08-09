import React, { useEffect, useState } from "react";
import "../styles/secure.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Authorized from "../authorization/Authorized";

const SecureIndex = () => {
  Authorized();

  const [user, setUser] = useState("dummy");
  const [email, setEmail] = useState("");
  const baseUrl = "http://localhost:4000";
  const token = localStorage.getItem("token")

  const getUserData = async (token) => {
    try {
      const res = await axios.get(`${baseUrl}/user/getUser/${token}`);
     
      setEmail(res.data.email);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData(token);
  }, [token]);

  return (
    <>
    
        <ToastContainer />
        <div className="secure-index">
          <h1> Welcome {user} to the secure page of this Website </h1>
          <p>You can login by using this email {email}</p>
          <h2>This page is only accesible after a succesful login</h2>
        </div>
   
    </>
  );
};

export default SecureIndex;
