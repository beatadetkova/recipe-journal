import React from 'react';
import Card from './Card'


const CardList = ({ meals }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
    {
      meals.map((meal, i )=> {
        return (
          <Card
            key ={i}
            id={meal.id}
            name={meal.name}
            foodImage={meal.foodImage}
            />
          );
        })
      }
    </div>
  );
}



export default CardList;