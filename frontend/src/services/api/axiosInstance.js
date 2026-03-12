import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:5000/api",
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }

});

axiosInstance.interceptors.request.use((config)=>{
    return config;
},(error)=>{
    return Promise.reject(error);
});


axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (
            error?.response?.status === 401 && 
            error.config && error.config.url !== "/auth/authUser" &&
            window.location.pathname !== "/signin" && 
            window.location.pathname !== "/signup"
        ) {
            window.location.replace("/");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;