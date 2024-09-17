import React, { useEffect } from "react";
import "./SecureIndex.scss";
// import LiveClass from "./LiveClass";
import { useDispatch } from "../../context/Store";
import { getAllUsers } from "../../context/ReducerFunctions";
// import LiveVideo from "./LiveVideo";

// import Authorized from "../authorization/Authorized";

const SecureIndex = () => {
  const { state, dispatch } = useDispatch();

  useEffect(() => {
    getAllUsers(dispatch);
  }, [dispatch]);

  // const checkAuth = Authorized();

  return (
    <>
      <div className="admin-panel">
        Admin : {state.userData.email}
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
            {state.users.map((user) => (
              <tr>
                <td>{user.username} </td>
                <td>{user.email} </td>
                <td>false</td>
                <td>false</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <LiveClass/> */}
    </>
  );
};

export default SecureIndex;
