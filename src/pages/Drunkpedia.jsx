import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktailsByCategory, fetchCocktailDetails } from "../services/cocktailApiSlice";
import { useDisclosure } from "@nextui-org/react";
import CocktailModal from "../components/CocktailModal";
import "./drunkpedia.scss";  

const categories = ["All Categories", "Cocktail", "Shot", "Beer"]; // Añadido "All Categories"

const Drunkpedia = () => {
   const dispatch = useDispatch();
   const [selectedCategory, setSelectedCategory] = useState(categories[0]); 
   const [selectedCocktailId, setSelectedCocktailId] = useState(null); 
   const cocktails = useSelector((state) => {
     if (selectedCategory === "All Categories") {
       return Object.values(state.cocktail.cocktails).flat();
     }
     return state.cocktail.cocktails[selectedCategory] || [];
   }); 
   const cocktailDetails = useSelector((state) => state.cocktail.cocktailDetails); 
   const status = useSelector((state) => state.cocktail.loading); 
   const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
        onOpen(); 
    } 
    }, [dispatch, selectedCocktailId, onOpen]); 
    
    const handleChangeCategory = (e) => { 
        setSelectedCategory(e.target.value); 
    };

   if (status === "loading") return <p>Loading...</p>;
   if (status === "failed") return <p>Failed to load cocktail API</p>;

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
                    <div className="cocktail-item" key={cocktail.idDrink} onClick={() => setSelectedCocktailId(cocktail.idDrink)}>
                        <img
                            src={cocktail.strDrinkThumb}
                            alt={cocktail.strDrink}
                        />
                        <h2>{cocktail.strDrink}</h2>
                    </div>
                ))}
            </div>
            <CocktailModal 
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                cocktail={cocktailDetails}
            />
        </div>
    );
};

export default Drunkpedia;
