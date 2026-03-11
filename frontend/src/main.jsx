import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Signin from './pages/Login/Signin.jsx'
import Signup from './pages/Register/Signup.jsx'
import About from './pages/About/About.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './context/AuthContext.jsx';
import AdminDashboard from './pages/Admin/AdminDashboard.jsx'
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes.jsx'
import UserDashboard from './pages/Dashboard/UserDashboard.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index:true,
        element: <Home/>,
      },
      {
        path: "/signin",
        element: <Signin/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path:"/admindashboard",
        element:<ProtectedRoutes requiredRoles={["Admin"]}>
          <AdminDashboard/>
        </ProtectedRoutes>
      },
      {
        path:"/userdashboard",
        element:<ProtectedRoutes requiredRoles={["User"]}>
          <UserDashboard/>
        </ProtectedRoutes>
      }
      
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <AuthProvider>
      <ToastContainer/>
      <RouterProvider router={router} />
    </AuthProvider>
  </GoogleOAuthProvider>
)