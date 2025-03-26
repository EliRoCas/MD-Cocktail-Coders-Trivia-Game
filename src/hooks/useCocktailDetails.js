import { useSelector } from "react-redux";

const useCocktailDetails = () => {
  return useSelector((state) => state.cocktail.cocktailDetails);
};

export default useCocktailDetails;