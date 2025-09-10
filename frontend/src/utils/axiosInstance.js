import axios from "axios";
import {Base_url} from "./apiPath";

const axiosInstance =axios.create({
        baseURL:Base_url,
        timeout:10000,
        headers:{
            "content-Type":"application/json",
            Accept:"application/json",
        },
});

axiosInstance.interceptors.request.use(
      (config)=>{
        const accesstoken = localStorage.getItem("token");
        if(accesstoken)
        {
            config.headers.Authorization=`Bearer ${accesstoken}` ;
        }
        return config;
    },
   (error) =>{
        return Promise.reject(error);
   }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors globally
    if (error.response) {
      if (error.response.status === 401) {
        // // Redirect to login page
        // window.location.href = "/login";
         localStorage.removeItem("token");
      } else if (error.response.status === 500) {
        console.error("Server error. Please try again later.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timeout. Please try again.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
