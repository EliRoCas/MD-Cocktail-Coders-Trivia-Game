import "./header.scss";
import drunkOwl from "../assets/drunkOwl.jpg";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <div className="headerContainer">
      <img className="logo" src={drunkOwl} alt="logo" loading="lazy" />
      <h1 className="pageName">Shots Pal&apos; Desmadre</h1>
      <Nav className="navBar" />
    </div>
  );
};

export default Header;
