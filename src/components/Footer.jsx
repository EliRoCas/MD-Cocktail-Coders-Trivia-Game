import "./footer.scss";
import Nav from "./nav/Nav";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="desktop">
        <p className="title">&copy; MD-KeyCode - 2024.</p>
        <p className="groupName">Drunken Developers</p>
        <p className="declaimer">Todos los derechos reservados</p>
      </div>
      <Nav className="mobile" />
    </footer>
  );
};

export default Footer;
