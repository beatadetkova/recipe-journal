import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { withRouter } from "react-router";
import button from './button.png'
import './RecipeCardList.css'


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
    const mealName = this.props.match.params.mealName;
    fetch(`http://localhost:5000/meals/${mealName}/recipes`)
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
    .then(async response => {
      const data = await response.json()
      if (response.status === 200) {
        this.setState({ recipes: data })
      } else {
        console.log(`There was an error processing your request: ${data.message}`)
      }
    })
  }

  render() {
    const filteredRecipes = this.state.recipes.filter(recipe => {
      return recipe.recipeName.toLowerCase().startsWith(this.props.searchfield.toLowerCase());
    })
    return (
      <div className="flex flex-wrap items-center justify-center">
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
        <div className= 'tc grow pointer add-button' type="button" onClick={this.addRecipe}>
          <img alt='picture' src={button}/>
        </div>
      </div>)
      }
    </div>
    );
  }
}


export default withRouter(RecipeCardList);