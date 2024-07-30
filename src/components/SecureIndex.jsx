import React, { useEffect, useState } from "react";
import "../styles/secure.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Authorized from "../authorization/Authorized";

const SecureIndex = () => {
  Authorized();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const baseUrl = "http://localhost:4000";
  const _id = localStorage.getItem("id");

  const getUserData = async (_id) => {
    try {
      const res = await axios.get(`${baseUrl}/user/userDetails/${_id}`);
      setUser(res.data.getUser.username);
      setEmail(res.data.getUser.email);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData(_id);
  }, [_id]);

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
