import React, { useState } from "react";
import "./SecureIndex.scss";
// import LiveClass from "./LiveClass";
import { useDispatch } from "../../context/Store";
// import LiveVideo from "./LiveVideo";

// import Authorized from "../authorization/Authorized";

const SecureIndex = () => {

  const { state, dispatch } = useDispatch();
  const { user, theme } = state;

 
  // const checkAuth = Authorized();
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    hasSub: false,
    forgotPassReq: false,
  });


  return (
    <>
      <div className="admin-panel">
       

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

  
      </div>
      {/* <LiveClass/> */}
    </>
  );
};

export default SecureIndex;
