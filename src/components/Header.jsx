import { useState, useEffect } from "react";
import "./header.scss";
import Nav from "./nav/Nav";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="headerContainer">
      <img className="logo" src="./DrunkOwl.jpg" alt="logo" />
      <h1 className="pageName">Shots Pal' Desmadre</h1>
      {!isMobile && <Nav className="navBar" />}
    </div>
  );
};

export default Header;
