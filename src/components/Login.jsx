import React, { useEffect, useState } from "react";
import "../styles/login.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading , setLoading ] =useState(false)

  const formData = { email, password };
  const baseUrl = "http://localhost:4000";

  const LoginHandler = async () => {
    try {
      setLoading(true)
      const res = await axios.post(`${baseUrl}/user/login`, formData);

      if (res.data.message === "user loggin success") {
        toast.success("User Logged In succesfully!");
        const { token } = res.data;
        localStorage.setItem("token", token);
        navigate("/secureIndex");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    document.title = "ALGO ACADEMY | LOGIN";
  }, []);

  function handleClick() {
    LoginHandler();
  }

  return (
    <>
      <ToastContainer position="top-center" />

      <div className="login">
        <div className="main">
          <h1> Login to your Account</h1>

          <form className="form">
            <input
              placeholder="Enter your Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </form>

          <button onClick={handleClick} className="btn">
          {loading ? "Logging In ...." :  "Login" }
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
