import React, { useEffect, useState } from "react";
import "../styles/secure.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


const SecureIndex =  () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");


  const getUserData = async () => {
    const baseUrl = "http://localhost:4000";
    const _id = "66a1e9ffb2b04f9e4af54c16";
    try {
      const res = await axios.get(`${baseUrl}/user/userDetails/${_id}`);
      setUser(res.data.getUser.username);
      setEmail(res.data.getUser.email);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {

    getUserData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="secure-index">
        <h1> Welcome {user} to the secure page of this Website </h1>
        <p>u can login by using this email {email}</p>
        <h2>this page is only accesible after a succesful login</h2>
      </div>
    </>
  );
};

export default SecureIndex;
