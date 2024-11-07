import { useState, useEffect } from "react";
import "./footer.scss";
import Nav from "./nav/Nav";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footerContainer">
      {!isMobile ? (
        <>
          <p className="title">&copy; MD-KeyCode - 2024.</p>
          <p className="groupName">Drunken Developers</p>
          <p className="declaimer">Todos los derechos reservados</p>
        </>
      ) : (
        <Nav />
      )}
    </footer>
  );
};

export default Footer;
