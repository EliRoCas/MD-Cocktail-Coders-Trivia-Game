import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCocktailsByCategory } from "../services/slices/cocktailApiSlice";

const useFetchCocktails = (selectedCategory, allCategories, categories, visibleCategories, setVisibleCategories) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCategory === allCategories) {
      const initialCategories = categories.slice(1);
      initialCategories.forEach((category) => {
        dispatch(fetchCocktailsByCategory(category));
        setVisibleCategories((prev) => new Set(prev).add(category));
      });
    } else {
      dispatch(fetchCocktailsByCategory(selectedCategory));
    }
  }, [dispatch, selectedCategory, allCategories, categories, setVisibleCategories]);

  useEffect(() => {
    if (selectedCategory !== allCategories) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.dataset.category;
            if (!visibleCategories.has(category)) {
              dispatch(fetchCocktailsByCategory(category));
              setVisibleCategories((prev) => new Set(prev).add(category));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    categories.slice(1).forEach((category) => {
      if (!visibleCategories.has(category)) {
        const element = document.querySelector(`[data-category="${category}"]`);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [dispatch, selectedCategory, allCategories, categories, visibleCategories, setVisibleCategories]);
};

export default useFetchCocktails;