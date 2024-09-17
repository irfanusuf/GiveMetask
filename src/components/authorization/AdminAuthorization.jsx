import { useNavigate } from "react-router-dom";
import api from "../utils/AxiosInstance"

const AdminAuthorized = () => {
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
  
      // mechansim shift to cookies
        const res = await api.get(`/token/verify`);
        if (res.data.message === "tokenNotVerfied") {
          navigate("/login");
          return false;
        } else if (res.data.message === "adminVerified!") {
          return true;
        }
    
    } catch (error) {
      console.log(error);
      navigate("/login");
      return false;
    }
  };

  return checkAuth;
};

export default AdminAuthorized;
