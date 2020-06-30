import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import { useParams } from "react-router-dom";


class RecipeCardList extends Component {
  constructor(props) {
    super(props)
    this.myFunction = this.myFunction.bind(this)
    this.state = {
      recipes: [ ]
    };
  }

  componentDidMount() {
    const { id } = useParams();
    fetch(`http://localhost:3000/meals/${id}`)
    .then(response=> response.json())
    .then(data => {this.setState({ recipes: data.recipes})});
  }


  myFunction() {
    console.log('hello')
  }

  render() {
    return (
      <div className="flex flex-wrap items-center justify-center">
      <button type="button" onClick={this.myFunction}>Add recipe</button>
      {
        this.state.recipes.map((recipe, i )=> {
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
}



export default RecipeCardList;