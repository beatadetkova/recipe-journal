import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = ({ name, foodImage }) => {
  const history = useHistory();
  const routeChange = () => {
    let path = name;
    history.push(path);
  };

  return (
    <div
      className="tc bg-light-green dib br3 pa3 ma2 grow ba bw2 b--black shadow-5 pointer"
      onClick={routeChange}
    >
      <img alt="category" src={foodImage} />
      <div
        className="flex flex-column items-center justify-around"
        style={{ width: '200px' }}
      >
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
