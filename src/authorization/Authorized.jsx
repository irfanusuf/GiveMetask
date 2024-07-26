import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Authorized = () => {
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return navigate("/login");
      }

      if (token) {
        const baseUrl = `http://localhost:4000/token/verify/${token}`;

        const res = await axios.get(baseUrl);

        if (res.data.message === "tokenNotVerfied") {
          return navigate("/login");
        }
     
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);
};

export default Authorized;
