// import { useState } from "react";
// import { useDisclosure } from "@nextui-org/react";
import CocktailCard from "../components/CocktailCard";
// import CocktailModal from "../components/CocktailModal";


const Drunkpedia = () => {
    const cocktails = [
    {
        idDrink: "11007",
        strDrink: "Margarita",
        strTags: "IBA,ContemporaryClassic",
        strCategory: "Ordinary Drink",
        strIBA: "Contemporary Classics",
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
        strInstructionsDE: "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
        strInstructionsIT: "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale. Avere cura di inumidire solo il bordo esterno e cospargere di sale. Il sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail. Shakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        strIngredient1: "Tequila",
        strIngredient2: "Triple sec",
        strIngredient3: "Lime juice",
        strIngredient4: "Salt",
        strMeasure1: "1 1/2 oz ",
        strMeasure2: "1/2 oz ",
        strMeasure3: "1 oz ",
        strImageSource: "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
        strImageAttribution: "Cocktailmarler",
        strCreativeCommonsConfirmed: "Yes",
        dateModified: "2015-08-18 14:42:59"
    },
    {
        idDrink: "11118",
        strDrink: "Blue Margarita",
        strCategory: "Ordinary Drink",
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions: "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
        strInstructionsDE: "Den Rand des Cocktailglases mit Limettensaft einreiben. Den Rand in grobes Salz tauchen. Tequila, blauen Curacao und Limettensaft mit Eis schütteln, in das mit Salz umhüllte Glas abseihen und servieren.",
        strInstructionsIT: "Strofinare il bordo del bicchiere da cocktail con succo di lime. Immergere il bordo nel sale grosso. Shakerare tequila, blue curacao e succo di lime con ghiaccio, filtrare nel bicchiere bordato di sale e servire.",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
        strIngredient1: "Tequila",
        strIngredient2: "Blue Curacao",
        strIngredient3: "Lime juice",
        strIngredient4: "Salt",
        strMeasure1: "1 1/2 oz ",
        strMeasure2: "1 oz ",
        strMeasure3: "1 oz ",
        strMeasure4: "Coarse ",
        strCreativeCommonsConfirmed: "Yes",
        dateModified: "2015-08-18 14:51:53"
    },
    {
        idDrink: "17216",
        strDrink: "Tommy's Margarita",
        strTags: "IBA,NewEra",
        strCategory: "Ordinary Drink",
        strIBA: "New Era Drinks",
        strAlcoholic: "Alcoholic",
        strGlass: "Old-Fashioned glass",
        strInstructions: "Shake and strain into a chilled cocktail glass.",
        strInstructionsDE: "Schütteln und in ein gekühltes Cocktailglas abseihen.",
        strInstructionsIT: "Shakerare e filtrare in una coppetta da cocktail ghiacciata.",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
        strIngredient1: "Tequila",
        strIngredient2: "Lime Juice",
        strIngredient3: "Agave syrup",
        strMeasure1: "4.5 cl",
        strMeasure2: "1.5 cl",
        strMeasure3: "2 spoons",
        strCreativeCommonsConfirmed: "No",
        dateModified: "2017-09-02 18:37:54"
    },
    {
        idDrink: "16158",
        strDrink: "Whitecap Margarita",
        strCategory: "Other / Unknown",
        strAlcoholic: "Alcoholic",
        strGlass: "Margarita/Coupette glass",
        strInstructions: "Place all ingredients in a blender and blend until smooth. This makes one drink.",
        strInstructionsDE: "Alle Zutaten in einen Mixer geben und mischen.",
        strInstructionsIT: "Metti tutti gli ingredienti in un frullatore e frulla fino a che non diventa liscio.",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
        strIngredient1: "Ice",
        strIngredient2: "Tequila",
        strIngredient3: "Cream of coconut",
        strIngredient4: "Lime juice",
        strMeasure1: "1 cup ",
        strMeasure2: "2 oz ",
        strMeasure3: "1/4 cup ",
        strMeasure4: "3 tblsp fresh ",
        strCreativeCommonsConfirmed: "No",
        dateModified: "2015-09-02 17:00:22"
    }
];

    // const [selectedCocktail, setSelectedCocktail] = useState(null);
    // const { isOpen, onOpen, onClose } = useDisclosure();

    // const handleCardClick = (cocktail) => {
    //     setSelectedCocktail(cocktail);
    //     onOpen();
    // };

    // const handleCloseModal = () => {
    //     setSelectedCocktail(null);
    //     onClose();
    // };

    return (
        <main className="drunkpedia">
            <h1>Drunkpedia</h1>
            <p>Descubre todo lo que necesitas saber sobre tus cocteles favoritos aquí en Drunkpedia. Explora una colección de cocteles con nombres y fotos, y profundiza en sus ingredientes, modos de preparación y datos curiosos. Perfecto para cuando quieras impresionar a tus amigos con tus conocimientos mientras juegas a nuestra divertida trivia de bebidas.</p>
            <section className="cocktail-list">
                {cocktails.map(cocktail => (
                    <CocktailCard
                        key={cocktail.idDrink}
                        cocktail={cocktail}
                        // onClick={() => handleCardClick(cocktail)}
                    />
                ))}
            </section>
            {/* {selectedCocktail && (
                <CocktailModal
                    cocktail={selectedCocktail}
                    isOpen={isOpen}
                    onClose={handleCloseModal}
                />
            )} */}
        </main>
    );
};

export default Drunkpedia;




