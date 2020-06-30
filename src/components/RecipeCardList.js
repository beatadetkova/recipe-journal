import React from 'react';
import RecipeCard from './RecipeCard';
import { recipesMockData } from './RecipesMockData'
import { useParams } from "react-router-dom";


const RecipeCardList = () => {
  let { id } = useParams();
  const recipes = recipesMockData[id]
  const myFunction = () => {
    console.log('hello')
    // var person = prompt("Please enter your name", "Harry Potter");
    // if (person != null) {
    //   document.getElementById("demo").innerHTML =
    //   "Hello " + person + "! How are you today?";
    // }
  }
  return (
    <div className="flex flex-wrap items-center justify-center">
    <button type="button" onClick={myFunction}>Add recipe</button>
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