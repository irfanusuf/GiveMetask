import React, { useState } from "react";
import "../styles/login.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const formData = { email, password };
  const baseUrl = "http://localhost:4000";

  const LoginHandler = async () => {
    try {
      const res = await axios.post(`${baseUrl}/user/login`, formData);

      if (res.data.message === "user loggin success") {
        toast.success("User Logged In succesfully!");
      } else {
        toast.error(res.data.message);
      }

      const { token } = res.data;

      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  function handleClick() {
    LoginHandler();
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="login">
        <h1> Login to your Account</h1>

        <form>
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

        <button onClick={handleClick}> Login </button>
      </div>
    </>
  );
};

export default Login;
