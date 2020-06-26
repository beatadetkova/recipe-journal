import React, {Component} from 'react';

class RecipeCard extends Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
    this.state = {
      isExpanded: false
    }
  }

  clickHandler () {
    this.setState({ isExpanded: !this.state.isExpanded })
  }
  render () {
    const detail = this.state.isExpanded ?
    <div>
      <h2>{this.props.recipeName}</h2>
      <h2>expanded!</h2>
    </div>
    :
    <h2>{this.props.recipeName}</h2>
    return (
      <div className ='tc bg-light-green dib br3 pa3 ma2 grow ba bw2 b--black shadow-5 pointer' onClick={this.clickHandler}>
        <div className="flex flex-column items-center justify-around" style={{width: '200px'}}>
          {detail}
        </div>
      </div>
    );
  }
}

export default RecipeCard;