import React, { useEffect, useState } from "react";
import "./SecureIndex.scss";
import { useDispatch } from "../../context/Store";

// import LiveVideo from "./LiveVideo";
// import LiveClass from "./LiveClass";
import Authorized from "../authorization/Authorized";

const SecureIndex = () => {
  const { state} = useDispatch();

  const checkAuth = Authorized()
  
  

  useEffect(() => {
    (async () => {
      const isAuth = await checkAuth();
    
    })();
    document.title = "ALGO ACADEMY | admin panel";
  }, [checkAuth]);





  return (
    <>
      <div className="admin-panel">

        <h3>
                  Admin : {state.userData.email}
        </h3>



<h1> All Users </h1>

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
              <tr key={user._id}>
                <td>{user.username} </td>
                <td>{user.email} </td>
                <td>false</td>
                <td>false</td>
              </tr>
            ))}
          </tbody>
        </table>



<h1> All Posts </h1>

        <table>
          <thead>
            <tr> 
              <th>Name </th>
              <th>Author </th>
              <th> Action</th>
        
            </tr>
          </thead>

          <tbody>
            {state.posts  && state.posts.map((post) => (
              <tr key={post._id}>
                <td>{post.title} </td>
                <td>{post.author} </td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
             
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
