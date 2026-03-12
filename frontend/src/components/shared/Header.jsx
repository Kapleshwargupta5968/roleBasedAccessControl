import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Header = () => {
  const { user, logout } = useAuth();
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
      { id: 1, name: "Admin Panel", path: "/admindashboard" }
    ],
  };

  return (
    <>
      <header>
        <nav>
          <div>
            <h1>RBAC</h1>
          </div>
          <div>
            <NavLink to="/">Home</NavLink>

            {!user &&
              navLinks.public.map((item) => (
                <NavLink key={item.id} to={item.path}>
                  {item.name}
                </NavLink>
              ))}

            {user &&
              navLinks[user?.role]?.map((item) => (
                <NavLink key={item.id} to={item.path}>
                  {item.name}
                </NavLink>
              ))}

            {user && <button onClick={handleLogout}>Logout</button>}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
