import React from 'react';

const validation = (props) => {
  let output = props.textLength <= 5 ?
    'Text too short' : 'Text long enough';

  return (
    <div className="Validation">
      <p>{ output }</p>
    </div>
  )
};

export default validation;
