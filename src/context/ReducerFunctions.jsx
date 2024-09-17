import { toast } from "react-toastify";
import api from "../components/utils/AxiosInstance";

export const getUser = async (dispatch) => {
  dispatch({ type: "DATA_REQUEST" });

  try {
    const res = await api.get(`/user/getUser`);

    console.log(res.data);
    dispatch({ type: "USER_DATA", payload: res.data });
  } catch (error) {
    dispatch({ type: "DATA_FAILURE", payload: error.message });
  }
};

export const getAllUsers = async (dispatch) => {
  dispatch({ type: "DATA_REQUEST" });

  try {
    const res = await api.get(`/user/getAllUsers`);

    console.log(res.data);
    dispatch({ type: "ALL_USERS_DATA", payload: res.data.users });
  } catch (error) {
    dispatch({ type: "DATA_FAILURE", payload: error.message });
  }
};


export const getAllPosts = async (dispatch) => {
    dispatch({ type: "DATA_REQUEST" });
    try {
      const res = await api.get(`/post/getAll`);
  
      console.log(res.data);
      dispatch({ type: "ALL_POSTS_DATA", payload: res.data.posts });
      toast.success(res.data.message)
    } catch (error) {
      dispatch({ type: "DATA_FAILURE", payload: error.message });
    }
  };
  