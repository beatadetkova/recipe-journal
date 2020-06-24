import React from 'react';

const Card = ({ name, foodImage }) => {
  function clickHandler() {
    alert('Hello!');
  }
  return (
      <div className ='tc bg-light-green dib br3 pa3 ma2 grow ba bw2 b--black shadow-5 pointer' onClick={clickHandler}>
        <img alt='picture' src={foodImage} />
        <div className="flex flex-column items-center justify-around" style={{width: '200px'}}>
          <h2>{name}</h2>
        </div>
      </div>
    );
}

export default Card;