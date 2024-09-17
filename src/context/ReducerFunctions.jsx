import api from "../components/utils/AxiosInstance";

export const getUser = async (dispatch) => {
  dispatch({ type: "DATA_REQUEST" });
  try {
    const res = await api.get(`/user/getUser`);
    dispatch({ type: "USER_DATA", payload: res.data });
  } catch (error) {
    dispatch({ type: "DATA_FAILURE", payload: error.message });
  }
};




export const getAllUsers = async (dispatch) => {
  dispatch({ type: "DATA_REQUEST" });
  try {
    const res = await api.get(`/user/getAllUsers`);
    dispatch({ type: "ALL_USERS_DATA", payload: res.data.users });
  } catch (error) {
    dispatch({ type: "DATA_FAILURE", payload: error.message });
  }
};





export const getAllPosts = async (dispatch) => {
  dispatch({ type: "DATA_REQUEST" });
  try {
    const res = await api.get(`/post/getAll`);
    dispatch({ type: "ALL_POSTS_DATA", payload: res.data.posts });
  } catch (error) {
    dispatch({ type: "DATA_FAILURE", payload: error.message });
  }
};



export const getPost = async (dispatch , postId)=>{
  dispatch({ type: "DATA_REQUEST" });
  try {
    const res = await api.get(`post/get/${postId}`)
    dispatch({ type: "POST_DATA", payload: res.data.post});
  } catch (error) {
    dispatch({ type: "DATA_FAILURE", payload: error.message });
  }
}



export const deletePost =async (dispatch ,postId) =>{
  dispatch({ type: "DATA_REQUEST" });
  try {
    const res = await api.delete(`post/delete/${postId}`)
    dispatch({ type: "POST_DATA_RELOAD", payload: res.data.message});
  } catch (error) {
    dispatch({ type: "DATA_FAILURE", payload: error.message });
  }
} 