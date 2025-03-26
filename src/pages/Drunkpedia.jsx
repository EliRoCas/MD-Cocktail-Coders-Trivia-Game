import { useState, useCallback, useEffect } from "react";
import useSelectedCategory from "../hooks/useSelectedCategory";
import useCocktails from "../hooks/useCocktails";
import useCocktailDetails from "../hooks/useCocktailDetails";
import useLoadingStatus from "../hooks/useLoadingStatus";
import useFetchCocktails from "../hooks/useFetchCocktails";
import useFetchCocktailDetails from "../hooks/useFetchCocktailDetails";
import CocktailModal from "../components/CocktailModal";
import "./drunkpedia.scss";

const ALL_CATEGORIES = "All Categories";

const categories = [
  ALL_CATEGORIES,
  "Cocktail",
  "Shot",
  "Beer",
  "Soft Drink",
  "Punch / Party Drink",
  "Ordinary Drink",
];

const Drunkpedia = () => {
  const { selectedCategory, setSelectedCategory } = useSelectedCategory(
    categories[0]
  );
  const [selectedCocktailId, setSelectedCocktailId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(new Set());

  useFetchCocktails(
    ALL_CATEGORIES,
    selectedCategory,
    categories,
    visibleCategories,
    setVisibleCategories
  );
  useFetchCocktailDetails(modalOpen, selectedCocktailId);

  const cocktails = useCocktails(selectedCategory, ALL_CATEGORIES);
  const cocktailDetails = useCocktailDetails();
  const status = useLoadingStatus();

  useEffect(() => {
    document.body.classList.toggle("active-modal", modalOpen);
    return () => document.body.classList.remove("active-modal");
  }, [modalOpen]);

  const handleChangeCategory = useCallback(
    (e) => {
      setSelectedCategory(e.target.value);
    },
    [setSelectedCategory]
  );

  const handleReadMoreClick = useCallback((cocktailId) => {
    setSelectedCocktailId(cocktailId);
    setModalOpen(true);
  }, []);

  const toggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  if (status === "loading") return <p style={{ color: "white" }}>Loading...</p>;
  if (status === "failed")
    return <p style={{ color: "white" }}>Failed to load cocktail API</p>;

  return (
    <div className="drunkpedia">
      <div className="category-select">
        <label htmlFor="category">Choose a category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleChangeCategory}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="cocktails-list">
        {cocktails.map((cocktail) => (
          <div
            className="cocktail-item"
            key={cocktail.idDrink}
            data-category={cocktail.strCategory} // For lazy loading
          >
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              loading="lazy"
            />
            <h2>{cocktail.strDrink}</h2>
            <button
              className="read-more-btn"
              onClick={() => handleReadMoreClick(cocktail.idDrink)}
            >
              Read more
            </button>
          </div>
        ))}
      </div>

      <CocktailModal
        isOpen={modalOpen}
        toggleModal={toggleModal}
        cocktail={cocktailDetails}
      />
    </div>
  );
};

export default Drunkpedia;
