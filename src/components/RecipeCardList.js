import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import { withRouter } from "react-router";


class RecipeCardList extends Component {
  constructor(props) {
    super(props)
    this.updateIndex = this.updateIndex.bind(this)
    this.addRecipe = this.addRecipe.bind(this)
    this.state = {
      index: -1,
      recipes: [ ],
      isFetching: true
    };
  }

  updateIndex (index) {
    this.setState({ index })
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:5000/meals/${id}/recipes`)
    .then(response => response.json())
    .then(data => {this.setState({ recipes: data, isFetching: false})});
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
    .then(data => {this.setState({ recipes: data })});
  }

  render() {
    const filteredRecipes = this.state.recipes.filter(recipe => {
      return recipe.recipeName.toLowerCase().startsWith(this.props.searchfield.toLowerCase());
    })
    return (
      <div className="flex flex-wrap items-center justify-center">
      <button type="button" onClick={this.addRecipe}>Add recipe</button>
      {
      this.state.isFetching ? (
        <div>Loading...</div>
      ) : (
      <div>
        {filteredRecipes.map((recipe, i )=> {
          return (
            <RecipeCard
              key={i}
              index={i}
              id={recipe.id}
              recipeName={recipe.recipeName}
              isExpanded={this.state.index === i}
              updateIndex={this.updateIndex}
              />
            );
          })
        }
      </div>)
      }
    </div>
    );
  }
}


export default withRouter(RecipeCardList);