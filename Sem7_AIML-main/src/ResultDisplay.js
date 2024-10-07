import React from 'react';

const ResultDisplay = ({ prediction }) => {
    console.log(prediction)
  return (
    <div>
      <h2>Number of Diseases:</h2>
      <p>{prediction}</p>
    </div>
  );
};

export default ResultDisplay;
