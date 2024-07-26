import React from "react";
import { useNavigate } from "react-router-dom";

const IsAuth = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  if (!token || token === "" || token == null || token === undefined) {
    return navigate("/login");
  }
};

export default IsAuth;
