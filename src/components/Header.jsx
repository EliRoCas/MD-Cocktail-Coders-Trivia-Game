import "./header.scss";
import logo from "../assets/menu/DrunkOwl.jpg";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <div className="headerContainer">
      <Nav />
      {/* <img className="logo" src={logo} alt="logo" /> */}
      <h1 className="pageName">Shots Pal' Desmadre</h1>
    </div>
  );
};

export default Header;
