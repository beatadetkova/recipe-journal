import React, {Component} from 'react';

class RecipeCard extends Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
    this.state = {
      isExpanded: this.props.isExpanded,
      recipeInput: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  clickHandler () {
    this.setState({ isExpanded: !this.state.isExpanded })
    this.props.updateIndex(this.props.index)
  }

  render () {
    const detail = this.props.isExpanded && this.state.isExpanded ?
    <div>
      <h2>expanded!</h2>
    </div>
    :
    <div></div>
    return (
      <div className ='tc bg-light-green dib br3 pa3 ma2 grow ba bw2 b--black shadow-5 pointer' onClick={this.clickHandler}>
        <div className="flex flex-column items-center justify-around" style={{width: '200px'}}>
          <h2>{this.props.recipeName}</h2>
          {detail}
        </div>
      </div>
    );
  }
}

export default RecipeCard;