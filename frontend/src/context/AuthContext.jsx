import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "../services/api/axiosInstance";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axiosInstance.get("/auth/authUser");
        setUser(response?.data?.user);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    verifyUser();
  }, []);

  const logout = async () => {
    try{
      const response = await axiosInstance.post("/auth/logout");
      // setUser(response?.data);
      setUser(null);
      return true;
    }catch(error){
      console.log(error);
    }
  };

  return isLoading && isLoading ? (
    <div className="flex h-screen items-center justify-center">Loading...</div>
  ) : (
    <AuthContext.Provider value={{ user, setUser, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
