import { Link } from "react-router-dom";
import "./notFound.scss";
import drunkOwl from "../assets/drunkOwl.jpg";

const NotFound = () => {
  return (
    <section className="notfound-container">
      <div className="text-notFound">
        <h1>404</h1>
        <h2> ¡Ups! Te has perdido en la fiesta</h2>
        <p>
          Tal vez un par de tragos más y habrías encontrado el enlace correcto.
          Vuelve al{" "}
          <Link to="/" className="home-link">
            inicio
          </Link>{" "}
          y sigue disfrutando. ¡Salud!🥂
        </p>
      </div>
      <div className="img-notfound">
        <img src={drunkOwl} alt="drunk old" loading="lazy" />
      </div>
    </section>
  );
};

export default NotFound;
