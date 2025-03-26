import { useSelector } from "react-redux";

const useCocktails = (selectedCategory, allCategories) => {
  return useSelector((state) => {
    if (selectedCategory === allCategories) {
      return Object.values(state.cocktail.cocktails).flat();
    }
    return state.cocktail.cocktails[selectedCategory] || [];
  });
};

export default useCocktails;