import React, { useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import ResultDisplay from './ResultDisplay';

function App() {
  const [prediction, setPrediction] = useState('');

  const handlePrediction = (value) => {
    setPrediction(value);
  };

  return (
    <div className="App">
      <h1>Total Mental Health Issues Prediction</h1>
      <InputForm onPrediction={handlePrediction} />
      <ResultDisplay prediction={prediction} />
    </div>
  );
}

export default App;
