import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { GiGlassCelebration } from "react-icons/gi";
import { RiGlassesLine } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";

import "./nav.scss";

const Nav = ({ className }) => {
  return (
    <div className={`navContainer ${className}`}>
      <nav className="nav">
        <ul className="navList">
          <li>
            <Link to="/" className="navLink">
              <GiGlassCelebration className="navImg" />
              <span className="navText">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/trivia" className="navLink">
              <IoGameController className="navImg" />
              <span className="navText">Shots</span>
            </Link>
          </li>
          <li>
            <Link to="/drunkpedia" className="navLink">
              <RiGlassesLine className="navImg" />
              <span className="navText">Drunkpedia</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  className: propTypes.string,
};

export default Nav;
