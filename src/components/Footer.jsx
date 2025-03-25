import "./footer.scss";
import Nav from "./nav/Nav";
import useIsMobile from "../hooks/useIsMobile";

const Footer = () => {
  const isMobile = useIsMobile();

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
