import { useNavigate } from "react-router-dom";
import drunkOwl from "../assets/drunkOwl.jpg";
import Nav from "./nav/Nav";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="headerContainer">
      <img
        className="logo"
        src={drunkOwl}
        alt="logo"
        loading="lazy"
        onClick={handleNavigate}
      />
      <h1 className="pageName" onClick={handleNavigate}>Shots Pal&apos; Desmadre</h1>
      <Nav className="navBar" />
    </div>
  );
};

export default Header;
