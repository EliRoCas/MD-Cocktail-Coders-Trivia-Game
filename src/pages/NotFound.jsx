import { Link } from "react-router-dom";
import "./notFound.scss";
import drunkOwl from "../assets/drunkOwl.jpg";

const NotFound = () => {
  return (
    <section className="notfound-container">
      <div className="text-notFound">
        <h1>404</h1>
        <h2> ¡Ups! You got lost at the party</h2>
        <p>
          Maybe a couple more drinks and you would have found the correct link. Go back to
          the{" "}
          <Link
            to="/"
            className="home-link"
          >
            Home
          </Link>{" "}
          and keep enjoying. Cheers!🥂
        </p>
      </div>
      <div className="img-notfound">
        <img
          src={drunkOwl}
          alt="drunk old"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default NotFound;
