import React, { useEffect, useState } from "react";
import "./SecureIndex.scss";
import { useDispatch } from "../../context/Store";

// import LiveVideo from "./LiveVideo";
// import LiveClass from "./LiveClass";
import AdminAuthorized from "../authorization/AdminAuthorization";
import { getAllUsers } from "../../context/ReducerFunctions";

const SecureIndex = () => {
  const { state ,dispatch} = useDispatch();

  const checkAuth = AdminAuthorized();

  const [isAdmin, setisadmin] = useState(false);




 

  useEffect(() => {
    (async () => {
      const isAuth = await checkAuth();
     setisadmin (isAuth)
    })();

    document.title = "ALGO ACADEMY | admin panel";
  }, [checkAuth]);



  useEffect(()=>{

    if(isAdmin){
      getAllUsers(dispatch)
    }
    
    
  },[dispatch])


  if (isAdmin) {
    return (
      <>
        <div className="admin-panel">
          <h3>Admin : {state.userData.email}</h3>

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
              {state.posts &&
                state.posts.map((post) => (
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
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          {" "}
          You are not Authorised to view this page{" "}
        </h1>
      </div>
    );
  }
};

export default SecureIndex;
