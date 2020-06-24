import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import RecipeCardList from '../components/RecipeCardList'
import { RecipeFoldersNames } from '../components/RecipeFoldersNames';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      meals: RecipeFoldersNames,
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
    const { meals, searchfield } = this.state;
    const filteredMeals = meals.filter(meal =>{
      return meal.name.toLowerCase().startsWith(searchfield.toLowerCase());
    })
    return !meals.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Cooking Plan - your new cooking pal!</h1>
          <Router>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll />
            <Route exact path="/">
              <CardList meals={filteredMeals} />
            </Route>
            {/* <RecipeCardList /> */}
          </Router>
      </div>
    );
  } 
}


export default App;
