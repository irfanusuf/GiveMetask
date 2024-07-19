import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("shoaib");
  const [email, setEmail] = useState("shoaib@gmail.com");
  const [password, setPassword] = useState("12345");

  //
  const formDataArr = new FormData();

  formDataArr.append("username", username);
  formDataArr.append("email", email);
  formDataArr.append("password", password);

  const baseUrl = "http://localhost:5000";

  const handleSignup = async () => {
    try {
      // xml http post request
      const res = await axios.post(`${baseUrl}/user/signup`, formDataArr);
      console.log(res.message)


    } catch (error) {
      console.log(error);
    }
  };


function handleClick (){

    handleSignup()

}



  return <div>SignUp


<button onClick={handleClick}> SignuP</button>

  </div>;
};

export default SignUp;
