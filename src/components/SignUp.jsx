import axios from "axios";
import React, { useState } from "react";
import "../styles/signup.scss";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // const formDataArr = new FormData();
  // formDataArr.append("username", username);
  // formDataArr.append("email", email);
  // formDataArr.append("password", password);

  const baseUrl = "http://localhost:4000";
  const handleSignup = async () => {
    try {
      // xml http post request
      const res = await axios.post(`${baseUrl}/user/signup`, {
        username,
        email,
        password,
      });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  };

  function handleClick() {
    handleSignup();
  }

  return (
    <>
      <ToastContainer />
      <div className="signup">
        <h1>Register With Us</h1>

        <form>
          <input
            placeholder="Enter your username "
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            placeholder="Enter your Email "
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            placeholder="Enter your password "
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </form>

        <button onClick={handleClick}> Register</button>
      </div>
    </>
  );
};

export default SignUp;
