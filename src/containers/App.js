import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import RecipeCardList from '../components/RecipeCardList'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchfield: ''
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:5000/meals')
  //   .then(response=> response.json())
  //   .then(data => {this.setState({ meals: data})});
  // }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    // const { searchfield } = this.state;
    return (
      <div className='tc'>
        <h1 className='f1'>Cooking Plan - your new cooking pal!</h1>
          <Router>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll />
            <Route exact path="/">
              <CardList searchfield={this.state.searchfield} />
            </Route>
            <Route path="/:id" component={RecipeCardList}>
              <RecipeCardList searchfield={this.state.searchfield} /> 
            </Route>
          </Router>
      </div>
    );
  } 
}


export default App;
