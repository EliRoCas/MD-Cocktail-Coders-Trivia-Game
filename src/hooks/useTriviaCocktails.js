import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCocktailsByCategory, fetchCocktailDetails } from "../services/slices/cocktailApiSlice";
import { useSelector } from "react-redux";
import useTriviaAnswers from "../hooks/useTriviaAnswers";

const getRandomCategory = (categories) => {
  return categories[Math.floor(Math.random() * categories.length)];
};

const getRandomCocktail = (cocktails) => {
  if (!cocktails || cocktails.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * cocktails.length);
  return cocktails[randomIndex].idDrink;
};

const useTriviaCocktails = (categories, incorrectNamesList) => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCocktail, setSelectedCocktail] = useState("");
  const { cocktails, cocktailDetails, loading } = useSelector((state) => state.cocktail);
  const { incorrectName, buttonOrder, setupAnswers } = useTriviaAnswers(incorrectNamesList);

  useEffect(() => {
    setSelectedCategory(getRandomCategory(categories));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchCocktailsByCategory(selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (cocktails[selectedCategory]) {
      setSelectedCocktail(getRandomCocktail(cocktails[selectedCategory]));
    }
  }, [cocktails, selectedCategory]);

  useEffect(() => {
    if (selectedCocktail) {
      dispatch(fetchCocktailDetails(selectedCocktail));
    }
  }, [selectedCocktail]);

  useEffect(() => {
    if (cocktailDetails) {
      setupAnswers(cocktailDetails.strDrink);
    }
  }, [cocktailDetails]);

  return { cocktailDetails, loading, incorrectName, buttonOrder };
};

export default useTriviaCocktails;
