import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
// import { useParams } from "react-router-dom";
import { withRouter } from "react-router";


class RecipeCardList extends Component {
  constructor(props) {
    super(props)
    this.addRecipe = this.addRecipe.bind(this)
    this.state = {
      recipes: [ ]
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:5000/meals/${id}/recipes`)
    .then(response => response.json())
    .then(data => {this.setState({ recipes: data})});
  }


  addRecipe() {
    const name = window.prompt('recipe name');
    const id = this.props.match.params.id;
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recipeName: name
      })
    }
    fetch(`http://localhost:5000/meals/${id}/recipes/add`, init)
    .then(response => response.json())
    .then(data => {this.setState({ recipes: data})});
  }

  render() {
    return (
      <div className="flex flex-wrap items-center justify-center">
      <button type="button" onClick={this.addRecipe}>Add recipe</button>
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



export default withRouter(RecipeCardList);