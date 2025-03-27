import { useDispatch } from "react-redux";
import {
  fetchCocktailsByCategory,
  fetchCocktailDetails,
} from "../services/slices/cocktailApiSlice";

const useTriviaCocktails = (categories, dispatch) => {
  const dispatch = useDispatch();

  const getRandomCategory = () => {
    return categories[Math.floor(Math.random() * categories.length)];
  };

  const getRandomCocktail = (cocktails) => {
    if (!cocktails || cocktails.length === 0) return null;
    const ramdonIndex = Math.floor(Math.random() * cocktails.length);
    return cocktails[ramdonIndex].idDrink;
  };

  const fetchRandomCategory = () => {
    const randomCategory = getRandomCategory();
    dispatch(fetchCocktailsByCategory(randomCategory));
    return randomCategory;
  };

  const fetchRandomCocktailDetails = (cocktails) => {
    const cocktailId = getRandomCocktail(cocktails);
    if (cocktailId) {
      dispatch(fetchCocktailDetails(cocktailId));
    }
    return cocktailId;
  };

  return { fetchRandomCategory, fetchRandomCocktailDetails, getRandomCocktail };
};

export default useTriviaCocktails;
