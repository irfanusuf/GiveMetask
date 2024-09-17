
import axios from "axios"

// const baseURL = "https://algoacademy.onrender.com"
 const baseURL = "http://localhost:4000";



const api = axios.create({
    baseURL : baseURL,
    withCredentials :true,
    // withXSRFToken :true

    
})
 


export default api