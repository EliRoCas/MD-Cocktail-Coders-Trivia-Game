import PropTypes from 'prop-types';

import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const CocktailCard = ({ cocktail}) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{cocktail.strDrink}</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={cocktail.strDrink}
          className="object-cover rounded-xl"
          src={cocktail.strDrinkThumb} 
          width={270}
        />
      </CardBody>
    </Card>
  );
}

CocktailCard.propTypes = {
    cocktail: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
    }).isRequired,
};


export default CocktailCard;
