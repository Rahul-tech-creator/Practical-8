import { Link, useNavigate } from "react-router-dom";

function Navbar({ onLogout }) {

  const navigate = useNavigate();

  const handleLogout = () => {

    onLogout();

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        Student Portal
      </div>

      <div className="nav-links">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
