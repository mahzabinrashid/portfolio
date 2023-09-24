import React, { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [isActive, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!isActive);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
      if (isActive) {
        setActive(false);
      }
    }
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
            {/* eslint-disable-next-line */}
            <a onClick={() => scrollToSection("experience")}>
              <span>01.</span> Experience
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a onClick={() => scrollToSection("projects")}>
              <span>02.</span> Projects
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a onClick={() => scrollToSection("contact")}>
              <span>03.</span> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
