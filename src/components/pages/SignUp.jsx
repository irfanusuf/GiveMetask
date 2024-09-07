import React, { useEffect, useState } from "react";
import "./SignUp.scss";
import { ToastContainer, toast } from "react-toastify";
import api from "../utils/AxiosInstance";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const formDataArr = new FormData();
  // formDataArr.append("username", username);
  // formDataArr.append("email", email);
  // formDataArr.append("password", password);

  useEffect(() => {
    document.title = "ALGO ACADEMY | REGISTER";
  }, []);

  const handleSignup = async () => {
    try {
      // xml http post request
      setLoading(true);
      const res = await api.post(`/user/signup`, {
        username,
        email,
        password,
      });

      if (res.data.message === "User Saved Succesfully") {
        toast.success("User Saved Succesfully!");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  function handleClick() {
    handleSignup();
  }

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="signup">
        <div className="container">
          <h1>Register With Us</h1>
          <form className="form">
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

          <button onClick={handleClick} className="btn">
            {loading ? "Registering...." : "Register"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
