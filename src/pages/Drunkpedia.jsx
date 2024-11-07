import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktailsByCategory, fetchCocktailDetails } from "../services/slices/cocktailApiSlice";
import CocktailModal from "../components/CocktailModal";
import "./drunkpedia.scss";  

const categories = ["All Categories", "Cocktail", "Shot", "Beer", "Soft Drink", "Punch / Party Drink", "Ordinary Drink"]; 

const Drunkpedia = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); 
  const [selectedCocktailId, setSelectedCocktailId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  if(modalOpen) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const cocktails = useSelector((state) => {
    if (selectedCategory === "All Categories") {
      return Object.values(state.cocktail.cocktails).flat();
    }
    return state.cocktail.cocktails[selectedCategory] || [];
  }); 

  const cocktailDetails = useSelector((state) => state.cocktail.cocktailDetails); 
  const status = useSelector((state) => state.cocktail.loading);

  useEffect(() => {
    if (selectedCategory === "All Categories") {
      categories.slice(1).forEach(category => {
        dispatch(fetchCocktailsByCategory(category));
      });
    } else {
      dispatch(fetchCocktailsByCategory(selectedCategory));
    }
  }, [dispatch, selectedCategory]);

  useEffect(() => { 
    if (selectedCocktailId) { 
      dispatch(fetchCocktailDetails(selectedCocktailId)); 
    } 
  }, [dispatch, selectedCocktailId]); 

  const handleChangeCategory = (e) => { 
    setSelectedCategory(e.target.value); 
  };

  const handleReadMoreClick = (cocktailId) => {
    setSelectedCocktailId(cocktailId);
    setModalOpen(true);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  if (status === "loading") return <p style={{ color: "white" }}>Loading...</p>;
  if (status === "failed") return <p style={{ color: "white" }}>Failed to load cocktail API</p>;

  return (
    <div className="drunkpedia">
      <div className="category-select">
        <label htmlFor="category">Choose a category: </label>
        <select id="category" value={selectedCategory} onChange={handleChangeCategory}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="cocktails-list">
        {cocktails && cocktails.map((cocktail) => (
          <div className="cocktail-item" key={cocktail.idDrink}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h2>{cocktail.strDrink}</h2>
            <button className="read-more-btn desktop-only" onClick={() => handleReadMoreClick(cocktail.idDrink)}>Read more</button>
          </div>
        ))}
      </div>
      <CocktailModal 
        isOpen={modalOpen}
        toggleModal={toggleModal}
        cocktail={cocktailDetails}
        className="desktop-only"
      />
    </div>
  );
};

export default Drunkpedia;
