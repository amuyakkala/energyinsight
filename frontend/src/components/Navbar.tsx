import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="text-xl font-bold">
        <Link to="/">Energy Dashboard</Link>
      </div>
      <div className="space-x-4">
        {token ? (
          <>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <button onClick={handleLogout} className="text-red-500">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
