import React, { Component } from 'react';
import Card from './Card'
import { withRouter } from "react-router";

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: [ ],
      isFetching: true
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/meals')
    .then(response => response.json())
    .then(data => {this.setState({ meals: data, isFetching: false})});
  }

  render() {
    const filteredMeals = this.state.meals.filter(meal => {
      return meal.name.toLowerCase().startsWith(this.props.searchfield.toLowerCase());
    })
    return (
      <div className="flex flex-wrap items-center justify-center">
        {
        this.state.isFetching ? (
          <div>Loading...</div>
        ) : (
        <div>
          {filteredMeals.map((meal, i )=> {
            return (
              <Card
              key ={i}
              id={meal.id}
              name={meal.name}
              foodImage={meal.foodImage}
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



export default withRouter(CardList);

