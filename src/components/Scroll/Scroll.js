import React from 'react';

const Scroll = (props) => (
  <div style={{ overflowY: 'auto' }}>{props.children}</div>
);

export default Scroll;
