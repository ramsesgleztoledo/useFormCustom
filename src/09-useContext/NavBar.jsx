import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
        >
          useContext
        </Link>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
                to="login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
