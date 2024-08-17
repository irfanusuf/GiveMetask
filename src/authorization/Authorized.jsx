import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Authorized = () => {
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return false;
      }

      if (token) {
        // const baseUrl = "http://localhost:4000";
        const baseUrl = "https://algoacademy.onrender.com";
        const res = await axios.get(`${baseUrl}/token/verify/${token}`);
        if (res.data.message === "tokenNotVerfied") {
          navigate("/login");
          return false;
        } else if (res.data.message === "verified") {
          return true;
        }
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
      return false;
    }
  };

  return checkAuth;
};

export default Authorized;
