import React from 'react';

const RecipeCard = ({ recipeName }) => {

  return (
      <div className ='tc bg-light-green dib br3 pa3 ma2 grow ba bw2 b--black shadow-5 pointer'>
        <div className="flex flex-column items-center justify-around" style={{width: '200px'}}>
          <h2>{recipeName}</h2>
        </div>
      </div>
    );
}

export default RecipeCard;