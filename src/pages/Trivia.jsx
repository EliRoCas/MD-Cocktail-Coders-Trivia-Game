import imgTest from "../assets/cocktail-trivia-1.jpg";
const Trivia = () => {
  return (
    <div className="gameCard">
      <h2>Piensa o... ¡Shot!</h2>
      <section>
        <img
          src={imgTest}
          alt="cocktail image reference"
          className="cocktailImage"
        />
        <p className="hints">Category: </p>
        <p className="hints">Ingredients: </p>
      </section>
      <div>
        <button>True</button>
        <button>False</button>
      </div>
    </div>
  );
};

export default Trivia;
