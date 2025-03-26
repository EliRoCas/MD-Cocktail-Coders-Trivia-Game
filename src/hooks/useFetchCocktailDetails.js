import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCocktailDetails } from "../services/slices/cocktailApiSlice";

const useFetchCocktailDetails = (modalOpen, selectedCocktailId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (modalOpen && selectedCocktailId) {
      dispatch(fetchCocktailDetails(selectedCocktailId));
    }
  }, [dispatch, modalOpen, selectedCocktailId]);
};

export default useFetchCocktailDetails;