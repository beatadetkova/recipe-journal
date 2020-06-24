import React from 'react';
import RecipeCard from './RecipeCard'


const RecipeCardList = ({ recipes }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
    {
      recipes.map((recipe, i )=> {
        return (
          <RecipeCard
            key ={i}
            id={recipe.id}
            recipeName={recipe.recipeName}
            prep={recipe.prep}
            cook={recipe.cook}
            servings={recipe.servings}
            yield={recipe.yield}
            calories={recipe.calories}
            protein={recipe.protein}
            carbohydrates={recipe.carbohydrates}
            cholesterol={recipe.cholesterol}
            sodium={recipe.sodium}
            ingredients={recipe.ingredients}
            step1={recipe.step1}
            step2={recipe.step2}
            step3={recipe.step3}
            step4={recipe.step4}
            />
          );
        })
      }
    </div>
  );
}



export default RecipeCardList;