import {GoogleLogin} from "@react-oauth/google"
import {useAuth} from "../../context/AuthContext"
import axiosInstance from "../../services/api/axiosInstance"
const GoogleLoginButton = () => {
    const {setUser} = useAuth();
    const handleSuccess  = async (credentialResponse) => {
        try{
            const response = await axiosInstance.post("/auth/google", {
                token: credentialResponse.credential
            });
            setUser(response?.data?.user);
        }catch(error){
            console.log(error?.response?.data?.message);
        }
    }
    return(
        <>
        <div className="mt-4 flex justify-center">
            <GoogleLogin
            onSuccess={handleSuccess}
            onError={()=>console.log("Google login failed")}
            />
        </div>
        </>
    )
}

export default GoogleLoginButton