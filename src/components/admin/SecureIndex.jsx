import React, { useEffect, useState } from "react";
import "./SecureIndex.scss";
import { useDispatch } from "../../context/Store";
import AdminAuthorized from "../authorization/AdminAuthorization";
import { deletePost, getAllUsers } from "../../context/ReducerFunctions";
import { useNavigate } from "react-router-dom";

const SecureIndex = () => {
  const { state, dispatch } = useDispatch();
  const checkAuth = AdminAuthorized();
  const navigate = useNavigate()
  const [isAdmin, setisadmin] = useState(false);



  useEffect(() => {
    (async () => {
      const isAuth = await checkAuth();
      console.log("isAuth :" + isAuth);
      setisadmin(isAuth);
    })();

    document.title = "ALGO ACADEMY | admin panel";
  }, [checkAuth]);

  
  useEffect(() => {
    if (isAdmin) {
      getAllUsers(dispatch);
    }
  }, [dispatch, isAdmin]);

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
                <th> Email verified</th>
                <th> Forgot pass Requset </th>
              </tr>
            </thead>

            <tbody>
              {state.users.map(({_id, username , email , isEmailVerified}) => (
                <tr key={_id}>
                  <td>{username} </td>
                  <td>{email} </td>
                  <td>false</td>
                  <td>{isEmailVerified ? "true" : "false"} </td>
                  <td>false</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h1> All Posts </h1>


        <button onClick={()=>{navigate("/admin/post")}}>
          Add Post
        </button>
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
                      <button onClick={()=>{navigate(`/admin/editPost/${post._id}`)}}>Edit</button>
                      <button onClick={()=>{deletePost(dispatch,post._id)}}>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

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
