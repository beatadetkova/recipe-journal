import React from 'react';
import RecipeCard from './RecipeCard';
import { recipesMockData } from './RecipesMockData'
import { useParams } from "react-router-dom";


const RecipeCardList = () => {
  let { id } = useParams();
  const recipes = recipesMockData[id]
  return (
    <div className="flex flex-wrap items-center justify-center">
    {
      recipes.map((recipe, i )=> {
        return (
          <RecipeCard
            key ={i}
            id={recipe.id}
            recipeName={recipe.recipeName}
            />
          );
        })
      }
    </div>
  );
}



export default RecipeCardList;