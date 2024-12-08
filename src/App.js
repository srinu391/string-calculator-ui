import React, { useState } from 'react';
import stringCalculator from './stringCalculator';

import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  const handleCalculate = () => {
    try {
      const calculationResult = stringCalculator(input);
      setResult(`Result: ${calculationResult}`);
      setError(false)
    } catch (error) {
      setResult(`Error: ${error.message}`);
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1 className="title">String Calculator</h1>
      <div className="inputContainer">
        <input
          type="text"
          id="inputString"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., 1,2,3"
        />
        <button onClick={handleCalculate}>
        Calculate
      </button>
      </div>
      <p className={error ? 'result error': 'result'}>{result}</p>
    </div>
  );
}

export default App;

