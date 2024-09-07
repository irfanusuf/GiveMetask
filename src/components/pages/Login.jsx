import React, { useEffect, useState } from "react";
import "./Login.scss";
import api from "../utils/AxiosInstance";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading , setLoading ] =useState(false)

  const formData = { email, password };


  const LoginHandler = async () => {
    try {
      setLoading(true)
    
      const res = await api.post("/user/login" , formData)

      if (res.data.message === "user loggin success") {
        toast.success("User Logged In succesfully!");
        props.setChange(!props.change)
        navigate("/");

        console.log(res)
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
        <div className="container">
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
