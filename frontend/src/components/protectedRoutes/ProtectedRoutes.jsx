import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, requiredRoles }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  if (requiredRoles && !requiredRoles.includes(user.role)) {
    toast.error("You are not authorized to access this page", {toastId:"unauthorized"});
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoutes;