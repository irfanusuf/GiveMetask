import React, { useState } from "react";
import "./SecureIndex.scss";
import { MyAppContext } from "../../context/Store";
import LiveClass from "./LiveClass";
// import LiveVideo from "./LiveVideo";

// import Authorized from "../authorization/Authorized";

const SecureIndex = () => {


  const { state, dispatch } = MyAppContext();
  const { user, theme } = state;

  const handleLogin = () => {
      dispatch({ type: 'SET_USER', payload: { name: 'John Doe' } });
  };

  const toggleTheme = () => {
      dispatch({ type: 'TOGGLE_THEME' });
  };

 
  // const checkAuth = Authorized();
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    hasSub: false,
    forgotPassReq: false,
  });


  // setUserData()

  // const admin = "irfanusuf33@gmail.com";

  // if (user !== admin)
  //   return (
  //     <div className="secure-index">
  //       <h1>No Acesss!</h1>
  //       <p>Access Denied !</p>
  //       <p> Kindly login With Admin email</p>
  //     </div>
  //   );

 
  return (
    <>
      <div className="admin-panel">
        <h3> Admin : <i>{user && user.name}</i></h3>
        <h3> Theme : <i>{theme && theme}</i></h3>
        <h1> Total users </h1>

        <table>
          <thead>
            <tr>
              <th>Name </th>
              <th>Email </th>
              <th> Have Subscribed</th>
              <th> Forgot pass Requset </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{userdata.name} </td>
              <td>{userdata.email}</td>
              <td>{userdata.hasSub}</td>
              <td>{userdata.forgotPassReq}</td>
            </tr>
          </tbody>
        </table>

    <button onClick={handleLogin}>
      click for test
    </button>

    <button onClick={toggleTheme}>
      click for theme test
    </button>





   

      </div>
      {/* <LiveClass/> */}
    </>
  );
};

export default SecureIndex;
