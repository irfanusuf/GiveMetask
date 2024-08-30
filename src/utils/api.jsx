
import axios from 'axios'

const api = axios.create({
    baseURL : "https://algoacademy.onrender.com",
    withCredentials : true
})




export default api