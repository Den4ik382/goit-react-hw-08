import { NavLink } from "react-router-dom";

const Navigation = ({ handleCloseMenu }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" onClick={handleCloseMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" onClick={handleCloseMenu}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
