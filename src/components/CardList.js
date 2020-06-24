import React from 'react';
import Card from './Card'


const CardList = ({ recipes }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
    {
      recipes.map((recipe, i )=> {
        return (
          <Card
            key ={i}
            id={recipe.id}
            name={recipe.name}
            foodImage={recipe.foodImage}
            />
          );
        })
      }
    </div>
  );
}



export default CardList;