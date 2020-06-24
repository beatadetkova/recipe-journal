import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import { RecipeFoldersNames } from '../components/RecipeFoldersNames';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: RecipeFoldersNames,
      searchfield: ''
    }
  }

  // componentDidMount() {
  //   fetch('/components/RecipeFoldersNames.js')
  //     .then(response=> response.json())
  //     .then(names => {this.setState({ recipes: names})});
  // }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { recipes, searchfield } = this.state;
    const filteredRecipes = recipes.filter(recipe =>{
      return recipe.name.toLowerCase().startsWith(searchfield.toLowerCase());
    })
    return !recipes.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Cooking Plan - your new cooking pal!</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll />
        <CardList recipes={filteredRecipes} />
      </div>
    );
  } 
}


export default App;
