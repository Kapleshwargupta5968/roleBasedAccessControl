import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Header = () => {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      navigate("/", { replace: true });
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const navLinks = {
    public: [
      { id: 1, name: "Login", path: "/signin" },
      { id: 2, name: "Register", path: "/signup" },
    ],
    User: [
      { id: 1, name: "Dashboard", path: "/userdashboard" }
    ],

    Admin: [
      { id: 1, name: "Dashboard", path: "/admindashboard" }
    ],
  };

  return (
    <>
      <header>
        <nav className="flex justify-between items-center p-2 shadow-xl bg-linear-to-br from-gray-100">
          <div>
            <h1>RBAC</h1>
          </div>
          <div className="flex gap-5">
            <NavLink className={({isActive})=>isActive?"text-blue-500":"text-black"} to="/">Home</NavLink>
            {!isLoading && !user &&
              navLinks.public.map((item) => (
                <NavLink className={({isActive})=>isActive?"text-blue-500":"text-black"} key={item.id} to={item.path}>
                  {item.name}
                </NavLink>
              ))}

            {!isLoading && user &&
              navLinks[user?.role]?.map((item) => (
                <NavLink className={({isActive})=>isActive?"text-blue-500":"text-black"} key={item.id} to={item.path}>
                  {item.name}
                </NavLink>
              ))}

            {!isLoading && user && <button onClick={handleLogout}>Logout</button>}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
