
import { Link } from "react-router-dom";
import { GiGlassCelebration } from "react-icons/gi";
import { RiGlassesLine } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";

import "./nav.scss";

const Nav = () => {
  

  return (
    <div className="navContainer">
     
        <nav className="navDesktop">
          <ul className="navDesktopList" >
            <li>
              <Link to="/" className="navLink">
                <GiGlassCelebration className="navDesktopImg" />
                <span className="navDesktopText">Inicio</span>
              </Link>
            </li>
            <li>
              <Link to="/trivia" className="navLink">
                <IoGameController className="navDesktopImg" />
                <span className="navDesktopText">Shots</span>
              </Link>
            </li>
            <li>
              <Link to="/drunkpedia" className="navLink">
                <RiGlassesLine className="navDesktopImg" />
                <span className="navDesktopText">Drunkpedia</span>
              </Link>
            </li>
          </ul>
        </nav>
  
    </div>
  );
};

export default Nav;
