import "./Navbar.scss";
import { useState } from "react";

function Navbar() {
  const [isActive, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="brand-title"></div>
      <div className="toggle-button" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={isActive ? "active navbar-links" : "navbar-links"}>
        <ul>
          <li>
            <a href="#experience"><span>01.</span> Experience</a>
          </li>
          <li>
            <a href="#projects"><span>02.</span> Projects</a>
          </li>

          <li>
            <a href="#contact"><span>03.</span> Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
