import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'auto'}}>
      {props.children}
    </div>
  )
};

export default Scroll;