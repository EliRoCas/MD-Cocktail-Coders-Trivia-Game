import { useState } from "react";

import { Link } from "react-router-dom";
import { GiGlassCelebration } from "react-icons/gi";
import { RiGlassesLine } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";

import "./nav.scss";
import navIcon from "../../assets/menu/navIcon.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navContainer">
      <img
        src={navIcon}
        alt="navigation button"
        className="navActivator"
        onClick={toggleNav}
      />
      <nav className={`nav ${isOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <Link to="/" className="navLink">
              <GiGlassCelebration className="navImg">
                {" "}
                Inicio
              </GiGlassCelebration>
            </Link>
          </li>
          <li>
            <Link to="/trivia" className="navLink">
              <IoGameController className="navImg"> Shots</IoGameController>
            </Link>
          </li>
          <li>
            <Link to="/drunkpedia" className="navLink">
              <RiGlassesLine className="navImg">Drunkpedia</RiGlassesLine>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
