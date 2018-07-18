import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  const style = {
    width: '60%',
    margin: '16px auto',
    border: '1px solid #eee',
    boxShadow: '0 2px 3px #ccc',
    padding: '16px',
    textAlign: 'center'
  };

  return (
    <div className="UserOutput" style={ style }>
      <p>{ props.username }</p>
      <p>It's user output component.</p>
    </div>
  );
};

export default userOutput;
